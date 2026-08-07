"use client";

import { motion } from "framer-motion";

export default function GithubStats() {
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

          {/* Stats */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <h3 className="mb-5 text-xl font-semibold text-cyan-400">
              GitHub Statistics
            </h3>

            <img
              src="https://github-readme-stats-sigma-five.vercel.app/api?username=godswillmamus54-max&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub Stats"
              className="w-full rounded-xl transition duration-500 hover:scale-[1.02]"
            />

          </motion.div>

          {/* Languages */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <h3 className="mb-5 text-xl font-semibold text-cyan-400">
              Most Used Technologies
            </h3>

            <img
              src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=godswillmamus54-max&layout=compact&theme=tokyonight&hide_border=true"
              alt="Top Languages"
              className="w-full rounded-xl transition duration-500 hover:scale-[1.02]"
            />

          </motion.div>

          {/* Streak */}

          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <h3 className="mb-5 text-xl font-semibold text-cyan-400">
              Contribution Streak
            </h3>

            <img
              src="https://streak-stats.demolab.com?user=godswillmamus54-max&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              className="w-full rounded-xl transition duration-500 hover:scale-[1.02]"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}