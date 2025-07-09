import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaFlask, FaTools, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

const learnTopics = [
  {
    icon: <FaLightbulb />,
    title: 'Creative Thinking',
    description: 'Unlock innovative approaches to problem-solving and design through hands-on experiences.',
  },
  {
    icon: <FaFlask />,
    title: 'STEM Exploration',
    description: 'Dive into science, technology, engineering, and mathematics through engaging experiments.',
  },
  {
    icon: <FaTools />,
    title: 'Maker Skills',
    description: 'Learn fabrication, electronics, and crafting tools to bring your ideas to life.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Workshops & Mentorship',
    description: 'Join immersive learning sessions guided by mentors and industry leaders.',
  },
];

const upcomingEvents = [
  { date: 'Jul 10', title: 'AI + Robotics Bootcamp' },
  { date: 'Jul 15', title: '3D Printing for Beginners' },
  { date: 'Jul 20', title: 'Design Thinking Workshop' },
  { date: 'Jul 26', title: 'Community Maker Night' },
];

export default function Learn() {
  return (
    <section className="bg-gradient-to-br from-cyan-500 via-sky-800 to-cyan-500 mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-white mb-6 tracking-wide"
        >
          Learn with Purpose
        </motion.h2>
        <p className="text-gray-100 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Empowering curiosity through practical knowledge and immersive learning experiences.
        </p>

        {/* Animated Learning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {learnTopics.map((topic, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500 via-sky-800 to-cyan-500 text-white text-3xl mb-5 shadow-lg">
                {topic.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{topic.title}</h3>
              <p className="text-gray-200 text-sm">{topic.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 border border-white/30 backdrop-blur-2xl rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 text-white mb-8">
            <FaCalendarAlt className="text-3xl" />
            <h3 className="text-2xl font-extrabold tracking-wide">Upcoming Learning Events</h3>
          </div>

          <div className="flex flex-col gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 text-left"
              >
                <div className="w-4 h-4 mt-1 rounded-full bg-blue-200 shadow-md" />
                <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-lg p-4 flex-1 shadow-md">
                  <p className="text-xs text-gray-200 mb-1">{event.date}</p>
                  <h4 className="font-semibold text-white">{event.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
