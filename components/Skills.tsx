"use client";

import { motion } from "framer-motion";

import {
  SiN8N,
  SiOpenai,
  SiDocker,
  SiAmazonwebservices,
  SiLinux,
  SiCloudflare,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import {
  FaGitAlt,
  FaTerminal,
  FaCode,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "AI & Automation",
    skills: [
      { name: "n8n", icon: <SiN8N /> },
      { name: "AI Agents", icon: <SiOpenai /> },
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "Workflow Automation", icon: <FaCode /> },
      { name: "Prompt Engineering", icon: <FaCode /> },
      { name: "Webhooks", icon: <FaTerminal /> },
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Nginx", icon: <FaTerminal /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Ubuntu", icon: <SiLinux /> },
      { name: "Cloudflare", icon: <SiCloudflare /> },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Google Sheets", icon: <FaCode /> },
    ],
  },

  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "PowerShell", icon: <FaTerminal /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
            >

              <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                {group.title}
              </h3>

              <div className="grid gap-4">

                {group.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700"
                  >

                    <div className="text-2xl text-cyan-400">
                      {skill.icon}
                    </div>

                    <span className="font-medium text-gray-300">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}