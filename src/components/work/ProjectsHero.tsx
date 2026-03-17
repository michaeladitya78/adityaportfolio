const ProjectsHero = () => {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-gray-900 dark:text-white mb-6 animate-fade-up">
                    My Work
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
                    A collection of projects showcasing my skills in web development, design, and problem-solving. Each project tells a unique story of challenges overcome and solutions delivered.
                </p>
            </div>
        </section>
    );
};

export default ProjectsHero;
