import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import shreeLogo from "@/assets/shree-logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={shreeLogo}
              alt="Shree Mutual Fund Services"
              className="h-20 w-24"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                Shree Mutual Fund Services
              </h1>
              <p className="text-sm text-muted-foreground">
                The Most Trusted MFD
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-orange-500"
                  : "text-foreground hover:text-orange-500"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-orange-500"
                  : "text-foreground hover:text-orange-500"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/calculators"
              className={`text-sm font-medium transition-colors ${
                isActive("/calculators")
                  ? "text-orange-500"
                  : "text-foreground hover:text-orange-500"
              }`}
            >
              Calculators
            </Link>

            {/* 🟠 Client Login Button - Opens External Site in New Tab */}
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://login.ifa.wealthelite.in/", "_blank")
              }
              className="border-2 border-orange-500 text-gray-900 hover:bg-orange-500 hover:text-white rounded-2xl px-6 py-2 transition-all"
            >
              Client Login
            </Button>

            {/* 🟠 Contact Us Button */}
            <Link to="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-6 py-2 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
