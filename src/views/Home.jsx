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
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://bytesiren.pages.dev" target="_blank">
                                    <img src="/images/bytesiren_logo.png" alt="ByteSiren logo" className="h-48 w-full object-contain bg-white p-6 rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>ByteSiren</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                    <p className="text-base font-semibold text-black mb-2">AI Crypto Market Monitoring</p>
                                    <Badge className={`bg-emerald-700`}>Live Public Project</Badge>
                                    <Badge className={`bg-gray-800`}>Next.js</Badge>
                                    <Badge className={`bg-sky-700`}>TypeScript</Badge>
                                    <Badge className={`bg-orange-600`}>Cloudflare Workers</Badge>
                                    <Badge className={`bg-yellow-700`}>Cloudflare D1</Badge>
                                    <Badge className={`bg-amber-600`}>Binance API</Badge>
                                    <Badge className={`bg-purple-600`}>Claude</Badge>
                                    <Badge className={`bg-neutral-700`}>GitHub Actions</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                A public AI-assisted crypto market monitoring app that combines deterministic signal detection, Binance public market data, Cloudflare infrastructure, and optional Claude context. Built to show bounded AI enrichment, source-aware market context, and production-safe public deployment.
                            </CardContent>
                            <CardFooter className="p-4 pt-0 gap-4">
                                <Link to="https://github.com/Sorbemelon/ByteSiren" target="_blank" className="font-semibold underline">
                                    GitHub
                                </Link>
                                <Link to="https://bytesiren.pages.dev" target="_blank" className="font-semibold underline">
                                    Live
                                </Link>
                            </CardFooter>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://centraldocsai.vercel.app" target="_blank">
                                    <img src="/images/centraldocs_logo.png" alt="CentralDocs logo" className="h-48 w-full object-contain bg-white p-6 rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>CentralDocs</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                    <p className="text-base font-semibold text-black mb-2">AI Document Workspace</p>
                                    <Badge className={`bg-emerald-700`}>Live Demo / Public Project</Badge>
                                    <Badge className={`bg-sky-500`}>React</Badge>
                                    <Badge className={`bg-lime-600`}>Node.js</Badge>
                                    <Badge className={`bg-gray-700`}>Express</Badge>
                                    <Badge className={`bg-green-700`}>MongoDB</Badge>
                                    <Badge className={`bg-indigo-700`}>Vector Search</Badge>
                                    <Badge className={`bg-orange-500`}>AWS S3</Badge>
                                    <Badge className={`bg-purple-500`}>Gemini</Badge>
                                    <Badge className={`bg-black`}>Vercel</Badge>
                                    <Badge className={`bg-blue-700`}>Render</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                An AI-powered document workspace for managing documents, semantic search, selected-document chat, source-grounded answers, and generated downloadable documents. Designed as a practical document intelligence app beyond a basic PDF chatbot.
                            </CardContent>
                            <CardFooter className="p-4 pt-0 gap-4">
                                <Link to="https://github.com/Sorbemelon/CentralDocs" target="_blank" className="font-semibold underline">
                                    GitHub
                                </Link>
                                <Link to="https://centraldocsai.vercel.app" target="_blank" className="font-semibold underline">
                                    Live
                                </Link>
                            </CardFooter>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://meshflow-app.vercel.app" target="_blank">
                                    <img src="/images/meshflow_logo.png" alt="MeshFlow logo" className="h-48 w-full object-contain bg-white p-6 rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>MeshFlow</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                    <p className="text-base font-semibold text-black mb-2">AI Analytics Workspace</p>
                                    <Badge className={`bg-yellow-700`}>Active Build</Badge>
                                    <Badge className={`bg-gray-800`}>Next.js</Badge>
                                    <Badge className={`bg-emerald-500`}>FastAPI</Badge>
                                    <Badge className={`bg-blue-700`}>Python</Badge>
                                    <Badge className={`bg-sky-800`}>SQL</Badge>
                                    <Badge className={`bg-cyan-700`}>PostgreSQL</Badge>
                                    <Badge className={`bg-purple-700`}>AI Analytics</Badge>
                                    <Badge className={`bg-fuchsia-800`}>Dashboard Workflow</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                An AI/data analytics workspace for dataset workflows, AI-assisted analysis, query/result handling, and dashboard-oriented insights. Designed to help users move from raw data toward explainable analysis through a structured AI analytics workflow.
                            </CardContent>
                            <CardFooter className="p-4 pt-0 gap-4">
                                <Link to="https://github.com/Sorbemelon/MeshFlow-app" target="_blank" className="font-semibold underline">
                                    GitHub
                                </Link>
                                <Link to="https://meshflow-app.vercel.app" target="_blank" className="font-semibold underline">
                                    Live
                                </Link>
                            </CardFooter>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <img src="/images/analytic-icon.webp" alt="CrossHelix concept icon" className="h-48 w-full object-contain bg-white p-10 rounded-t-xl" />
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>CrossHelix</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                    <p className="text-base font-semibold text-black mb-2">AI Agent Context Integrity</p>
                                    <Badge className={`bg-slate-700`}>Internal Tooling Concept</Badge>
                                    <Badge className={`bg-blue-700`}>Python</Badge>
                                    <Badge className={`bg-gray-800`}>CLI</Badge>
                                    <Badge className={`bg-cyan-700`}>SQLite</Badge>
                                    <Badge className={`bg-purple-700`}>AI Coding Agents</Badge>
                                    <Badge className={`bg-indigo-700`}>Repo Context</Badge>
                                    <Badge className={`bg-green-700`}>Local-first</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                An internal tooling concept for preserving repo context, decisions, sessions, and handoff information during AI-assisted development. Designed to reduce drift when coding agents work across complex repositories.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <img src="/images/problem-solving.webp" alt="Scopian concept icon" className="h-48 w-full object-contain bg-white p-10 rounded-t-xl" />
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Scopian</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                    <p className="text-base font-semibold text-black mb-2">AI Scope & Source-of-Truth Guard</p>
                                    <Badge className={`bg-slate-700`}>Internal Tooling Concept</Badge>
                                    <Badge className={`bg-blue-700`}>Python</Badge>
                                    <Badge className={`bg-gray-800`}>CLI</Badge>
                                    <Badge className={`bg-rose-700`}>Scope Control</Badge>
                                    <Badge className={`bg-indigo-700`}>Source-of-Truth</Badge>
                                    <Badge className={`bg-purple-700`}>AI Governance</Badge>
                                    <Badge className={`bg-green-700`}>Agent Workflow</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                An internal tooling concept for keeping AI-assisted work aligned with approved scope, source files, decisions, and implementation boundaries. Designed around controlled AI workflows, explicit decisions, and safer agent collaboration.
                            </CardContent>
                        </MagicCard>
                    </Card>
                </div>
            </section>
            <section id="training" className="flex flex-col items-center mt-4 mb-12">
                <div className="w-full flex items-center mb-4">
                    <hr className="h-0.5 w-full md:ml-30 mr-4 bg-linear-to-r from-none to-black border-none" />
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">Training</h2>
                    <hr className="h-0.5 w-full ml-4 md:mr-30 bg-linear-to-l from-none to-black border-none" />
                </div>
                <p className="text-center text-lg max-w-3xl mx-auto px-4 mb-8">
                    This training supports my foundation in software development, cloud computing, and practical AI application building.
                </p>
                <div className="flex flex-col md:flex-row gap-8 px-4">
                    <div className="flex flex-col max-w-sm items-center text-center">
                        <img src="/images/generation_thailand_logo.webp" alt="Generation Thailand" className="w-50" />
                        <h3 className="text-xl md:text-2xl font-semibold">Generation Thailand Junior Software Developer Bootcamp</h3>
                        <p className="mt-2 text-base">
                            Full-stack software development foundation, team project experience, Agile workflow, Git, frontend, and backend basics.
                        </p>
                    </div>
                    <div className="flex flex-col max-w-sm items-center text-center">
                        <img src="/images/aws-restart.png" alt="AWS re/Start Thailand" className="w-50" />
                        <h3 className="text-xl md:text-2xl font-semibold">AWS re/Start Cloud Training Program</h3>
                        <p className="mt-2 text-base">
                            Cloud computing foundation covering AWS services, Linux, networking, security, and cloud operations basics.
                        </p>
                    </div>
                </div>
                <div className="w-full flex mt-8">
                    <hr className="h-0.5 w-full md:ml-30 bg-linear-to-r from-none to-black border-none" />
                    <hr className="h-0.5 w-full md:mr-30 bg-linear-to-l from-none to-black border-none" />
                </div>
            </section>
        </div>
    )
}
