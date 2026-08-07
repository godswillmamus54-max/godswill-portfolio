"use client";

import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <section
      id="github"
      className="bg-slate-950 px-8 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center text-5xl font-bold"
        >
          GitHub <span className="text-cyan-400">Activity</span>
        </motion.h2>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* GitHub Stats */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <img
              src="https://github-readme-stats-sigma-five.vercel.app/api?username=godswillmamus54-max&show_icons=true&theme=tokyonight"
              alt="GitHub Stats"
              className="w-full rounded-xl"
            />

          </div>

          {/* Top Languages */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <img
              src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=godswillmamus54-max&layout=compact&theme=tokyonight"
              alt="Top Languages"
              className="w-full rounded-xl"
            />

          </div>

          {/* GitHub Streak */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <img
              src="https://streak-stats.demolab.com?user=godswillmamus54-max&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              className="w-full rounded-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}