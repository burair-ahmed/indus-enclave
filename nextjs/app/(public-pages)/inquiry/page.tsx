import { Metadata } from "next";
import { InquiryHero } from "@/sections/inquiry/inquiry-hero";
import { InquiryFormSection } from "@/sections/inquiry/inquiry-form-section";

export const metadata: Metadata = {
    title: "Inquiry - Indus Enclave",
    description:
        "Official property inquiry for Indus Enclave. Inquire now about plots and villas in Sunflower and Rose Blocks, payment plans, and site visits.",
    keywords: [
        "Indus Enclave Inquiry",
        "Inquire Now",
        "Sunflower Block Inquiry",
        "Rose Block Inquiry",
        "Plots Inquiry",
        "Villas Inquiry",
        "Karachi Real Estate"
    ],
    openGraph: {
        title: "Inquiry - Indus Enclave",
        description:
            "Submit your official property inquiry for Sunflower & Rose Blocks, Plots, and Villas at Indus Enclave.",
        images: ["/hero-bg.webp"]
    }
};

export default function InquiryPage() {
    return (
        <main className="min-h-screen bg-white">
            <InquiryHero />
            <InquiryFormSection />
        </main>
    );
}
