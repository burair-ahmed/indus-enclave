import { Metadata } from "next";
import { PlotsHero } from "@/sections/plots/plots-hero";
import { PlotsDimensionSection } from "@/sections/plots/plots-dimension-section";
import { PlotsPaymentPlans } from "@/sections/plots/plots-payment-plans";
import { PlotsExtraCharges } from "@/sections/plots/plots-extra-charges";
import { PlotsFeatures } from "@/sections/plots/plots-features";
import { PlotsCta } from "@/sections/plots/plots-cta";

export const metadata: Metadata = {
    title: "Plots & 5-Year Payment Plans — Residential, Commercial & Cottage Industry | Indus Enclave",
    description:
        "Official 5-Year (60 Months) payment schedules for Residential Plots (80 & 120 Sq. Yds.), Commercial Plots (100 & 200 Sq. Yds.), and Cottage Industry Plots (200 & 400 Sq. Yds.) at Indus Enclave. Easy installments from Rs. 5,000/mo.",
    keywords: [
        "Indus Enclave Plots",
        "Sunflower Block Plots",
        "80 Sq Yards Plot",
        "120 Sq Yards Plot",
        "Commercial Plots Karachi",
        "Cottage Industry Plots",
        "5 Years Payment Plan",
        "Karachi Residential Plots",
        "Indus Enclave Payment Plan",
        "Plots in Karachi"
    ],
    openGraph: {
        title: "Plots & Payment Plans - Indus Enclave",
        description:
            "Prime Residential (80 & 120 Sq. Yds.), Commercial (100 & 200 Sq. Yds.), and Cottage Industry plots with flexible 5-Year installment plans starting from Rs. 5,000/month.",
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
