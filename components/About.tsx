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
              Building AI Agents and Automation Systems That Solve Real Business Problems
            </h3>

            <p className="mb-6 leading-8 text-gray-300">
              I'm{" "}
              <span className="font-semibold text-cyan-400">
                Ogheneochuko Godswill
              </span>
              , an AI Automation Engineer focused on building intelligent
              agents, multi-agent workflows, and business automation systems
              that turn complex processes into reliable, practical workflows.
            </p>

            <p className="mb-6 leading-8 text-gray-300">
              My work spans{" "}
              <span className="text-cyan-400">LangGraph</span>,{" "}
              <span className="text-cyan-400">LangChain</span>,{" "}
              <span className="text-cyan-400">OpenAI</span>,{" "}
              <span className="text-cyan-400">n8n</span>, Python, REST APIs,
              webhooks, structured data, and tool-based AI workflows. I've
              built systems for research, lead recovery, customer support,
              sales qualification, client onboarding, and content operations.
            </p>

            <p className="mb-6 leading-8 text-gray-300">
              I also work across{" "}
              <span className="text-cyan-400">Docker</span>,{" "}
              <span className="text-cyan-400">AWS</span>, Ubuntu Linux,
              Nginx, Cloudflare, Git, and modern web technologies. This
              allows me to connect intelligent AI capabilities with the
              infrastructure and integrations required to run useful
              automation systems.
            </p>

            <p className="leading-8 text-gray-300">
              My approach is practical and engineering-focused: define clear
              system states, validate inputs, use structured outputs, control
              agent execution, handle failures, test important paths, and
              design workflows that can be maintained and improved over time.
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

              <FaRobot className="mx-auto mb-4 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                AI Agents
              </h3>

              <p className="mt-3 text-gray-400">
                Tool-Using & Intelligent Workflows
              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

              <FaRobot className="mx-auto mb-4 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Multi-Agent
              </h3>

              <p className="mt-3 text-gray-400">
                LangGraph & Stateful Systems
              </p>

            </div>

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

              <FaAws className="mx-auto mb-4 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                AWS
              </h3>

              <p className="mt-3 text-gray-400">
                Cloud & Production Infrastructure
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}