import { Link } from "react-router-dom";
import { Meteors } from "@/components/ui/meteors";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShineBorder } from "@/components/ui/shine-border";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { trainingIntro, trainingItems } from "@/data/training";

const linkLabels = {
  github: "GitHub",
  live: "Live",
}

export default function Home() {
    return (
        <div>
            <section className="relative flex flex-col min-h-dvh pt-4 gap-y-4 items-center 800 text-black">
                <Meteors number={20} />
                <div className="relative z-10 w-full flex flex-col md:flex-row justify-center md:gap-12 lg:gap-20 px-4">
                    <div className="self-center">
                        <img src="/images/developer-pic-1.png" alt="Methus Klaewkla" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="md:leading-20">
                            Methus Klaewkla
                        </h1>
                        <AuroraText className="text-2xl md:text-4xl font-semibold">
                            AI Application Engineer
                        </AuroraText>
                        <p className="text-xl md:text-2xl font-semibold mt-2">
                            Data-Driven AI Apps | Self-Driven R&D
                        </p>
                        <div className="flex flex-col gap-2 max-w-150 text-lg mt-4 mb-8 *:indent-8">
                            <p>Passionate about turning complex information, documents, market signals, and workflows into practical AI applications. I focus on data-driven AI apps, document intelligence, LLM-powered workflows, and internal tooling built around clear workflows, trusted data, and usefulness beyond the demo.</p>
                            <p>With a background in biochemistry and bioinformatics, I bring systematic thinking, evidence-based problem solving, fast learning, and adaptability to complex systems. I enjoy defining the problem, designing the workflow, structuring the data, prototyping, and improving reliability through testing and iteration.</p>
                            <p>My work includes Python, SQL, APIs, databases, AWS, Git/GitHub Actions, and modern AI/data tooling. Great AI applications are not just smart outputs; they should not be built only to follow a trend, but to solve real workflow problems with thoughtful design and reliability that holds up beyond the demo.</p>
                        </div>
                        <ul className="pl-4 ml-7 mb-8 border-l-2 border-black text-xl font-semibold">
                            <li className="relative -left-12 flex mb-6 items-center">
                                <div className="rounded-full bg-white mr-2">
                                    <ShineBorder className={`w-15`} shineColor={["#8800ff", "#ff0059", "#ff8000"]} />
                                    <img src="/images/learning-icon.svg" alt="" className="w-15 p-0.5" />
                                </div>
                                Self-Driven AI R&D Builder
                            </li>
                            <li className="relative -left-12 flex my-6 items-center">
                                <div className="rounded-full bg-white mr-2">
                                    <ShineBorder className={`w-15`} shineColor={["#4904f7", "#0051ff", "#00be20"]} />
                                    <img src="/images/analytic-icon.webp" alt="" className="w-15 p-0.5" />
                                </div>
                                Data and Document Intelligence
                            </li>
                            <li className="relative -left-12 flex mt-6 items-center">
                                <div className="rounded-full bg-white mr-2">
                                    <ShineBorder className={`w-15`} shineColor={["#8af704", "#02c4ff", "#ffd000"]} />
                                    <img src="/images/problem-solving.webp" alt="" className="w-15 p-0.5" />
                                </div>
                                Systematic Reliability Mindset
                            </li>
                        </ul>
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <a href="#project">
                                <button className="px-6 py-3 text-black bg-[#CCFF00] rounded-xl shadow-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 hover:text-white hover:cursor-pointer">
                                    MY PROJECTS
                                </button>
                            </a>
                            <Link to="https://www.linkedin.com/in/methus-klaewkla/" target="_blank">
                                <button className="flex items-center w-fit px-6 py-3 text-black bg-gray-100 rounded-xl shadow-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 hover:text-white hover:cursor-pointer">
                                    <p>MORE ABOUT ME {`->`}</p>
                                    <div className="w-6 pt-1">
                                        <img src="/images/linkedin-icon.png" alt="" className="w-full mx-1" />
                                    </div>
                                </button>
                            </Link>
                            <Link to="https://github.com/Sorbemelon" target="_blank" className="flex items-center">
                                <img src="/images/github-icon.svg" alt="" className="w-15 bg-amber-200 rounded-full" />
                                <p className="text-2xl font-semibold pl-3">GitHub</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="project" className="flex flex-col mt-4 mb-8">
                <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">Featured AI Application Projects</h2>
                <p className="text-center text-lg max-w-4xl mx-auto px-4 mb-12">
                    A focused collection of AI/data applications and AI workflow tooling concepts built around practical workflows, reliability, and usefulness beyond demos.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-[10%] gap-12">
                    {projects.map((project) => {
                        const projectImage = (
                            <img
                                src={project.image}
                                alt={project.imageAlt}
                                className={project.imageClassName}
                            />
                        )
                        const projectLinks = Object.entries(project.links ?? {}).filter(([, href]) => href)

                        return (
                            <Card key={project.title} className="w-full border-none p-0 shadow-xl">
                                <MagicCard className={`h-full`}>
                                    <div>
                                        {project.links?.live ? (
                                            <Link to={project.links.live} target="_blank">
                                                {projectImage}
                                            </Link>
                                        ) : (
                                            projectImage
                                        )}
                                    </div>
                                    <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                        <CardTitle className={`text-3xl`}>{project.title}</CardTitle>
                                        <CardDescription className={`*:mr-1 *:mb-1`}>
                                            <p className="text-base font-semibold text-black mb-2">{project.subtitle}</p>
                                            <Badge className={project.statusClassName}>{project.status}</Badge>
                                            {project.tags.map((tag) => (
                                                <Badge key={tag.label} className={tag.className}>{tag.label}</Badge>
                                            ))}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        {project.description}
                                    </CardContent>
                                    {projectLinks.length > 0 && (
                                        <CardFooter className="p-4 pt-0 gap-4">
                                            {projectLinks.map(([type, href]) => (
                                                <Link key={type} to={href} target="_blank" className="font-semibold underline">
                                                    {linkLabels[type] ?? type}
                                                </Link>
                                            ))}
                                        </CardFooter>
                                    )}
                                </MagicCard>
                            </Card>
                        )
                    })}
                </div>
            </section>
            <section id="training" className="flex flex-col items-center mt-4 mb-12">
                <div className="w-full flex items-center mb-4">
                    <hr className="h-0.5 w-full md:ml-30 mr-4 bg-linear-to-r from-none to-black border-none" />
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">Training</h2>
                    <hr className="h-0.5 w-full ml-4 md:mr-30 bg-linear-to-l from-none to-black border-none" />
                </div>
                <p className="text-center text-lg max-w-3xl mx-auto px-4 mb-8">
                    {trainingIntro}
                </p>
                <div className="flex flex-col md:flex-row gap-8 px-4">
                    {trainingItems.map((item) => (
                        <div key={item.title} className="flex flex-col max-w-sm items-center text-center">
                            <img src={item.image} alt={item.imageAlt} className="w-50" />
                            <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="w-full flex mt-8">
                    <hr className="h-0.5 w-full md:ml-30 bg-linear-to-r from-none to-black border-none" />
                    <hr className="h-0.5 w-full md:mr-30 bg-linear-to-l from-none to-black border-none" />
                </div>
            </section>
        </div>
    )
}
