import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResumeHero from "@/components/resume/ResumeHero";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import SkillsBreakdown from "@/components/resume/SkillsBreakdown";
import EducationSection from "@/components/resume/EducationSection";

const ResumePage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Helmet>
                <title>Resume - Aditya | Professional Experience & Skills</title>
                <meta name="description" content="View my professional experience, skills, education, and download my resume." />
            </Helmet>

            <Header />

            <main>
                <ResumeHero />
                <ExperienceTimeline />
                <SkillsBreakdown />
                <EducationSection />
            </main>

            <Footer />
        </div>
    );
};

export default ResumePage;
