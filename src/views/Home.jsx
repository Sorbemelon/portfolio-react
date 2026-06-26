import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import SideDashNav from "@/components/portfolio/SideDashNav";
import TechnicalFocusSection from "@/components/portfolio/TechnicalFocusSection";
import TopNav from "@/components/portfolio/TopNav";
import TrainingSection from "@/components/portfolio/TrainingSection";

export default function Home() {
    return (
        <>
            <TopNav />
            <SideDashNav />
            <main className="overflow-x-hidden bg-background text-foreground transition-colors duration-300">
                <HeroSection />
                <AboutSection />
                <ProjectGrid />
                <TechnicalFocusSection />
                <TrainingSection />
                <ContactSection />
            </main>
        </>
    )
}
