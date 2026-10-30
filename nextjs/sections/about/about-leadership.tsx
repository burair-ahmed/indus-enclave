"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leadership = [
    {
        name: "Ashraf Jabbar Qureshi",
        role: "Chairman",
        org: "Al-Ashraf Group of Companies",
        image: "/ashraf.webp",
    },
    {
        name: "Dai Ali Daniyal",
        role: "CEO",
        org: "Al-Ashraf Group of Companies",
        image: "/dai.webp",
    },
    {
        name: "Armash Ashraf",
        role: "COO",
        org: "Al-Ashraf Group of Companies",
        image: "/armash.webp",
    },
];

export function AboutLeadership() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
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
                        <span className="text-sm text-zinc-900 tracking-wide">OUR LEADERSHIP</span>
                    </motion.div>
                    <div className="w-36 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent mt-3.5" />
                    <motion.h2
                        className="text-3xl md:text-[40px]/12 text-zinc-900 mt-5 font-medium leading-tight max-w-lg"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        The Visionaries Behind Indus Enclave
                    </motion.h2>
                    <motion.p
                        className="text-zinc-500 text-sm md:text-base mt-3 max-w-md"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Meet the leadership team of Al-Ashraf Group of Companies driving the vision of affordable, world-class housing in Sindh.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {leadership.map((member, i) => (
                        <motion.div
                            key={i}
                            className="group flex flex-col items-center text-center"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, type: "spring", stiffness: 280, damping: 60, mass: 1 }}
                        >
                            <div className="relative size-44 md:size-52 rounded-full overflow-hidden bg-zinc-100 border-4 border-white shadow-lg mb-5 group-hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-zinc-900 font-semibold text-lg">{member.name}</h3>
                            <p className="text-zinc-600 text-sm font-medium mt-1">{member.role}</p>
                            <p className="text-zinc-400 text-xs mt-0.5">{member.org}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
