import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">T</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">TEGAS</h3>
                <p className="text-xs opacity-90">Engineering Excellence</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Building a Stronger Future with Excellence, Safety, and Innovation since 1982.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/hse-quality" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  HSE & Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Road Construction</li>
              <li>Building Construction</li>
              <li>Pipeline Installation</li>
              <li>Jetty Construction</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">
                  Km 3, Effurun/NPA Express Road, Opp. Tanker Park, Ekpan – Warri, Delta State, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-80">08023052646</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:tegabee@yahoo.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  tegabee@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} TEGAS Engineering Company Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
