"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Lightbulb, Heart } from "lucide-react";

const values = [
    {
        icon: <ShieldCheck className="size-5 text-zinc-700" />,
        title: "Government-Approved Development",
        description:
            "Indus Enclave is 100% approved by SBCA & SDA, ensuring complete legal security for every plot owner with transparent, hassle-free documentation.",
    },
    {
        icon: <Handshake className="size-5 text-zinc-700" />,
        title: "Affordable Ownership",
        description:
            "Our 5-year easy installment plan makes property ownership accessible to every family — no heavy down payments, no financial stress.",
    },
    {
        icon: <Lightbulb className="size-5 text-zinc-700" />,
        title: "Modern Infrastructure",
        description:
            "From wide boulevards and underground utilities to a grand mosque and sports complex, every amenity is designed to international standards.",
    },
    {
        icon: <Heart className="size-5 text-zinc-700" />,
        title: "Community-Centered Living",
        description:
            "We are building more than plots — we are creating a vibrant community with parks, commercial hubs, and world-class facilities for families.",
    },
];

export function AboutValues() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <motion.div
                            className="flex items-center gap-1.5"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <span className="size-1.5 bg-zinc-900 inline-block" />
                            <span className="text-sm text-zinc-900 tracking-wide">OUR VALUES</span>
                        </motion.div>
                        <motion.h2
                            className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 font-medium leading-tight max-w-md"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                        >
                            The Pillars Behind Indus Enclave&apos;s Vision
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-zinc-500 text-sm md:text-base max-w-sm"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        These principles drive every decision at Al-Ashraf Group — from land acquisition and infrastructure planning to customer service and community development.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-50 rounded-xl p-6 flex flex-col gap-4 border border-zinc-100 hover:shadow-md transition-shadow duration-300"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, type: "spring", stiffness: 280, damping: 60, mass: 1 }}
                        >
                            <div className="size-10 rounded-lg bg-white flex items-center justify-center border border-zinc-100 shadow-sm">
                                {v.icon}
                            </div>
                            <h3 className="text-zinc-900 font-medium text-base">{v.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
