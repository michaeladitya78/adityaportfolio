import { Download, FileText } from 'lucide-react';

const ResumeHero = () => {
    const handleDownload = () => {
        // TODO: Replace with actual resume file path
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Aditya_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 rounded-full mb-6 animate-fade-up">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium text-sm">Professional Resume</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-gray-900 dark:text-white mb-6 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
                    My Experience
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                    A comprehensive overview of my professional journey, skills, and accomplishments in web development and design.
                </p>

                <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-accent-foreground font-semibold rounded-lg hover:bg-accent-600 transition-all hover:-translate-y-1 hover:shadow-lg animate-fade-up"
                    style={{ animationDelay: '300ms', animationFillMode: 'both' }}
                >
                    <Download className="w-5 h-5" />
                    Download Resume
                </button>
            </div>
        </section>
    );
};

export default ResumeHero;
