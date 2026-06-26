import { Link } from "react-router-dom";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import { ShineBorder } from "@/components/ui/shine-border";
import AboutSection from "./AboutSection";

export default function HeroSection() {
    return (
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
                    <AboutSection />
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
    )
}
