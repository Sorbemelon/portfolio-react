import { projects } from "@/data/projects";
import { getProjectCardId } from "./project-card-id";

const groups = [
    { key: "public", label: "Public AI Applications" },
    { key: "internal", label: "Internal AI Agents Tooling" },
]

function ProjectMark({ project }) {
    if (project.Icon) {
        const Icon = project.Icon

        return (
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-200">
                <Icon className="size-5" aria-hidden="true" />
            </span>
        )
    }

    return (
        <img
            src={project.image}
            alt={project.imageAlt}
            className="size-10 shrink-0 rounded-xl border border-slate-200 bg-white object-contain p-1.5 shadow-sm dark:border-slate-700"
        />
    )
}

function FlowText({ flow }) {
    return (
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {flow.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                    <span>{step}</span>
                    {index < flow.length - 1 && (
                        <span className="text-sky-500 dark:text-cyan-300" aria-hidden="true">→</span>
                    )}
                </span>
            ))}
        </p>
    )
}

export default function AISystemsMap() {
    return (
        <aside className="relative">
            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-4 shadow-2xl shadow-slate-200/70 backdrop-blur transition-colors duration-300 dark:border-slate-700/70 dark:bg-slate-950/75 dark:shadow-blue-950/30">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">
                            AI Application Systems Map
                        </h2>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                        LIVE / R&D
                    </span>
                </div>

                <div className="mt-4 space-y-5">
                    {groups.map((group) => (
                        <div key={group.key}>
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                                {group.label}
                            </h3>
                            <div className="space-y-3">
                                {projects
                                    .filter((project) => project.group === group.key)
                                    .map((project) => (
                                        <a
                                            href={`#${getProjectCardId(project.title)}`}
                                            aria-label={`View ${project.title} project card`}
                                            key={project.title}
                                            style={{ "--map-hover-border": project.accentColor }}
                                            className="block rounded-2xl border border-slate-200 bg-white/90 p-3 transition duration-200 hover:border-[var(--map-hover-border)] hover:shadow-md hover:shadow-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--map-hover-border)] dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-[var(--map-hover-border)] dark:hover:shadow-cyan-950/30"
                                        >
                                            <div className="flex min-w-0 gap-3">
                                                <ProjectMark project={project} />
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <h4 className="text-base font-semibold text-slate-950 dark:text-slate-50">
                                                            {project.title}
                                                        </h4>
                                                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                                            {project.statusLabel}
                                                        </span>
                                                    </div>
                                                    <FlowText flow={project.flow} />
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}
