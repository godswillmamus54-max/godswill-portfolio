"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    title: "AI Agents & Automation Engineer",
    company: "AgenticX AI Labs",
    description:
      "Completed a practical AI Agents & Automation internship focused on Python, LangGraph, LangChain, MCP, APIs and agentic workflow design. Built and passed human review for a Tool-Using Research Agent and a Multi-Agent Workflow with LangGraph.",
  },

  {
    year: "2026",
    title: "AI Automation Engineer",
    company: "Independent Projects",
    description:
      "Designed and developed business-focused AI automation systems including RoofLead Rescue, AI Customer Support Triage & Escalation, AI Lead Qualification & Routing, AI Client Onboarding, AI Content Factory and AI Job Application Assistant.",
  },

  {
    year: "2026",
    title: "Multi-Agent & AI Workflow Development",
    company: "AI Agents • LangGraph • LangChain",
    description:
      "Built stateful agent workflows with planner, worker and reviewer roles, conditional routing, structured state, bounded retry logic and escalation paths. Developed tool-using research workflows with source-grounded outputs and controlled execution.",
  },

  {
    year: "2026",
    title: "Production Automation Infrastructure",
    company: "AWS • Docker • n8n",
    description:
      "Built and deployed production-oriented automation infrastructure using Docker Compose, Nginx, HTTPS, Cloudflare, AWS and n8n, with API integrations, workflow orchestration and operational safeguards.",
  },

  {
    year: "2012 – 2014",
    title: "Freelance Computer Support Technician",
    company: "Degreat Computers",
    description:
      "Provided computer support and technical assistance, building practical experience in troubleshooting, system configuration, software installation and resolving user technology issues.",
  },

  {
    year: "Now",
    title: "Building & Expanding",
    company: "AI • Automation • Cloud • DevOps",
    description:
      "Continuing to build practical AI agents, automation systems and cloud infrastructure while expanding into more advanced agent orchestration, production deployment and intelligent business process automation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black px-8 py-32 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center text-5xl font-bold"
        >
          My <span className="text-cyan-400">Journey</span>
        </motion.h2>

        <div className="relative border-l border-cyan-500">

          {experience.map((item, index) => (

            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-14 ml-8"
            >

              <span className="absolute -left-11 top-2 h-5 w-5 rounded-full bg-cyan-400"></span>

              <p className="font-semibold text-cyan-400">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-1 text-gray-400">
                {item.company}
              </p>

              <p className="mt-4 leading-8 text-gray-300">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}