import { Link } from 'react-router-dom';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'building digital experiences that inspire and perform';
    const [letterIndex, setLetterIndex] = useState(0);

    const name = 'Aditya';
    const nameLetters = name.split('');

    // Typewriter effect for tagline
    useEffect(() => {
        if (letterIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(fullText.slice(0, letterIndex + 1));
                setLetterIndex(letterIndex + 1);
            }, 50);

            return () => clearTimeout(timeout);
        }
    }, [letterIndex, fullText]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            {/* Animated background gradient blob */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                {/* Animated Name */}
                <h1 className="mb-6">
                    {nameLetters.map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-gray-900 dark:text-white animate-letter-reveal"
                            style={{
                                animationDelay: `${index * 80}ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>

                {/* Typewriter Tagline */}
                <div className="mb-12 min-h-[4rem]">
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
                        {displayedText}
                        <span className="inline-block w-0.5 h-7 md:h-8 bg-accent-500 ml-1 animate-pulse" />
                    </p>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                    Full-Stack Developer & Designer crafting exceptional digital experiences with modern technologies.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
                    <Link
                        to="/work"
                        className="px-8 py-4 bg-accent-500 text-accent-foreground font-semibold rounded-lg hover:bg-accent-600 transition-all hover:-translate-y-1 hover:shadow-lg shadow-accent-500/20"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 border-2 border-primary-500 text-primary-700 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '1.6s', animationFillMode: 'both' }}>
                    <a
                        href="https://github.com/mitcheladitya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-1"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aditya-raj-8764a3205/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-1"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:michaeladitya150@gmail.com"
                        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-1"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="animate-float">
                    <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
