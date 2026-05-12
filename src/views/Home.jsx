import { useContext } from "react";
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
            <section className="flex flex-col min-h-dvh pt-4 gap-y-4 items-center 800 text-black">
                <Meteors number={20} />
                <div className="w-full flex flex-col md:flex-row justify-center md:gap-12 lg:gap-20 px-4">
                    <div className="self-center">
                        <img src="/images/developer-pic-1.png" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="md:leading-20">
                            Methus Klaewkla
                        </h1>
                        <AuroraText className="text-2xl md:text-4xl font-semibold">
                             Aspiring AI Software Engineer & Data Engineer
                        </AuroraText>
                        <div className="flex flex-col gap-2 max-w-150 text-lg mt-4 mb-8 *:indent-8">
                            <p>Currently pursuing an AI Software Engineer or Data Engineering role, with training from Generation’s Junior Software Developer Bootcamp and the AWS re/Start program.</p>
                            <p>A fast learner and critical thinker experienced in Python, SQL, MongoDB, AWS cloud integration, Linux, and modern MERN-stack development. Skilled in designing and implementing AI-powered RAG systems using Gemini, integrating cloud-based storage solutions, and building scalable, data-driven applications that transform raw data into actionable insights.</p>
                        </div>
                         <ul className="pl-4 ml-7 mb-8 border-l-2 border-black text-xl font-semibold">
                            <li className="relative -left-12 flex mb-6 items-center">
                                <div className="rounded-full bg-white mr-2">
                                    <ShineBorder className={`w-15`}  shineColor={["#8800ff", "#ff0059", "#ff8000"]} />
                                    <img src="/images/learning-icon.svg" className="w-15 p-0.5" />
                                </div>
                                Fast, Self-Driven Learner
                            </li>
                            <li className="relative -left-12 flex my-6 items-center">
                                <div className="rounded-full bg-white mr-2">
                                    <ShineBorder className={`w-15`}  shineColor={["#4904f7", "#0051ff", "#00be20"]} />
                                    <img src="/images/analytic-icon.webp" className="w-15 p-0.5" />
                                </div>
                                Deep Analytical Thinking
                            </li>
                            <li className="relative -left-12 flex mt-6 items-center">
                                <div className="rounded-full bg-white mr-2">
                                    <ShineBorder className={`w-15`}  shineColor={["#8af704", "#02c4ff", "#ffd000"]} />
                                    <img src="/images/problem-solving.webp" className="w-15 p-0.5" />
                                </div>
                                Critical and Systematic Problem Solver
                            </li>
                         </ul>
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <a href="#project">
                                <button className="px-6 py-3 text-black bg-[#CCFF00] rounded-xl shadow-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 hover:text-white hover:cursor-pointer">
                                    MY PROJECTS
                                </button>
                            </a>
                            <Link to="https://www.linkedin.com/in/methus-klaewkla/"  target="_blank">
                                <button className="flex items-center w-fit px-6 py-3 text-black bg-gray-100 rounded-xl shadow-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 hover:text-white hover:cursor-pointer">
                                    <p>MORE ABOUT ME {`->`}</p>
                                    <div className="w-6 pt-1">
                                        <img src="/images/linkedin-icon.png" className="w-full mx-1" />
                                    </div>
                                </button>
                            </Link>
                            <Link to="https://github.com/Sorbemelon"  target="_blank" className="flex items-center">
                                <img src="/images/github-icon.svg" className="w-15 bg-amber-200 rounded-full" />
                                <p className="text-2xl font-semibold pl-3">GitHub</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mt-auto mb-12">
                    <div className="w-full flex items-center mb-4">
                        <hr className="h-0.5 w-full md:ml-30 mr-4 bg-linear-to-r from-none to-black border-none" />
                            <h3 className="text-center text-2xl font-semibold">COURSES</h3>
                        <hr className="h-0.5 w-full ml-4 md:mr-30 bg-linear-to-l from-none to-black border-none" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-70 items-center">
                            <img src="/images/generation_thailand_logo.webp" className="w-50" />
                            <h2 className="text-xl md:text-2xl font-semibold text-center">Junior Software Developer Bootcamp #11</h2>
                        </div>
                        <div className="flex flex-col w-70 items-center">
                            <img src="/images/aws-restart.png" className="w-50" />
                            <h2 className="text-xl md:text-2xl font-semibold text-center">AWS re/Start Thailand</h2>
                        </div>
                    </div>
                    <div className="w-full flex mt-4">
                        <hr className="h-0.5 w-full md:ml-30 bg-linear-to-r from-none to-black border-none" />
                        <hr className="h-0.5 w-full md:mr-30 bg-linear-to-l from-none to-black border-none" />
                    </div>
                </div>
            </section>
            <section id="project" className="flex flex-col mt-4 mb-8">
                <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">My Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-[10%] gap-12">
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://meshflow-app.vercel.app/" target="_blank">
                                    <img src="/images/logo_meshflow_v0.2.png" className="w-fit m-px rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Meshflow (In Progress)</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-gray-800`}>Next.js</Badge>
                                     <Badge className={`bg-emerald-500`}>FastAPI</Badge>
                                     <Badge className={`bg-cyan-700`}>PostgreSQL</Badge>
                                     <Badge className={`bg-orange-500`}>AWS</Badge>
                                     <Badge className={`bg-teal-700`}>OpenAI</Badge>
                                     <Badge className={`bg-fuchsia-800`}>Tailwind CSS</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                AI Data & Analytics Platform: An AI-powered analytics platform built with Next.js, FastAPI, PostgreSQL, Amazon S3, and OpenAI GPT that automates ELT workflows and dashboard generation. Users can upload datasets and ask questions, triggering AI-driven data transformation and automatic generation of dashboards.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://jsd11-methus-project.vercel.app/" target="_blank">
                                    <img src="/images/autumdata-1.png" className="w-fit m-px rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Autumdata</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-sky-500`}>React.js</Badge>
                                     <Badge className={`bg-lime-500`}>Node.js</Badge>
                                     <Badge className={`bg-gray-700`}>Express</Badge>
                                     <Badge className={`bg-green-700`}>MongoDB</Badge>
                                     <Badge className={`bg-orange-500`}>AWS</Badge>
                                     <Badge className={`bg-purple-500`}>Gemini</Badge>
                                     <Badge className={`bg-fuchsia-800`}>Tailwind CSS</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                AI Document RAG System: An AI-powered document platform built with MERN, Amazon S3, and Gemini AI that turns uploaded files into a searchable knowledge base with semantic retrieval and context-aware Q&A.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://project-tralala-react.vercel.app/" target="_blank">
                                    <img src="/images/group-project-sprint-3.png" className="w-fit m-px rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Senior Care Platform</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-sky-500`}>React.js</Badge>
                                     <Badge className={`bg-lime-500`}>Node.js</Badge>
                                     <Badge className={`bg-gray-700`}>Express</Badge>
                                     <Badge className={`bg-green-700`}>MongoDB</Badge>
                                     <Badge className={`bg-purple-500`}>Gemini</Badge>
                                     <Badge className={`bg-fuchsia-800`}>Tailwind CSS</Badge>
                                     <Badge className={`bg-pink-300`}>Trello</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                Senior Care Platform (Group Project): A MERN-stack application featuring an Gemini AI-powered RAG system to recommend suitable caregivers based on user queries.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://19-methus-react.vercel.app/" target="_blank">
                                    <img src="/images/user-management-3.png" className="w-fit m-px rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>User Management Application</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-sky-500`}>React.js</Badge>
                                     <Badge className={`bg-lime-500`}>Node.js</Badge>
                                     <Badge className={`bg-gray-700`}>Express</Badge>
                                     <Badge className={`bg-green-700`}>MongoDB</Badge>
                                     <Badge className={`bg-purple-500`}>Gemini</Badge>
                                     <Badge className={`bg-fuchsia-800`}>Tailwind CSS</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                User Management Application: A MERN-stack application supporting full CRUD operations, with an AI-powered RAG embedding–based user search using Gemini AI.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://jsd11-dice-roller-19.vercel.app/" target="_blank">
                                    <img src="/images/dice-roller-project.png" className="max-w-60 mx-auto m-px" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>20-Sided Dice Roller</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-red-700`}>HTML</Badge>
                                     <Badge className={`bg-fuchsia-800`}>Tailwind CSS</Badge>
                                     <Badge className={`bg-amber-600`}>Javascript</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                Developed a 3D 20-sided dice roller by applying JavaScript DOM manipulation with HTML and Tailwind CSS.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://jsd11-castle-room.vercel.app/" target="_blank">
                                    <img src="/images/castle-room-project.png" className="w-fit m-px rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Rainbow Castle Room</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-sky-500`}>React.js</Badge>
                                     <Badge className={`bg-fuchsia-800`}>Tailwind CSS</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                Interactive React app that sends messages through nested “castle room” components to a secret room using props, useState, and useEffect.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://19-kanoon-colmar.vercel.app/" target="_blank">
                                    <img src="/images/colmar-project.png" className="m-px rounded-t-2xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Colmar Project</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-red-700`}>HTML</Badge>
                                     <Badge className={`bg-fuchsia-800`}>Tailwind CSS</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                Front-end web development using HTML and Tailwind CSS based on UI designs.
                            </CardContent>
                        </MagicCard>
                    </Card>
                    {/* <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://dbdiagram.io/d/Senior-Care-Platform-691993236735e11170036981" target="_blank">
                                    <img src="/images/group-project-database-schema.png" className="w-fit m-px rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Database Schema Design (Group Project)</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-sky-800`}>dbdiagram.io</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                SQL database design involving creation of an ER diagram for use with a senior care platform prior to conversion to a MongoDB schema
                            </CardContent>
                        </MagicCard>
                    </Card> */}
                    <Card className="w-full border-none p-0 shadow-xl">
                        <MagicCard className={`h-full`}>
                            <div>
                                <Link to="https://github.com/Sorbemelon/19-kanoon-find-your-hat.git" target="_blank">
                                    <img src="/images/find-your-hat.png" className="w-fit m-px rounded-t-xl" />
                                </Link>
                            </div>
                            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                                <CardTitle className={`text-3xl`}>Find Your Hat Game</CardTitle>
                                <CardDescription className={`*:mr-1 *:mb-1`}>
                                     <Badge className={`bg-amber-600`}>Javascript</Badge>
                                     <Badge className={`bg-orange-700`}>Typescript</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                JavaScript game that dynamically generates a game board based on user input and creates a new randomized map each round, updating the player state based on position-specific events
                            </CardContent>
                        </MagicCard>
                    </Card>
                </div>
            </section>
        </div>
    )
}