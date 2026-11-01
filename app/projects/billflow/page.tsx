
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Business documents",
    description:
      "Create invoices, quotes and receipts with customer details, line items, quantities, tax, discounts, issue dates and due dates.",
  },
  {
    number: "02",
    title: "Payment tracking",
    description:
      "Record payments and payment history, calculate outstanding balances, and determine whether documents are unpaid, partially paid, overdue or settled.",
  },
  {
    number: "03",
    title: "Recurring invoices",
    description:
      "Generate weekly, monthly and yearly invoice occurrences when the application opens, while tracking generated documents against their source templates.",
  },
  {
    number: "04",
    title: "Customer management",
    description:
      "Build a customer list from existing documents, with document search and status filtering for easier record management.",
  },
  {
    number: "05",
    title: "Document sharing",
    description:
      "Prepare WhatsApp and email messages for manual review and sending. Documents can also be printed or saved as PDF through the browser print dialog.",
  },
  {
    number: "06",
    title: "Local backup",
    description:
      "Persist application data in browser localStorage and export or import JSON backups with structural and value validation.",
  },
];

const engineering = [
  "Validates line items, quantities, tax rates, discounts, payment amounts and document dates.",
  "Prevents initial payments from exceeding the document total and subsequent payments from exceeding the outstanding balance.",
  "Validates imported backup data before replacing existing records.",
  "Uses local calendar dates to avoid UTC date-boundary inconsistencies.",
  "Tracks recurring invoice occurrences to prevent duplicate generation.",
  "Preserves the original recurring template and its payment history when generating invoices.",
  "Restores the previous database and storage snapshot when a recurring-invoice save fails.",
  "Limits recurring catch-up processing to 24 overdue occurrences per run.",
];

const testResults = [
  ["Weekly recurrence", "Passed"],
  ["Monthly month-end handling", "Passed"],
  ["Yearly leap-day handling", "Passed"],
  ["Duplicate generation prevention", "Passed"],
  ["Due-date offset preservation", "Passed"],
  ["Invoice number uniqueness", "Passed"],
  ["Generated payment history isolation", "Passed"],
  ["Recurring template preservation", "Passed"],
  ["Save-failure rollback", "Passed"],
  ["Stop recurring invoice safeguards", "Passed"],
];

const limitations = [
  "Data is stored locally in the browser; there is no cloud database, account login or cross-device synchronisation.",
  "There is no background scheduler. Recurring invoice generation runs when the application is opened.",
  "Catch-up processing is limited to 24 overdue occurrences per run.",
  "WhatsApp and email reminders are prepared for the user to send manually.",
  "PDF output relies on the browser print dialog rather than a dedicated PDF generation library.",
  "No payment gateway, subscription billing, analytics or support backend is implemented.",
  "The application has not yet completed production-scale, cross-browser or end-to-end validation.",
];

