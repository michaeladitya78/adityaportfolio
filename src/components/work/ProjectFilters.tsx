import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { categories, techStacks } from '@/data/projects';

interface ProjectFiltersProps {
    onFilterChange: (filters: {
        category: string;
        tech: string[];
        search: string;
    }) => void;
}

const ProjectFilters = ({ onFilterChange }: ProjectFiltersProps) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTech, setSelectedTech] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        onFilterChange({
            category,
            tech: selectedTech,
            search: searchQuery,
        });
    };

    const toggleTech = (tech: string) => {
        const newTech = selectedTech.includes(tech)
            ? selectedTech.filter((t) => t !== tech)
            : [...selectedTech, tech];

        setSelectedTech(newTech);
        onFilterChange({
            category: selectedCategory,
            tech: newTech,
            search: searchQuery,
        });
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        onFilterChange({
            category: selectedCategory,
            tech: selectedTech,
            search: value,
        });
    };

    const clearAllFilters = () => {
        setSelectedCategory('All');
        setSelectedTech([]);
        setSearchQuery('');
        onFilterChange({
            category: 'All',
            tech: [],
            search: '',
        });
    };

    const hasActiveFilters = selectedCategory !== 'All' || selectedTech.length > 0 || searchQuery !== '';

    return (
        <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-colors"
                />
                {searchQuery && (
                    <button
                        onClick={() => handleSearchChange('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Category Filter */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Category</h3>
                <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === cat
                                    ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-md scale-105'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tech Stack Filter */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {techStacks.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => toggleTech(tech)}
                            className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all ${selectedTech.includes(tech)
                                    ? 'bg-accent-500 text-accent-foreground'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {tech}
                            {selectedTech.includes(tech) && (
                                <X className="inline-block w-3 h-3 ml-1" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Filters Indicator & Clear Button */}
            {hasActiveFilters && (
                <div className="flex items-center justify-between p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Active filters:</span> {selectedCategory !== 'All' && `Category: ${selectedCategory}`}
                        {selectedTech.length > 0 && ` • ${selectedTech.length} technologies`}
                        {searchQuery && ` • Search: "${searchQuery}"`}
                    </p>
                    <button
                        onClick={clearAllFilters}
                        className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                        Clear all
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectFilters;
