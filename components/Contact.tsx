"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
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

        <p className="mx-auto mb-16 max-w-3xl text-lg text-gray-400">
          I'm open to onsite, hybrid, and remote opportunities worldwide as an
          AI Automation Engineer, DevOps Engineer, Cloud Engineer, and Workflow
          Automation Specialist. I enjoy building production-ready AI systems,
          scalable cloud infrastructure, and intelligent automation solutions
          that help businesses improve efficiency and accelerate growth.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <Mail
              size={40}
              className="mx-auto mb-4 text-cyan-400"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Email
            </h3>

            <a
              href="mailto:godswillmamus54@gmail.com"
              className="text-gray-300 hover:text-cyan-400"
            >
              godswillmamus54@gmail.com
            </a>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

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

        </div>

        <div className="mt-14 flex justify-center gap-8 text-4xl">

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
    </section>
  );
}