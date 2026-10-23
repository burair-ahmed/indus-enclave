"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/count-number";

export function Stats() {
    return (
        <section className="py-16 md:py-25 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="flex flex-col items-start max-w-3xl">
                <motion.div className="flex items-center gap-1.5" 
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <span className="size-1.5 bg-zinc-900"></span>
                    <span className="text-sm text-zinc-900">
                        INDUS ENCLAVE
                    </span>
                </motion.div>
                <motion.h2 className="text-5xl md:text-6xl text-zinc-900 mt-8 leading-tight max-w-[610px]"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Your Own Plot. Your Own Home. On Easy Monthly Payments.
                </motion.h2>

                <motion.p className="text-zinc-500 text-sm md:text-base mt-3 max-w-[520px]"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    80 & 120 sq. yard plots in a gated community on M-9 Motorway. Pay in easy monthly installments and get your home keys in just 2 years.
                </motion.p>

                <motion.button className="mt-7 bg-zinc-950 hover:bg-zinc-900 text-white px-7 py-3 rounded-full text-sm transition cursor-pointer" 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    See Available Plots
                </motion.button>
            </div>

            <div className="flex max-lg:flex-col max-lg:gap-10 justify-between max-w-4xl mt-16 md:mt-20">
                <div className="flex flex-col justify-center">
                    <span className="text-4xl md:text-5xl min-w-[152px] text-zinc-900">
                        <CountUp from={0} to={500} />+
                    </span>
                    <span className="text-sm text-zinc-600 mt-4">
                        PLOTS REGISTERED
                    </span>
                </div>

                <div className="max-lg:hidden h-20 w-px bg-zinc-200"></div>

                <div className="flex flex-col justify-center">
                    <span className="text-4xl md:text-5xl min-w-[200px] text-zinc-900">
                        <CountUp from={0} to={2} /> Years
                    </span>
                    <span className="text-sm text-zinc-600 mt-4">
                        HOME KEYS IN YOUR HAND
                    </span>
                </div>

                <div className="max-lg:hidden h-20 w-px bg-zinc-200"></div>

                <div className="flex flex-col justify-center">
                    <span className="text-4xl md:text-5xl min-w-[94px] text-zinc-900">
                        <CountUp from={0} to={100} />%
                    </span>
                    <span className="text-sm text-zinc-600 mt-4">
                        GOVERNMENT APPROVED
                    </span>
                </div>
            </div>
        </section>
    );
}