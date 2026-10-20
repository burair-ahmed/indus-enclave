"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { villaFaqs } from "@/data/villas-data";

export function VillasFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto w-full">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                    <HelpCircle size={14} className="text-zinc-700" />
                    <span>Got Questions?</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                    Everything you need to know about the floor plans, 2-year possession, and 5-year installment plans at Indus Enclave.
                </p>
            </div>

            <div className="space-y-3.5">
                {villaFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                                isOpen
                                    ? "bg-white border-zinc-900/40 shadow-sm"
                                    : "bg-white/70 border-zinc-200 hover:border-zinc-300"
                            }`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer gap-4"
                            >
                                <span className="font-semibold text-zinc-900 text-sm md:text-base">
                                    {faq.q}
                                </span>
                                <div
                                    className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                                        isOpen ? "rotate-180 bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600"
                                    }`}
                                >
                                    <ChevronDown size={16} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
