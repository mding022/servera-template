"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  urls: string[];
  autoplayInterval?: number;
  height?: number;
  width?: number | string;
}

export default function Carousel({ 
  urls, 
  autoplayInterval = 5000,
  height = 400,
  width = "100%"
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const length = urls.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [length, autoplayInterval]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div
      className="relative mx-auto overflow-hidden rounded-2xl shadow-lg group"
      style={{ width, maxWidth: "100%" }} // Apply custom width
    >
      <div className="relative" style={{ height }}>
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={`${urls[current]}?auto=format&fit=crop&w=1200&q=80`}
              alt={`Slide ${current + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fade-in arrow controls */}
      {length > 1 && (
        <div className="absolute inset-0 z-10 flex justify-between items-center pointer-events-none">
          <motion.button
            onClick={prevSlide}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-1/3 h-full absolute left-0 top-0 flex items-center justify-start pl-4 pointer-events-auto"
            aria-label="Previous slide"
          >
            <div className="bg-white/60 hover:bg-white p-2 rounded-full shadow-md transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-800" />
            </div>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-1/3 h-full absolute right-0 top-0 flex items-center justify-end pr-4 pointer-events-auto"
            aria-label="Next slide"
          >
            <div className="bg-white/60 hover:bg-white p-2 rounded-full shadow-md transition-colors">
              <ArrowRight className="w-5 h-5 text-gray-800" />
            </div>
          </motion.button>
        </div>
      )}

      {/* Dots */}
      {length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {urls.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
