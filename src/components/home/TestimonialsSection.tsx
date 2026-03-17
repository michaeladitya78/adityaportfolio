import { useState } from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO, Tech Startup Inc.',
            content: 'Aditya delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding.',
            image: '/testimonials/sarah.jpg',
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Product Manager, Innovation Labs',
            content: 'Working with Aditya was a pleasure. The project was delivered on time, and the quality of work was top-notch. Highly recommended!',
            image: '/testimonials/michael.jpg',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Creative Director, Design Studio',
            content: 'Aditya has a unique ability to blend technical proficiency with creative design. The final product was both beautiful and functional.',
            image: '/testimonials/emily.jpg',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Testimonials from satisfied clients and collaborators.
                    </p>
                </div>

                {/* Testimonial Display */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700">
                        <Quote className="w-12 h-12 text-accent-500 mb-6" />

                        <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-light mb-8 leading-relaxed italic">
                            "{testimonials[activeIndex].content}"
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-semibold text-lg">
                                {testimonials[activeIndex].name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    {testimonials[activeIndex].name}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {testimonials[activeIndex].role}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'w-8 bg-accent-500'
                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                                    }`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
