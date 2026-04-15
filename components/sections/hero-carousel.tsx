"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Empowering Global Trade",
    subtitle: "Excellence in every shipment, reliability in every partnership.",
    cta: "Explore Our Network",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Supply Chain Excellence",
    subtitle: "Connecting premium manufacturers with international growth markets.",
    cta: "View Services",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Reliable Distribution",
    subtitle: "Seamless logistics solutions designed for your specific business needs.",
    cta: "Contact Us",
    image: "https://images.unsplash.com/photo-1454165833767-027eeea15c3e?q=80&w=2070&auto=format&fit=crop",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="home" className="relative h-[90vh] sm:h-screen w-full overflow-hidden pt-20">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] min-w-0 relative h-full bg-tcp-navy"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark Overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-tcp-navy/90 via-tcp-navy/50 to-transparent z-0" />
              
              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-tcp-gold text-white font-bold rounded-full hover:bg-tcp-gold-light transition-all shadow-xl hover:shadow-tcp-gold/20 hover:-translate-y-1"
                    >
                      {slide.cta} <ArrowRight size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-4 sm:right-10 z-20 flex gap-4">
        <button
          onClick={scrollPrev}
          className="w-14 h-14 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md flex items-center justify-center text-tcp-navy hover:bg-tcp-navy hover:text-white transition-all shadow-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="w-14 h-14 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md flex items-center justify-center text-tcp-navy hover:bg-tcp-navy hover:text-white transition-all shadow-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Hero Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-tcp-gold via-tcp-navy to-gray-200" />
    </section>
  );
}
