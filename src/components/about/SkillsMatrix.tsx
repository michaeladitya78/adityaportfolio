const SkillsMatrix = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Next.js', level: 88 },
                { name: 'Tailwind CSS', level: 92 },
            ],
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 82 },
                { name: 'MongoDB', level: 80 },
                { name: 'PostgreSQL', level: 78 },
            ],
        },
        {
            category: 'Design',
            skills: [
                { name: 'Figma', level: 88 },
                { name: 'UI/UX Design', level: 85 },
                { name: 'Prototyping', level: 82 },
                { name: 'User Research', level: 75 },
            ],
        },
        {
            category: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'CI/CD', level: 72 },
            ],
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Technical Skills
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    A comprehensive overview of my technical proficiencies across various domains.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={category.category}
                            className="animate-fade-up"
                            style={{
                                animationDelay: `${catIndex * 100}ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {category.category}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
