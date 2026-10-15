import React from "react";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoSidebar from "../components/contact/ContactInfoSidebar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] flex flex-col justify-between pt-24 sm:pt-28">
      <main className="flex-1">
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-14 max-w-6xl mx-auto">
          {/* Header Component */}
          <ContactHero />

          {/* Form on Left, Info Channels on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfoSidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
