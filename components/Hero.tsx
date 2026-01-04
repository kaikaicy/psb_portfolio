"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                PRECY BENALLA
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
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4"
            >
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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

