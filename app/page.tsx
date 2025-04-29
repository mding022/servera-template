"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-[#f1f0ee] text-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <Image
          src="https://www.servera.dev/monk-in-jungle.png?not-found=%2Fmonk-in-jungle.png"
          alt="Monk Illustration"
          width={150}
          height={150}
        />
      </motion.div>

      <div className="flex items-center space-x-4 mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: 60 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="https://www.servera.dev/servera.png"
            alt="Servera Logo"
            width={80}
            height={80}
          />
        </motion.div>

        <motion.h1
          className="text-5xl font-extrabold tracking-wide"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Build in Progress
        </motion.h1>
      </div>


      {/* Animated Loading Bars */}
      <motion.div
        className="flex space-x-2 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-6 bg-amber-400 rounded"
            animate={{ scaleY: [1, 1.5, 1, 1 , 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

    </div>
  );
}
