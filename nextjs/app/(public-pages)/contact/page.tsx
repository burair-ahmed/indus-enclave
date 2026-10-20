import { ContactHero } from "@/sections/contact/contact-hero";
import { ContactCards } from "@/sections/contact/contact-cards";
import { ContactFormSection } from "@/sections/contact/contact-form-section";
import { ContactLocations } from "@/sections/contact/contact-locations";
import { ContactFaq } from "@/sections/contact/contact-faq";

export const metadata = {
    title: "Contact Us - Indus Enclave",
    description:
        "Get in touch with the Indus Enclave team. Reach our sales advisors, schedule a private site tour, or visit our experience center.",
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactCards />
            <ContactFormSection />
            <ContactLocations />
            <ContactFaq />
        </main>
    );
}