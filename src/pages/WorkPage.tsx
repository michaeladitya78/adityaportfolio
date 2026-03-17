import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsHero from "@/components/work/ProjectsHero";
import ProjectGrid from "@/components/work/ProjectGrid";

const WorkPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Helmet>
                <title>Work - Aditya | Project Portfolio</title>
                <meta name="description" content="Explore my portfolio of web development and design projects. Filter by category, technology, and year." />
            </Helmet>

            <Header />

            <main>
                <ProjectsHero />
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ProjectGrid />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WorkPage;
