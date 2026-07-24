"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi2";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle Array
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.7)";
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect with mouse
        if (mouse.x !== null && mouse.y !== null) {
          let mdx = p.x - mouse.x;
          let mdy = p.y - mouse.y;
          let mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 * (1 - mdist / mouse.radius)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#030712] text-slate-100 flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Interactive Particle Network Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Dynamic Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-2xl shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Available for Projects & Collaboration</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5 text-slate-50">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(6,182,212,0.25)]">
              Kawser Ali
            </span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full inline-block" />
            Full Stack Web Developer
          </div>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            I am a passionate Full Stack Web Developer who loves building modern, responsive, and user-friendly web applications using <span className="text-cyan-300 font-medium underline underline-offset-4 decoration-cyan-500/30">React, Next.js, Node.js, Express.js, and MongoDB</span>. Dedicated to writing clean code and turning ideas into functional web projects.
          </p>

          {/* Action Buttons with Advanced Animations */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* Primary Resume Button with Shimmer & Scale Animation */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-7.5 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:shadow-[0_0_55px_rgba(6,182,212,0.7)] flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300"
            >
              {/* Shimmer Light Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              
              <FaDownload className="text-slate-950 text-base group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            </motion.a>

            {/* Secondary Contact Button with Glow Hover & Spring Effect */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-7.5 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm tracking-wide backdrop-blur-xl flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <FaEnvelope className="text-cyan-400 text-base group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:text-cyan-300 transition-colors duration-300">Contact Me</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-3.5 mt-10 pt-8 border-t border-slate-800/80 w-full">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mr-2">
              Connect:
            </span>
            {[
              { href: "https://github.com/kawserali-64", icon: <FaGithub size={18} />, label: "GitHub Profile" },
              { href: "https://www.linkedin.com/in/kawser-ali-dev", icon: <FaLinkedin size={18} />, label: "LinkedIn Profile" },
              { href: "https://www.facebook.com/profile.php?id=61577708174418", icon: <FaFacebook size={18} />, label: "Facebook Profile" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                aria-label={social.label}
              >
                <span>{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-600/20 blur-[100px] animate-pulse" />
          <div className="absolute w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full border border-cyan-500/15 border-dashed animate-[spin_25s_linear_infinite] pointer-events-none" />
          <div className="relative w-72 h-72 sm:w-[380px] sm:h-[380px] lg:w-[400px] lg:h-[400px] p-3 bg-gradient-to-tr from-cyan-500/30 via-slate-900 to-indigo-600/30 rounded-[35%_65%_60%_40%/40%_45%_55%_60%] shadow-[0_0_50px_rgba(6,182,212,0.15)] animate-[morph_9s_ease-in-out_infinite]">
            <div className="w-full h-full rounded-[35%_65%_60%_40%/40%_45%_55%_60%] border border-cyan-400/30 overflow-hidden relative bg-slate-950 shadow-inner">
              <Image
                src="/profile.png"
                alt="Kawser Ali - Full Stack Developer"
                fill
                className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700 filter contrast-105"
                priority
              />
            </div>
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 sm:-bottom-2 sm:-left-4 px-4 py-3 bg-slate-900/90 border border-slate-800/80 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-3 z-20"
          >
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <HiCheckCircle size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Projects</p>
              <p className="text-sm font-extrabold text-slate-200">15+ Completed</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}