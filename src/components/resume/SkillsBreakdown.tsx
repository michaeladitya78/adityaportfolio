import { Code2, Palette, Database, Cloud, Smartphone, Globe, Award, Users } from 'lucide-react';

const SkillsBreakdown = () => {
    const skillGroups = [
        {
            icon: Code2,
            title: 'Frontend Development',
            skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'SASS', 'Responsive Design'],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Database,
            title: 'Backend Development',
            skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Authentication'],
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Palette,
            title: 'Design & UX',
            skills: ['Figma', 'Adobe XD', 'Sketch', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Accessibility'],
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Cloud,
            title: 'DevOps & Cloud',
            skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Vercel', 'Netlify', 'Linux'],
            color: 'from-orange-500 to-red-500',
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            skills: ['React Native', 'Progressive Web Apps', 'Mobile-First Design', 'Cross-Platform Development'],
            color: 'from-indigo-500 to-blue-500',
        },
        {
            icon: Globe,
            title: 'Web Technologies',
            skills: ['Web Performance', 'SEO', 'Web Security', 'WebSockets', 'Service Workers', 'PWA'],
            color: 'from-teal-500 to-green-500',
        },
        {
            icon: Award,
            title: 'Best Practices',
            skills: ['Clean Code', 'Testing (Jest, Cypress)', 'Code Review', 'Agile/Scrum', 'Git', 'Documentation'],
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Users,
            title: 'Soft Skills',
            skills: ['Team Collaboration', 'Communication', 'Problem Solving', 'Mentoring', 'Project Management', 'Client Relations'],
            color: 'from-pink-500 to-rose-500',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Skills & Technologies
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    A comprehensive breakdown of my technical and professional skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;
                        return (
                            <div
                                key={group.title}
                                className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-up"
                                style={{
                                    animationDelay: `${index * 75}ms`,
                                    animationFillMode: 'both',
                                }}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center mb-4`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    {group.title}
                                </h3>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsBreakdown;
