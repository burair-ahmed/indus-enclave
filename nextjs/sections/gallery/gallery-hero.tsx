"use client";

import { motion } from "framer-motion";
import { Images } from "lucide-react";

export function GalleryHero() {
    return (
        <motion.section
            className="relative overflow-hidden flex flex-col items-center min-h-[70vh] justify-center bg-zinc-950 bg-[url('/assets/IMG-20231027-WA0029-min.webp')] bg-cover bg-center bg-no-repeat px-4 w-full pt-28 pb-20"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85 pointer-events-none" />

            <motion.div
                className="relative z-10 bg-white/15 backdrop-blur-md text-sm text-amber-300 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-400/30 mb-2 shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Images size={16} className="text-amber-400" />
                <p className="font-medium tracking-wide">Real On-Ground Site Photography</p>
            </motion.div>

            <motion.h1
                className="relative z-10 text-5xl md:text-[64px] text-zinc-50 font-medium max-w-3xl text-center mt-4 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Explore Our Gallery
            </motion.h1>

            <motion.p
                className="relative z-10 text-zinc-200 max-w-xl text-center mt-3 text-base md:text-lg font-light leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Authentic on-site visuals of Indus Enclave — featuring our entrance gateway, wide boulevards, model villas, and active construction.
            </motion.p>

            <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-3.5 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <a href="#gallery-grid" className="bg-amber-500 hover:bg-amber-400 px-6 py-2.5 rounded-xl text-zinc-950 text-sm font-semibold cursor-pointer transition shadow-md">
                    View All Photos
                </a>
                <a href="#virtual-tour" className="bg-white/15 hover:bg-white/25 border border-amber-400/40 text-amber-300 backdrop-blur-md px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition flex items-center gap-2 shadow-sm">
                    <span>360° Virtual Tour</span>
                </a>
                <a href="/contact" className="border border-white/30 hover:border-white/60 bg-white/10 backdrop-blur-sm text-zinc-50 px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition">
                    Book a Site Visit
                </a>
            </motion.div>
        </motion.section>
    );
}
