"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-8 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-5xl font-bold"
        >
          Let's <span className="text-cyan-400">Work Together</span>
        </motion.h2>

        <p className="mx-auto mb-16 max-w-3xl text-lg leading-8 text-gray-400">
          I'm currently available for onsite, hybrid, and remote opportunities
          as an <span className="text-cyan-400">AI Automation Engineer</span>,
          <span className="text-cyan-400"> DevOps Engineer</span>,
          <span className="text-cyan-400"> Cloud Engineer</span>, or
          <span className="text-cyan-400"> Workflow Automation Specialist</span>.
          Whether you're looking to automate business processes, deploy cloud
          infrastructure, or build AI-powered systems, I'd love to help bring
          your ideas to life.
        </p>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Email */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400">

            <Mail
              size={40}
              className="mx-auto mb-4 text-cyan-400"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Email
            </h3>

            <a
              href="mailto:godswillmamus54@gmail.com"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              godswillmamus54@gmail.com
            </a>

          </div>

          {/* Location */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400">

            <MapPin
              size={40}
              className="mx-auto mb-4 text-cyan-400"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Location
            </h3>

            <p className="text-gray-300">
              Abuja, Nigeria
            </p>

          </div>

          {/* Portfolio */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400">

            <Globe
              size={40}
              className="mx-auto mb-4 text-cyan-400"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Portfolio
            </h3>

            <a
              href="https://godswill-portfolio-sigma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              View Portfolio
            </a>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16">

          <a
            href="mailto:godswillmamus54@gmail.com"
            className="inline-block rounded-xl bg-cyan-500 px-10 py-4 font-bold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-400"
          >
            Let's Build Something Great
          </a>

        </div>

        {/* Social Links */}

        <div className="mt-14 flex justify-center gap-8 text-4xl">

          <a
            href="https://github.com/godswillmamus54-max"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ogheneochuko-godswill/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}