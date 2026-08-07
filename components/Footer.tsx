"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-8 py-10 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>

          <h2 className="text-xl font-bold text-cyan-400">
            Ogheneochuko Godswill
          </h2>

          <p className="mt-2 text-gray-400">
            AI Automation Engineer • DevOps Engineer • Cloud Engineer
          </p>

        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/godswillmamus54-max"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ogheneochuko-godswill/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} Ogheneochuko Godswill.
        Built with Next.js, Tailwind CSS, Framer Motion and deployed with ❤️.

      </div>

    </footer>
  );
}