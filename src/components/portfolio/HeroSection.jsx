import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import { ShineBorder } from "@/components/ui/shine-border";
import AISystemsMap from "./AISystemsMap";

const proofChips = [
    {
        label: "LLM Workflows",
        shineColor: ["#38bdf8", "#818cf8", "#a78bfa"],
    },
    {
        label: "Data-Driven Apps",
        shineColor: ["#34d399", "#0ea5e9", "#84cc16"],
    },
    {
        label: "Reliability Beyond Demo",
        shineColor: ["#fbbf24", "#f472b6", "#2dd4bf"],
    },
]

export default function HeroSection() {
    return (
        <section id="start" className="relative isolate scroll-mt-24 overflow-hidden bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_48%,#ecfeff_100%)] dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30 dark:opacity-20" />
            <Meteors
                number={10}
                minDelay={0.6}
                maxDelay={2.8}
                minDuration={7}
                maxDuration={12}
                className="max-sm:hidden bg-sky-400/25 shadow-[0_0_0_1px_rgba(14,165,233,0.12)] dark:bg-cyan-200/55"
            />

            <div className="relative z-10 mx-auto grid min-h-dvh w-full max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                <div className="max-w-3xl">
                    <p className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] text-sky-700 md:text-3xl dark:text-cyan-300">
                        Methus Klaewkla
                    </p>
                    <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                        <AuroraText>AI Application Engineer</AuroraText>
                    </h1>
                    <p className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl dark:text-slate-200">
                        Data-Driven AI Apps | Self-Driven R&D
                    </p>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Building data-driven AI apps, document intelligence tools, market monitoring systems, and AI workflow applications.
                    </p>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                        I focus on practical AI systems beyond simple demos: clear workflows, trusted data, source-grounded outputs, guardrails, and reliability that holds up in real use.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        {proofChips.map((chip) => (
                            <span
                                key={chip.label}
                                className="relative inline-flex overflow-hidden rounded-full border border-slate-200/70 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/75 dark:text-slate-200"
                            >
                                <ShineBorder borderWidth={0.5} duration={18} shineColor={chip.shineColor} />
                                <span className="relative z-10">{chip.label}</span>
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                            href="#apps"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-slate-300/60 transition hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-cyan-950/30 dark:hover:bg-emerald-300"
                        >
                            View Projects
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </a>
                        <Link
                            to="https://github.com/Sorbemelon"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/75 px-5 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:border-lime-300 hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:border-lime-300 dark:hover:text-lime-200"
                        >
                            <Github className="size-4" aria-hidden="true" />
                            GitHub
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/methus-klaewkla/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/75 px-5 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-200"
                        >
                            <Linkedin className="size-4" aria-hidden="true" />
                            LinkedIn
                        </Link>
                    </div>
                </div>

                <AISystemsMap />
            </div>
        </section>
    )
}
