"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="relative bg-[#030712] pt-20 pb-10 overflow-hidden border-t border-slate-800/50">
      
      {/* Ambient Space Glows */}
      <div className="absolute left-1/4 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      {/* Subtle Noise / Grid Pattern (Optional to match theme) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          
          {/* Logo & Intro */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <Link
              href="/"
              className="text-3xl font-black tracking-wide text-white flex items-center justify-center md:justify-start group"
            >
              Kawser
              <span className="text-cyan-400 group-hover:animate-pulse">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-slate-400 text-sm font-light leading-relaxed">
              Passionate Full Stack Developer focused on building responsive, scalable and highly interactive modern web applications.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {[
              { icon: FaGithub, link: "https://github.com/kawserali-64", name: "GitHub" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/kawser-ali-dev", name: "LinkedIn" },
              { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61577708174418", name: "Facebook" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 text-xl text-slate-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 backdrop-blur-xl"
                  aria-label={social.name}
                >
                  {/* Internal hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-500/0 transition-colors group-hover:bg-cyan-500/10" />
                  <Icon className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Animated Glowing Divider */}
        <motion.div 
          variants={itemVariants}
          className="my-12 flex items-center justify-center w-full"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent relative">
            <motion.div 
              initial={{ width: "0%", opacity: 0 }}
              whileInView={{ width: "40%", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-1/2 h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
            />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          {/* Copyright */}
          <p className="text-slate-500 text-sm font-light text-center md:text-left tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">
              Kawser Ali
            </span>
            . All Rights Reserved.
          </p>

          {/* Back to Top Button */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-6 py-2.5 text-sm font-mono text-slate-400 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowUp className="text-xs" />
            </motion.div>
            BACK TO TOP
          </motion.a>
        </motion.div>

      </motion.div>
    </footer>
  );
}