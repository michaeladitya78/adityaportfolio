// pages/ProjectDetailPage.tsx
// The /work/:slug route — displays a full case study for a single project.
// Reads the slug from the URL, finds the matching project in the data file,
// and redirects to /work if no matching project is found.

import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectDetail from '@/components/work/ProjectDetail';
import { projects } from '@/data/projects';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // If the slug doesn't match any known project, send the user back to /work.
  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Helmet>
        <title>{project.title} — Aditya | Project Case Study</title>
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
