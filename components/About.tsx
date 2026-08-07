"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black px-8 py-32 text-white"
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
            <h3 className="mb-6 text-3xl font-bold">
              Building Intelligent Automation That Solves Real Business Problems
            </h3>

            <p className="mb-6 leading-8 text-gray-300">
              I'm{" "}
              <span className="font-semibold text-cyan-400">
                Ogheneochuko Godswill
              </span>
              , an AI Automation Engineer specializing in workflow automation,
              cloud deployment, DevOps and intelligent AI systems. I build
              production-ready solutions using n8n, Docker, APIs, AWS and modern
              AI technologies.
            </p>

            <p className="mb-6 leading-8 text-gray-300">
              My work focuses on eliminating repetitive tasks, connecting
              business systems through automation, deploying scalable cloud
              infrastructure and developing AI-powered workflows that improve
              productivity and reduce operational costs.
            </p>

            <p className="mb-6 leading-8 text-gray-300">
              Recent projects include deploying a production-grade n8n server on
              AWS with Docker and Nginx, developing AI research assistants,
              intelligent job application automations, online banking demos, and
              AI-powered content generation systems.
            </p>

            <p className="leading-8 text-gray-300">
              I'm constantly learning new technologies while building practical,
              real-world solutions that combine Artificial Intelligence,
              Automation, Cloud Engineering and Software Development.
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
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">Docker</h3>

              <p className="mt-3 text-gray-400">
                Containerized Applications
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">AI</h3>

              <p className="mt-3 text-gray-400">
                Automation & Agents
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">AWS</h3>

              <p className="mt-3 text-gray-400">
                Production Cloud Deployment
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>

              <p className="mt-3 text-gray-400">
                Continuous Learning
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}