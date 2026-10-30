"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function AboutHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center min-h-[72vh] justify-center bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-32 pb-24 overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Dark & Gradient Overlays for high contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            <motion.div
                className="relative z-10 bg-white/10 backdrop-blur-md text-xs sm:text-sm text-amber-300 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-400/30 shadow-lg mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
            >
                <Building2 size={16} className="text-amber-400" />
                <span className="font-medium tracking-wide">A Project of Al-Ashraf Group of Companies</span>
            </motion.div>

            <motion.h1
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-zinc-50 font-medium max-w-4xl text-center leading-[1.15] tracking-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 30 }}
            >
                Building Legacies &amp; Communities on the{" "}
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">
                    M-9 Motorway
                </span>
            </motion.h1>

            <motion.p
                className="relative z-10 text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl text-center mt-5 leading-relaxed font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 30 }}
            >
                Indus Enclave represents a new era of master-planned, certified living in Karachi. Delivering SBCA &amp; SDA approved residential plots, modern infrastructure, and transparent 5-year installment plans designed for every Pakistani family.
            </motion.p>

            <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 30 }}
            >
                <Link
                    href="/plots"
                    className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-7 py-3 rounded-xl text-sm cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                    Explore Plots &amp; Prices
                </Link>
                <Link
                    href="/contact"
                    className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-zinc-50 px-6 py-3 rounded-xl text-sm font-medium cursor-pointer transition group inline-flex items-center justify-center shadow-sm hover:-translate-y-0.5 duration-200"
                >
                    <div className="relative overflow-hidden">
                        <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                            Schedule a Site Visit
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                            Schedule a Site Visit
                        </span>
                    </div>
                </Link>
            </motion.div>
        </motion.section>
    );
}
