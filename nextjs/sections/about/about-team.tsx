"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
    {
        title: "Masjid Al-Jabbar",
        subtitle: "Grand Central Mosque",
        image: "/assets/maj.webp",
    },
    {
        title: "Grand Entrance Gateway",
        subtitle: "Main Boulevard",
        image: "/assets/IMG-20231027-WA0030-min.webp",
    },
    {
        title: "Sports & Recreation",
        subtitle: "World-Class Facilities",
        image: "/assets/sports.webp",
    },
    {
        title: "Model Villas",
        subtitle: "Completed Residential Units",
        image: "/assets/IMG-20231027-WA0040-min.webp",
    },
];

export function AboutTeam() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-14">
                    <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-zinc-900 inline-block" />
                        <span className="text-sm text-zinc-900 tracking-wide">PROJECT HIGHLIGHTS</span>
                    </motion.div>
                    <div className="w-36 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent mt-3.5" />
                    <motion.h2
                        className="text-3xl md:text-[40px]/12 text-zinc-900 mt-5 font-medium leading-tight max-w-lg"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Landmarks That Define Indus Enclave
                    </motion.h2>
                    <motion.p
                        className="text-zinc-500 text-sm md:text-base mt-3 max-w-md"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        From grand architectural landmarks to modern recreational facilities — explore what makes Indus Enclave a community like no other on the M-9 Motorway.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            className="group flex flex-col overflow-hidden rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, type: "spring", stiffness: 280, damping: 60, mass: 1 }}
                        >
                            <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 flex flex-col gap-1">
                                <h3 className="text-zinc-900 font-medium text-base">{item.title}</h3>
                                <p className="text-zinc-500 text-sm">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
