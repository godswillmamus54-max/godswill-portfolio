"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI & Automation",
    skills: [
      "n8n",
      "AI Agents",
      "OpenAI API",
      "Workflow Automation",
      "Prompt Engineering",
      "Webhooks",
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Nginx",
      "Linux",
      "Ubuntu",
      "Cloudflare",
    ],
  },

  {
    title: "Programming",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Node.js",
      "React",
      "Next.js",
    ],
  },

  {
    title: "Databases",
    skills: [
      "SQLite",
      "PostgreSQL",
      "MySQL",
      "Google Sheets",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "PowerShell",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-8 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Technical <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillGroups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500"
            >

              <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}