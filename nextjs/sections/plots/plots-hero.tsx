"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, ShieldCheck, Sparkles, Ruler } from "lucide-react";

export function PlotsHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center justify-center min-h-[82vh] bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-32 pb-24 overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Dark & Gradient Overlays for high contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <motion.div
                className="relative z-10 bg-white/10 backdrop-blur-md text-xs md:text-sm text-amber-300 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-400/30 shadow-lg mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
            >
                <Sparkles size={14} className="text-amber-400" />
                <span className="font-medium tracking-wide">Sunflower Block • 3 Years Flexible Payment Plan</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-50 font-medium max-w-4xl text-center tracking-tight leading-[1.12]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 30 }}
            >
                Sunflower Block <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">
                    Residential Plots
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="relative z-10 text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl text-center mt-5 leading-relaxed font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 30 }}
            >
                Secure your ideal residential plot with premium 80 SQ.YDS &amp; 120 SQ.YDS options.
                Affordable booking starting from just <span className="text-amber-300 font-semibold">Rs. 25,000</span>,
                36 easy monthly installments, and great long-term value for your family.
            </motion.p>

            {/* Quick Stats Badges */}
            <motion.div
                className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 max-w-4xl w-full"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 30 }}
            >
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-center">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-medium">Plot Sizes</span>
                    <span className="text-lg md:text-xl font-bold text-white mt-0.5 block">80 &amp; 120 SQ.YDS</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-center">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-medium">Booking From</span>
                    <span className="text-lg md:text-xl font-bold text-amber-300 mt-0.5 block">Rs. 25,000</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-center">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-medium">Monthly Installment</span>
                    <span className="text-lg md:text-xl font-bold text-white mt-0.5 block">From Rs. 10,000</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-center">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-medium">Payment Period</span>
                    <span className="text-lg md:text-xl font-bold text-white mt-0.5 block">3 Years Plan</span>
                </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-10"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 30 }}
            >
                <a
                    href="#payment-plans"
                    className="bg-white hover:bg-zinc-100 text-zinc-900 px-7 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                >
                    <span>View Payment Plans</span>
                    <ArrowRight size={16} />
                </a>

                <a
                    href="#plot-dimensions"
                    className="bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 flex items-center gap-2"
                >
                    <Ruler size={16} />
                    <span>Plot Dimensions</span>
                </a>

                <a
                    href="/contact"
                    className="bg-amber-500 hover:bg-amber-600 text-zinc-950 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 shadow-md hover:shadow-amber-500/20 hover:-translate-y-0.5 flex items-center gap-2"
                >
                    <Calendar size={16} />
                    <span>Schedule a Visit</span>
                </a>
            </motion.div>
        </motion.section>
    );
}
