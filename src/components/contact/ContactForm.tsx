import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simulate API call - replace with your actual endpoint
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // TODO: Replace with actual form submission
            // const response = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData),
            // });

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 dark:text-white mb-6">
                Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors ${errors.name
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                            }`}
                        placeholder="Your name"
                    />
                    {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors ${errors.email
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                            }`}
                        placeholder="your@email.com"
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                </div>

                {/* Subject */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors ${errors.subject
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                            }`}
                        placeholder="Project inquiry"
                    />
                    {errors.subject && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${errors.message
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                            }`}
                        placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-accent-500 text-accent-foreground font-semibold rounded-lg hover:bg-accent-600 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <p className="text-green-800 dark:text-green-200 font-medium">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                        <p className="text-red-800 dark:text-red-200 font-medium">
                            ✗ Something went wrong. Please try again or email me directly.
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
