"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function VillasCta() {
    return (
        <section className="pt-4 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <div className="size-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                        <AlertTriangle className="size-7 text-amber-600" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
                        Villas Are No Longer Available for Sale
                    </h2>

                    <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-md leading-relaxed">
                        All villa units at Indus Enclave have been sold out. Thank you for your overwhelming interest. Please explore our available residential and commercial plots instead.
                    </p>

                    <Link
                        href="/plots"
                        className="mt-8 bg-zinc-950 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 group"
                    >
                        <span>Explore Available Plots</span>
                        <MoveRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
