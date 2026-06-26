import { Github, Linkedin } from "lucide-react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const externalLinks = [
    {
        href: "https://github.com/Sorbemelon",
        label: "GitHub",
        Icon: Github,
        className: "hover:border-lime-300 hover:text-lime-700 dark:hover:border-lime-300 dark:hover:text-lime-200",
    },
    {
        href: "https://www.linkedin.com/in/methus-klaewkla/",
        label: "LinkedIn",
        Icon: Linkedin,
        className: "hidden sm:inline-flex hover:border-sky-300 hover:text-sky-700 dark:hover:border-cyan-400 dark:hover:text-cyan-200",
    },
]

export default function TopNav() {
    return (
        <nav
            aria-label="Primary navigation"
            className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/75 text-slate-900 shadow-sm shadow-slate-200/40 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/70 dark:text-slate-100 dark:shadow-blue-950/20"
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                <a
                    href="#start"
                    className="shrink-0 text-xl font-bold tracking-tight text-slate-950 transition hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 sm:text-2xl dark:text-slate-50 dark:hover:text-cyan-200"
                >
                    Methus <span className="hidden sm:inline">Klaewkla</span>
                </a>

                <div className="flex items-center gap-2">
                    {externalLinks.map((link) => {
                        const LinkIcon = link.Icon

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={link.label}
                                className={`inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 ${link.className}`}
                            >
                                <LinkIcon className="size-4" aria-hidden="true" />
                            </a>
                        )
                    })}
                    <AnimatedThemeToggler
                        aria-label="Toggle light and dark theme"
                        className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-200"
                    />
                </div>
            </div>
        </nav>
    )
}
