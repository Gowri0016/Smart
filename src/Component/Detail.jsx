import React from 'react';
import { motion } from 'framer-motion';


export default function Detail() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
   
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-cyan-400 to-black opacity-60 z-0"></div>

      {/* Animated 3D Blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-orange-400 rounded-full filter blur-3xl opacity-50 z-0"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 0, -50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-96 h-96 bg-purple-500 rounded-full filter blur-2xl opacity-40 z-0"
        animate={{
          x: [0, -120, 0, 120, 0],
          y: [0, -60, 0, 60, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Central Content */}
      <p className="text-sm uppercase tracking-wider text-orange-900 z-10">Step into Innovation</p>
      <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mt-2 z-10">
        Let’s <span className="text-white">#ThinkCreateDeliver</span>™
      </h2>
      <p className="mt-4 text-orange-900 text-lg max-w-xl z-10">
        Where creativity meets craftsmanship — an open space to build, experiment, and inspire.
      </p>
      <div className="mt-8 z-10">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-all duration-300">
          Join Our Mission
        </button>
      </div>

      {/* Rotating Ring Animation */}
      <motion.div
        className="absolute w-80 h-80 border-4 border-dashed border-orange-300 rounded-full z-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
      />
    </div>
  );
}
