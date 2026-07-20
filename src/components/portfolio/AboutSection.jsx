import { FlaskConical, Quote, SearchCheck, Workflow, Zap } from "lucide-react";

const capabilities = [
    {
        title: "Systematic Thinking",
        description: "Breaking complex systems into clear workflows, structures, and decisions.",
        Icon: Workflow,
        iconClassName: "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200",
    },
    {
        title: "Evidence-Based Design",
        description: "Using data, validation, and source-grounded reasoning to improve reliability.",
        Icon: SearchCheck,
        iconClassName: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
    },
    {
        title: "Fast Learning",
        description: "Learning new tools through real projects, experiments, and iteration.",
        Icon: Zap,
        iconClassName: "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
    },
    {
        title: "Self-Driven R&D",
        description: "Exploring practical AI/data ideas and turning them into usable applications.",
        Icon: FlaskConical,
        iconClassName: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-400/10 dark:text-fuchsia-200",
    },
]

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-24 bg-transparent px-4 py-16 text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-slate-950 md:text-6xl dark:text-slate-50">
                        About
                    </h2>
                    <p className="mt-3 text-xl font-semibold text-sky-700 md:text-2xl dark:text-cyan-300">
                        Practical AI systems, built with structure.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Scientific thinking, fast learning, and practical AI systems work across data, documents, and workflows.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-950/85 dark:shadow-blue-950/20">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                            Builder Profile
                        </p>
                        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                            <p>
                                I work AI-assisted: I define the problem, design the workflow and data, then direct and review the build — turning complex information into practical products across data-driven apps, document intelligence, LLM-powered workflows, and internal tooling.
                            </p>
                            <p>
                                With a background in biochemistry and bioinformatics, I bring systematic thinking, evidence-based problem solving, fast learning, and adaptability to complex systems. My focus is on the parts that decide whether a system holds up: framing the problem, structuring the data, and improving reliability through testing and iteration.
                            </p>
                        </div>
                    </article>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {capabilities.map((capability) => {
                            const CapabilityIcon = capability.Icon

                            return (
                                <article
                                    key={capability.title}
                                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-blue-950/20"
                                >
                                    <div className={`flex size-10 items-center justify-center rounded-xl ${capability.iconClassName}`}>
                                        <CapabilityIcon className="size-5" aria-hidden="true" />
                                    </div>
                                    <h3 className="mt-4 text-base font-bold text-slate-950 dark:text-slate-50">
                                        {capability.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                        {capability.description}
                                    </p>
                                </article>
                            )
                        })}
                    </div>
                </div>

                <figure className="mt-6 rounded-3xl border border-sky-200 bg-sky-50/70 p-6 shadow-sm shadow-sky-100 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:shadow-blue-950/20">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm dark:bg-slate-950 dark:text-cyan-200">
                            <Quote className="size-5" aria-hidden="true" />
                        </div>
                        <blockquote className="text-base font-medium leading-8 text-slate-800 dark:text-slate-100">
                            Great AI applications are not just smart outputs. They should not be built only to follow a trend, but to solve real workflow problems with thoughtful design and reliability that holds up beyond the demo.
                        </blockquote>
                    </div>
                </figure>
            </div>
        </section>
    )
}
