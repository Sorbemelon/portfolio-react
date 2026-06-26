import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
    return (
        <section id="project" className="flex flex-col mt-4 mb-8">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">Featured AI Application Projects</h2>
            <p className="text-center text-lg max-w-4xl mx-auto px-4 mb-12">
                A focused collection of AI/data applications and AI workflow tooling concepts built around practical workflows, reliability, and usefulness beyond demos.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-[10%] gap-12">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
}
