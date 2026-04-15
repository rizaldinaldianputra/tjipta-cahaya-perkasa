"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Network, ShieldCheck } from "lucide-react";

export function Owner() {
  return (
    <section id="leadership" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Portrait Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Artistic background element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-tcp-silver-light rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-tcp-gold/10 rounded-full blur-3xl opacity-40" />

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
              <Image
                src="/owner.jpeg"
                alt="Lutfianto Kurniawan"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                priority
              />
              {/* Overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-tcp-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Signature Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-tcp-navy text-white p-6 rounded-2xl shadow-xl flex flex-col items-center"
            >
              <ShieldCheck className="text-tcp-gold mb-2" size={32} />
              <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Founder Verified</span>
            </motion.div>
          </motion.div>

          {/* Biography Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 text-tcp-gold mb-4">
                <div className="w-10 h-[2px] bg-tcp-gold" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase">Leadership</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-tcp-navy tracking-tighter leading-none mb-4">
                Lutfianto <br />
                <span className="text-gray-300">Kurniawan</span>
              </h2>
              <p className="text-lg font-bold text-tcp-gold uppercase tracking-widest">Founder & Managing Director</p>
            </div>

            <div className="space-y-6 text-xl text-gray-500 font-light leading-relaxed italic">
              <p>
                "Our vision has always been to simplify the complexities of global trade. We don't just move goods; we move possibilities for our partners worldwide."
              </p>
              <p className="not-italic text-lg text-gray-600">
                With over a decade of experience in the logistics and trading sector, Lutfianto has led Tjipta Cahaya Perkasa from a local startup to a global powerhouse. His dedication to integrity and excellence remains the cornerstone of every transaction we facilitate.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-gray-100 italic">
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-tcp-navy hover:bg-tcp-navy hover:text-white transition-all shadow-sm">
                  <Network size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-tcp-navy hover:bg-tcp-navy hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </a>
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Connect with the founder
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
