"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Multi-Agent Workflow with LangGraph",
    description:
      "A stateful multi-agent workflow built with LangGraph using a Planner → Worker → Reviewer architecture. The system uses explicit shared state, conditional routing, structured reviewer decisions, feedback-driven revision, and bounded escalation after consecutive reviewer rejections.",
    image: "/images/multi-agent-langgraph.png",
    tech: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "Multi-Agent Systems",
      "StateGraph",
      "Conditional Routing",
    ],
    github:
      "https://github.com/godswillmamus54-max/agenticx-multi-agent-langgraph",
    demo: "#",
    status: "AI Agents",
  },

  {
    title: "Tool-Using Research Agent",
    description:
      "A tool-using AI research agent built to answer research questions through external search and page-fetching tools. The system tracks evidence, produces source-grounded answers with citations, enforces hard execution limits, and handles tool failures gracefully.",
    image: "/images/research-agent.png",
    tech: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "Tool Calling",
      "Web Search",
      "Source Traceability",
    ],
    github:
      "https://github.com/godswillmamus54-max/agenticx-research-agent",
    demo: "#",
    status: "AI Agents",
  },

  {
    title: "RoofLead Rescue",
    description:
      "AI-powered lead recovery system for roofing businesses that analyzes stalled opportunities, applies deterministic scoring, generates personalized follow-up strategies, and produces recovery reports for sales teams.",
    image: "/images/rooflead-rescue.png",
    tech: [
      "n8n",
      "OpenAI",
      "AI Automation",
      "Lead Recovery",
      "Google Sheets",
      "Google Drive",
      "Gmail",
    ],
    github: "#",
    demo: "#",
    status: "Business Automation",
  },

  {
    title: "AI Customer Support Triage & Escalation System",
    description:
      "AI support automation that validates and deduplicates incoming requests, analyzes category, priority and sentiment, routes tickets by urgency, escalates critical cases through Slack, and logs processed requests.",
    image: "/images/customer-support-triage.png",
    tech: [
      "n8n",
      "OpenAI",
      "AI Agents",
      "Webhooks",
      "Slack",
      "Google Sheets",
    ],
    github:
      "https://github.com/godswillmamus54-max/ai-support-triage-escalation-n8n",
    demo: "#",
    status: "AI Automation",
  },

  {
    title: "AI Lead Qualification & Routing System",
    description:
      "AI-powered sales automation that captures and validates leads, detects duplicates, scores buying intent from 0–100, classifies opportunities as Hot, Warm or Cold, alerts sales teams, and stores qualification data.",
    image: "/images/lead-qualification.png",
    tech: [
      "n8n",
      "OpenAI",
      "Webhooks",
      "Slack",
      "Google Sheets",
      "JavaScript",
    ],
    github:
      "https://github.com/godswillmamus54-max/ai-lead-qualification-routing-system",
    demo: "#",
    status: "AI Automation",
  },

  {
    title: "AI Client Onboarding & Project Setup System",
    description:
      "End-to-end client onboarding automation that validates new client requests, uses AI to assess project requirements, creates onboarding tasks and project records, organizes client data, and sends team and client notifications.",
    image: "/images/client-onboarding.png",
    tech: [
      "n8n",
      "OpenAI",
      "AI Agents",
      "Google Drive",
      "Google Sheets",
      "Gmail",
      "Slack",
    ],
    github:
      "https://github.com/godswillmamus54-max/ai-client-onboarding-project-setup-n8n",
    demo: "#",
    status: "Workflow Automation",
  },

  {
    title: "AI Content Factory",
    description:
      "AI-powered content automation system that generates articles, social media content, AI images, and publishing workflows using OpenAI and n8n.",
    image: "/images/content-factory.png",
    tech: [
      "n8n",
      "OpenAI",
      "Google Sheets",
      "Automation",
    ],
    github:
      "https://github.com/godswillmamus54-max/AI-Content-Factory",
    demo: "#",
    status: "AI Automation",
  },

  {
    title: "AI Job Application Assistant",
    description:
      "Intelligent automation that analyzes job descriptions, generates tailored resumes and cover letters, organizes application data, and streamlines the job application process.",
    image: "/images/job-assistant.png",
    tech: [
      "n8n",
      "OpenAI",
      "AI",
      "Automation",
      "APIs",
    ],
    github:
      "https://github.com/godswillmamus54-max/AI-Job-Assistant",
    demo: "#",
    status: "Automation",
  },

  {
    title: "Production n8n Server",
    description:
      "Production-ready workflow automation infrastructure deployed on AWS using Docker, Nginx, HTTPS, Cloudflare, automated backups, monitoring, and secure reverse-proxy configuration.",
    image: "/images/n8n-dashboard.png",
    tech: [
      "AWS",
      "Docker",
      "Ubuntu",
      "Nginx",
      "Cloudflare",
      "n8n",
    ],
    github:
      "https://github.com/godswillmamus54-max/godswillai-n8n-production",
    demo: "https://godswillai.dev",
    status: "Cloud & DevOps",
  },

  {
    title: "Online Banking Demo",
    description:
      "Responsive online banking interface demonstrating authentication, dashboard design, account overview, transaction presentation, and modern financial UI patterns.",
    image: "/images/banking-ui.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
    status: "Web Development",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-5xl font-bold">
            Featured{" "}
            <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            AI agents, multi-agent systems, business automation,
            workflow engineering, API integrations, and cloud
            infrastructure built around practical real-world use cases.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} architecture`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />

                {/* Status */}
                <div className="absolute right-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github !== "#" || project.demo !== "#") && (
                  <div className="mt-8 flex flex-wrap gap-6">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium text-cyan-400 transition hover:text-cyan-300"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    )}

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium text-cyan-400 transition hover:text-cyan-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}