import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* College & Club Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="mb-1">Code Club</h3>
              <h4 className="text-white/90 mb-3">Atria Institute of Technology</h4>
              <p className="text-white/80 leading-relaxed">
                Empowering students through coding, innovation, and technology. Join our
                community of passionate developers and tech enthusiasts building the future.
              </p>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <div className="leading-snug">
                <p>Atria Institute of Technology</p>
                <p>Anandanagar, Bengaluru, Karnataka 560024</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-white transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3">Contact</h4>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:codeclub@atria.edu"
                  className="hover:text-white transition-colors"
                >
                  codeclub@atria.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+918012345678"
                  className="hover:text-white transition-colors"
                >
                  +91 80 1234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-white/80">
            <p>
              © {new Date().getFullYear()} Code Club, Atria Institute of Technology. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
