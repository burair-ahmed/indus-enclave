"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    ExternalLink,
    Maximize2,
    Compass,
    Navigation,
    Layers,
    X,
    Info,
    CheckCircle2
} from "lucide-react";
import { locationMeta } from "@/data/location-data";

export function LocationMapSection() {
    const [activeTab, setActiveTab] = useState<"illustrated" | "google">("illustrated");
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <section id="route-map" className="py-20 md:py-24 px-4 md:px-8 lg:px-16 w-full bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                        <Navigation size={14} className="text-zinc-700" />
                        <span>Interactive Mapping</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Explore Our Route &amp; Vicinity
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        View the official illustrated motorway route map along the M-9 Karachi–Hyderabad corridor or explore live Google Maps satellite coordinates.
                    </p>

                    {/* Map Switcher Tabs */}
                    <div className="flex items-center p-1.5 bg-zinc-100 rounded-full border border-zinc-200 mt-8 shadow-inner">
                        <button
                            onClick={() => setActiveTab("illustrated")}
                            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                                activeTab === "illustrated"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            <Layers size={15} />
                            <span>Illustrated Route Map</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("google")}
                            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                                activeTab === "google"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            <MapPin size={15} />
                            <span>Google Maps Satellite View</span>
                        </button>
                    </div>
                </div>

                {/* Main Map Presentation Container */}
                <div className="bg-zinc-900 rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
                    {/* Top control bar inside map card */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-zinc-800 text-xs">
                        <div className="flex items-center gap-3">
                            <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-mono text-zinc-300">
                                Coordinates: <strong className="text-white">{locationMeta.coordinates}</strong>
                            </span>
                            <span className="hidden sm:inline text-zinc-600">|</span>
                            <span className="hidden sm:inline text-amber-400 font-semibold">
                                {locationMeta.exitNumber} • Nooriabad
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            {activeTab === "illustrated" && (
                                <button
                                    onClick={() => setIsZoomed(true)}
                                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                                >
                                    <Maximize2 size={13} />
                                    <span>Full Screen View</span>
                                </button>
                            )}

                            <a
                                href={locationMeta.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-4 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition shadow"
                            >
                                <span>Get Directions</span>
                                <ExternalLink size={13} />
                            </a>
                        </div>
                    </div>

                    {/* View 1: Illustrated Route Map */}
                    {activeTab === "illustrated" && (
                        <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-inner flex flex-col items-center">
                            <div
                                onClick={() => setIsZoomed(true)}
                                className="relative w-full aspect-[16/9] md:aspect-[21/10] cursor-zoom-in group"
                            >
                                <Image
                                    src={locationMeta.routeMapImage}
                                    alt="Indus Enclave Illustrated Route Map M-9 Motorway"
                                    fill
                                    priority
                                    className="object-contain p-2 md:p-4 group-hover:scale-[1.01] transition-transform duration-300"
                                />

                                {/* Subtle zoom indicator overlay */}
                                <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur text-white text-xs px-3 py-1.5 rounded-lg opacity-80 group-hover:opacity-100 transition flex items-center gap-1.5">
                                    <Maximize2 size={13} />
                                    <span>Click to Enlarge</span>
                                </div>
                            </div>

                            {/* Caption under illustrated map */}
                            <div className="w-full bg-zinc-950/90 text-zinc-300 p-4 border-t border-zinc-800 text-xs flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={15} className="text-emerald-400" />
                                    <span>
                                        Direct dual-lane entrance gate situated on M-9 Motorway alongside Link Road and Nooriabad Interchange.
                                    </span>
                                </div>
                                <span className="font-mono text-zinc-400 text-[11px]">
                                    Map includes Bahria Town, ASF City, PAF Base, and Key Industrial Units
                                </span>
                            </div>
                        </div>
                    )}

                    {/* View 2: Live Embedded Google Maps View */}
                    {activeTab === "google" && (
                        <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/10] bg-zinc-950 border border-zinc-800">
                            <iframe
                                title="Indus Enclave Google Maps Location"
                                src="https://maps.google.com/maps?q=25.1929845,67.8132019&hl=en&z=14&t=m&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>
                    )}
                </div>

                {/* Lightbox Modal for Illustrated Route Map */}
                <AnimatePresence>
                    {isZoomed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
                        >
                            <div className="w-full max-w-6xl flex items-center justify-between pb-3 text-white">
                                <div className="flex items-center gap-2">
                                    <Compass size={18} className="text-amber-400" />
                                    <h3 className="font-bold text-sm md:text-base">
                                        Indus Enclave Detailed Route Map (M-9 Motorway)
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setIsZoomed(false)}
                                    className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="relative w-full max-w-6xl aspect-[16/9] bg-white rounded-2xl overflow-hidden p-2">
                                <Image
                                    src={locationMeta.routeMapImage}
                                    alt="Enlarged Indus Enclave Route Map"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
                                <span>Press Escape or click Close to return</span>
                                <a
                                    href={locationMeta.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                                >
                                    <span>Open Official Google Pin</span>
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
