"use client";

import { motion } from "framer-motion";
import { Anchor, PackageSearch, ShieldCheck, TrendingUp, Truck, Globe2, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Global Export & Import",
      description: "Seamless cross-border transaction management with comprehensive end-to-end documentation handling and compliance.",
      icon: <Globe2 size={32} />,
      delay: 0.1,
    },
    {
      title: "Supply Chain Solutions",
      description: "Optimizing your logistics through strategic planning, warehousing, and intelligent distribution networks.",
      icon: <Truck size={32} />,
      delay: 0.2,
    },
    {
      title: "Product Sourcing",
      description: "Identifying and partnering with premium manufacturers to deliver high-quality goods that meet your exact specifications.",
      icon: <PackageSearch size={32} />,
      delay: 0.3,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous inspection protocols to ensure every shipment adheres to international safety and quality standards.",
      icon: <ShieldCheck size={32} />,
      delay: 0.4,
    },
    {
      title: "Maritime Freight",
      description: "Cost-effective and reliable sea freight forwarding for large volume shipments across major global ports.",
      icon: <Anchor size={32} />,
      delay: 0.5,
    },
    {
      title: "Market Expansion",
      description: "Strategic partnerships and market analysis to help your products penetrate and thrive in new territories.",
      icon: <TrendingUp size={32} />,
      delay: 0.6,
    },
  ];

  return (
    <section id="services" className="py-32 bg-tcp-silver-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-tcp-gold mb-4"
            >
              <div className="w-10 h-[2px] bg-tcp-gold" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase">Expertise</span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-tcp-navy tracking-tighter"
            >
              Tailored Trading <br /> Solutions
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-500 max-w-sm font-light leading-relaxed"
          >
            Delivering precision and reliability across the global supply chain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.6 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.1),0_15px_30px_-10px_rgba(217,119,6,0.08)] hover:shadow-[0_40px_80px_-15px_rgba(15,23,42,0.15),0_20px_40px_-10px_rgba(217,119,6,0.15)] transition-all duration-500 group relative border border-gray-50/50 hover:-translate-y-2"
            >
              <div className="w-18 h-18 bg-gray-50 rounded-2xl flex items-center justify-center text-tcp-navy mb-8 group-hover:bg-tcp-gold group-hover:text-white transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-extrabold text-tcp-navy mb-4 tracking-tight">
                {service.title}
              </h4>
              
              <p className="text-gray-500 leading-relaxed font-light text-lg">
                {service.description}
              </p>

              <div className="mt-10 flex items-center gap-3 text-tcp-gold font-black text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Explore <ArrowRight size={18} />
              </div>

              {/* Subtle Gradient Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-tcp-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
