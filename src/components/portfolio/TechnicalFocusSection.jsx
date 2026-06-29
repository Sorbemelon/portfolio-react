import {
    Bot,
    Cable,
    ChartNoAxesCombined,
    CloudCog,
    SearchCheck,
    ShieldCheck,
} from "lucide-react";

const focusItems = [
    {
        title: "LLM Applications",
        description:
            "Building practical LLM-powered workflows with structured inputs, outputs, and validation.",
        Icon: Bot,
        iconClassName: "bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200",
    },
    {
        title: "RAG & Semantic Search",
        description:
            "Designing retrieval and source-grounded answer flows for document and knowledge workflows.",
        Icon: SearchCheck,
        iconClassName: "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-200",
    },
    {
        title: "Data-Driven Apps",
        description:
            "Turning datasets, signals, and structured information into useful application workflows.",
        Icon: ChartNoAxesCombined,
        iconClassName: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
    },
    {
        title: "APIs & Databases",
        description:
            "Connecting AI features with application backends, databases, and real workflow data.",
        Icon: Cable,
        iconClassName: "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200",
    },
    {
        title: "Cloud Deployment",
        description:
            "Deploying practical AI/data apps with cloud services, storage, and production-aware infrastructure.",
        Icon: CloudCog,
        iconClassName: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200",
    },
    {
        title: "AI Workflow Reliability",
        description:
            "Improving AI applications with guardrails, evaluation thinking, source references, and iteration.",
        Icon: ShieldCheck,
        iconClassName: "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
    },
]

export default function TechnicalFocusSection() {
    return (
        <section id="focus" className="scroll-mt-24 bg-transparent px-4 py-16 text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-slate-950 md:text-5xl dark:text-slate-50">
                        Technical Focus
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Areas I focus on when building practical AI applications, data-driven tools, and reliable AI workflows.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {focusItems.map((item) => {
                        const FocusIcon = item.Icon

                        return (
                            <article
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm shadow-slate-200/60 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-950/75 dark:shadow-blue-950/20 dark:hover:border-slate-700 dark:hover:shadow-blue-950/30"
                            >
                                <div className={`flex size-11 items-center justify-center rounded-xl ${item.iconClassName}`}>
                                    <FocusIcon className="size-5" aria-hidden="true" />
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-slate-50">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                    {item.description}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
