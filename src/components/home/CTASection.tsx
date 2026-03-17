import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
                        Let's Build Something Amazing
                    </h2>
                    <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-10">
                        Have a project in mind? Let's discuss how we can work together to bring your vision to life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-accent-foreground font-semibold rounded-lg hover:bg-accent-600 transition-all hover:-translate-y-1 hover:shadow-xl shadow-accent-500/20"
                        >
                            <Mail className="w-5 h-5" />
                            Get In Touch
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/work"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                        >
                            View Portfolio
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
