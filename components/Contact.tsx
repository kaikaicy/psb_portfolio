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
          {[
            { 
              href: "mailto:kikaybenalla5@gmail.com", 
              icon: FiMail, 
              title: "Email", 
              text: "kikaybenalla5@gmail.com",
              delay: 0,
              isLink: true
            },
            { 
              href: "tel:09670494464", 
              icon: FiPhone, 
              title: "Phone", 
              text: "09670494464",
              delay: 0.1,
              isLink: true
            },
            { 
              href: "https://www.linkedin.com/in/precy-benalla/", 
              icon: FiLinkedin, 
              title: "LinkedIn", 
              text: "linkedin.com/in/precy-benalla",
              delay: 0.2,
              isLink: true,
              external: true
            },
            { 
              href: "#", 
              icon: FiMapPin, 
              title: "Location", 
              text: "Daet, Camarines Norte, 4600",
              delay: 0.3,
              isLink: false
            }
          ].map((contact, index) => {
            const Component = contact.isLink ? motion.a : motion.div;
            const props = contact.isLink ? {
              href: contact.href,
              ...(contact.external && { target: "_blank", rel: "noopener noreferrer" })
            } : {};

            return (
              <Component
                key={index}
                {...props}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: contact.delay
                }}
                whileHover={{ y: -2 }}
                className={`flex flex-col items-center p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group ${contact.isLink ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors mb-3">
                  <contact.icon className="text-cyan-400 text-2xl group-hover:scale-105 transition-transform" />
                </div>
                <p className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {contact.title}
                </p>
                <p className="text-gray-300 text-sm text-center truncate w-full">{contact.text}</p>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
