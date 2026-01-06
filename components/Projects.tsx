"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "SolaRice Rake",
    description:
      "An automated robot that minimizes the labor-intensive process of sun-drying paddy rice for farmers in Camarines Norte.",
    tags: ["IoT", "Android Studio", "Arduino"],
    image: "/solarice-rake.png", // Add your image path here
  },
  {
    title: "DisperSync",
    description:
      "Livestock dispersal management system leveraging IoT and NFC technologies",
    link: "#",
    tags: ["React Native", "NextJS", "Arduino", "Firebase"],
    image: "/dispersync.png", // Add your image path here
  },
  {
    title: "ResearchIT",
    description:
      "Web-based digital repository for local research studies at universities",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "/researchit.png", // Add your image path here
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-cyan-400/30 hover:border-cyan-400"
            >
              {project.image && (
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                {project.badge && (
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3">
                    {project.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-cyan-400 hover:text-white transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group/link"
                  >
                    Visit Website
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

