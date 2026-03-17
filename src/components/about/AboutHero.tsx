const AboutHero = () => {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-gray-900 dark:text-white mb-6 animate-fade-up">
                            About Me
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
                            A passionate developer and designer who loves creating digital experiences that make a difference.
                        </p>
                        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                            <div className="px-6 py-3 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg font-semibold">
                                Full-Stack Developer
                            </div>
                            <div className="px-6 py-3 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 rounded-lg font-semibold">
                                UI/UX Designer
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Placeholder */}
                    <div className="relative animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-800 dark:to-accent-800">
                            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                                <span className="text-lg font-mono">Profile Image</span>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500/20 rounded-full filter blur-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full filter blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
