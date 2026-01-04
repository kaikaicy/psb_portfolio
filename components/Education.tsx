"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaStar } from "react-icons/fa";

const education = [
  {
    period: "2022 - Present",
    institution: "Camarines Norte State College",
    degree: "Bachelor of Science in Information Technology",
    achievements: [
      
    ],
  },
  {
    period: "2020 - 2022",
    institution: "Mabini Colleges",
    degree: "STEM Strand",
    achievements: ["Graduated with High Honors"],
  },
  {
    period: "2016 - 2020",
    institution: "Alawihao National High School",
    degree: "",
    achievements: ["Graduated with Honors"],
  },
  {
    period: "2010 - 2016",
    institution: "UP Teacher's Village Elementary Schoool",
    degree: "",
    achievements: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-3"
            >
              Education & Achievements
            </motion.h2>
            <div className="w-24 h-0.5 bg-cyan-400 mx-auto"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-cyan-400"></div>

            {/* Education Entries */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-4 md:left-8 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#0a1128] z-10"></div>

                  {/* Card */}
                  <div className="bg-white rounded-lg border-2 border-cyan-400 p-6 shadow-lg">
                    {/* Period Tag */}
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-[#0a1128] text-sm font-semibold rounded mb-4">
                      {edu.period}
                    </span>

                    {/* Institution */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#0a1128] mb-2">
                      {edu.institution}
                    </h3>

                    {/* Degree */}
                    {edu.degree && (
                      <p className="text-gray-600 text-base mb-4">{edu.degree}</p>
                    )}

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="space-y-2 mt-4">
                        {edu.achievements.map((achievement, i) => {
                          // Determine icon based on achievement content
                          let Icon = FaStar;
                          if (achievement.toLowerCase().includes("honor")) {
                            Icon = FaStar;
                          } else if (achievement.toLowerCase().includes("winner") || achievement.toLowerCase().includes("award")) {
                            Icon = FaTrophy;
                          } else if (achievement.toLowerCase().includes("graduation") || achievement.toLowerCase().includes("expected")) {
                            Icon = FaCalendarAlt;
                          } else if (achievement.toLowerCase().includes("dean")) {
                            Icon = FaGraduationCap;
                          }

                          return (
                            <div key={i} className="flex items-start gap-2 text-gray-600">
                              <Icon className="text-gray-600 mt-0.5 flex-shrink-0" size={16} />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

