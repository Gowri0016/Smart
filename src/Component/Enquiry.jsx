import React from 'react';
import { motion } from 'framer-motion';

export default function Enquiry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-sky-800 to-blue-500 px-4 mt-10 py-16 md:py-28 flex items-center justify-center relative overflow-hidden">
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
      {/* Top Angled Cut */}
      <div className="absolute -top-16 left-0 w-full h-20 bg-white opacity-10 transform -skew-y-6 z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl md:max-w-3xl w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-16 border border-white/30"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4 tracking-wide">
            Enquiry Form
          </h2>
          <p className="text-gray-700">
            We'd love to hear from you! Fill out this form and we'll get back to you soon.
          </p>
        </motion.div>

        {/* Form */}
        <form className="space-y-8">
          <FloatingInput label="Full Name" name="name" type="text" />
          <FloatingInput label="Email Address" name="email" type="email" />
          <FloatingInput label="Phone Number" name="phone" type="tel" />
          <FloatingInput label="Your Message" name="message" type="textarea" />

          {/* Unique Rotating Button */}
          <motion.button
            whileHover={{ rotate: 5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="relative w-full bg-gradient-to-br from-cyan-500 via-sky-800 to-blue-500 transition-all duration-300 text-white font-semibold py-3 rounded-full shadow-xl overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-cyan-200 transition-all duration-300"></span>
            <span className="relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white animate-pulse">
                Submit Enquiry 🚀
              </span>
            </span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

const FloatingInput = ({ label, name, type }) => {
  const id = `input-${name}`;
  return (
    <div className="relative z-0 w-full group">
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows="4"
          className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-400 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer resize-none"
          placeholder=" "
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-400 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
          placeholder=" "
        />
      )}
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};
 