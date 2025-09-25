"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const photos = ["/4h1.jpeg", "/4h2.jpeg", "/4h3.jpeg"];
const SLIDE_INTERVAL = 4000; // 4 seconds per slide

export default function PhotoDisplay() {
  const [active, setActive] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative w-full h-auto sm:h-[700px] overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={photos[active]}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <Image
              src={photos[active]}
              alt={`Photo ${active + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 mt-4">
        {photos.map((src, index) => (
          <button
            key={src}
            onClick={() => setActive(index)}
            className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
              active === index
                ? "border-green-600 scale-105"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
