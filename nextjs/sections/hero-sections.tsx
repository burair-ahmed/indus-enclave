"use client";

import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <motion.section className="relative flex flex-col items-center min-h-screen justify-center bg-black bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 w-full"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Dark overlay with low opacity */}
            <div className="absolute inset-0 bg-black/20" />

            <motion.div className="relative z-10 bg-white/20 backdrop-blur text-sm text-white pl-2 pr-4 py-1 rounded-full flex items-center gap-2 border border-white/20"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <HomeIcon size={16} />
                <p>Government Approved Plots on M-9 Motorway</p>
            </motion.div>
            <motion.h1 className="relative z-10 text-5xl md:text-[64px] text-zinc-50 font-medium max-w-3xl text-center mt-5 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Own Your Plot in Sunflower Block, Indus Enclave
            </motion.h1>
            <motion.p className="relative z-10 text-white max-w-120 text-center mt-3"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                80 & 120 sq. yard plots available on easy monthly installments. Fully approved by SBCA & SDA. Located at M-9 Motorway Exit 8, Nooriabad.
            </motion.p>
            <motion.div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Link
                    href="/plots"
                    className="bg-zinc-50 hover:bg-zinc-200 px-6 py-2.5 rounded-md text-zinc-800 text-sm font-medium cursor-pointer transition inline-flex items-center justify-center shadow-md hover:-translate-y-0.5 duration-200"
                >
                    View Plots & Prices
                </Link>
                <Link
                    href="/contact"
                    className="border border-slate-200/80 bg-black/30 backdrop-blur-sm hover:bg-white/10 text-zinc-50 px-5 py-2.5 rounded-md text-sm font-medium cursor-pointer transition group inline-flex items-center justify-center shadow-sm hover:-translate-y-0.5 duration-200"
                >
                    <div className="relative overflow-hidden">
                        <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                            Book a Free Site Visit
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                            Book a Free Site Visit
                        </span>
                    </div>
                </Link>
            </motion.div>
        </motion.section>
    )
}