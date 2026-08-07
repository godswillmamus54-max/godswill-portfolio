"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-8 py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-20 lg:flex-row"
      >
        {/* LEFT */}

        <div className="flex-1 text-center lg:text-left">

          <p className="mb-4 text-lg font-semibold text-cyan-400">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Ogheneochuko
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Godswill
            </span>
          </h1>

          {/* Availability */}

          <div className="mt-6 inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            🟢 Available for Onsite • Hybrid • Remote Opportunities
          </div>

          {/* Animated Roles */}

          <div className="mt-8 text-3xl font-bold text-gray-200">

            <TypeAnimation
              sequence={[
                "AI Automation Engineer",
                2000,
                "DevOps Engineer",
                2000,
                "Cloud Engineer",
                2000,
                "n8n Workflow Expert",
                2000,
                "AI Agent Builder",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
            />

          </div>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-400">
            I help businesses automate operations, deploy scalable cloud
            infrastructure, and build intelligent AI workflow systems using
            <span className="text-cyan-400"> n8n</span>,
            <span className="text-cyan-400"> Docker</span>,
            <span className="text-cyan-400"> AWS</span>,
            <span className="text-cyan-400"> Next.js</span>, and modern AI
            technologies.

            <br />
            <br />

            Passionate about transforming repetitive business processes into
            reliable, production-ready automation solutions that improve
            efficiency and accelerate growth.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">

            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
              Download Resume
            </a>

            <a
              href="mailto:godswillmamus54@gmail.com"
              className="rounded-xl border border-gray-700 px-8 py-4 transition hover:border-cyan-400 hover:bg-slate-900"
            >
              Contact Me
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12 flex flex-wrap justify-center gap-10 lg:justify-start">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
              <p className="text-gray-400">Major Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="text-gray-400">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400">Production Ready</p>
            </div>

          </div>

          {/* Social Icons */}

          <div className="mt-12 flex justify-center gap-8 text-3xl text-gray-400 lg:justify-start">

            <a
              href="https://github.com/godswillmamus54-max"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ogheneochuko-godswill/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:godswillmamus54@gmail.com"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <Mail />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex flex-1 justify-center">

          <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-500/30 blur-[110px]" />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
          >

            <Image
              src="/images/profile.png"
              alt="Ogheneochuko Godswill"
              width={420}
              height={420}
              priority
              className="rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_70px_rgba(34,211,238,.45)]"
            />

          </motion.div>

        </div>

      </motion.div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaArrowDown className="text-3xl text-cyan-400" />
      </motion.div>

    </section>
  );
}