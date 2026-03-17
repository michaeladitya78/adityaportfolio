import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const FeaturedProjects = () => {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                        Featured Work
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 animate-fade-up"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            {/* Image Container */}
                            <Link to={`/work/${project.slug}`} className="block relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center text-gray-400 dark:text-gray-600">
                                    {/* Placeholder - replace with actual images */}
                                    <span className="text-sm font-mono">{project.title}</span>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="font-semibold flex items-center gap-2">
                                            View Case Study
                                            <ArrowRight className="w-4 h-4" />
                                        </p>
                                    </div>
                                </div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                                        FEATURED
                                    </div>
                                )}
                            </Link>

                            {/* Content */}
                            <div className="p-6">
                                <Link to={`/work/${project.slug}`}>
                                    <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </Link>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.excerpt}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 text-sm">
                                    <Link
                                        to={`/work/${project.slug}`}
                                        className="text-primary-600 dark:text-primary-400 hover:underline font-medium flex items-center gap-1"
                                    >
                                        Learn more
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center gap-1"
                                        >
                                            Live Site
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center">
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-700 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
