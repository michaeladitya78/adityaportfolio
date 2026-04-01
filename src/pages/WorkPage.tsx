// pages/WorkPage.tsx
// The /work route — displays the full project portfolio via the Projects component.
// Projects renders its own filtering and grid UI internally.

import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Projects from '@/components/Projects';

const WorkPage = () => (
  <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white transition-colors duration-500">
    <Helmet>
      <title>Work | Aditya</title>
      <meta
        name="description"
        content="Explore my portfolio of web development and design projects. Filter by category, technology, and year."
      />
    </Helmet>

    <Header />

    <main className="pt-20">
      <Projects />
    </main>

    <Footer />
  </div>
);

export default WorkPage;
