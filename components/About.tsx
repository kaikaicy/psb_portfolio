"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiPhone } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a1128] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-radial from-teal-400/30 to-transparent rounded-full blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(94, 234, 212, 0.3) 0%, transparent 70%)'
          }}></div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-radial from-teal-400/30 to-transparent rounded-full blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(94, 234, 212, 0.3) 0%, transparent 70%)'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Me
            </motion.h2>

            <div className="space-y-6 text-gray-300 text-xl leading-relaxed mb-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                An IT student with a strong interest in front-end development and UI/UX design. Experienced in creating responsive web and mobile applicatin, with foundational knowledge of back-end development, IoT, and database management.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Persistent, hardworking, and highly committed, with a strong focus on quality and continuous learning. Compassionate and service-oriented, with the ability to adapt quickly and deliver reliable results.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-gray-800 rounded-lg border-2 border-cyan-400/30 p-6">
                <div className="p-3 bg-cyan-400/10 rounded-lg w-fit mb-4">
                  <FiMapPin className="text-cyan-400 text-2xl" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">Location</h3>
                <p className="text-gray-300">Daet, Camarines Norte</p>
              </div>

              <div className="bg-gray-800 rounded-lg border-2 border-cyan-400/30 p-6">
                <div className="p-3 bg-cyan-400/10 rounded-lg w-fit mb-4">
                  <FiCalendar className="text-cyan-400 text-2xl" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">Expected Graduation</h3>
                <p className="text-gray-300">June 2026</p>
              </div>

              <div className="bg-gray-800 rounded-lg border-2 border-cyan-400/30 p-6">
                <div className="p-3 bg-cyan-400/10 rounded-lg w-fit mb-4">
                  <FiPhone className="text-cyan-400 text-2xl" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">Phone</h3>
                <p className="text-gray-300">09670494464</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

