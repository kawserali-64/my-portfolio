"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#030712] text-slate-100 py-24 overflow-hidden"
    >
      {/* Unique Ambient Deep Space Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-purple-600/10 blur-[220px] rounded-full pointer-events-none -z-10 animate-pulse" />
      
      {/* Cyberpunk Grid Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Unique Cyber Badge & Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <HiSparkles className="text-cyan-400 animate-spin" />
            <span>System.profile // 02</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            About <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(6,182,212,0.3)]">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mt-4 font-light">
            An aspiring Full Stack Web Developer on a journey to build modern applications, solve challenges, and continuously grow.
          </p>
        </motion.div>

        {/* Unique Asymmetric Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">

          {/* Main Bio Card (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
          >
            {/* Shimmer Light Effect on Hover */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Absolute Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-500" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <FaRocket size={22} />
                </div>
                <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase">Hello World, I'm</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-6 group-hover:text-cyan-300 transition-colors">
                Kawser Ali
              </h3>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  I am an aspiring Full Stack Web Developer who loves building modern responsive web applications and creating real-world projects.
                </p>
                <p>
                  My toolkit includes <span className="text-cyan-300 font-mono text-sm px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS</span> for the frontend, along with <span className="text-cyan-300 font-medium">Node.js, Express.js, MongoDB, Firebase, Git, GitHub, and Vercel</span> for backend and tools.
                </p>
                <p className="text-slate-400 text-sm">
                  Outside of coding, I enjoy learning new technologies, watching tech videos, exploring AI tools, and playing games in my free time.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-3">
              {["Full Stack", "React & Next.js", "MERN Stack", "Problem Solving"].map((tag, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs font-mono text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Bento Column (Span 5) */}
          <div className="lg:col-span-5 grid gap-6">
            {[
              {
                icon: <FaCode className="text-cyan-400" size={20} />,
                title: "Programming Journey",
                desc: "Started my coding journey out of curiosity, learning HTML, CSS, and JavaScript, and evolving into building full-stack MERN and Next.js applications."
              },
              {
                icon: <FaLaptopCode className="text-cyan-400" size={20} />,
                title: "Work I Enjoy",
                desc: "I enjoy crafting responsive user interfaces, writing clean code, solving logical problems, and turning creative ideas into functional web apps."
              },
              {
                icon: <FaLightbulb className="text-cyan-400" size={20} />,
                title: "Personality & Hobbies",
                desc: "Curious, persistent, and eager to learn. In my free time, I explore AI tools, watch tech videos, and play video games."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-2xl shadow-xl hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-100 mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}