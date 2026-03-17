import { Code2, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';

const SkillsOverview = () => {
    const skillCategories = [
        {
            icon: Code2,
            title: 'Frontend Development',
            skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Database,
            title: 'Backend Development',
            skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Cloud,
            title: 'DevOps & Cloud',
            skills: ['AWS', 'Docker', 'CI/CD', 'Vercel'],
            color: 'from-orange-500 to-red-500',
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            skills: ['React Native', 'iOS', 'Android', 'PWA'],
            color: 'from-indigo-500 to-blue-500',
        },
        {
            icon: Globe,
            title: 'Web Technologies',
            skills: ['REST APIs', 'GraphQL', 'WebSockets', 'SEO'],
            color: 'from-teal-500 to-green-500',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A diverse skill set spanning modern web technologies, design, and development best practices.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.title}
                                className="group p-6 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both',
                                }}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {category.title}
                                </h3>

                                {/* Skills List */}
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsOverview;
