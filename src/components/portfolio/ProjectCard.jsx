import { ArrowUpRight, CheckCircle2, Github, GitBranch, PencilRuler } from "lucide-react";

import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getProjectCardId } from "./project-card-id";

const linkLabels = {
  live: "Live",
  github: "GitHub",
}

const linkIcons = {
  live: ArrowUpRight,
  github: Github,
}

const linkOrder = ["live", "github"]

const statusClassNames = {
  "Live Public Project":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
  "Live Demo / Public Project":
    "bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200",
  "Internal":
    "bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-200",
}

function ProjectVisual({ project, isInternal }) {
    if (isInternal) {
        const Icon = project.Icon ?? GitBranch

        return (
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-cyan-200 dark:ring-slate-700">
                <Icon className="size-7" aria-hidden="true" />
            </div>
        )
    }

    return (
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2 ring-1 ring-slate-200 shadow-sm dark:ring-slate-700">
            <img src={project.image} alt={project.imageAlt} className="max-h-full max-w-full object-contain" />
        </div>
    )
}

export default function ProjectCard({ project }) {
    const isInternal = project.group === "internal"
    const projectLinks = linkOrder
        .map((type) => [type, project.links?.[type]])
        .filter(([, href]) => href)
    const accentColor = project.accentColor ?? "#38bdf8"

    return (
        <article
            id={getProjectCardId(project.title)}
            style={{ "--project-accent": accentColor }}
            className="group h-full scroll-mt-24 rounded-3xl transition duration-300 hover:-translate-y-1"
        >
            <MagicCard
                className="h-full rounded-3xl"
                gradientFrom="var(--project-accent)"
                gradientTo="rgba(148, 163, 184, 0.45)"
                gradientColor="var(--project-accent)"
                gradientOpacity={0.08}
            >
                <div
                    className={cn(
                        "relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-lg shadow-slate-200/70 transition duration-300 group-hover:border-[var(--project-accent)] group-hover:shadow-xl group-hover:shadow-slate-200 dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-blue-950/20 dark:group-hover:border-[var(--project-accent)] dark:group-hover:shadow-blue-950/30",
                        isInternal ? "gap-4" : "gap-5"
                    )}
                >
                    <header className="flex items-start justify-between gap-4">
                        <ProjectVisual project={project} isInternal={isInternal} />
                        <Badge
                            className={cn(
                                "border-transparent px-3 py-1 text-xs font-semibold",
                                statusClassNames[project.status] ?? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                            )}
                        >
                            {project.status}
                        </Badge>
                    </header>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                            {project.subtitle}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-slate-50">
                            {project.title}
                        </h3>
                        {project.role && (
                            <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                                <PencilRuler className="size-3.5 shrink-0" aria-hidden="true" />
                                {project.role}
                            </p>
                        )}
                        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                            {project.description}
                        </p>
                    </div>

                    <ul className="grid gap-2 text-sm text-slate-700 dark:text-slate-300">
                        {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--project-accent)]" aria-hidden="true" />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                        {project.tags.map((tag) => (
                            <Badge
                                key={tag.label}
                                variant="outline"
                                className="border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                            >
                                {tag.label}
                            </Badge>
                        ))}
                    </div>

                    {projectLinks.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-1">
                            {projectLinks.map(([type, href]) => {
                                const Icon = linkIcons[type] ?? ArrowUpRight

                                return (
                                    <a
                                        key={type}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cn(
                                            "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--project-accent)]",
                                            type === "live"
                                                ? "bg-slate-950 text-white hover:bg-[var(--project-accent)] dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-[var(--project-accent)]"
                                                : "border border-slate-200 bg-white text-slate-800 hover:border-[var(--project-accent)] hover:text-[var(--project-accent)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[var(--project-accent)] dark:hover:text-[var(--project-accent)]"
                                        )}
                                    >
                                        <Icon className="size-4" aria-hidden="true" />
                                        {linkLabels[type] ?? type}
                                    </a>
                                )
                            })}
                        </div>
                    )}
                </div>
            </MagicCard>
        </article>
    )
}
