import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { sectionNavItems } from "./section-nav-items";

export default function SideDashNav() {
    const [activeId, setActiveId] = useState("start")

    useEffect(() => {
        const sections = sectionNavItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean)

        if (!sections.length) return undefined

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visibleEntries[0]) {
                    setActiveId(visibleEntries[0].target.id)
                }
            },
            {
                rootMargin: "-28% 0px -58% 0px",
                threshold: [0, 0.2, 0.45, 0.7],
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <nav
            aria-label="Section navigation"
            className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 min-[1400px]:block"
        >
            <div className="relative flex flex-col gap-3 px-3 py-4">
                {sectionNavItems.map((item) => {
                    const isActive = activeId === item.id

                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            aria-label={`Go to ${item.label}`}
                            aria-current={isActive ? "location" : undefined}
                            onClick={() => setActiveId(item.id)}
                            title={item.label}
                            className="group flex min-h-8 items-center gap-2 rounded-full py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                        >
                            <span
                                className={cn(
                                    "h-0.5 rounded-full transition-all duration-300",
                                    isActive
                                        ? "w-10 bg-sky-600 dark:bg-cyan-300"
                                        : "w-5 bg-slate-400 group-hover:w-8 group-hover:bg-sky-500 dark:bg-slate-600 dark:group-hover:bg-cyan-300"
                                )}
                            />
                            <span
                                className={cn(
                                    "inline-block max-w-0 -translate-x-1 overflow-hidden whitespace-nowrap text-xs font-semibold opacity-0 transition-all duration-300 group-hover:max-w-24 group-hover:translate-x-0 group-hover:opacity-100 2xl:max-w-24 2xl:translate-x-0 2xl:opacity-100",
                                    isActive
                                        ? "text-sky-700 dark:text-cyan-200"
                                        : "text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-100"
                                )}
                            >
                                {item.label}
                            </span>
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}
