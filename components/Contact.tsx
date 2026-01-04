"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear submit status when user makes changes
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Message sent successfully! I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href="mailto:kikaybenalla5@gmail.com"
              className="flex items-center space-x-4 p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                <FiMail className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Email</p>
                <p className="text-gray-300 text-sm">kikaybenalla5@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:09670494464"
              className="flex items-center space-x-4 p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                <FiPhone className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Phone</p>
                <p className="text-gray-300 text-sm">09670494464</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/precy-benalla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                <FiLinkedin className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">LinkedIn</p>
                <p className="text-gray-300 text-sm truncate">linkedin.com/in/precy-benalla</p>
              </div>
            </a>

            <div className="flex items-start space-x-4 p-5 bg-gray-800 rounded-lg border-2 border-cyan-400/30">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <FiMapPin className="text-cyan-400 text-2xl" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Location</p>
                <p className="text-gray-300 text-sm">Daet, Camarines Norte, 4600</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-gray-800 rounded-lg border-2 border-cyan-400/30 p-6 space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600 ${
                  errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-700"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <FiAlertCircle className="text-xs" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-700"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <FiAlertCircle className="text-xs" />
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none resize-none transition-all bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600 ${
                  errors.message
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-700"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <FiAlertCircle className="text-xs" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border-2 border-green-500/50 text-green-400"
                    : "bg-red-500/20 border-2 border-red-500/50 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <FiCheckCircle className="text-xl flex-shrink-0" />
                ) : (
                  <FiAlertCircle className="text-xl flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${
                isSubmitting
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-cyan-400 text-[#0a1128] hover:bg-cyan-300"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-300">
          <p>© 2026 Precy Benalla. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

