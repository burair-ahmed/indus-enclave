"use client";

import { motion } from "framer-motion";
import { Home, Sparkles, Calendar, ShieldCheck, ChevronDown } from "lucide-react";

export function VillasHero() {
    return (
        <motion.section
            className="relative flex flex-col items-center justify-center min-h-[85vh] bg-black bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat px-4 w-full pt-32 pb-24 overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Dark gradient overlay for ultra-crisp contrast and luxury vibe */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-zinc-950 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-5xl text-center mx-auto">
                {/* Badge */}
                <motion.div
                    className="bg-white/15 backdrop-blur-md text-xs md:text-sm text-zinc-100 pl-3 pr-4 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <Sparkles size={15} className="text-amber-400" />
                    <span className="tracking-wide uppercase font-medium">Indus Enclave • Signature Villa Collection</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-50 font-medium tracking-tight mt-6 leading-[1.1] max-w-4xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Architectural Floor Plans <br />
                    <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        &amp; Designer Luxury Villas
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-zinc-300 max-w-2xl text-base md:text-lg mt-5 leading-relaxed font-light"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Explore meticulously designed <span className="text-white font-medium">80 SQ. Yards</span> and{" "}
                    <span className="text-white font-medium">120 SQ. Yards</span> luxury villas at Indus Enclave.
                    Featuring thoughtful room proportions, <span className="text-amber-300 font-medium">Possessions Within 2 Years</span>,
                    and an ultra-relaxed <span className="text-white font-medium">5 Years Easy Installments Plan</span>.
                </motion.p>

                {/* Key Metrics / Highlights Bar */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-3xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                            <Home size={14} />
                            <span>Villas</span>
                        </div>
                        <p className="text-white text-lg font-bold mt-1">80 &amp; 120</p>
                        <p className="text-zinc-400 text-xs">SQ. Yards Layouts</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                            <Calendar size={14} />
                            <span>Possession</span>
                        </div>
                        <p className="text-white text-lg font-bold mt-1">Within 2 Years</p>
                        <p className="text-zinc-400 text-xs">Guaranteed Keys</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                            <Sparkles size={14} />
                            <span>Installments</span>
                        </div>
                        <p className="text-white text-lg font-bold mt-1">5 Years Plan</p>
                        <p className="text-zinc-400 text-xs">Easy Monthly Schedule</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left">
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                            <ShieldCheck size={14} />
                            <span>Project</span>
                        </div>
                        <p className="text-white text-lg font-bold mt-1">Indus Enclave</p>
                        <p className="text-zinc-400 text-xs">Gated Living Community</p>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4 mt-9"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <a
                        href="#floor-plans"
                        className="bg-white hover:bg-zinc-100 text-zinc-900 px-7 py-3 rounded-full text-sm font-semibold tracking-wide shadow-xl transition-all hover:scale-105 duration-200"
                    >
                        View Floor Plans
                    </a>
                    <a
                        href="#payment-plan"
                        className="bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium transition-all hover:border-white/40 duration-200"
                    >
                        Payment Plan
                    </a>
                    <a
                        href="#inquire"
                        className="bg-zinc-900/80 hover:bg-zinc-900 text-zinc-200 border border-zinc-700 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                    >
                        Book a Site Visit
                    </a>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    className="mt-12 text-zinc-400 flex flex-col items-center gap-1 text-xs"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <span>Scroll to explore layouts</span>
                    <ChevronDown size={16} />
                </motion.div>
            </div>
        </motion.section>
    );
}
