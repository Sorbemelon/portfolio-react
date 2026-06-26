import AboutSection from "@/components/portfolio/AboutSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import TrainingSection from "@/components/portfolio/TrainingSection";

export default function Home() {
    return (
        <main className="overflow-x-hidden bg-background text-foreground transition-colors duration-300">
            <HeroSection />
            <AboutSection />
            <ProjectGrid />
            <TrainingSection />
        </main>
    )
}
