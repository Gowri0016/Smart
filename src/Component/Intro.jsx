import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-500 via-sky-800 to-cyan-500 px-6 py-20 mt-28 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 z-0 pointer-events-none" />

      {/* Floating Animated Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-80px] w-96 h-96 bg-purple-400/30 rounded-full filter blur-3xl opacity-50 z-0"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 80, 0, -80, 0],
          rotate: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-yellow-300/30 rounded-full filter blur-2xl opacity-50 z-0"
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, -80, 0, 80, 0],
          rotate: [0, -360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md leading-snug"
          >
            Maker’s Asylum is an institution — literally and figuratively.
          </motion.h2>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A DIY community space where like-minded innovators unlock out-of-the-box thinking and bring their ideas to life through shared tools, knowledge, and collaboration. At the forefront of the Maker Movement in India.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Vision */}
          <motion.div
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-cyan-300/40 text-white"
          >
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="leading-relaxed">
              Foster a culture of open experimentation, hands-on learning, and collaborative ideation across disciplines.
            </p>
            <div className="absolute inset-0 rounded-2xl border border-cyan-300/50 opacity-20 pointer-events-none" />
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-yellow-300/40 text-white"
          >
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="leading-relaxed">
              Empower everyone — especially youth — to adopt a maker mindset through experiential programs, citizen science, and inclusive communities.
            </p>
            <div className="absolute inset-0 rounded-2xl border border-yellow-300/50 opacity-20 pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
