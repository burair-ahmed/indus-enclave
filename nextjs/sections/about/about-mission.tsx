"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMission() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Left — Image */}
                <motion.div
                    className="relative w-full h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-sm bg-zinc-100"
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 60, mass: 1 }}
                >
                    <Image
                        src="/assets/house.png"
                        alt="Indus Enclave — Our Mission"
                        fill
                        className="object-cover"
                    />
                    {/* floating badge */}
                    <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-md">
                        <p className="text-xs text-zinc-500">Founded</p>
                        <p className="text-xl font-semibold text-zinc-900">2020</p>
                    </div>
                </motion.div>

                {/* Right — Copy */}
                <div className="flex flex-col">
                    <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-zinc-900 inline-block" />
                        <span className="text-sm text-zinc-900 tracking-wide">OUR MISSION</span>
                    </motion.div>

                    <motion.h2
                        className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 leading-tight font-medium max-w-md"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Connecting People to Places They Belong
                    </motion.h2>

                    <motion.p
                        className="text-zinc-500 text-sm md:text-base mt-5 leading-relaxed"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Indus Enclave was founded with one clear purpose — to make property ownership straightforward, transparent, and genuinely exciting. We started as a small boutique agency and grew into one of the region's most trusted names through decades of honest work.
                    </motion.p>

                    <motion.p
                        className="text-zinc-500 text-sm md:text-base mt-4 leading-relaxed"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Whether you are a first-time buyer, a seasoned investor, or a family in search of your forever home, our advisors bring local expertise and personal care to every step of your journey.
                    </motion.p>

                    <motion.button
                        className="mt-8 self-start bg-zinc-950 hover:bg-zinc-800 text-white px-7 py-3 rounded-full text-sm transition cursor-pointer"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Explore Properties
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
