import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceTimeline = () => {
    const experiences = [
        {
            id: 1,
            title: 'Senior Full-Stack Developer',
            company: 'Tech Innovations Inc.',
            location: 'Remote',
            period: '2023 - Present',
            description: 'Leading development of enterprise-scale web applications using React, Next.js, and Node.js.',
            achievements: [
                'Architected and implemented a microservices-based platform serving 100k+ users',
                'Reduced page load time by 60% through optimization and lazy loading',
                'Mentored junior developers and conducted code reviews',
            ],
            current: true,
        },
        {
            id: 2,
            title: 'Full-Stack Developer',
            company: 'Digital Solutions Ltd.',
            location: 'New York, NY',
            period: '2021 - 2023',
            description: 'Developed and maintained multiple client projects with focus on performance and user experience.',
            achievements: [
                'Built 10+ successful web applications for diverse clients',
                'Implemented CI/CD pipelines reducing deployment time by 75%',
                'Collaborated with design team to create cohesive user experiences',
            ],
            current: false,
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'StartupXYZ',
            location: 'San Francisco, CA',
            period: '2019 - 2021',
            description: 'Focused on creating responsive, accessible web interfaces using modern frameworks.',
            achievements: [
                'Redesigned company website increasing conversion rate by 45%',
                'Developed reusable component library used across all products',
                'Improved accessibility scores to achieve WCAG 2.1 AA compliance',
            ],
            current: false,
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Work Experience
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    My professional journey through various roles and companies.
                </p>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:-ml-px" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col md:flex-row gap-8 animate-fade-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    animationFillMode: 'both',
                                }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-900 md:-ml-2 z-10" />

                                {/* Content */}
                                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className={`p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow ${exp.current ? 'ring-2 ring-accent-500' : ''}`}>
                                        {exp.current && (
                                            <span className="inline-block px-3 py-1 bg-accent-500 text-accent-foreground text-xs font-bold rounded-full mb-3">
                                                CURRENT
                                            </span>
                                        )}

                                        <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-2">
                                            {exp.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {exp.company}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {exp.description}
                                        </p>

                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
