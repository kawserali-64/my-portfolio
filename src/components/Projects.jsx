"use client";

import React from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

import projects from "@/data/projects";

// ইন্ডিভিজুয়াল প্রজেক্ট কার্ড কম্পোনেন্ট (3D Tilt & Mouse Glow সহ)
function ProjectCard({ project, idx }) {
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX_val = e.clientX - rect.left;
    const mouseY_val = e.clientY - rect.top;
    
    const rotateY_val = ((mouseX_val - width / 2) / width) * 15;
    const rotateX_val = ((mouseY_val - height / 2) / height) * -15;

    rotateX.set(rotateX_val);
    rotateY.set(rotateY_val);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-6 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-2xl shadow-2xl overflow-hidden transition-colors duration-300 hover:border-cyan-500/60 flex flex-col justify-between perspective-1000"
    >
      {/* Dynamic Hover Glow (Mouse Following Light) */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.12), transparent 80%)`,
        }}
      />

      {/* Top Neon Glowing Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {/* Image Container */}
        <div className="relative h-60 overflow-hidden rounded-2xl mb-6 border border-slate-800/80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          
          {/* Project Tag / Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/60 backdrop-blur-md text-[10px] font-mono tracking-widest text-cyan-400 uppercase shadow-lg">
            Project 0{idx + 1}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-xs font-mono text-cyan-300 group-hover:border-cyan-500/30 transition-colors"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2" style={{ transform: "translateZ(20px)" }}>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 px-3 py-2.5 text-xs font-mono font-semibold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        >
          <FaExternalLinkAlt size={12} />
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-xs font-mono text-slate-300 transition-all hover:border-cyan-400/50 hover:text-white hover:bg-slate-900"
        >
          <FaGithub size={14} />
          GitHub
        </a>

        <Link
          href={`/projects/${project.id}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-xs font-mono text-slate-300 transition-all hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-500/10"
        >
          View Details
          <FaArrowRight size={12} />
        </Link>
      </div>

    </motion.div>
  );
}

// Main Projects Section
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#030712] text-slate-100 py-32 overflow-hidden"
    >
      {/* Unique Ambient Deep Space Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-purple-600/10 blur-[220px] rounded-full pointer-events-none -z-10 animate-pulse" />
      
      {/* Cyberpunk Grid Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Wow Heading & Cyber Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          {/* Glowing Animated Badge */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-2xl shadow-[0_0_35px_rgba(6,182,212,0.3)]"
          >
            <HiSparkles className="text-cyan-400 animate-spin" />
            <span>Featured Work</span>
          </motion.div>

          {/* Wow Title with Text Gradient Reveal */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(6,182,212,0.4)]">Projects</span>
          </motion.h2>

          {/* Subtitle with Typewriter Vibe */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mt-6 font-light leading-relaxed"
          >
            Explore a collection of responsive and user-friendly web applications built with modern technologies, clean code structures, and thoughtful design.
          </motion.p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}