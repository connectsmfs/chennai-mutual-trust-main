import React from "react";
import { motion } from "framer-motion";
import { Lock, User } from "lucide-react";

const ClientLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-orange-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-10 w-full max-w-md border border-orange-100 text-center"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-orange-600 mb-2">
          Client Login
        </h2>
        <p className="text-gray-500 mb-8 text-sm">
          Access your WealthElite dashboard securely
        </p>

        {/* Login Form */}
        <form
          name="signinForm"
          id="signinForm"
          action="https://wealthelite.in/Login/login/validate-user"
          method="POST"
          onSubmit={() => window.GetSubmitLogin && window.GetSubmitLogin()}
        >
          <input type="hidden" name="loginFor" id="loginFor" value="CLIENT" />
          <input
            type="hidden"
            name="callbackUrl"
            id="callbackUrl"
            value="https://shreemfs.netlify.app/login-success"
          />

          {/* Username */}
          <div className="relative mb-5">
            <User className="absolute left-3 top-3.5 text-orange-500 w-5 h-5" />
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              required
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-3.5 text-orange-500 w-5 h-5" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-8">
          Need help?{" "}
          <a
            href="mailto:info@shreemfs.com"
            className="text-orange-600 font-semibold hover:underline"
          >
            Contact Support
          </a>
        </p>
      </motion.div>

      {/* Backend Scripts */}
      <script src="https://wealthelite.in/js/aes.js"></script>
      <script src="https://wealthelite.in/js/login.js"></script>
      <script src="https://wealthelite.in/js/login_script.js"></script>
    </div>
  );
};

export default ClientLogin;
