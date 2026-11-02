
import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Multi-timeframe analysis",
    description:
      "Uses H4 market context, M15 structure analysis and M1 execution to organise the trading decision process.",
  },
  {
    number: "02",
    title: "Market structure detection",
    description:
      "Implements liquidity sweep, break of structure, breaker-block identification and retest-based entry logic.",
  },
  {
    number: "03",
    title: "MT5 execution bridge",
    description:
      "Connects the Python trading engine to MetaTrader 5 through a dedicated FastAPI bridge and authenticated REST endpoints.",
  },
  {
    number: "04",
    title: "Position management",
    description:
      "Supports position inspection, modification and closure, with ownership checks and trade reconciliation.",
  },
  {
    number: "05",
    title: "Order validation",
    description:
      "Includes symbol checks, volume and margin preflight, stop-loss and take-profit validation, and order idempotency safeguards.",
  },
  {
    number: "06",
    title: "Configurable risk controls",
    description:
      "Centralises execution and risk settings, including configured per-trade risk and a daily loss threshold.",
  },
];

const architecture = [
  {
    title: "Market context",
    timeframe: "H4",
    description: "Higher-timeframe directional context.",
  },
  {
    title: "Structure analysis",
    timeframe: "M15",
    description: "Setup formation and market structure.",
  },
  {
    title: "Trade execution",
    timeframe: "M1",
    description: "Entry confirmation and execution.",
  },
];

const safetyFeatures = [
  "Demo-account guard based on the MetaTrader 5 account trade mode.",
  "Checks for terminal trading permission and expert-advisor trading permission.",
  "API-key authentication for the bridge.",
  "Bridge binds to loopback address 127.0.0.1 by default.",
  "State-changing endpoints include execution safeguards.",
  "Additional trade-permission checks immediately before order submission.",
  "Position modification and closure include ownership checks.",
  "Magic number 260927 identifies the system's managed trades.",
  "Order validation includes stop-loss, take-profit, margin and volume checks.",
  "Idempotency and reconciliation safeguards help prevent duplicate or inconsistent execution.",
];

const tests = [
  {
    name: "Offline source and structure tests",
    result: "7 of 7 passed",
  },
  {
    name: "Python compileall validation",
    result: "Passed",
  },
  {
    name: "Bridge security structure",
    result: "Validated offline",
  },
  {
    name: "Demo-account runtime validation",
    result: "Pending",
  },
  {
    name: "Broker execution validation",
    result: "Pending",
  },
  {
    name: "Profitability and forward testing",
    result: "Not established",
  },
];

const endpoints = [
  ["/health", "Bridge health"],
  ["/account", "Account information"],
  ["/symbols", "Available trading symbols"],
  ["/market", "Market information"],
  ["/positions", "Open positions"],
  ["/order", "Order submission"],
  ["/position/modify", "Position modification"],
  ["/position/close", "Position closure"],
];

const limitations = [
  "The package has not yet completed broker-connected runtime validation.",
  "The offline tests do not establish profitability, trading accuracy or execution reliability under live market conditions.",
  "MetaTrader 5 terminal availability and broker connectivity are required for actual operation.",
  "The bridge and engine require correct local environment configuration and API-key setup.",
  "The current configured risk settings are aggressive and require review before any trading operation.",
  "The system has not been independently audited or validated for production financial deployment.",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-3xl leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
      <p className="text-3xl font-bold text-cyan-400">{value}</p>
      <p className="mt-2 text-sm leading-6 text-gray-400">{label}</p>
    </div>
  );
}

