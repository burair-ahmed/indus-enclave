"use client";

import { motion } from "framer-motion";
import { FileCheck, Calendar, Scale, CheckCircle2 } from "lucide-react";

export function TermsHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center justify-center min-h-[58vh] bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-32 pb-20 overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Dark & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <motion.div
                className="relative z-10 bg-white/10 backdrop-blur-md text-xs md:text-sm text-amber-300 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-400/30 shadow-lg mb-5"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
            >
                <Scale size={14} className="text-amber-400" />
                <span className="font-medium tracking-wide">Legal Agreement & Conditions of Use</span>
            </motion.div>

            {/* Page Title */}
            <motion.h1
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-zinc-50 font-medium max-w-4xl text-center tracking-tight leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 30 }}
            >
                Terms of{" "}
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">
                    Service
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="relative z-10 text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl text-center mt-4 leading-relaxed font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 30 }}
            >
                Please read these terms carefully before using Indus Enclave's website, booking services,
                or engaging with Al-Ashraf Group of Companies in any capacity.
            </motion.p>

            {/* Quick Trust Badges */}
            <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs text-zinc-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 30 }}
            >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                    <Calendar size={14} className="text-amber-400" />
                    <span>Effective: October 2026</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                    <FileCheck size={14} className="text-emerald-400" />
                    <span>SBCA / SDA Approved Project</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                    <CheckCircle2 size={14} className="text-amber-400" />
                    <span>Governed by Pakistani Law</span>
                </div>
            </motion.div>
        </motion.section>
    );
}
