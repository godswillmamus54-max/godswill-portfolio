"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    title: "AI Automation Engineer",
    company: "Independent Projects",
    description:
      "Designed and deployed production-grade automation systems using n8n, Docker, AWS, APIs and AI integrations.",
  },

  {
    year: "2026",
    title: "Production n8n Infrastructure",
    company: "AWS Cloud",
    description:
      "Built a production-ready n8n environment with Docker Compose, Nginx reverse proxy, HTTPS, Cloudflare DNS, automated backups and monitoring.",
  },

  {
    year: "2026",
    title: "AI Workflow Development",
    company: "Portfolio Projects",
    description:
      "Created AI content automation, job application assistants, API integrations, research agents and business workflow automations.",
  },

  {
    year: "Now",
    title: "Continuous Learning",
    company: "AI • Cloud • DevOps",
    description:
      "Expanding expertise in cloud engineering, AI systems, automation architecture and scalable software solutions.",
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
          transition={{ duration: .7 }}
          className="mb-20 text-center text-5xl font-bold"
        >
          My <span className="text-cyan-400">Journey</span>
        </motion.h2>

        <div className="relative border-l border-cyan-500">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
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