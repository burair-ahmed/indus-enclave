"use client";

import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";
import Image from "next/image";

const virtualTourSpots = [
    {
        src: "/assets/galleryImage1.png",
        label: "Main Entrance",
        tag: "360° View",
    },
    {
        src: "/assets/galleryImage2.png",
        label: "Living Room",
        tag: "360° View",
    },
    {
        src: "/assets/galleryImage3.png",
        label: "Swimming Pool",
        tag: "360° View",
    },
];

export function GalleryVirtualTour() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-zinc-50">
            <div className="max-w-7xl mx-auto">
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
                            <span className="text-sm text-zinc-900 tracking-wide">VIRTUAL TOUR</span>
                        </motion.div>
                        <motion.h2
                            className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 font-medium leading-tight max-w-md"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                        >
                            Step Inside Without Leaving Home
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-zinc-500 text-sm md:text-base max-w-sm"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Experience immersive 360° tours of our flagship villas and amenities — right from your screen.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {virtualTourSpots.map((spot, i) => (
                        <motion.div
                            key={i}
                            className="relative group rounded-xl overflow-hidden cursor-pointer"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 280, damping: 60 }}
                        >
                            <Image
                                src={spot.src}
                                alt={spot.label}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300 flex flex-col items-center justify-center gap-3">
                                <div className="size-14 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Play size={20} className="text-white fill-white ml-0.5" />
                                </div>
                                <span className="text-white font-medium">{spot.label}</span>
                                <span className="text-xs text-white/70 flex items-center gap-1">
                                    <Camera size={12} />
                                    {spot.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 280, damping: 60 }}
                >
                    <a
                        href="/contact"
                        className="bg-zinc-900 hover:bg-zinc-700 text-white px-8 py-3 rounded-md text-sm font-medium transition cursor-pointer"
                    >
                        Schedule an In-Person Tour
                    </a>
                    <a
                        href="/villas"
                        className="border border-zinc-300 text-zinc-700 hover:border-zinc-500 px-8 py-3 rounded-md text-sm font-medium transition cursor-pointer"
                    >
                        Browse Villas
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
