"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}</span>;
}

export function Stats() {
  const stats = [
    { label: "Global Partners", value: 150, suffix: "+" },
    { label: "Countries Reached", value: 35, suffix: "" },
    { label: "Shipments Delivered", value: 5000, suffix: "+" },
    { label: "Years Experience", value: 10, suffix: "+" },
  ];

  return (
    <section id="stats" className="py-32 bg-white relative overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-6xl font-extrabold text-tcp-navy mb-4 tracking-tighter group-hover:scale-110 transition-transform">
                <Counter to={stat.value} duration={2} />
                <span className="text-tcp-gold">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
