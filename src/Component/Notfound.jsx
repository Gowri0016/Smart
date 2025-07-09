import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-sky-800 to-cyan-500 flex items-center justify-center relative overflow-hidden">
      {/* Glowing Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-300 rounded-full opacity-30 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse-slow" />

      {/* 3D Animated Text */}
      <motion.div
        initial={{ rotateX: 30, rotateY: 0, scale: 0.8 }}
        animate={{ rotateX: [30, -30, 30], rotateY: [0, 360, 0], scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="relative z-10 text-center"
      >
        <h1 className="text-9xl font-extrabold text-white drop-shadow-lg select-none">
          404
        </h1>
        <p className="mt-4 text-2xl text-white/80 tracking-wide">
          Page Not Found
        </p>

        <Link to="/" className="inline-block mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full shadow-xl font-semibold tracking-wide"
          >
            Go Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
