import { Facebook, Linkedin, Youtube, Github } from "lucide-react";
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Algorithmic Trading Systems, Quantitative Architecture & Enterprise FinTech Software.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583601223507" target="_blank" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/codams" target="_blank" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@codams" target="_blank" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/codams-org" target="_blank" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Products & Algo
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="https://github.com/codams-tech/Sanyam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <span>TraderLock (संयम)</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-semibold uppercase">Free</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Capabilities</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Algo Trading Systems</li>
              <li className="text-sm text-muted-foreground">Broker API Gateways</li>
              <li className="text-sm text-muted-foreground">NSE Delivery Scanners</li>
              <li className="text-sm text-muted-foreground">Automated Risk Engines</li>
              <li className="text-sm text-muted-foreground">Custom FinTech Dashboards</li>
              <li className="text-sm text-muted-foreground">Enterprise Web & Bots</li>
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
