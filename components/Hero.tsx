"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0a1128] pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Name Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-cyan-400/20 text-cyan-400 text-sm font-semibold rounded">
                PSB
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Precy Benalla
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-400 mb-4"
            >
              IT Student | UI/UX Designer | Full-Stack Developer
            </motion.p>

            {/* Descriptive Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed max-w-lg"
            >
              Creates meaningful digital experiences through design and development. Specializes in building responsive web and mobile solutions that prioritize user needs and technical excellence.
            </motion.p>

            {/* CTA Button and Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4 items-start pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-cyan-400 text-[#0a1128] rounded-lg font-semibold hover:bg-cyan-300 transition-colors shadow-lg hover:shadow-xl"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-transparent text-cyan-400 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors flex items-center gap-2 group"
                >
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 mt-2"
              >
                <a
                  href="https://www.linkedin.com/in/precy-benalla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/20 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <FiLinkedin className="text-cyan-400 text-xl w-5 h-5 group-hover:scale-105 transition-transform" />
                </a>
                <a
                  href="mailto:kikaybenalla5@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/20 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <FiMail className="text-cyan-400 text-xl w-5 h-5 group-hover:scale-105 transition-transform" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/20 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <svg className="text-cyan-400 text-xl w-5 h-5 group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - Image with Abstract Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            {/* Abstract Background Graphics */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Curved Lines */}
              <div className="absolute top-20 left-10 w-64 h-64 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M ${10 + i * 25} 100 Q 100 ${50 + i * 10} ${190 - i * 25} 100`}
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                    />
                  ))}
                </svg>
              </div>
              
              <div className="absolute bottom-20 right-10 w-64 h-64 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M ${10 + i * 25} 100 Q 100 ${150 - i * 10} ${190 - i * 25} 100`}
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
                    />
                  ))}
                </svg>
              </div>

              {/* Spherical Objects/Bubbles */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute top-32 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl"
              />
            </div>

            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 w-full h-full max-w-md mx-auto flex items-center justify-center"
            >
              <div
                className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl"
                style={{
                  boxShadow: '0 0 40px rgba(94, 234, 212, 0.3), 0 0 80px rgba(94, 234, 212, 0.2)',
                  background: 'linear-gradient(135deg, rgba(94, 234, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                }}
              >
                <div
                  className="absolute inset-0 p-2 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(94, 234, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)'
                  }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1a2332]">
                    <Image
                      src="/psb-profile.png"
                      alt="Precy Benalla"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

