"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const categories = ["All", "Exteriors", "Interiors", "Amenities", "Community"];

const galleryItems = [
    {
        src: "/assets/galleryImage1.png",
        category: "Exteriors",
        title: "Grand Villa Facade",
        description: "Contemporary architecture blending with natural surroundings.",
        span: "col-span-2 row-span-2",
    },
    {
        src: "/assets/galleryImage2.png",
        category: "Interiors",
        title: "Open-Plan Living",
        description: "Spacious living areas designed for modern family life.",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/assets/galleryImage3.png",
        category: "Amenities",
        title: "Resort-Style Pool",
        description: "Private pool with panoramic views.",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/assets/galleryImage4.png",
        category: "Community",
        title: "Lush Landscaping",
        description: "Meticulously curated green spaces throughout the enclave.",
        span: "col-span-1 row-span-2",
    },
    {
        src: "/assets/galleryImage1.png",
        category: "Interiors",
        title: "Master Bedroom Suite",
        description: "Luxurious bedrooms with floor-to-ceiling windows.",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/assets/galleryImage2.png",
        category: "Exteriors",
        title: "Private Entrance Gate",
        description: "Secure and elegant gated access for residents.",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/assets/galleryImage3.png",
        category: "Amenities",
        title: "Clubhouse & Recreation",
        description: "A world-class clubhouse for leisure and entertainment.",
        span: "col-span-2 row-span-1",
    },
    {
        src: "/assets/galleryImage4.png",
        category: "Community",
        title: "Children's Play Area",
        description: "Safe, vibrant play zones designed for kids of all ages.",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/assets/galleryImage1.png",
        category: "Interiors",
        title: "Gourmet Kitchen",
        description: "Chef-grade kitchens with premium fittings throughout.",
        span: "col-span-1 row-span-1",
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
                            <span className="text-sm text-zinc-900 tracking-wide">OUR GALLERY</span>
                        </motion.div>
                        <motion.h2
                            className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 font-medium leading-tight max-w-md"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                        >
                            Every Corner Tells a Story
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-zinc-500 text-sm md:text-base max-w-sm"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        From grand exteriors to intimate interiors, each image captures the craftsmanship and vision behind Indus Enclave.
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
                                    ? "bg-zinc-900 text-white border-zinc-900"
                                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.title + i}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="relative group overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-4"
                                onClick={() => openLightbox(i)}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                                    <div className="p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="text-xs text-white/70 uppercase tracking-widest">{item.category}</span>
                                        <h3 className="text-white font-medium mt-0.5">{item.title}</h3>
                                        <p className="text-white/70 text-xs mt-1">{item.description}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 size-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ZoomIn size={14} className="text-white" />
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
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 60 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={filtered[lightboxIndex].src}
                                alt={filtered[lightboxIndex].title}
                                width={1200}
                                height={800}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                            />
                            {/* Caption */}
                            <div className="mt-4 text-center">
                                <span className="text-xs text-white/50 uppercase tracking-widest">{filtered[lightboxIndex].category}</span>
                                <h3 className="text-white font-medium text-lg mt-1">{filtered[lightboxIndex].title}</h3>
                                <p className="text-white/60 text-sm mt-1">{filtered[lightboxIndex].description}</p>
                            </div>
                            {/* Navigation */}
                            <button
                                onClick={prevImage}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 size-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition cursor-pointer"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 size-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition cursor-pointer"
                            >
                                <ChevronRight size={20} />
                            </button>
                            {/* Close */}
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-4 -right-4 size-9 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition cursor-pointer"
                            >
                                <X size={16} />
                            </button>
                            {/* Counter */}
                            <div className="absolute bottom-full right-0 mb-3 text-white/50 text-sm">
                                {lightboxIndex + 1} / {filtered.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
