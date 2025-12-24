import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

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
                alt="VABE Logo" 
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="font-semibold">VABE</span>
                <span className="text-xs text-white/70">VEHICLES ALIGNMENT BALANCING ENTERPRISE</span>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Your trusted local tyre shop for professional wheel alignment, balancing, and tyre services since 2023.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <div className="text-white/80">
                  <a href="tel:+919370047020" className="hover:text-[#eab308] block">+91 9370047020</a>
                  <a href="tel:+919427860992" className="hover:text-[#eab308] block">+91 9427860992</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <a href="mailto:vabe2023@gmail.com" className="hover:text-[#eab308] text-white/80">
                  vabe2023@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div className="text-white/80">
                  VABE (Vehicles Alignment Balancing Enterprise)<br />
                  Gat no 196 / 1, Shop no 2, Besides Morya Fiber<br />
                  Opp. Orbis school, Gahunje stadium road<br />
                  Gahunje, Pune 412101
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm text-white/80 mb-6">
              <div className="flex justify-between">
                <span>All Days</span>
                <span>9:00 AM - 9:00 PM</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/vabe2023@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#eab308] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/vabe_align" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#eab308] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} VABE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
