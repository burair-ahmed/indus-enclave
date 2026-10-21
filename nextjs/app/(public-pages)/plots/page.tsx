import { Metadata } from "next";
import { PlotsHero } from "@/sections/plots/plots-hero";
import { PlotsDimensionSection } from "@/sections/plots/plots-dimension-section";
import { PlotsPaymentPlans } from "@/sections/plots/plots-payment-plans";
import { PlotsExtraCharges } from "@/sections/plots/plots-extra-charges";
import { PlotsFeatures } from "@/sections/plots/plots-features";
import { PlotsCta } from "@/sections/plots/plots-cta";

export const metadata: Metadata = {
    title: "Sunflower Block Plots & 3-Year Payment Plans - Indus Enclave",
    description:
        "Explore 80 SQ.YDS and 120 SQ.YDS residential plots in Sunflower Block at Indus Enclave. Convenient 3-year installment plans with monthly installments from Rs. 10,000 and booking from Rs. 25,000.",
    keywords: [
        "Indus Enclave Plots",
        "Sunflower Block Plots",
        "80 Sq Yards Plot",
        "120 Sq Yards Plot",
        "3 Years Payment Plan",
        "Karachi Residential Plots",
        "Indus Enclave Payment Plan",
        "Plots in Karachi"
    ],
    openGraph: {
        title: "Sunflower Block Plots - Indus Enclave",
        description:
            "Prime 80 & 120 SQ.YDS residential plots in Sunflower Block with transparent 3-year payment plans starting from Rs. 25,000 booking.",
        images: ["/hero-bg.webp"]
    }
};

export default function PlotsPage() {
    return (
        <main className="min-h-screen bg-white">
            <PlotsHero />
            <PlotsDimensionSection />
            <PlotsPaymentPlans />
            <PlotsExtraCharges />
            <PlotsFeatures />
            <PlotsCta />
        </main>
    );
}
