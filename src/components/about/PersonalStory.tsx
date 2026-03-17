import { Lightbulb, Heart, Target } from 'lucide-react';

const PersonalStory = () => {
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Constantly exploring new technologies and approaches to solve problems creatively.',
        },
        {
            icon: Heart,
            title: 'User-Centric',
            description: 'Putting users first in every design and development decision I make.',
        },
        {
            icon: Target,
            title: 'Excellence',
            description: 'Committed to delivering high-quality work that exceeds expectations.',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Story Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        My Journey
                    </h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            My journey into web development began with a simple curiosity about how websites work. What started as experimenting with HTML and CSS has evolved into a deep passion for creating meaningful digital experiences.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Over the years, I've had the privilege of working on diverse projects—from e-commerce platforms to mobile applications—each teaching me valuable lessons about technology, design, and the importance of user experience.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Today, I combine technical expertise with creative problem-solving to build solutions that not only work beautifully but also make a positive impact on users' lives. I believe in writing clean, maintainable code and creating designs that are both aesthetically pleasing and highly functional.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 dark:text-white mb-12 text-center">
                        What Drives Me
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-up"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'both',
                                    }}
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        {value.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalStory;
