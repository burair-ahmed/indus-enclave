"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Ship, Building2, TrendingUp, Sparkles } from "lucide-react";
import { aboutLocationContent } from "@/data/location-data";

export function LocationAbout() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 w-full bg-zinc-50 border-y border-zinc-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Heading & Narrative */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                            <Sparkles size={14} className="text-amber-600" />
                            <span>Growth &amp; Potential</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight">
                            {aboutLocationContent.title}
                        </h2>

                        <div className="mt-6 space-y-5 text-sm md:text-base text-zinc-600 leading-relaxed font-light">
                            <p className="border-l-2 border-amber-400 pl-4 py-1 text-zinc-800 font-normal">
                                {aboutLocationContent.paragraph1}
                            </p>

                            <p className="bg-white p-5 rounded-2xl border border-zinc-200 text-zinc-800 shadow-sm font-medium">
                                {aboutLocationContent.paragraph2}
                            </p>

                            <p>
                                {aboutLocationContent.paragraph3}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: 3 Key Pillars of the Location */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4"
                        >
                            <div className="size-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                                <Factory size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 text-base">
                                    200+ Operational Factories
                                </h3>
                                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                    Surrounded by thriving packaging, pharmaceutical, textile, and cable manufacturing powerhouses with heavy workforce demand.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -3 }}
                            className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4"
                        >
                            <div className="size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                                <ShieldCheck size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 text-base">
                                    Highway Patrol Police Protection
                                </h3>
                                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                    Active 24/7 Motorway Police presence ensures exceptional travel security and rapid emergency response along the M-9.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -3 }}
                            className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4"
                        >
                            <div className="size-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                                <Ship size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 text-base">
                                    Rapid Sea Port Logistics
                                </h3>
                                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                    Seamless connectivity to Port Muhammad Bin Qasim and Karachi Port for national distribution and global imports/exports.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
