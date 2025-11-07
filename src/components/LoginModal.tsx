import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null; // hide if not active

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-orange-100">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Client Login
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Access your WealthElite dashboard securely
        </p>

        <form
          method="POST"
          action="https://login.ifa.wealthelite.in/Login/login/validate-user"
          target="_blank"
          className="space-y-5"
        >
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Need help?{" "}
          <a
            href="mailto:info@shreemfs.com"
            className="text-orange-600 font-semibold hover:underline"
          >
            Contact Support
          </a>
        </p>

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
