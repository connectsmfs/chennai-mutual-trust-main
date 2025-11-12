// ✅ src/components/pdfGenerator.js
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";
import shreeLogo from "@/assets/shree-logo.png";

/**
 * Generate a branded financial report with logo, data table, chart, and footer.
 * @param {string} elementId - HTML element ID of the chart/summary block
 * @param {string} title - Report title
 * @param {object} data - Key-value pairs of investment data
 */
export const generateStyledPDF = async (elementId, title, data = {}) => {
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();

  // 🟠 HEADER (Orange Bar with Logo)
  pdf.setFillColor(255, 115, 0);
  pdf.rect(0, 0, pageWidth, 25, "F");
  pdf.addImage(shreeLogo, "PNG", 15, 5, 20, 15);
  pdf.setFontSize(18);
  pdf.setTextColor("#ffffff");
  pdf.text("Shree Mutual Fund Services", pageWidth / 2, 15, { align: "center" });

  // 🧾 TITLE
  pdf.setTextColor("#333333");
  pdf.setFontSize(16);
  pdf.text(title, pageWidth / 2, 40, { align: "center" });

  // 📊 DATA TABLE
  const tableData = Object.entries(data).map(([key, value]) => [key, value]);
  autoTable(pdf, {
    startY: 50,
    head: [["Parameter", "Value"]],
    body: tableData,
    theme: "striped",
    headStyles: {
      fillColor: [255, 115, 0],
      textColor: "#ffffff",
      halign: "center",
    },
    bodyStyles: { halign: "center" },
    styles: { fontSize: 11 },
  });

  // 📈 CHART IMAGE CAPTURE
  const chartElement = document.getElementById(elementId);
  if (chartElement) {
    const canvas = await html2canvas(chartElement, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const yPosition = pdf.lastAutoTable.finalY + 10;
    pdf.addImage(imgData, "PNG", 20, yPosition, 170, 90);
  }

  // 🔗 FOOTER
  pdf.setFontSize(12);
  pdf.setTextColor("#f97316");
  pdf.textWithLink(
    "Contact us: https://shreemfs.com/contact",
    pageWidth / 2,
    285,
    { align: "center", url: "https://shreemfs.com/contact" }
  );

  pdf.save(`${title}.pdf`);
};
