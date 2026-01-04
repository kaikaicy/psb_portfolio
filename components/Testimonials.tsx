"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As student researchers, my group and I wanted to develop a website but lacked the technical expertise to create one. Fortunately, we found a developer who took on the role. The website not only functions smoothly but also exceeds our expectations in terms of usability and efficiency. We are extremely satisfied with the outcome and grateful for the dedication, skill, and attention to detail.",
    author: "Student Researchers",
    role: "Research Team • EquiText Project",
    initial: "S",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Client Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-[#0a1128] text-2xl font-bold">
                  {testimonial.initial}
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-4">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

