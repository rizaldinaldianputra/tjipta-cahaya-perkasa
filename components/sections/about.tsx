"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
  const highlights = [
    "Premium Quality Sourcing",
    "Global Logistics Network",
    "Ethical Trade Practices",
    "24/7 Supply Chain Support",
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual/Graphic Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-tcp-silver-light flex items-center justify-center p-12">
               {/* Minimalist modern graphic instead of logo */}
               <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-tcp-navy rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <CheckCircle2 size={40} />
                    </div>
                    <p className="text-tcp-navy font-bold text-2xl tracking-tight">Verified Trade</p>
                    <p className="text-gray-400 text-sm">Since 2014</p>
                  </div>
               </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-6 bg-tcp-navy p-8 rounded-2xl shadow-2xl text-white"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold text-tcp-gold">10+</div>
                <div className="text-sm font-medium tracking-wide uppercase opacity-80">
                  Years of<br />Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center gap-3 text-tcp-gold mb-4">
                <div className="w-10 h-[2px] bg-tcp-gold" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase">Our Story</span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-tcp-navy leading-tight tracking-tighter">
                Bridging Markets <br />
                <span className="text-gray-400">With Integrity</span>
              </h3>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-light">
              At <strong className="text-tcp-navy font-semibold">Tjipta Cahaya Perkasa</strong>, we facilitate global commerce by connecting premium manufacturers with booming international markets. Our mission is to streamline supply chains while maintaining the highest standards of transparency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-tcp-silver flex items-center justify-center text-tcp-navy group-hover:bg-tcp-navy group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-gray-800 tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 italic">
                "Our commitment is your competitive advantage. We leverage our network to ensure your business thrives in a borderless world."
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
