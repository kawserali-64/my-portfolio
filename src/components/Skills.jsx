"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and interactive user interfaces with clean code and component-driven architecture.",
    badge: "UI / UX",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side logic, managing databases, and integrating reliable authentication services.",
    badge: "SERVER / DB",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
  },
  {
    title: "Developer Tools",
    description: "Utilizing essential version control systems and cloud platforms for efficient code management and seamless deployment.",
    badge: "DEVOPS",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#030712] text-slate-100 py-24 overflow-hidden"
    >
      {/* Unique Ambient Deep Space Glows */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-blue-600/10 blur-[220px] rounded-full pointer-events-none -z-10 animate-pulse" />
      
      {/* Cyberpunk Grid Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading & Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <HiSparkles className="text-cyan-400 animate-spin" />
            <span>Technical Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            My <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(6,182,212,0.3)]">Skills</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mt-4 font-light">
            I continuously build and refine my expertise in full-stack development to create responsive, user-centric web applications.
          </p>
        </motion.div>

        {/* Unique Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/60 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col justify-between"
            >
              {/* Top Neon Glowing Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background ambient light inside card */}
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Category Header with Mini Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 uppercase">
                    {category.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
                  {category.description}
                </p>

                {/* Skills Interactive Grid inside Card */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group/item flex items-center gap-3 p-3 rounded-2xl border border-slate-800/80 bg-slate-950/40 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                      >
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover/item:border-cyan-500/30 transition-colors">
                          <Icon
                            className={`${skill.color} text-lg transition-transform duration-300 group-hover/item:scale-110`}
                          />
                        </div>
                        <span className="font-mono text-xs tracking-wide text-slate-300 group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Line */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>PROFICIENCY</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">EXPLORE &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Cyber-Dashboard Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { value: "12+", label: "Technologies", code: "TECH STACK" },
            { value: "15+", label: "Projects Built", code: "PORTFOLIO" },
            { value: "1+", label: "Years Learning", code: "EXPERIENCE" },
            { value: "100%", label: "Dedication", code: "COMMITMENT" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl text-center shadow-xl hover:border-cyan-500/60 transition-all duration-300 group overflow-hidden"
            >
              {/* Top Neon Glowing Border on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Ambient Glow Inside */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Mini System Code Tag */}
              <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-slate-950/60 border border-slate-800/80 text-cyan-400/80 uppercase inline-block mb-4 group-hover:border-cyan-500/30 transition-colors">
                {stat.code}
              </span>

              <h3 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform inline-block">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-400 text-xs sm:text-sm uppercase tracking-wider font-mono group-hover:text-slate-200 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}