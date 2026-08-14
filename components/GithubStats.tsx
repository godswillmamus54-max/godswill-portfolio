"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type GithubProfile = {
  public_repos: number;
  followers: number;
  following: number;
};

const technologies = [
  "n8n",
  "OpenAI",
  "JavaScript",
  "Python",
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

export default function GithubStats() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/godswillmamus54-max")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load GitHub profile");
        }
        return response.json();
      })
      .then((data) => {
        setProfile({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
      })
      .catch(() => {
        setProfile(null);
      });
  }, []);

  const statistics = [
    {
      label: "Public Repositories",
      value: profile ? profile.public_repos : "—",
    },
    {
      label: "Followers",
      value: profile ? profile.followers : "—",
    },
    {
      label: "Following",
      value: profile ? profile.following : "—",
    },
  ];

  return (
    <section
      id="github"
      className="bg-[#050505] px-8 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-center text-5xl font-bold"
        >
          GitHub <span className="text-cyan-400">Activity</span>
        </motion.h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-gray-400">
          My GitHub showcases the projects, automation workflows,
          cloud deployments, and continuous learning that reflect my
          journey as an AI Automation and DevOps Engineer.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* GitHub Statistics */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <h3 className="mb-8 text-xl font-semibold text-cyan-400">
              GitHub Statistics
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {statistics.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-slate-800/70 p-5 text-center"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-sm leading-5 text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/godswillmamus54-max"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              View GitHub Profile
            </a>
          </motion.div>

          {/* Technologies */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <h3 className="mb-8 text-xl font-semibold text-cyan-400">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-600 px-4 py-2 text-sm text-gray-200 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  {technology}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm leading-6 text-gray-400">
              Tools and technologies I use to build AI automation,
              workflow systems, API integrations, cloud deployments,
              and modern web applications.
            </p>
          </motion.div>

          {/* Contribution Streak */}

          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <h3 className="mb-5 text-xl font-semibold text-cyan-400">
              Contribution Streak
            </h3>

            <img
              src="https://streak-stats.demolab.com?user=godswillmamus54-max&theme=tokyonight&hide_border=true"
              alt="GitHub contribution streak"
              className="w-full rounded-xl transition duration-500 hover:scale-[1.02]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}