import { Metadata } from "next";
import { VillasHero } from "@/sections/villas/villas-hero";
import { VillasFloorPlans } from "@/sections/villas/villas-floor-plans";
import { VillasPaymentPlan } from "@/sections/villas/villas-payment-plan";
import { VillasComparison } from "@/sections/villas/villas-comparison";
import { VillasAmenities } from "@/sections/villas/villas-amenities";
import { VillasFaq } from "@/sections/villas/villas-faq";
import { VillasCta } from "@/sections/villas/villas-cta";

export const metadata: Metadata = {
    title: "Villas Floor Plans & Payment Plans - Indus Enclave",
    description:
        "Explore luxury 80 SQ. Yards and 120 SQ. Yards villas floor plans at Indus Enclave. Featuring 2 bedrooms, 2 bathrooms, TV lounge + living, modern kitchen + dining, 2-year possession, and 5-year easy installment plans.",
    keywords: [
        "Indus Enclave Villas",
        "Villas Floor Plan",
        "80 Sq Yards Villa",
        "120 Sq Yards Villa",
        "Karachi Real Estate",
        "5 Years Payment Plan",
        "Possession Within 2 Years"
    ],
    openGraph: {
        title: "Villas Floor Plans - Indus Enclave",
        description:
            "Architectural floor plans for 80 and 120 SQ. Yards designer villas with 5-year flexible installments and 2-year possession.",
        images: ["/hero-image.png"],
    },
};

export default function VillasPage() {
    return (
        <main className="min-h-screen bg-white">
            <VillasHero />
            <VillasFloorPlans />
            <VillasPaymentPlan />
            <VillasComparison />
            <VillasAmenities />
            <VillasFaq />
            <VillasCta />
        </main>
    );
}
