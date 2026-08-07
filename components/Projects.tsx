"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Production n8n Server",
    description:
      "Production-ready n8n deployment on AWS using Docker Compose, Nginx, HTTPS, automated backups, Cloudflare and a custom domain.",
    image: "/images/n8n-dashboard.png",
    tech: ["AWS", "Docker", "Nginx", "Cloudflare", "n8n", "Ubuntu"],
    github:
      "https://github.com/godswillmamus54-max/godswillai-n8n-production",
    demo: "https://godswillai.dev",
  },
  {
    title: "AI Content Factory",
    description:
      "AI workflow system that generates social media content, images and automates publishing using n8n and OpenAI.",
    image: "/images/content-factory.png",
    tech: ["n8n", "OpenAI", "Google Sheets", "Automation"],
    github:
      "https://github.com/godswillmamus54-max/AI-Content-Factory",
    demo: "#",
  },
  {
    title: "AI Job Application Assistant",
    description:
      "AI-powered workflow that analyzes job descriptions, generates tailored applications and automates job submissions.",
    image: "/images/job-assistant.png",
    tech: ["AI", "n8n", "OpenAI", "Automation"],
    github: "#",
    demo: "#",
  },
  {
    title: "Online Banking Demo",
    description:
      "Modern online banking interface demonstrating secure authentication, dashboard design and responsive UI.",
    image: "/images/banking-ui.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern responsive portfolio showcasing AI automation projects, DevOps skills, cloud engineering experience and professional branding.",
    image: "/images/portfolio.png",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    github:
      "https://github.com/godswillmamus54-max/godswill-portfolio",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>

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

                <div className="mt-8 flex gap-6">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}