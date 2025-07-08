import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

export default function Project() {
  const departments = [
    {
      title: 'Eco & Environment Department',
      projects: [
        'Zero Waste',
        'CO₂ Emission Control',
        'E-waste Management',
        'Grass Cutting and Lake Cutters',
        'Surveillance Rentable',
        'Preventing the Banana Plant from Wind 🌬',
        'QR Scanning in Products (to trace manufacturing origin)',
      ],
    },
    {
      title: 'Agri-Tech Department',
      projects: [
        'Automatic Agri Soil Testing and Irrigation System',
        'Farming Management and Maintenance',
        'Take Photo of Plant to Detect Disease and Recommend Fertilizer',
        'Straa Making from Coconut Waste Using Tribal Methods',
      ],
    },
    {
      title: 'EV & Mobility Department',
      projects: [
        'Wireless EV Charging',
        'Bus Tap and Pay System',
        'Hydrogen Vehicle (IIT PALS)',
        'Ergonomic Design in EV',
        'On-Hill Braking Support',
        'Hydrogen Recycling EV Power Station',
      ],
    },
    {
      title: 'Waste to Energy Department',
      projects: [
        'Waste Food Collection and Donation',
        'Thermal Power Plant Excess Heat to Burn Plastic and Extract Fuel',
        'Plastic Waste to Building Bricks Using Interlock',
        'Recycling Hydro Power Plant',
      ],
    },
    {
      title: 'Smart Systems & Tech Department',
      projects: [
        'Feedback System',
        'Street Light Automation',
        'Coolant Counting Method',
        'Take Electric Power from Engine Heat (Energy Recovery)',
      ],
    },
    {
      title: 'Safety & Surveillance Department',
      projects: [
        'Woman Safety Kit with Camera System (Public as Watchers)',
        'Copies in Car (Smart Copy Alert System)',
        'Oil Skimmer',
        'Idea Hub (Crowdsourced Safety/Innovation Input)',
        'Surveillance Rentable Units',
      ],
    },
    {
      title: 'Power Systems & Recovery',
      projects: [
        'Hydrogen Recycling Power Station',
        'Thermal Waste Recovery from Plants',
        'Recycling Hydro Power Plant',
        'Coolant-Based Electric Recovery System',
      ],
    },
    {
      title: 'Public Utility & Smart Infrastructure',
      projects: [
        'Smart Toilet',
        'Streetlight Automation',
        'BTMS (Battery Thermal Management System)',
        'Interlock Bricks from Plastic Waste',
      ],
    },
    {
      title: 'Innovation & R&D Lab',
      projects: [
        'Idea Hub',
        'Learn with Purpose',
        'Student Project Incubator',
        'Project Submission & Evaluation Portal',
      ],
    },
    {
      title: 'Aero & Drone Applications',
      projects: ['Solar Drone (for surveillance or agri use)'],
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-500 via-sky-800 to-blue-500 overflow-hidden mt-14 px-6 py-24">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-sky-800 to-blue-500 z-0"></div>
      
            {/* Animated 3D Morphing Blobs */}
            <motion.div
              className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-3xl opacity-40 z-0"
              animate={{
                borderRadius: ["50%", "45% 55% 50% 50%", "50%"],
                x: [0, 100, -100, 0],
                y: [0, 60, -60, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
      {/* Animated floating geometric background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-dashed border-orange-200 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-block bg-white p-6 rounded-full shadow-md mb-8"
        >
          <FaTools className="text-blue-500 text-4xl" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          30+ Projects Across Departments
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-white text-lg max-w-xl mx-auto"
        >
          Discover projects spanning environment, agri-tech, mobility, energy, smart systems, and more—each designed for impact and innovation.
        </motion.p>
      </div>

      {/* Project Departments Carousel */}
<div className="relative z-10 mt-20 px-4 pb-10">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="overflow-x-auto flex space-x-6 scroll-smooth snap-x snap-mandatory pb-6 custom-scrollbar"
  >
    {departments.map((dept, index) => (
      <motion.div
        key={index}
        whileHover={{
          scale: 1.05,
          rotateX: 5,
          rotateY: -5,
          transition: { type: 'spring', stiffness: 200 },
        }}
        className="flex-shrink-0 snap-start w-80 bg-white/20 backdrop-blur-md border-2 border-transparent rounded-3xl p-6 shadow-lg relative group hover:shadow-orange-300/40 transition duration-300"
      >
        <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 opacity-30 group-hover:opacity-60 transition"></div>
        <h3 className="font-semibold text-lg text-white mb-4 relative z-10">
          {dept.title}
        </h3>
        <ul className="text-white/90 text-sm space-y-2 relative z-10">
          {dept.projects.map((proj, idx) => (
            <li key={idx}>• {proj}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </motion.div>
</div>

    </section>
  );
}
