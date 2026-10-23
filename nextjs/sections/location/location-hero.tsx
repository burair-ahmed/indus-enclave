"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { locationMeta } from "@/data/location-data";

export function LocationHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center justify-center min-h-[66vh] bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-32 pb-20 overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Dark & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <motion.div
                className="relative z-10 bg-white/10 backdrop-blur-md text-xs md:text-sm text-amber-300 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-400/30 shadow-lg mb-5"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
            >
                <Compass size={14} className="text-amber-400" />
                <span className="font-medium tracking-wide">
                    {locationMeta.motorway} • {locationMeta.exitNumber}
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-zinc-50 font-medium max-w-4xl text-center tracking-tight leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 30 }}
            >
                Strategic <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">Location</span> &amp; Connectivity
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="relative z-10 text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl text-center mt-4 leading-relaxed font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 30 }}
            >
                Directly on the M-9 Motorway at Exit 8 Nooriabad. An easy, convenient drive from Karachi, Hyderabad, and nearby work and industrial hubs.
            </motion.p>

            {/* Drive Times Grid */}
            <motion.div
                className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 max-w-4xl w-full"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 30 }}
            >
                {locationMeta.driveTimes.map((item) => (
                    <div
                        key={item.label}
                        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-center"
                    >
                        <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-medium">
                            {item.label}
                        </span>
                        <span className="text-lg md:text-xl font-bold text-amber-300 mt-0.5 block">
                            {item.time}
                        </span>
                        <span className="text-[10px] text-zinc-400 block font-mono">
                            {item.distance}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-9"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 30 }}
            >
                <a
                    href="#route-map"
                    className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-7 py-3 rounded-xl text-sm transition-all duration-200 shadow-md flex items-center gap-2"
                >
                    <Navigation size={16} />
                    <span>View Route Map</span>
                </a>

                <a
                    href={locationMeta.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                >
                    <MapPin size={16} className="text-amber-400" />
                    <span>Open in Google Maps</span>
                    <ExternalLink size={13} className="text-zinc-400" />
                </a>
            </motion.div>
        </motion.section>
    );
}
