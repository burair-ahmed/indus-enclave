"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const categories = [
    "All",
    "Landmarks & Monuments",
    "Site & Boulevard",
    "Villas & Construction",
    "Parks & Amenities",
];

const galleryItems = [
    {
        src: "/assets/maj.webp",
        category: "Landmarks & Monuments",
        title: "Masjid Al-Jabbar — Central Mosque",
        description: "Architectural visualization of the grand central mosque featuring reflecting water pools and modern Islamic design.",
    },
    {
        src: "/assets/IMG-20231027-WA0029-min.webp",
        category: "Landmarks & Monuments",
        title: "Grand Entrance Gateway Arch",
        description: "The iconic Indus Enclave entrance arch featuring cultural truck art murals and official Al-Ashraf crest.",
    },
    {
        src: "/assets/IMG-20231027-WA0030-min.webp",
        category: "Site & Boulevard",
        title: "Tree-Lined Main Boulevard Entry",
        description: "Wide paved access avenue lined with fresh palm trees and infrastructure poles.",
    },
    {
        src: "/assets/IMG-20231027-WA0032-min.webp",
        category: "Landmarks & Monuments",
        title: "Galloping Horse Sculptures",
        description: "Dual white Arabian horse sculptures crowning the central roundabout monument.",
    },
    {
        src: "/assets/IMG-20231027-WA0034-min.webp",
        category: "Landmarks & Monuments",
        title: "Cascading Water Fountain & Tower",
        description: "Tiered ornamental fountain and signature Indus Enclave landmark pylon.",
    },
    {
        src: "/assets/IMG-20231027-WA0040-min.webp",
        category: "Villas & Construction",
        title: "Completed Model Villas",
        description: "Finished blue and ivory contemporary sample villas on site.",
    },
    {
        src: "/assets/IMG-20231027-WA0039-min.webp",
        category: "Site & Boulevard",
        title: "Main Boulevard Infrastructure",
        description: "Paved sector roads with colorful solar lighting poles and roadside green belts.",
    },
    {
        src: "/assets/IMG-20231027-WA0036-min.webp",
        category: "Parks & Amenities",
        title: "Site Office & Visitor Reception",
        description: "Dedicated on-ground reception center with visitor courtyard seating and rooftop sculpture.",
    },
    {
        src: "/assets/IMG-20231027-WA0037-min.webp",
        category: "Parks & Amenities",
        title: "Community Park Panther Sculpture",
        description: "Artistic black panther wildlife sculpture within the landscaped park grounds.",
    },
    {
        src: "/assets/IMG-20231027-WA0031-min.webp",
        category: "Landmarks & Monuments",
        title: "Indus Enclave Gate Signage",
        description: "Architectural detail of the main gateway signage under clear skies.",
    },
    {
        src: "/assets/IMG-20231027-WA0033-min.webp",
        category: "Landmarks & Monuments",
        title: "Monument & Enclave Tower",
        description: "Central landmark statues standing before the architectural entrance tower.",
    },
    {
        src: "/assets/IMG-20231027-WA0035-min.webp",
        category: "Landmarks & Monuments",
        title: "Al-Ashraf Landmark Pylon & Palms",
        description: "Iconic company landmark totem surrounded by date palms and plantation.",
    },
    {
        src: "/assets/IMG-20231027-WA0038-min.webp",
        category: "Parks & Amenities",
        title: "Heritage Bullock Cart & Gazebos",
        description: "Traditional folk art cart monument and visitor rest gazebos on site.",
    },
    {
        src: "/assets/IMG-20231027-WA0045-min.webp",
        category: "Villas & Construction",
        title: "Contemporary Villa Facade",
        description: "Pair of modern single-story model villas ready for resident viewing.",
    },
    {
        src: "/assets/IMG-20231027-WA0042-min.webp",
        category: "Villas & Construction",
        title: "Model Villa Side Elevation",
        description: "Architectural side profile showing compound wall and window framing.",
    },
    {
        src: "/assets/IMG-20231027-WA0041-min.webp",
        category: "Villas & Construction",
        title: "Villa Blockwork Masonry in Progress",
        description: "Solid concrete block construction row for residential units taking shape on ground.",
    },
    {
        src: "/assets/IMG-20231027-WA0043-min.webp",
        category: "Villas & Construction",
        title: "Villa Structural Framing",
        description: "Ongoing wall erection and partition masonry work in the residential block.",
    },
    {
        src: "/assets/IMG-20231027-WA0044-min.webp",
        category: "Villas & Construction",
        title: "Villa Window Openings & Walls",
        description: "High-precision masonry with reinforced lintels and window placement.",
    },
    {
        src: "/assets/IMG-20231027-WA0046-min.webp",
        category: "Villas & Construction",
        title: "Ongoing Villa Construction Units",
        description: "Robust structural units being developed under professional engineering supervision.",
    },
    {
        src: "/assets/IMG-20231027-WA0047-min.webp",
        category: "Villas & Construction",
        title: "Villa Unit Elevation",
        description: "Side perspective of ongoing residential development with clear boundaries.",
    },
    {
        src: "/assets/IMG-20231027-WA0048-min.webp",
        category: "Site & Boulevard",
        title: "Precast Concrete Boundary Panels",
        description: "Heavy-duty boundary wall precast slabs and infrastructure materials on site.",
    },
    {
        src: "/assets/IMG-20231027-WA0049-min.webp",
        category: "Villas & Construction",
        title: "Panoramic Villa Foundations & Plinths",
        description: "Expansive sector view showing layout trenches, plinths, and multiple rising villa structures.",
    },
];

