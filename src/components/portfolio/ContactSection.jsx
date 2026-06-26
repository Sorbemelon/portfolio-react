import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const contactLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Sorbemelon",
        Icon: Github,
        className:
            "border-slate-200 bg-white text-slate-800 hover:border-lime-300 hover:text-lime-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-lime-300 dark:hover:text-lime-200",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/methus-klaewkla/",
        Icon: Linkedin,
        className:
            "border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-200",
    },
]

export default function ContactSection() {
    return (
        <section id="contact" className="scroll-mt-24 bg-background px-4 pb-8 pt-10 text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-center shadow-lg shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-950/85 dark:shadow-blue-950/20 md:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Contact
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl dark:text-slate-50">
                        Let's connect
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg md:leading-8">
                        Interested in AI applications, data-driven tools, document intelligence, or practical AI workflow systems? I'm open to relevant opportunities, collaboration, and thoughtful technical conversations.
                    </p>

                    <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                        {contactLinks.map((link) => {
                            const ContactIcon = link.Icon

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-base font-semibold shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${link.className}`}
                                >
                                    <ContactIcon className="size-4" aria-hidden="true" />
                                    {link.label}
                                    <ArrowUpRight className="size-4" aria-hidden="true" />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <footer className="py-6 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
                    <p>Built with React, Vite, Tailwind CSS, and self-driven R&D.</p>
                    <p className="mt-1">AI applications beyond demos: clear workflows, trusted data, and reliability.</p>
                </footer>
            </div>
        </section>
    )
}
