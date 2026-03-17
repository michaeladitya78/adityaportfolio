import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Helmet>
                <title>Contact - Aditya | Get In Touch</title>
                <meta name="description" content="Let's work together! Get in touch via the contact form or connect with me on social media." />
            </Helmet>

            <Header />

            <main>
                <ContactHero />
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <ContactForm />
                            <ContactInfo />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
