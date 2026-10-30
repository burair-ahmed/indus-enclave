"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function AboutHero() {
    return (
        <motion.section
            className="flex flex-col items-center min-h-[70vh] justify-center bg-black bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat px-4 w-full pt-24 pb-20"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-white/20 backdrop-blur text-sm text-white pl-2 pr-4 py-1 rounded-full flex items-center gap-2 border border-white/20"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Building2 size={16} />
                <p>Our Story &amp; Vision</p>
            </motion.div>

            <motion.h1
                className="text-5xl md:text-[64px] text-zinc-50 font-medium max-w-3xl text-center mt-5 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Built on Trust. Driven by Passion.
            </motion.h1>

            <motion.p
                className="text-white/80 max-w-xl text-center mt-3 text-base"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                At Indus Enclave, we believe every family deserves a home they love. We have been turning that belief into reality for over a decade.
            </motion.p>

            <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Link
                    href="/plots"
                    className="bg-zinc-50 hover:bg-zinc-200 px-6 py-2.5 rounded-md text-zinc-800 text-sm font-medium cursor-pointer transition inline-flex items-center justify-center shadow-md hover:-translate-y-0.5 duration-200"
                >
                    Explore Plots
                </Link>
                <Link
                    href="/contact"
                    className="border border-slate-200 text-zinc-50 px-5 py-2.5 rounded-md text-sm font-medium cursor-pointer transition group inline-flex items-center justify-center shadow-sm hover:-translate-y-0.5 duration-200"
                >
                    <div className="relative overflow-hidden">
                        <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                            Contact Our Team
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                            Contact Our Team
                        </span>
                    </div>
                </Link>
            </motion.div>
        </motion.section>
    );
}
