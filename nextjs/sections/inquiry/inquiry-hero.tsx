"use client";

import { motion } from "framer-motion";
import { FileText, PhoneCall, Sparkles, MessageSquare } from "lucide-react";

export function InquiryHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center justify-center min-h-[62vh] bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-28 pb-20 overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Dark & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/90 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <motion.div
                className="relative z-10 bg-white/10 backdrop-blur-md text-xs md:text-sm text-amber-300 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-400/30 shadow-lg mb-5"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 25 }}
            >
                <Sparkles size={14} className="text-amber-400" />
                <span className="font-medium tracking-wide">Official Property Inquiries • Sunflower &amp; Rose Blocks</span>
            </motion.div>

            {/* Page Title: Inquiry */}
            <motion.h1
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-zinc-50 font-medium max-w-3xl text-center tracking-tight leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 30 }}
            >
                Property <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">Inquiry</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="relative z-10 text-zinc-300 text-sm sm:text-base max-w-xl text-center mt-4 leading-relaxed font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 30 }}
            >
                Submit your inquiry for residential plots, luxury villas, and flexible payment plans.
                Our dedicated property advisors will provide tailored assistance promptly.
            </motion.p>

            {/* Direct action links */}
            <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 30 }}
            >
                <a
                    href="#inquire-form"
                    className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-amber-500/20 flex items-center gap-2"
                >
                    <FileText size={16} />
                    <span>Inquire Now</span>
                </a>
                <a
                    href="tel:+923293023156"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                >
                    <PhoneCall size={16} className="text-amber-400" />
                    <span>+92 329 302 3156</span>
                </a>
            </motion.div>
        </motion.section>
    );
}
