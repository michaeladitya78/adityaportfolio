import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectDetail from "@/components/work/ProjectDetail";
import { projects } from "@/data/projects";

const ProjectDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/work" replace />;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Helmet>
                <title>{project.title} - Aditya | Project Case Study</title>
                <meta name="description" content={project.description} />
            </Helmet>

            <Header />

            <main>
                <ProjectDetail project={project} />
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetailPage;