export default function MT5TradingAgentCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to projects
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Algorithmic Trading · Case Study
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                MT5 XAUUSD
                <span className="block text-cyan-400">
                  Automated Trading Agent
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                A Python-based algorithmic trading system designed around
                multi-timeframe market analysis, structured entry conditions,
                a secured MetaTrader 5 bridge and configurable execution
                safeguards.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Python",
                  "MetaTrader 5",
                  "FastAPI",
                  "REST API",
                  "Risk Management",
                  "Algorithmic Trading",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <span className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-gray-300">
                  Private Repository
                </span>
                <Link
                  href="/#projects"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400"
                >
                  Return to portfolio
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-cyan-500/10">
                <Image
                  src="/images/mt5-trading-agent.png"
                  alt="MT5 XAUUSD trading agent portfolio illustration"
                  width={1200}
                  height={800}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs text-gray-500">
                Portfolio illustration, not a live trading terminal screenshot.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
            <p className="font-semibold text-amber-300">
              Packaged · Offline validation completed · Broker runtime validation pending
            </p>
            <p className="mt-2 text-sm leading-7 text-gray-300">
              The project has been packaged and published to a private
              repository. Its offline source and structure tests have passed.
              This does not establish live broker compatibility, profitability
              or production trading readiness.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        <section>
          <SectionHeading
            eyebrow="01 · Project Overview"
            title="A structured approach to automated trading"
            description="The system was developed to organise market analysis, entry conditions, execution and position management into a coordinated Python-based trading workflow."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-semibold">The objective</h3>
              <p className="mt-4 leading-8 text-gray-400">
                Build an automated XAUUSD trading system that evaluates
                higher-timeframe context, identifies market structure
                opportunities and applies defined execution rules through
                MetaTrader 5.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-semibold text-cyan-400">
                The engineering approach
              </h3>
              <p className="mt-4 leading-8 text-gray-400">
                Separate strategy logic, risk configuration, execution
                handling and broker communication into distinct components,
                with safeguards around state-changing trading operations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="02 · System Architecture"
            title="H4 context → M15 structure → M1 execution"
            description="The trading workflow uses three timeframes for different responsibilities."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {architecture.map((item, index) => (
              <article
                key={item.timeframe}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  STAGE 0{index + 1}
                </p>
                <p className="mt-4 text-4xl font-bold">{item.timeframe}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="font-semibold text-cyan-400">Strategy pipeline</h3>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                "Liquidity Sweep",
                "Break of Structure",
                "Breaker Block",
                "Retest",
                "Order",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-300">
                    {step}
                  </span>
                  {index !== 4 && (
                    <span className="text-gray-500">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-400">
              This represents the documented strategy sequence. Actual
              execution depends on the engine's configured conditions and
              runtime environment.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="03 · Capabilities"
            title="Core system components"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-cyan-400/60"
              >
                <span className="text-sm font-bold text-cyan-400">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="04 · Bridge API"
            title="Communication with MetaTrader 5"
            description="The FastAPI bridge provides a defined interface between the Python engine and the MT5 terminal."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            {endpoints.map(([path, purpose], index) => (
              <div
                key={path}
                className={`grid gap-2 px-6 py-4 md:grid-cols-2 ${
                  index !== endpoints.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }`}
              >
                <code className="text-sm text-cyan-300">{path}</code>
                <span className="text-sm text-gray-400">{purpose}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-500">
            These are the documented bridge routes in the packaged project.
            Their listing does not imply that a broker-connected service is
            currently running.
          </p>
        </section>

        <section>
          <SectionHeading
            eyebrow="05 · Security and Execution Safeguards"
            title="Protecting state-changing operations"
            description="Trading systems need safeguards at the boundary between strategy decisions and broker execution."
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <ul className="space-y-5">
              {safetyFeatures.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 leading-7 text-gray-300"
                >
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="06 · Risk Configuration"
            title="Explicit risk settings"
            description="The packaged configuration contains the following settings. They are not a recommendation for trading."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Metric value="10%" label="Configured risk per trade" />
            <Metric value="20%" label="Configured maximum daily loss" />
          </div>

          <div className="mt-6 rounded-xl border border-red-400/30 bg-red-400/5 p-6">
            <p className="font-semibold text-red-300">
              High-risk configuration warning
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              A configured risk of 10% per trade and a 20% daily loss limit
              are aggressive settings. They can expose an account to
              substantial losses. Review and reduce risk settings before
              any broker-connected testing. Offline code tests do not
              validate actual position sizing or realised account risk.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="07 · Verification"
            title="What has been validated"
            description="The following reflects the actual packaging and offline verification evidence."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            {tests.map((item, index) => {
              const passed = item.result.includes("passed") ||
                item.result === "Passed" ||
                item.result === "Validated offline";

              return (
                <div
                  key={item.name}
                  className={`flex flex-col justify-between gap-3 px-6 py-5 sm:flex-row sm:items-center ${
                    index !== tests.length - 1
                      ? "border-b border-slate-800"
                      : ""
                  }`}
                >
                  <span className="text-sm text-gray-300">
                    {item.name}
                  </span>
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      passed
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    {item.result}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Metric value="7/7" label="Offline source and structure tests passed" />
            <Metric value="100%" label="Python compilation completed successfully" />
            <Metric value="Pending" label="Broker runtime validation" />
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="08 · Deployment"
            title="What runtime operation requires"
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <ul className="space-y-4 text-sm leading-7 text-gray-400">
              {[
                "A compatible Windows environment and installed MetaTrader 5 terminal.",
                "A broker account in demo mode for initial validation.",
                "Python dependencies installed from the supplied requirements file.",
                "A configured MT5 terminal path where required.",
                "A securely supplied bridge API key and environment configuration.",
                "The bridge and engine started in the documented order.",
                "Runtime checks of account mode, permissions, symbol availability and broker execution responses.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="09 · Current Limitations"
            title="What remains to be proven"
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <ul className="space-y-4">
              {limitations.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-gray-400"
                >
                  <span className="text-amber-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="10 · Future Development"
            title="Next engineering milestones"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Complete controlled demo-account bridge validation.",
              "Verify symbol mapping, broker volume constraints and execution responses.",
              "Review and reduce risk settings before any execution tests.",
              "Add integration and regression tests against a controlled demo environment.",
              "Improve monitoring, structured logs and operational recovery.",
              "Evaluate forward-testing evidence before making performance claims.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-gray-300"
              >
                <span className="mr-3 text-cyan-400">→</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Project summary
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Engineering a structured automated trading workflow.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            The project demonstrates Python system design, multi-timeframe
            strategy implementation, API integration, execution safeguards
            and offline validation. Broker runtime validation remains the
            next major milestone.
          </p>
          <div className="mt-8">
            <Link
              href="/#projects"
              className="inline-flex rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Return to portfolio projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
