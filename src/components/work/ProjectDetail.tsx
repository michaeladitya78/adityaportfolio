import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Briefcase } from 'lucide-react';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
    // Get related projects (same category, excluding current)
    const relatedProjects = projects
        .filter((p) => p.category === project.category && p.id !== project.id)
        .slice(0, 3);

    return (
        <article className="py-16 md:py-24">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Title & Metadata */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-semibold rounded uppercase">
                                {project.category}
                            </span>
                            {project.featured && (
                                <span className="px-3 py-1 bg-accent-500 text-accent-foreground text-sm font-bold rounded">
                                    FEATURED
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
                            {project.title}
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Metadata */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {project.client && (
                                <div className="flex items-start gap-3">
                                    <Briefcase className="w-5 h-5 text-primary-600 mt-0.5" />
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Client</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{project.client}</div>
                                    </div>
                                </div>
                            )}
                            {project.timeline && (
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-primary-600 mt-0.5" />
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Timeline</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{project.timeline}</div>
                                    </div>
                                </div>
                            )}
                            {project.role && (
                                <div className="flex items-start gap-3">
                                    <User className="w-5 h-5 text-primary-600 mt-0.5" />
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Role</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{project.role}</div>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-primary-600 mt-0.5" />
                                <div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Year</div>
                                    <div className="font-semibold text-gray-900 dark:text-white">{project.year}</div>
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-accent-foreground font-semibold rounded-lg hover:bg-accent-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    View Live Site
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20">
                        <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                            <span className="text-lg font-mono">Project Hero Image</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg font-mono text-sm shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Challenge */}
            {project.challenge && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
                        The Challenge
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.challenge}
                    </p>
                </div>
            )}

            {/* The Solution */}
            {project.solution && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
                        The Solution
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.solution}
                    </p>
                </div>
            )}

            {/* Results & Impact */}
            {project.results && project.results.length > 0 && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
                        Results & Impact
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.results.map((result, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-lg bg-accent-50 dark:bg-accent-900/10"
                            >
                                <div className="w-6 h-6 rounded-full bg-accent-500 text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                    ✓
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">{result}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-gray-200 dark:border-gray-800">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 dark:text-white mb-8">
                        Related Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProjects.map((relatedProject) => (
                            <Link
                                key={relatedProject.id}
                                to={`/work/${relatedProject.slug}`}
                                className="group"
                            >
                                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 group-hover:scale-105 transition-transform duration-300">
                                        <span className="text-sm font-mono">{relatedProject.title}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {relatedProject.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                                    {relatedProject.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-900">
                    <h2 className="text-3xl font-serif font-semibold text-white mb-4">
                        Interested in working together?
                    </h2>
                    <p className="text-primary-100 mb-6">
                        Let's discuss how I can help bring your project to life.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-accent-foreground font-semibold rounded-lg hover:bg-accent-600 transition-all hover:-translate-y-1 hover:shadow-xl"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ProjectDetail;
