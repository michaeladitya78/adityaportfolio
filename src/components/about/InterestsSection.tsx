import { Code2, Palette, BookOpen, Music, Camera, Plane } from 'lucide-react';

const InterestsSection = () => {
    const interests = [
        {
            icon: Code2,
            title: 'Open Source',
            description: 'Contributing to open-source projects and sharing knowledge with the developer community.',
        },
        {
            icon: Palette,
            title: 'Design Systems',
            description: 'Creating scalable, consistent design systems that empower teams to build better products.',
        },
        {
            icon: BookOpen,
            title: 'Learning',
            description: 'Continuously expanding my knowledge through courses, books, and hands-on experimentation.',
        },
        {
            icon: Music,
            title: 'Music',
            description: 'Finding inspiration and balance through music, both listening and creating.',
        },
        {
            icon: Camera,
            title: 'Photography',
            description: 'Capturing moments and exploring visual storytelling through the lens.',
        },
        {
            icon: Plane,
            title: 'Travel',
            description: 'Exploring new cultures and perspectives that inform my creative work.',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Beyond Code
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    When I'm not coding, these are the things that inspire and energize me.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {interests.map((interest, index) => {
                        const Icon = interest.icon;
                        return (
                            <div
                                key={interest.title}
                                className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 transition-all hover:-translate-y-1 hover:shadow-lg animate-fade-up"
                                style={{
                                    animationDelay: `${index * 80}ms`,
                                    animationFillMode: 'both',
                                }}
                            >
                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {interest.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {interest.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InterestsSection;
