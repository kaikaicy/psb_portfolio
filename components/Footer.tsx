"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#0a1128] border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-sm"
          >
            © 2026 Precy Benalla. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {[
              { 
                href: "https://www.linkedin.com/in/precy-benalla/", 
                icon: FiLinkedin, 
                delay: 0,
                external: true
              },
              { 
                href: "mailto:kikaybenalla5@gmail.com", 
                icon: FiMail, 
                delay: 0.1
              },
              { 
                href: "https://github.com", 
                icon: null, 
                delay: 0.2,
                isGithub: true,
                external: true
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + social.delay }}
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/20 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group"
              >
                {social.isGithub ? (
                  <svg className="text-cyan-400 text-lg w-5 h-5 group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ) : (
                  <social.icon className="text-cyan-400 text-lg group-hover:scale-105 transition-transform" />
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}


