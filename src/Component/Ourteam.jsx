import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa6';
import Thara from '../Asset/Tharaneeshwaran - Founder.jpeg';
import Gokul from '../Asset/Gokul Anand-Director.jpeg';
import Gowri from '../Asset/Gowri Raja Operation and Outreach manager.jpeg';
import Kowsi from '../Asset/Kowsick - Chief technical expert.jpeg';
import Nigas from '../Asset/Nigash - Chief hacker.jpeg';
import Surves from '../Asset/Surveshwaran - Designer.jpeg';

export default function Ourteam() {
  const teamMembers = [
    { name: 'Tharaneeshwaran', role: 'Founder & CEO', img: Thara },
    { name: 'Gokul Anand', role: 'Director', img: Gokul },
    { name: 'Gowri Raja', role: 'Operation and Outreach Manager', img: Gowri },
    { name: 'Kowsick', role: 'Chief Technical Expert', img: Kowsi },
    { name: 'Nigash', role: 'Chief Hacker', img: Nigas },
    { name: 'Surveshwaran', role: 'Designer', img: Surves },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-500 via-sky-800 to-cyan-500 py-36 px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide"
        >
          Meet Our Creative Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-100 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate, skilled, and driven by innovation — together, we craft extraordinary solutions.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 relative overflow-hidden hover:scale-105 hover:shadow-[0_0_30px_#fbbf24] transition-all duration-500"
          >
            {/* Avatar with glowing border */}
            <div className="w-32 h-32 rounded-full mx-auto mb-5 border-4 border-gradient-to-tr from-orange-400 to-yellow-300 p-1 bg-white/30 shadow-lg">
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
              />
            </div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-gray-200 mb-5">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              {[FaLinkedin, FaTwitter, FaEnvelope].map((Icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="p-3 rounded-full bg-gradient-to-br from-cyan-500 via-sky-800 to-cyan-500 text-white shadow-lg"
                >
                  <Icon />
                </motion.button>
              ))}
            </div>

            {/* Outer Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-orange-300 opacity-0 group-hover:opacity-100 scale-105 blur-xl transition-all duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
