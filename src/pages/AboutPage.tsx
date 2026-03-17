import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import PersonalStory from "@/components/about/PersonalStory";
import SkillsMatrix from "@/components/about/SkillsMatrix";
import InterestsSection from "@/components/about/InterestsSection";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Helmet>
                <title>About - Aditya | Full-Stack Developer & Designer</title>
                <meta name="description" content="Learn more about Aditya - my journey, skills, values, and what drives me to create exceptional digital experiences." />
            </Helmet>

            <Header />

            <main>
                <AboutHero />
                <PersonalStory />
                <SkillsMatrix />
                <InterestsSection />
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
