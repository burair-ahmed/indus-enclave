"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Compass,
    Maximize2,
    ExternalLink,
    Play,
    Sparkles,
    Eye,
    MapPin,
    RotateCw,
    ShieldCheck,
    Volume2,
    Camera,
} from "lucide-react";
import Image from "next/image";

const TOUR_URL = "https://maj.armarchengineering.com/";
const THUMBNAIL_IMAGE = "/assets/maj.webp";

const masjidTourFeatures = [
    {
        title: "Main Sanctuary & Prayer Halls",
        desc: "Dedicated spacious prayer halls for men and women, designed with serene natural lighting and high acoustic ceiling acoustics.",
        icon: Compass,
    },
    {
        title: "Reflecting Ponds & Fountains",
        desc: "Tranquil outdoor water bodies featuring lotus fountains, verdant landscaped gardens, and stone courtyards.",
        icon: Sparkles,
    },
    {
        title: "Ablution (Wazoo) & Amenities",
        desc: "Modern dedicated wazoo facilities, visitor parking, accessible entry ramps, and expansive covered verandas.",
        icon: ShieldCheck,
    },
];

const siteHighlights = [
    {
        src: "/assets/maj.webp",
        label: "Masjid Al-Jabbar (Sunset)",
        tag: "Central Mosque",
        desc: "Grand architectural perspective of Masjid Al-Jabbar reflecting across the central water pond.",
    },
    {
        src: "/assets/IMG-20231027-WA0029-min.webp",
        label: "Grand Entrance Gateway",
        tag: "Main Boulevard",
        desc: "The monumental entrance archway with authentic cultural motifs.",
    },
    {
        src: "/assets/IMG-20231027-WA0040-min.webp",
        label: "Contemporary Model Villas",
        tag: "Completed Units",
        desc: "Finished single-story model villas demonstrating modern spatial planning.",
    },
    {
        src: "/assets/IMG-20231027-WA0034-min.webp",
        label: "Water Fountain & Monument",
        tag: "Central Landmark",
        desc: "Ornamental water fountain and architectural landmark tower.",
    },
];

