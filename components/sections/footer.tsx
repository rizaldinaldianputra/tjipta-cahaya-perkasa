"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-tcp-silver-light text-tcp-navy pt-32 pb-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="flex flex-col">
              <span className="font-extrabold text-3xl leading-none tracking-tighter mb-2">TCP</span>
              <span className="text-xs tracking-[0.3em] text-tcp-gold uppercase font-black">Trading Company</span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Facilitating global excellence through transparent trade and reliable supply chains.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-8 text-tcp-gold uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-tcp-navy transition-colors text-sm font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-tcp-navy transition-colors text-sm font-medium">About Us</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-tcp-navy transition-colors text-sm font-medium">Services</a></li>
              <li><a href="#stats" className="text-gray-500 hover:text-tcp-navy transition-colors text-sm font-medium">Our Reach</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black mb-8 text-tcp-gold uppercase tracking-widest">Get In Touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-tcp-navy mt-1 shrink-0" size={20} />
                <p className="text-gray-500 text-sm leading-relaxed">
                  123 Commerce Avenue<br />
                  Business District, Jakarta 12345<br />
                  Indonesia
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-tcp-navy shrink-0" size={20} />
                  <p className="text-gray-500 text-sm font-medium">+62 21 555 0123</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-tcp-navy shrink-0" size={20} />
                  <p className="text-gray-500 text-sm font-medium">contact@tjiptacahayaperkasa.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Tjipta Cahaya Perkasa. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-tcp-navy transition-colors text-xs font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-tcp-navy transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
