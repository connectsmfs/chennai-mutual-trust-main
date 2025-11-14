import nodemailer from "nodemailer";

export const handler = async (event) => {
  try {
    // Parse incoming form data
    const { name, email, phone, product, message } = JSON.parse(event.body);

    // --- 1️⃣ Send Email Notification ---
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: "connect@shreemfs.com", // your recipient email
      subject: `New Website Enquiry - ${product}`,
      html: `
        <h2 style="color:#ff6600;">New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Product:</b> ${product}</p>
        <p><b>Message:</b> ${message}</p>
        <hr/>
        <p style="font-size:13px;color:#666;">This message was sent from your website contact form.</p>
      `,
    });

    // --- 2️⃣ Save to Google Sheet via Apps Script Webhook ---
    const sheetWebhookURL =
      "https://script.google.com/macros/s/AKfycbzGU17o78bXTF6E_VDUp3xn84rZxNryxAqvUas3Cpb8GvdUQSN3WnnyLlG1lNDvTdQx/exec";

    await fetch(sheetWebhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, product, message }),
    });

    // --- 3️⃣ Respond Success ---
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ Email sent and data saved to Google Sheet" }),
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "❌ Failed to send message. Please try again later." }),
    };
  }
};
