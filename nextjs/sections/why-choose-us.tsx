"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { whyChooseUsData } from "@/data/data";
const whyChooseUsImage = "/assets/IMG-20231027-WA0048-min.webp";

export function WhyChooseUs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 mt-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
                {/* Left Column */}
                <div className="flex flex-col">
                    <motion.div className="flex items-center gap-1.5" 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-zinc-900"></span>
                        <span className="text-sm text-zinc-900">
                            WHY CHOOSE US
                        </span>
                    </motion.div>
                    <motion.h2 className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 leading-tight font-medium max-w-100"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Why Families Trust Indus Enclave
                    </motion.h2>

                    {/* Accordion List */}
                    <div className="flex flex-col gap-4 mt-12 md:mt-16 w-full">
                        {whyChooseUsData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div key={index} className="bg-white rounded-sm border border-zinc-100/50 overflow-hidden" 
                                    initial={{ y: 150, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-4 md:py-4 md:px-6 text-left hover:bg-zinc-50/30 transition cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                {item.icon}
                                            </div>
                                            <span className="text-sm md:text-base text-zinc-600">
                                                {item.title}
                                            </span>
                                        </div>
                                        <div>
                                            {isOpen ? (
                                                <Minus className="size-4 text-zinc-700" />
                                            ) : (
                                                <Plus className="size-4 text-zinc-700" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Expandable Description (CSS Grid Transition for smooth open/close) */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <p className="p-4 md:px-10 pt-0 text-xs md:text-sm text-zinc-500 leading-relaxed bg-zinc-50/10">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between">
                    <motion.p className="text-zinc-500 text-sm md:text-base max-w-115 md:mt-20 mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Our team is here to guide you every step of the way — from your first question to the day you move into your new home.
                    </motion.p>
                    
                    <motion.div className="relative w-full aspect-[4/3] md:aspect-auto md:w-121.5 md:h-102.75 rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100 max-w-full" 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Default Image */}
                        <Image src={whyChooseUsImage} alt="Indus Enclave On-Ground Boundary & Infrastructure" width={600} height={450} priority
                            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out"
                        />
                        {/* Elegant overlay badge */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-white/60 shadow-md flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold text-zinc-900">On-Ground Infrastructure</p>
                                <p className="text-[11px] text-zinc-500">M-9 Motorway Corridor • Karachi</p>
                            </div>
                            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase bg-emerald-600 text-white rounded-full">
                                Verified Site
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}