import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import SideDashNav from "@/components/portfolio/SideDashNav";
import TechnicalFocusSection from "@/components/portfolio/TechnicalFocusSection";
import TopNav from "@/components/portfolio/TopNav";
import TrainingSection from "@/components/portfolio/TrainingSection";

const sectionDividerClassName =
    "mx-auto h-px max-w-7xl bg-linear-to-r from-transparent via-indigo-300/45 to-transparent dark:via-violet-300/20"

export default function Home() {
    return (
        <>
            <TopNav />
            <SideDashNav />
            <main className="overflow-x-hidden bg-background text-foreground transition-colors duration-300">
                <HeroSection />
                <div className="bg-[linear-gradient(160deg,#ffffff_0%,#ffffff_24%,#f8fafc_38%,#eef2ff_58%,#ecfdf5_84%,#dcfce7_100%)] transition-colors duration-300 dark:bg-[linear-gradient(160deg,#020617_0%,#0b0714_10%,#111127_34%,#21143d_68%,#312e81_100%)]">
                    <AboutSection />
                    <div aria-hidden="true" className={sectionDividerClassName} />
                    <ProjectGrid />
                    <div aria-hidden="true" className={sectionDividerClassName} />
                    <TechnicalFocusSection />
                    <div aria-hidden="true" className={sectionDividerClassName} />
                    <TrainingSection />
                    <div aria-hidden="true" className={sectionDividerClassName} />
                    <ContactSection />
                </div>
            </main>
        </>
    )
}
