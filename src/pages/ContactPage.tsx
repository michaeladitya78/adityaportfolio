// pages/ContactPage.tsx
// The /contact route — renders the Contact section with the enquiry form
// and social links, wrapped in the standard Header/Footer layout shell.

import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';

const ContactPage = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900">
    <Helmet>
      <title>Contact — Aditya | Get In Touch</title>
      <meta
        name="description"
        content="Let's work together! Get in touch via the contact form or connect with me on social media."
      />
    </Helmet>

    <Header />

    <main className="pt-20">
      <Contact />
    </main>

    <Footer />
  </div>
);

export default ContactPage;
