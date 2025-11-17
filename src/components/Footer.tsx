//import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/codams_logo_final.png";
import { Link } from "react-router-dom";
import { CONFIG } from "@/config";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Codams logo" className="h-9 sm:h-10 md:h-12 w-auto" />
              <span className="text-2xl md:text-3xl font-bold">CODAMS</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building smart software solutions for a smarter tomorrow.
            </p>
            {/*<div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
            </div>*/}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Why Choose Us
                </Link>
              </li>
              {/*<li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </a>
              </li>*/}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Web Development</li>
              <li className="text-sm text-muted-foreground">WhatsApp Bots</li>
              <li className="text-sm text-muted-foreground">API Integration</li>
              <li className="text-sm text-muted-foreground">Automation Tools</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{CONFIG.CONTACT_EMAIL}</li>
              <li>{CONFIG.CONTACT_PHONE_PRIMARY}</li>
              <li>{CONFIG.COMPANY_ADDRESS}</li>
              <li>{CONFIG.COMPANY_COUNTRY}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Codams. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
