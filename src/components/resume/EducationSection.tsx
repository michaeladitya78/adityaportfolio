import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University Name',
            location: 'City, State',
            period: '2015 - 2019',
            description: 'Focused on software engineering, algorithms, and web development.',
            achievements: [
                'GPA: 3.8/4.0',
                'Dean\'s List (all semesters)',
                'President of Computer Science Club',
            ],
        },
    ];

    const certifications = [
        {
            id: 1,
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2023',
        },
        {
            id: 2,
            title: 'Professional Scrum Master I',
            issuer: 'Scrum.org',
            date: '2022',
        },
        {
            id: 3,
            title: 'Advanced React and Redux',
            issuer: 'Udemy',
            date: '2021',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Education */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-12 text-center">
                        Education
                    </h2>

                    {education.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 border border-primary-100 dark:border-primary-800 animate-fade-up"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                                    <GraduationCap className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-2">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                                        {edu.institution} • {edu.location}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-500">
                                        {edu.period}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {edu.description}
                            </p>

                            <ul className="space-y-2">
                                {edu.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-12 text-center">
                        Certifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both',
                                }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-500 to-orange-500 flex items-center justify-center mb-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {cert.title}
                                </h3>
                                <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                                    {cert.issuer}
                                </div>
                                <div className="text-gray-500 dark:text-gray-500 text-xs">
                                    {cert.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
