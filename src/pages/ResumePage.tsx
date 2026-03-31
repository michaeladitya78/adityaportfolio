import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";

const ResumePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0f]">
            <Helmet>
                <title>Resume - Aditya | Professional Experience & Skills</title>
                <meta name="description" content="View my professional experience, skills, education, and download my resume." />
            </Helmet>

            <Header />

            <main className="pt-20">
                <Experience />
                <Skills />
                <Achievements />
                <Education />
            </main>

            <Footer />
        </div>
    );
};

export default ResumePage;