export function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0));
    const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0));

    return (
        <section id="gallery-grid" className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <motion.div
                            className="flex items-center gap-1.5"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <span className="size-1.5 bg-zinc-900 inline-block" />
                            <span className="text-sm text-zinc-900 tracking-wide">ON-GROUND REALITY</span>
                        </motion.div>
                        <motion.h2
                            className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 font-medium leading-tight max-w-md"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                        >
                            Real Development on the Ground
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-zinc-500 text-sm md:text-base max-w-sm"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Explore authentic on-site photographs of Indus Enclave — from the entrance gateway to paved boulevards, model villas, and active construction.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap gap-2 mb-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 280, damping: 60 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                                activeCategory === cat
                                    ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.title + i}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                                className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid mb-5 bg-zinc-100 border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow"
                                onClick={() => openLightbox(i)}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={800}
                                    height={533}
                                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                                    <div className="p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest">{item.category}</span>
                                        <h3 className="text-white font-medium text-base mt-0.5">{item.title}</h3>
                                        <p className="text-white/80 text-xs mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 size-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ZoomIn size={15} className="text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-zinc-400">No images in this category yet.</div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full flex flex-col items-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={filtered[lightboxIndex].src}
                                alt={filtered[lightboxIndex].title}
                                width={1600}
                                height={1066}
                                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                            />
                            {/* Caption */}
                            <div className="mt-4 text-center max-w-2xl px-4">
                                <span className="text-xs text-amber-400 font-medium uppercase tracking-widest">{filtered[lightboxIndex].category}</span>
                                <h3 className="text-white font-medium text-lg mt-1">{filtered[lightboxIndex].title}</h3>
                                <p className="text-white/70 text-sm mt-1 leading-relaxed">{filtered[lightboxIndex].description}</p>
                            </div>
                            {/* Navigation */}
                            <button
                                onClick={prevImage}
                                aria-label="Previous image"
                                className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 size-11 bg-white/10 hover:bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-white transition cursor-pointer shadow-lg"
                            >
                                <ChevronLeft size={22} />
                            </button>
                            <button
                                onClick={nextImage}
                                aria-label="Next image"
                                className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 size-11 bg-white/10 hover:bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-white transition cursor-pointer shadow-lg"
                            >
                                <ChevronRight size={22} />
                            </button>
                            {/* Close */}
                            <button
                                onClick={closeLightbox}
                                aria-label="Close lightbox"
                                className="absolute -top-12 right-0 md:-right-2 size-9 bg-white/10 hover:bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-white transition cursor-pointer"
                            >
                                <X size={18} />
                            </button>
                            {/* Counter */}
                            <div className="absolute -top-10 left-0 text-white/60 text-xs font-mono tracking-wider">
                                {lightboxIndex + 1} / {filtered.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
