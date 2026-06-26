import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const projectSections = [
    {
        group: "public",
        title: "Featured AI Applications",
        subtitle:
            "Public and active projects focused on practical AI/data workflows, source-aware outputs, and useful product experiences.",
        gridClassName: "lg:grid-cols-3",
    },
    {
        group: "internal",
        title: "Internal AI Tools",
        subtitle:
            "Private-use AI tools exploring context integrity, scope control, and safer AI-assisted work.",
        gridClassName: "lg:grid-cols-2",
    },
]

export default function ProjectGrid() {
    return (
        <section id="project" className="bg-background px-4 py-16 text-foreground transition-colors duration-300">
            <div className="mx-auto flex max-w-7xl flex-col gap-16">
                {projectSections.map((section) => {
                    const sectionProjects = projects.filter((project) => project.group === section.group)

                    return (
                        <div key={section.group}>
                            <div className="mx-auto mb-8 max-w-4xl text-center">
                                <h2 className="text-3xl font-bold text-slate-950 md:text-5xl dark:text-slate-50">
                                    {section.title}
                                </h2>
                                <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                                    {section.subtitle}
                                </p>
                            </div>
                            <div className={`grid gap-6 md:grid-cols-2 ${section.gridClassName}`}>
                                {sectionProjects.map((project) => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
