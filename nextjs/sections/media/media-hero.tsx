"use client";

import { motion } from "framer-motion";
import { Play, Video, ShieldCheck, Sparkles, Film } from "lucide-react";
import { mediaStats } from "@/data/media-data";

export function MediaHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center justify-center min-h-[70vh] bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-32 pb-20 overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Scoped Dark Overlays matching site standard */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <motion.div
                className="relative z-10 bg-white/10 backdrop-blur-md text-xs md:text-sm text-amber-300 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-400/30 shadow-lg mb-5"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
            >
                <Film size={14} className="text-amber-400" />
                <span className="font-medium tracking-wide">
                    Official Video Archive • Site Progress &amp; Drone Surveys
                </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-zinc-50 font-medium max-w-4xl text-center tracking-tight leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 30 }}
            >
                Indus Enclave <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">In Motion</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="relative z-10 text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl text-center mt-4 leading-relaxed font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 30 }}
            >
                Watch verified 4K aerial drone flyovers of the M-9 Motorway Exit 8, heavy machinery
                earthwork in Sunflower Block, and 3D architectural villa walkthroughs.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
                className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 max-w-4xl w-full"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 30 }}
            >
                {mediaStats.map((item) => (
                    <div
                        key={item.label}
                        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-center"
                    >
                        <span className="text-lg md:text-xl font-bold text-amber-300 block">
                            {item.value}
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5 block font-medium">
                            {item.label}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-9"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 30 }}
            >
                <a
                    href="#spotlight-video"
                    className="bg-white hover:bg-zinc-100 text-zinc-900 font-semibold px-7 py-3 rounded-xl text-sm transition-all duration-200 shadow-md flex items-center gap-2"
                >
                    <Play size={16} className="fill-zinc-900" />
                    <span>Watch Featured Survey</span>
                </a>

                <a
                    href="#all-videos"
                    className="bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                >
                    <Video size={16} className="text-amber-400" />
                    <span>Browse All 10+ Videos</span>
                </a>
            </motion.div>

            {/* Transparency disclaimer */}
            <motion.div
                className="relative z-10 mt-7 flex items-center gap-2 text-xs text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
            >
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>SBCA &amp; SDA Verified Project • Al-Ashraf Group Of Companies</span>
            </motion.div>
        </motion.section>
    );
}
