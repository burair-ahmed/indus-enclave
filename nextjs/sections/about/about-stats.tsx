"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/count-number";

const stats = [
    { value: 5000, suffix: "+", label: "PROPERTIES SOLD" },
    { value: 500, prefix: "$", suffix: "M+", label: "TOTAL SALES VOLUME" },
    { value: 12, suffix: "+", label: "YEARS OF EXPERIENCE" },
    { value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
];

export function AboutStats() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex items-center gap-1.5"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <span className="size-1.5 bg-zinc-900 inline-block" />
                    <span className="text-sm text-zinc-900 tracking-wide">BY THE NUMBERS</span>
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-[40px] text-zinc-900 mt-4 font-medium leading-tight max-w-lg"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    A Decade of Results That Speak for Themselves
                </motion.h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 280, damping: 60, mass: 1 }}
                        >
                            <span className="text-4xl md:text-5xl text-zinc-900 font-light">
                                {stat.prefix ?? ""}
                                <CountUp from={0} to={stat.value} />
                                {stat.suffix}
                            </span>
                            <span className="text-xs text-zinc-500 mt-3 tracking-widest">{stat.label}</span>
                            <div className="w-8 h-px bg-zinc-300 mt-3" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
