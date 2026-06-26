import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import TechnicalFocusSection from "@/components/portfolio/TechnicalFocusSection";
import TrainingSection from "@/components/portfolio/TrainingSection";

export default function Home() {
    return (
        <main className="overflow-x-hidden bg-background text-foreground transition-colors duration-300">
            <HeroSection />
            <AboutSection />
            <ProjectGrid />
            <TechnicalFocusSection />
            <TrainingSection />
            <ContactSection />
        </main>
    )
}
