"use client";

import { motion } from "framer-motion";
import {
  FaDocker,
  FaRobot,
  FaAws,
  FaGraduationCap,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] px-8 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="mb-8 text-3xl font-bold leading-tight">
              Building Intelligent Automation That Solves Real Business Problems
            </h3>

            <p className="mb-6 leading-8 text-gray-300">
              I'm{" "}
              <span className="font-semibold text-cyan-400">
                Ogheneochuko Godswill
              </span>
              , an AI Automation Engineer passionate about designing
              intelligent workflow systems, scalable cloud infrastructure,
              and production-ready business automation.
            </p>

            <p className="mb-6 leading-8 text-gray-300">
              My expertise includes AI workflow automation with n8n,
              Docker-based deployments, AWS cloud infrastructure,
              REST API integrations, DevOps practices, and modern web
              development using Next.js and React.
            </p>

            <p className="mb-6 leading-8 text-gray-300">
              I enjoy transforming repetitive manual processes into
              intelligent automation that saves time, reduces operational
              costs, and improves business efficiency through AI-driven
              solutions.
            </p>

            <p className="leading-8 text-gray-300">
              Every project I build focuses on reliability,
              scalability, maintainability, and delivering measurable
              value. I'm continuously expanding my knowledge in Cloud,
              DevOps, Artificial Intelligence, and Software Engineering
              to stay at the forefront of modern technology.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

              <FaDocker className="mx-auto mb-4 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Docker
              </h3>

              <p className="mt-3 text-gray-400">
                Containerized Applications
              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

              <FaRobot className="mx-auto mb-4 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                AI
              </h3>

              <p className="mt-3 text-gray-400">
                Automation & Intelligent Agents
              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

              <FaAws className="mx-auto mb-4 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                AWS
              </h3>

              <p className="mt-3 text-gray-400">
                Production Cloud Deployment
              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

              <FaGraduationCap className="mx-auto mb-4 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Lifelong Learning
              </h3>

              <p className="mt-3 text-gray-400">
                Continuous Growth & Innovation
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}