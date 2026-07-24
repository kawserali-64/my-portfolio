"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "412186bd-0473-4b2f-9a64-2744f2d1180e"
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message"
    );

    formData.append(
      "from_name",
      "Kawser Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        e.target.reset();
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#030712] text-slate-100 py-24 overflow-hidden"
    >
      {/* Unique Ambient Deep Space Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-purple-600/10 blur-[220px] rounded-full pointer-events-none -z-10 animate-pulse" />
      
      {/* Cyberpunk Grid Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading & Cyber Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-2xl shadow-[0_0_35px_rgba(6,182,212,0.3)]"
          >
            <HiSparkles className="text-cyan-400 animate-spin" />
            <span>Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(6,182,212,0.4)]">Touch</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mt-6 font-light leading-relaxed">
            Have a project idea, collaboration opportunity, or any questions? Feel free to send me a message. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-cyan-500/50 transition-colors"
          >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="mb-8 text-2xl sm:text-3xl font-bold text-slate-100">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 p-5 group/item hover:border-cyan-500/40 transition-colors">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Email Address</h4>
                  <a href="mailto:kawserali6436@gmail.com" className="text-slate-100 font-medium text-sm sm:text-base mt-1 block hover:text-cyan-400 transition-colors">
                    kawserali6436@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 p-5 group/item hover:border-cyan-500/40 transition-colors">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Phone Number</h4>
                  <a href="tel:+8801866752434" className="text-slate-100 font-medium text-sm sm:text-base mt-1 block hover:text-cyan-400 transition-colors">
                    +8801866752434
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-slate-800/80">
              <h4 className="mb-5 text-sm font-mono tracking-widest text-slate-400 uppercase">Connect With Me</h4>

              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, href: "https://github.com/kawserali-64" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kawser-ali-dev" },
                  { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61577708174418" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-slate-950/80 border border-slate-800 p-4 text-xl text-slate-300 transition-all hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Send Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-cyan-500/50 transition-colors"
          >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="mb-8 text-2xl sm:text-3xl font-bold text-slate-100">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400 focus:bg-slate-950 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] font-light text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400 focus:bg-slate-950 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] font-light text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400 focus:bg-slate-950 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] font-light text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center rounded-2xl bg-cyan-500 py-4 font-mono font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:cursor-not-allowed disabled:opacity-70 uppercase tracking-widest text-sm"
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-3 h-5 w-5 animate-spin text-slate-950"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {success && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-mono text-xs tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 p-3 rounded-xl"
                >
                  {success}
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}