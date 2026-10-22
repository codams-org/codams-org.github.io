import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/codams_logo_final.png";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2.5">
            <img src={logo} alt="Codams logo" className="h-8 sm:h-9 md:h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-foreground leading-none">
                CODAMS
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                Quant & Algotrading
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-7">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <a href="/#markets" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Markets
            </a>
            <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Products & Algo
            </Link>
            <Link to="/why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </Link>
            <Link to="/about-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/connect" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="font-semibold shadow-sm"
              onClick={() => navigate("/connect")}
            >
              Consult With Us
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <a
              href="/#markets"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Markets
            </a>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products & Algo
            </Link>
            <Link
              to="/why-us"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Us
            </Link>
            <Link
              to="/about-us"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/connect"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button
              size="sm"
              className="w-full font-semibold"
              onClick={() => {
                setIsOpen(false);
                navigate("/connect");
              }}
            >
              Consult With Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
