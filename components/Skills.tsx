"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const allSkills = [
  { name: "3ds Max", icon: "/3ds max.png" },
  { name: "Adobe After Effects", icon: "/adobe after effects.png" },
  { name: "Android Studio", icon: "/android studio.png" },
  { name: "Adobe Premier Pro", icon: "/adobe premier pro.png" },
  { name: "Canva", icon: "/canva.png" },
  { name: "CapCut", icon: "/capcut.png" },
  { name: "CSS", icon: "/css.png" },
  { name: "Figma", icon: "/figma.png" },
  { name: "Firebase", icon: "/firebase.png" },
  { name: "GitHub", icon: "/github.png" },
  { name: "HTML", icon: "/html.png" },
  { name: "Java", icon: "/java.png" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "Microsoft Excel", icon: "/microsoft excel.png" },
  { name: "Microsoft PowerPoint", icon: "/microsoft powerpoint.png" },
  { name: "Microsoft Word", icon: "/microsoft word.png" },
  { name: "MySQL", icon: "/my sql.png" },
  { name: "Node.js", icon: "/node js.png" },
  { name: "Python", icon: "/python.png" },
  { name: "React", icon: "/react.png" },
  { name: "Visual Basic", icon: "/visual basic.png" },
  { name: "Visual Studio Code", icon: "/visual studio code.png" },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tagalog", level: "Native" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Skills & Technologies
          </h2>
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-14 h-14 mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-center text-gray-300 font-medium leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Languages</h3>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 p-6 text-center min-w-[200px] hover:shadow-xl transition-all duration-300"
              >
                <p className="text-lg font-semibold text-white mb-2">{lang.name}</p>
                <p className="text-gray-300 text-sm">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

