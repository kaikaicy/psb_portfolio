"use client";

import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const certifications = [
  {
    title: "Civil Service Examination – Professional Level Passer",
    period: "2025",
    company: "Civil Service Commission, Philippines",
    description: "",
    website: "",
    tags: [],
    image: "/cse.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Certifications
          </h2>
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg border-2 border-cyan-400/30 overflow-hidden hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col">
                {/* Image Section - On Top */}
                {cert.image && (
                  <div className="relative w-full h-64 bg-gray-700">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                        <FiAward className="text-cyan-400 text-2xl" />
                      </div>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 mb-3">
                      <FiCalendar className="text-cyan-400 text-sm" />
                      <p className="text-sm font-medium">{cert.company} | {cert.period}</p>
                    </div>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>
                    )}

                    {/* Tags */}
                    {cert.tags && cert.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Link */}
                  {cert.website && (
                    <a
                      href={`https://${cert.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group/link mt-4"
                    >
                      View Certificate
                      <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

