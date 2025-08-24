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
                <a 
                  href="https://maps.app.goo.gl/AudykkzcMicQysA57" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  <p>Atria Institute of Technology</p>
                <p>Anandanagar, Bengaluru, Karnataka 560024</p>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3">Quick Links</h3>
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
                <a href="#members" className="hover:text-white transition-colors">
                  Members
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3">Contact</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:code.club.atria@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  code.club.atria@gmail.com
                </a>
              </div>
              {/* <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+918012345678"
                  className="hover:text-white transition-colors"
                >
                  +91 80 1234 5678
                </a>
              </div> */}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/CODE-CLUB-ATRIA"
                target="_blank" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/atriacode/"
                target="_blank" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/atriacode?igsh=MWNwMjAzZzB6bnRhbg=="
                target="_blank" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/codeatriait?t=dvZdRg514Vfm2w3lC9m6gw&s=09"
                target="_blank" 
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
          <div className="flex flex-col items-center justify-center text-white/80 ">
            <p className="text-center">
              © {new Date().getFullYear()} Code Club, Atria Institute of Technology. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>

        </div>
      </div>
    </footer>
  );
}
