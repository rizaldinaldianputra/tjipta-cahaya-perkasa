"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tcp-navy">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-br from-tcp-gold to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-tl from-white to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-tcp-gold mb-4"
          >
            <Globe size={16} />
            <span className="text-sm font-semibold tracking-widest uppercase">Global Trading Excellence</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Empowering Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tcp-gold via-tcp-gold-light to-white">
              Supply Chains
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Tjipta Cahaya Perkasa is your premier partner in international trade, delivering high-quality goods and reliable logistics solutions across borders.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-tcp-gold text-tcp-navy font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div 
            className="w-1.5 h-3 bg-tcp-gold rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
