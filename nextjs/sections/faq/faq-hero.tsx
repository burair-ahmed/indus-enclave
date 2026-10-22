"use client";

import { motion } from "framer-motion";
import { HelpCircle, Search, ShieldCheck, MapPin, Coins, Sparkles } from "lucide-react";

export function FaqHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center justify-center min-h-[64vh] bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-32 pb-20 overflow-hidden"
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
                <Sparkles size={14} className="text-amber-400" />
                <span className="font-medium tracking-wide">Knowledge Base &amp; Investor Guide</span>
            </motion.div>

            {/* Page Title */}
            <motion.h1
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-zinc-50 font-medium max-w-3xl text-center tracking-tight leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 30 }}
            >
                Frequently Asked <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">
                    Questions
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="relative z-10 text-zinc-300 text-sm sm:text-base max-w-2xl text-center mt-4 leading-relaxed font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 30 }}
            >
                Everything you need to know about Indus Enclave: SBCA &amp; SDA approvals, M-9 Motorway Exit 8 location,
                underground amenities, plot prices under 1 Million PKR, and easy installment plans.
            </motion.p>

            {/* 3 Quick Highlight Badges */}
            <motion.div
                className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8 max-w-3xl w-full"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 30 }}
            >
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <span className="text-[11px] text-zinc-400 block font-medium">Regulatory Status</span>
                        <span className="text-xs md:text-sm font-bold text-white">SBCA &amp; SDA Approved</span>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <span className="text-[11px] text-zinc-400 block font-medium">Strategic Location</span>
                        <span className="text-xs md:text-sm font-bold text-white">M9 Motorway Exit 8</span>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                        <Coins size={20} />
                    </div>
                    <div>
                        <span className="text-[11px] text-zinc-400 block font-medium">Plot Prices</span>
                        <span className="text-xs md:text-sm font-bold text-amber-300">Under 1 Million PKR</span>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
