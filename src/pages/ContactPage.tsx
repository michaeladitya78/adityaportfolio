import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Helmet>
                <title>Contact - Aditya | Get In Touch</title>
                <meta name="description" content="Let's work together! Get in touch via the contact form or connect with me on social media." />
            </Helmet>

            <Header />

            <main className="pt-20">
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
