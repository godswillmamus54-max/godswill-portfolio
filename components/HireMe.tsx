"use client";

const services = [
  {
    title: "AI Agents & Agentic Workflows",
    description:
      "Build AI agents that process information, use tools, follow structured workflows, and automate business actions with controlled execution.",
  },
  {
    title: "Multi-Agent Systems",
    description:
      "Design multi-agent workflows with specialized roles, shared state, conditional routing, reviewer feedback, bounded retries, and escalation paths.",
  },
  {
    title: "n8n Workflow Automation",
    description:
      "Design, build, debug, and optimize reliable n8n workflows that eliminate repetitive business processes and connect business tools.",
  },
  {
    title: "API & Webhook Integration",
    description:
      "Connect business applications, REST APIs, webhooks, databases, and AI services into reliable automated systems.",
  },
  {
    title: "Business Process Automation",
    description:
      "Turn repetitive tasks such as lead handling, customer support, onboarding, reporting, notifications, and data processing into automated workflows.",
  },
  {
    title: "Workflow Debugging & Optimization",
    description:
      "Diagnose broken workflows, API failures, data-flow issues, mapping problems, and unreliable automation to improve system reliability.",
  },
];

const technologies = [
  "LangGraph",
  "LangChain",
  "AI Agents",
  "Multi-Agent Systems",
  "Model Context Protocol (MCP)",
  "OpenAI",
  "n8n",
  "Python",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "Webhooks",
  "Docker",
  "AWS",
  "Ubuntu",
  "GitHub",
];

const projects = [
  {
    title: "Multi-Agent Workflow with LangGraph",
    description:
      "Stateful multi-agent workflow using Planner, Worker, and Reviewer roles with explicit shared state, conditional routing, structured review decisions, bounded retries, and escalation.",
  },
  {
    title: "Tool-Using Research Agent",
    description:
      "AI research agent that uses external search and page-fetching tools, tracks evidence, produces source-grounded answers, enforces execution limits, and handles tool failures.",
  },
  {
    title: "RoofLead Rescue",
    description:
      "AI-powered lead recovery system that analyzes stalled opportunities, applies deterministic scoring, generates personalized follow-up strategies, and produces recovery reports for sales teams.",
  },
  {
    title: "AI Customer Support Triage & Escalation",
    description:
      "AI support automation that validates and deduplicates requests, analyzes category, priority and sentiment, routes tickets by urgency, and escalates critical cases.",
  },
  {
    title: "AI Lead Qualification & Routing",
    description:
      "AI-powered sales automation that captures and validates leads, detects duplicates, scores buying intent, classifies opportunities, alerts sales teams, and stores qualification data.",
  },
  {
    title: "AI Client Onboarding & Project Setup",
    description:
      "End-to-end onboarding automation that validates client requests, assesses project requirements, creates project records and tasks, organizes data, and sends notifications.",
  },
];

export default function HireMe() {
  return (
    <section
      id="hire-me"
      className="bg-[#050505] px-6 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Work With Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            AI Automation &amp; AI Agents Engineer
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I build AI agents, multi-agent workflows, and business automations
            that eliminate repetitive work, connect your tools, and turn manual
            processes into reliable systems.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
            From agent orchestration and workflow automation to API
            integrations and production infrastructure, I build practical
            systems designed around real business processes.
          </p>
        </div>

        {/* Services */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Proof of Work */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Proof of Work
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              AI Agents &amp; Automation Systems
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Practical AI and automation systems designed and built around
              real-world workflows, business processes, and agentic use cases.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <h4 className="text-xl font-semibold text-white">
                  {project.title}
                </h4>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mx-auto mt-24 max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Stack
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            Tools I Work With
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-4xl rounded-3xl border border-cyan-400/30 bg-slate-900 px-8 py-12 text-center shadow-xl shadow-cyan-500/5 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Let&apos;s Build Something Useful
          </p>

          <h3 className="mt-3 text-3xl font-bold md:text-4xl">
            Looking for an AI Automation Engineer?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            I build reliable AI agents, multi-agent workflows, API
            integrations, and business automation systems that reduce manual
            work and improve operations.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              View My Work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}