export default function BillFlowCaseStudy() {
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
                Software Development · Case Study
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                BillFlow
                <span className="block text-cyan-400">
                  Business Invoicing Application
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                A lightweight browser-based invoicing and recurring billing
                application designed to help solo sellers and micro-businesses
                create documents, track payments and manage recurring invoices.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["JavaScript", "HTML", "CSS", "Local Storage", "PWA"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="https://github.com/godswillmamus54-max/BillFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Source Code ↗
                </a>

                <a
                  href="https://github.com/godswillmamus54-max/BillFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400"
                >
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-cyan-500/10">
                <Image
                  src="/images/billflow.png"
                  alt="BillFlow portfolio project illustration"
                  width={1200}
                  height={800}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs text-gray-500">
                Portfolio illustration, not a screenshot of the application.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
            <p className="font-semibold text-amber-300">
              Product validation build · Not production SaaS
            </p>
            <p className="mt-2 text-sm leading-7 text-gray-300">
              BillFlow is a functional browser-local application. Its core
              invoicing and recurrence workflows have undergone targeted
              validation, but production deployment and full end-to-end
              validation remain future work.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        <section>
          <SectionHeading
            eyebrow="01 · The Problem"
            title="Making everyday invoicing easier"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-semibold text-white">
                The challenge
              </h3>
              <p className="mt-4 leading-8 text-gray-400">
                Small businesses need a straightforward way to prepare
                professional business documents, monitor payments and keep
                recurring billing records organised without depending on a
                complex business management platform.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-semibold text-cyan-400">
                The approach
              </h3>
              <p className="mt-4 leading-8 text-gray-400">
                BillFlow brings document creation, payment tracking, customer
                records, recurring invoice generation and backup management
                together in a lightweight application that runs in a modern
                browser.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="02 · Product Capabilities"
            title="What BillFlow can do"
            description="The application focuses on practical invoicing workflows rather than unnecessary complexity."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-cyan-400/60"
              >
                <span className="text-sm font-bold text-cyan-400">
                  {feature.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="03 · Technical Design"
            title="A lightweight browser-based architecture"
            description="BillFlow was built without a framework dependency or external database, keeping the validation build simple to run and inspect."
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
            <div className="grid gap-4 text-center md:grid-cols-3">
              <ArchitectureBox
                title="User Interface"
                detail="HTML · CSS · JavaScript"
              />
              <ArchitectureBox
                title="Application Logic"
                detail="Document, payment and recurrence processing"
              />
              <ArchitectureBox
                title="Browser Storage"
                detail="localStorage · JSON backup"
              />
            </div>

            <div className="mt-8 border-t border-slate-800 pt-7">
              <h3 className="font-semibold text-cyan-400">
                Application flow
              </h3>
              <p className="mt-3 leading-8 text-gray-400">
                User actions are handled by the JavaScript application layer.
                Business documents and payment records are maintained in the
                local database structure, persisted through browser storage,
                and made available for export as JSON backups. When the
                application opens, the recurrence processor checks eligible
                templates and generates overdue occurrences within its
                configured catch-up limit.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="04 · Engineering"
            title="Validation, data integrity and failure handling"
            description="The recurring billing workflow required particular care to avoid duplicate documents or accidental loss of existing records."
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <ul className="space-y-5">
              {engineering.map((item) => (
                <li key={item} className="flex gap-4 leading-7 text-gray-300">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="05 · Verification"
            title="Recurrence testing results"
            description="The following results come from the dedicated recurrence and recurrence-stop test scripts. They are targeted tests, not a claim of full end-to-end application coverage."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            {testResults.map(([name, result], index) => (
              <div
                key={name}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${
                  index !== testResults.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }`}
              >
                <span className="text-sm text-gray-300">{name}</span>
                <span className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {result}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Metric value="24" label="Maximum catch-up occurrences per run" />
            <Metric value="0" label="Duplicate invoices on second test run" />
            <Metric value="9/9" label="Recurrence-stop checks passed" />
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="06 · Current Boundaries"
            title="Known limitations"
            description="These boundaries are part of the current product scope and help distinguish the validation build from a production financial application."
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <ul className="space-y-4">
              {limitations.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-gray-400">
                  <span className="text-amber-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="07 · Future Development"
            title="Potential next improvements"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Optional secure cloud storage and account-based access.",
              "Automated browser and end-to-end regression testing.",
              "Improved mobile and cross-browser validation.",
              "Dedicated PDF generation and document templates.",
              "Payment-provider integration after appropriate security and compliance review.",
              "Production deployment, monitoring and backup strategy.",
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
            Explore the project
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Built around practical business workflows.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Explore the source code and implementation details in the public
            BillFlow repository.
          </p>
          <a
            href="https://github.com/godswillmamus54-max/BillFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore BillFlow on GitHub ↗
          </a>
          <div className="mt-8">
            <Link
              href="/#projects"
              className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              ← Return to portfolio projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

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

function ArchitectureBox({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-400/20 bg-slate-950 p-6">
      <h3 className="font-semibold text-cyan-400">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-400">{detail}</p>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
      <p className="text-3xl font-bold text-cyan-400">{value}</p>
      <p className="mt-2 text-sm leading-6 text-gray-400">{label}</p>
    </div>
  );
}
