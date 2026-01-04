"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Get In Touch
          </h2>
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-4"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-300 text-lg"
          >
            I'm always open to discussing new projects, opportunities, or partnerships.
          </motion.p>
        </motion.div>

        {/* Contact Information Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <motion.a
            href="mailto:kikaybenalla5@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors mb-3">
              <FiMail className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
            </div>
            <p className="font-semibold text-white mb-1">Email</p>
            <p className="text-gray-300 text-sm text-center">kikaybenalla5@gmail.com</p>
          </motion.a>

          <motion.a
            href="tel:09670494464"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors mb-3">
              <FiPhone className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
            </div>
            <p className="font-semibold text-white mb-1">Phone</p>
            <p className="text-gray-300 text-sm text-center">09670494464</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/precy-benalla/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors mb-3">
              <FiLinkedin className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
            </div>
            <p className="font-semibold text-white mb-1">LinkedIn</p>
            <p className="text-gray-300 text-sm text-center truncate w-full">linkedin.com/in/precy-benalla</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30"
          >
            <div className="p-3 bg-cyan-400/10 rounded-lg mb-3">
              <FiMapPin className="text-cyan-400 text-2xl" />
            </div>
            <p className="font-semibold text-white mb-1">Location</p>
            <p className="text-gray-300 text-sm text-center">Daet, Camarines Norte, 4600</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
