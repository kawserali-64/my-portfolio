import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";

import projects from "@/data/projects";

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#030712] py-32 text-slate-100 relative overflow-hidden">
      {/* Unique Ambient Deep Space Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-purple-600/10 blur-[220px] rounded-full pointer-events-none -z-10 animate-pulse" />
      
      {/* Cyberpunk Grid Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 transition hover:text-cyan-300"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        {/* Hero Image */}
        <div className="relative h-[250px] overflow-hidden rounded-3xl md:h-[550px] border border-slate-800 bg-slate-900/40 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-slate-950/60 to-transparent" />

          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl font-black md:text-6xl text-slate-100 tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="mt-14">
          <h2 className="mb-6 text-3xl font-bold text-slate-100">
            Project Overview
          </h2>

          <p className="max-w-4xl text-lg leading-9 text-slate-400 font-light">
            {project.description}
          </p>
        </div>

        {/* Technology */}
        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-100">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-2xl border border-cyan-500/30 bg-slate-950/60 px-5 py-3 text-cyan-400 font-mono text-xs uppercase tracking-wider backdrop-blur-xl shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-100">
            Challenges Faced
          </h2>

          <div className="space-y-5">
            {project.challenges.map((challenge) => (
              <div
                key={challenge}
                className="flex items-start gap-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl shadow-xl"
              >
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] shrink-0 mt-1">
                  <FaCheckCircle size={16} />
                </div>

                <p className="leading-7 text-slate-300 font-light text-base">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Improvements */}
        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-100">
            Future Improvements
          </h2>

          <div className="space-y-5">
            {project.improvements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl shadow-xl"
              >
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] shrink-0 mt-1">
                  <FaCheckCircle size={16} />
                </div>

                <p className="leading-7 text-slate-300 font-light text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap gap-5">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-mono font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] uppercase tracking-widest text-sm"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/60 px-7 py-4 font-mono font-semibold text-slate-300 transition-all hover:bg-slate-900 hover:text-cyan-400 hover:border-cyan-500/40 uppercase tracking-widest text-sm shadow-xl"
          >
            <FaGithub />
            GitHub Repository
          </a>

        </div>
      </div>
    </section>
  );
}