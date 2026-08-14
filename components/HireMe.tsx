"use client";

const services = [
  {
    title: "n8n Workflow Automation",
    description:
      "Design, build, debug, and optimize reliable n8n workflows that eliminate repetitive business processes.",
  },
  {
    title: "AI Agents & OpenAI",
    description:
      "Build AI-powered workflows and agents that process information, use tools, and automate business actions.",
  },
  {
    title: "API & Webhook Integration",
    description:
      "Connect business applications, APIs, webhooks, databases, and AI services into reliable automated systems.",
  },
  {
    title: "Business Process Automation",
    description:
      "Turn repetitive tasks such as lead handling, reporting, notifications, and data processing into automated workflows.",
  },
  {
    title: "AI Content Automation",
    description:
      "Build automated pipelines for AI-generated text, images, video, and content publishing.",
  },
  {
    title: "Workflow Debugging & Optimization",
    description:
      "Diagnose broken workflows, API failures, data-flow issues, mapping problems, and unreliable automation.",
  },
];

const technologies = [
  "n8n",
  "OpenAI",
  "Python",
  "JavaScript",
  "Node.js",
  "REST APIs",
  "Webhooks",
  "Docker",
  "AWS",
  "Ubuntu",
  "React",
  "Next.js",
  "GitHub",
];

const projects = [
  {
    title: "AI Job Application Assistant",
    description:
      "Automated job discovery, AI job analysis, tailored resume and cover-letter generation, application tracking, and email notifications.",
  },
  {
    title: "AI Content Factory",
    description:
      "AI-powered content production and publishing using n8n, OpenAI, Docker, APIs, and automated image and video generation.",
  },
  {
    title: "AI Daily Briefing Assistant",
    description:
      "Scheduled AI reporting workflow combining multiple APIs, AI processing, Google Sheets, and automated notifications.",
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
            AI Automation Engineer
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I build AI-powered business automations that eliminate repetitive
            work, connect your tools, and turn manual processes into reliable
            workflows.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
            From workflow design and AI agents to API integrations and
            automation debugging, I help turn manual processes into systems
            that work for you.
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
              Real Automation Projects
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Examples of AI and automation systems I have designed and built.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
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
            I build reliable AI workflows, API integrations, and automation
            systems that reduce manual work and improve business operations.
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