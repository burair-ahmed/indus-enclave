import { GalleryHero } from "@/sections/gallery/gallery-hero";
import { GalleryGrid } from "@/sections/gallery/gallery-grid";
import { GalleryVirtualTour } from "@/sections/gallery/gallery-virtual-tour";

export const metadata = {
    title: "Gallery - Indus Enclave",
    description:
        "Explore stunning photos and virtual tours of Indus Enclave's villas, interiors, amenities, and community spaces.",
};

export default function GalleryPage() {
    return (
        <main>
            <GalleryHero />
            <GalleryGrid />
            <GalleryVirtualTour />
        </main>
    );
}
