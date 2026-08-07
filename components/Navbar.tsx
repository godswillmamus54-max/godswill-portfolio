"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/60 bg-black/70 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <a
          href="#"
          className="text-2xl font-extrabold tracking-wide text-cyan-400 transition hover:text-cyan-300"
        >
          O.G.
        </a>

        <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-gray-300">

          <a
            href="#about"
            className="relative transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>

          <a
            href="#skills"
            className="relative transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="relative transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="relative transition hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}