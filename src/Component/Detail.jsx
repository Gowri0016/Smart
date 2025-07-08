import React from 'react';
import { motion } from 'framer-motion';

export default function Detail() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Hexagon Texture & Gradient */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-20 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-sky-800 to-blue-500 z-0 mix-blend-multiply" />

      {/* Parallax Floating Layers */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] border-4 border-white/30 rounded-[30%] z-0"
        animate={{
          rotate: [0, 360],
          rotateX: [0, 45, 0],
          rotateY: [0, 45, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] border-2 border-white/20 rounded-[20%] z-0"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: 'linear',
        }}
      />

      {/* Organic Blob (Dynamic Movement) */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30 z-0"
        animate={{
          borderRadius: ['50%', '60% 40% 60% 40%', '50%'],
          x: [0, 80, -80, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'easeInOut',
        }}
      />

      {/* Glassmorphism Card with Floating */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, -12, 0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
        }}
        className="relative z-10 backdrop-blur-2xl bg-white/10 border border-white/30 rounded-3xl p-8 md:p-10 shadow-lg max-w-lg"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-widest text-white/80 mb-2"
        >
          Unlock the Possibilities
        </motion.p>

        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Dare to <span className="text-orange-300">#DreamBuildLead</span>™
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-4 text-white/90 text-base md:text-lg"
        >
          A haven for changemakers — pushing the boundaries of technology,
          design, and bold thinking.
        </motion.p>

        {/* Button with Ripple Glow */}
        <div className="mt-8">
          <motion.a
            href="/enquiry"
            whileHover={{ scale: 1.05 }}
            className="relative inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white font-semibold shadow-lg transition-transform duration-300"
          >
            <span className="relative z-10">Begin Your Quest</span>
            <span className="absolute inset-0 rounded-full blur-md opacity-50 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 animate-pulse" />
            <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-[ping_2s_linear_infinite]" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
