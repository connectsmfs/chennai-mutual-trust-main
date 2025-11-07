import React from "react";
import Header from "@/components/Header";

const ClientLoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-orange-600">
      {/* 🔸 Keep your existing site header */}
      <Header />

      {/* 🔸 Login section with white/orange theme */}
      <div className="pt-32 pb-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-orange-600">
          Client Login
        </h1>
        <div className="w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border-4 border-orange-100 shadow-lg">
          <iframe
            src="https://login.ifa.wealthelite.in/"
            title="Client Login"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ClientLoginPage;
