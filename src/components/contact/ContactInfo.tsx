import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = () => {
    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'michaeladitya150@gmail.com',
            href: 'mailto:michaeladitya150@gmail.com',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Available for remote work',
            href: null,
        },
        {
            icon: Clock,
            label: 'Response Time',
            value: 'Usually within 24 hours',
            href: null,
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            url: 'https://github.com/mitcheladitya',
            username: '@mitcheladitya',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/aditya-raj-8764a3205/',
            username: 'Aditya Raj',
        },
        {
            icon: Twitter,
            label: 'Twitter',
            url: 'https://twitter.com/yourusername',
            username: '@yourusername',
        },
    ];

    return (
        <div className="space-y-8">
            {/* Contact Methods */}
            <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
                    Contact Information
                </h2>

                <div className="space-y-4">
                    {contactMethods.map((method) => {
                        const Icon = method.icon;
                        const Wrapper = method.href ? 'a' : 'div';
                        const wrapperProps = method.href
                            ? { href: method.href, className: 'block group' }
                            : { className: 'block' };

                        return (
                            <Wrapper key={method.label} {...wrapperProps}>
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            {method.label}
                                        </div>
                                        <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {method.value}
                                        </div>
                                    </div>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>
            </div>

            {/* Social Links */}
            <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Connect on Social Media
                </h3>
                <div className="space-y-3">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 transition-colors">
                                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                        {social.label}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {social.username}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Availability Note */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/10 dark:to-accent-800/10 border border-accent-200 dark:border-accent-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Currently Available
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    I'm currently open to new opportunities and freelance projects. Let's discuss how we can work together!
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;
