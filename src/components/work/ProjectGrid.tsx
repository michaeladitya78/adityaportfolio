import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Search } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectFilters from './ProjectFilters';

const ProjectGrid = () => {
    const [filters, setFilters] = useState({
        category: 'All',
        tech: [] as string[],
        search: '',
    });

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory =
                filters.category === 'All' || project.category === filters.category.toLowerCase();

            const matchesTech =
                filters.tech.length === 0 ||
                filters.tech.some((tech) => project.tech.includes(tech));

            const matchesSearch =
                filters.search === '' ||
                project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                project.description.toLowerCase().includes(filters.search.toLowerCase());

            return matchesCategory && matchesTech && matchesSearch;
        });
    }, [filters]);

    return (
        <div>
            <ProjectFilters onFilterChange={setFilters} />

            {/* Results Count */}
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredProjects.length}</span> project
                {filteredProjects.length !== 1 && 's'}
            </p>

            {/* Project Grid */}
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 animate-fade-up"
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            {/* Image */}
                            <Link to={`/work/${project.slug}`} className="block relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center text-gray-400 dark:text-gray-600">
                                    <span className="text-sm font-mono">{project.title}</span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="font-semibold flex items-center gap-2">
                                            View Details
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
                                {/* Category & Year */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-xs font-semibold rounded uppercase">
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {project.year}
                                    </span>
                                </div>

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
                                <div className="flex items-center gap-4">
                                    <Link
                                        to={`/work/${project.slug}`}
                                        className="text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm flex items-center gap-1"
                                    >
                                        Case Study
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm flex items-center gap-1"
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                            Live
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm flex items-center gap-1"
                                        >
                                            <Github className="w-3 h-3" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <Search className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-2">
                        No projects found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Try adjusting your filters or search terms
                    </p>
                    <button
                        onClick={() =>
                            setFilters({ category: 'All', tech: [], search: '' })
                        }
                        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectGrid;
