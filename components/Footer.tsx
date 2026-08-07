"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black px-8 py-12 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

        {/* Left */}

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Ogheneochuko Godswill
          </h2>

          <p className="mt-3 max-w-md text-gray-400 leading-7">
            AI Automation Engineer • DevOps Engineer • Cloud Engineer •
            Workflow Automation Specialist
          </p>

          <p className="mt-2 text-gray-500">
            Building production-ready AI automation, cloud infrastructure,
            and intelligent business solutions.
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-6 text-2xl">

          <a
            href="https://github.com/godswillmamus54-max"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-cyan-400"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ogheneochuko-godswill/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-cyan-400"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:godswillmamus54@gmail.com"
            className="transition hover:scale-110 hover:text-cyan-400"
            title="Email"
          >
            <Mail size={24} />
          </a>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-10 border-t border-slate-800 pt-8 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} Ogheneochuko Godswill. All rights reserved.

        <br />

        Built with Next.js • React • Tailwind CSS • TypeScript • Framer Motion •
        Deployed on Vercel.

      </div>

    </footer>
  );
}