export function GalleryVirtualTour() {
    const [isTourActive, setIsTourActive] = useState(false);
    const [isFullscreenModal, setIsFullscreenModal] = useState(false);

    return (
        <>
            {/* ─── 1. 360° Virtual Tour Section (Dark Immersive Theme) ─── */}
            <section
                id="virtual-tour"
                className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-zinc-950 text-white relative overflow-hidden"
            >
                {/* Ambient Background Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
                <div className="absolute bottom-0 right-0 size-[400px] bg-amber-600/5 blur-[120px] pointer-events-none rounded-full" />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div>
                            <motion.div
                                className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs px-3.5 py-1.5 rounded-full mb-4 shadow-sm"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <Compass size={14} className="text-amber-400 animate-spin-slow" />
                                <span className="font-semibold tracking-wider uppercase text-[11px]">
                                    Masjid Al-Jabbar • 360° Virtual Tour
                                </span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-white max-w-2xl"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 240, damping: 70 }}
                            >
                                Explore <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">Masjid Al-Jabbar</span> at Indus Enclave
                            </motion.h2>

                            <motion.p
                                className="text-zinc-400 text-sm md:text-base mt-3 max-w-xl font-light leading-relaxed"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 30 }}
                            >
                                Step inside the spiritual landmark of Indus Enclave. Take an immersive 360° walkthrough of Masjid Al-Jabbar — featuring grand prayer halls, tranquil water ponds, and modern Islamic architecture.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shrink-0"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 60 }}
                        >
                            <a
                                href={TOUR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs md:text-sm px-5 py-3 rounded-2xl transition-all shadow-lg shadow-amber-500/20 group cursor-pointer"
                            >
                                <span>Open Tour in New Tab</span>
                                <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Main 360 Tour Interactive Player Card */}
                    <motion.div
                        className="relative w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Top Control Bar */}
                        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800/80 text-xs">
                            <div className="flex items-center gap-3">
                                <span className="flex size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="font-medium text-zinc-200">Masjid Al-Jabbar — Interactive 360° Walkthrough</span>
                                <span className="hidden sm:inline text-zinc-600">•</span>
                                <span className="hidden sm:inline text-zinc-400 font-mono text-[11px]">Indus Enclave</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {isTourActive && (
                                    <button
                                        onClick={() => {
                                            setIsTourActive(false);
                                            setTimeout(() => setIsTourActive(true), 100);
                                        }}
                                        className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition cursor-pointer"
                                        title="Reload Tour"
                                    >
                                        <RotateCw size={14} />
                                    </button>
                                )}

                                <button
                                    onClick={() => setIsFullscreenModal(true)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition cursor-pointer font-medium"
                                >
                                    <Maximize2 size={13} />
                                    <span className="hidden sm:inline">Fullscreen</span>
                                </button>

                                <a
                                    href={TOUR_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition cursor-pointer font-medium"
                                >
                                    <ExternalLink size={13} />
                                    <span className="hidden sm:inline">Direct Link</span>
                                </a>
                            </div>
                        </div>

                        {/* Frame Container */}
                        <div className="relative w-full h-[520px] md:h-[650px] lg:h-[720px] bg-black">
                            {isTourActive ? (
                                <iframe
                                    src={TOUR_URL}
                                    title="Masjid Al-Jabbar 360 Virtual Tour"
                                    className="w-full h-full border-0"
                                    allow="accelerometer; gyroscope; magnetometer; vr; xr; xr-spatial-tracking; fullscreen"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-zinc-950 overflow-hidden">
                                    {/* Thumbnail Image Background */}
                                    <Image
                                        src={THUMBNAIL_IMAGE}
                                        alt="Masjid Al-Jabbar at Indus Enclave"
                                        fill
                                        priority
                                        className="object-cover object-center scale-105 transition-transform duration-1000"
                                    />

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60" />

                                    <div className="relative z-10 max-w-xl flex flex-col items-center">
                                        {/* Play Button */}
                                        <div
                                            className="size-20 md:size-24 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 mb-6 cursor-pointer transform hover:scale-110 active:scale-95 transition-transform group"
                                            onClick={() => setIsTourActive(true)}
                                            role="button"
                                            aria-label="Launch 360 Virtual Tour"
                                        >
                                            <Play size={34} className="fill-current ml-1 group-hover:scale-110 transition-transform" />
                                        </div>

                                        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
                                            <Sparkles size={13} className="text-amber-400" />
                                            <span>Click to Launch Virtual Tour</span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
                                            Masjid Al-Jabbar
                                        </h3>

                                        <p className="text-amber-200/90 text-sm font-medium mt-1">
                                            Grand Central Mosque of Indus Enclave
                                        </p>

                                        <p className="text-zinc-200 text-xs sm:text-sm mt-3 leading-relaxed font-light max-w-md">
                                            Navigate seamlessly through 360-degree viewpoints of the prayer halls, ablution areas, and serene reflection ponds with ambient audio.
                                        </p>

                                        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                                            <button
                                                onClick={() => setIsTourActive(true)}
                                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-6 py-3 rounded-2xl transition-all shadow-lg shadow-amber-500/30 cursor-pointer"
                                            >
                                                <Eye size={16} />
                                                <span>Explore Interactive Tour</span>
                                            </button>
                                            <a
                                                href={TOUR_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white font-medium text-sm px-5 py-3 rounded-2xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                                            >
                                                <ExternalLink size={16} />
                                                <span>Open in Full Window</span>
                                            </a>
                                        </div>

                                        {/* Audio hint */}
                                        <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] mt-4">
                                            <Volume2 size={12} className="text-amber-400" />
                                            <span>Features ambient Islamic recitation & soundscape</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Key Tour Features Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {masjidTourFeatures.map((feat) => {
                            const Icon = feat.icon;
                            return (
                                <div
                                    key={feat.title}
                                    className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-4 hover:border-amber-500/40 transition-colors"
                                >
                                    <div className="size-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-white">{feat.title}</h4>
                                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                                            {feat.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* ─── 2. Key On-Ground Highlights (White Background Section) ─── */}
            <section className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-white text-zinc-900 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div>
                            <motion.div
                                className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 text-xs px-3 py-1 rounded-full mb-3"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <Camera size={13} className="text-amber-600" />
                                <span className="font-semibold uppercase tracking-wider text-[10px]">Ground Realities</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 240, damping: 70 }}
                            >
                                Key On-Ground Highlights
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-zinc-600 text-sm md:text-base max-w-md"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 60 }}
                        >
                            Browse real on-site landmark photography captured directly at Indus Enclave on the M-9 Motorway.
                        </motion.p>
                    </div>

                    {/* Cards Grid on White Background */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {siteHighlights.map((spot, i) => (
                            <motion.div
                                key={spot.label}
                                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.08 * i, type: "spring", stiffness: 280, damping: 60 }}
                            >
                                {/* Photo Container */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                                    <Image
                                        src={spot.src}
                                        alt={spot.label}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    {/* Category Pill */}
                                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-zinc-200/80 text-zinc-900 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                        <MapPin size={11} className="text-amber-600" />
                                        <span>{spot.tag}</span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-5 flex flex-col flex-1 bg-white">
                                    <h4 className="font-bold text-base text-zinc-900 tracking-tight group-hover:text-amber-600 transition-colors">
                                        {spot.label}
                                    </h4>
                                    <p className="text-xs text-zinc-600 mt-1.5 line-clamp-2 leading-relaxed">
                                        {spot.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 3. Fullscreen Modal View ─── */}
            {isFullscreenModal && (
                <div className="fixed inset-0 z-[120] bg-black flex flex-col">
                    <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-900 border-b border-zinc-800 text-sm">
                        <div className="flex items-center gap-3">
                            <Compass size={16} className="text-amber-400" />
                            <span className="font-semibold text-white">Masjid Al-Jabbar — 360° Virtual Tour</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href={TOUR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition"
                            >
                                <span>Open Direct Window</span>
                                <ExternalLink size={13} />
                            </a>
                            <button
                                onClick={() => setIsFullscreenModal(false)}
                                className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium cursor-pointer transition"
                            >
                                Close Fullscreen
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-full bg-black">
                        <iframe
                            src={TOUR_URL}
                            title="Masjid Al-Jabbar 360 Virtual Tour Fullscreen"
                            className="w-full h-full border-0"
                            allow="accelerometer; gyroscope; magnetometer; vr; xr; xr-spatial-tracking; fullscreen"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}
