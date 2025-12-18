import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.svg" 
                alt="TireWorks Logo" 
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="font-semibold">TireWorks</span>
                <span className="text-xs text-white/70">Alignment & Balancing</span>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Your trusted local tire shop for professional wheel alignment, balancing, and tire services since 2010.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <a href="tel:+15551234567" className="hover:text-[#eab308] text-white/80">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <a href="mailto:info@tireworks.com" className="hover:text-[#eab308] text-white/80">
                  info@tireworks.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div className="text-white/80">
                  MPC5+CXC, Sai Nagar Rd, Sai Nagar<br />
                  Mamurdi, Pimpri-Chinchwad<br />
                  Dehu Road, Maharashtra 412101
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm text-white/80 mb-6">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div>
              <h4 className="mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#eab308] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#eab308] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#eab308] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} TireWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
