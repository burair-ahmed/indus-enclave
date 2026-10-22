import { Metadata } from "next";
import { LocationHero } from "@/sections/location/location-hero";
import { LocationMapSection } from "@/sections/location/location-map-section";
import { LocationAbout } from "@/sections/location/location-about";
import { LocationAtAGlance } from "@/sections/location/location-at-a-glance";
import { LocationLandmarks } from "@/sections/location/location-landmarks";
import { LocationCta } from "@/sections/location/location-cta";

export const metadata: Metadata = {
    title: "Location - Indus Enclave | M-9 Motorway Nooriabad Exit 8",
    description:
        "Strategically located on the M-9 Motorway Exit 8, Nooriabad. Direct expressway link, 45 minutes from Karachi, 200+ operational industries, complete infrastructure, and route map.",
    keywords: [
        "Indus Enclave Location",
        "M9 Motorway Housing Society",
        "Nooriabad Exit 8",
        "Indus Enclave Google Maps",
        "Indus Enclave Route Map",
        "Nooriabad Industrial Estate Plots",
        "Karachi Hyderabad Motorway Housing"
    ],
    openGraph: {
        title: "Location & Connectivity - Indus Enclave",
        description:
            "Prime location on M-9 Motorway Exit 8 Nooriabad. Direct dual-lane motorway access, surrounding industrial hub, and route map.",
        images: ["/map-80-1024x523.jpg"]
    }
};

export default function LocationPage() {
    return (
        <main className="min-h-screen bg-white">
            <LocationHero />
            <LocationMapSection />
            <LocationAbout />
            <LocationAtAGlance />
            <LocationLandmarks />
            <LocationCta />
        </main>
    );
}
