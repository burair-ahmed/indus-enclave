"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Plus,
    Minus,
    HelpCircle,
    ShieldCheck,
    Coins,
    Trees,
    KeyRound,
    FileText,
    Sparkles,
    CheckCircle2,
    X,
    ArrowRight
} from "lucide-react";
import { allFaqs, faqCategories, FaqItem } from "@/data/faq-data";

export function FaqAccordionSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Filter FAQs based on category and live search term
    const filteredFaqs = useMemo(() => {
        return allFaqs.filter((faq) => {
            const matchesCategory =
                selectedCategory === "all" || faq.category === selectedCategory;
            const query = searchQuery.trim().toLowerCase();
            const matchesQuery =
                !query ||
                faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query);
            return matchesCategory && matchesQuery;
        });
    }, [selectedCategory, searchQuery]);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const getCategoryIcon = (iconName: string) => {
        switch (iconName) {
            case "ShieldCheck":
                return <ShieldCheck size={14} />;
            case "Coins":
                return <Coins size={14} />;
            case "Trees":
                return <Trees size={14} />;
            case "KeyRound":
                return <KeyRound size={14} />;
            case "FileText":
                return <FileText size={14} />;
            default:
                return <HelpCircle size={14} />;
        }
    };

    return (
        <section id="faq-list" className="py-20 md:py-24 px-4 md:px-8 lg:px-16 w-full bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Search Bar & Category Controls */}
                <div className="flex flex-col items-center mb-12">
                    {/* Live Search Bar */}
                    <div className="relative w-full max-w-2xl mb-8">
                        <div className="relative flex items-center">
                            <Search className="size-5 text-zinc-400 absolute left-4 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setOpenIndex(0); // auto-open first match
                                }}
                                placeholder="Search questions (e.g. SBCA, Nooriabad, price, possession, amenities)..."
                                className="w-full pl-12 pr-10 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm md:text-base text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white shadow-sm transition"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3.5 p-1 text-zinc-400 hover:text-zinc-600 rounded-full hover:bg-zinc-100 transition"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 no-scrollbar">
                        {faqCategories.map((cat) => {
                            const active = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setSelectedCategory(cat.id);
                                        setOpenIndex(0);
                                    }}
                                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                                        active
                                            ? "bg-zinc-900 text-white shadow"
                                            : "bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80 border border-zinc-200/60"
                                    }`}
                                >
                                    {getCategoryIcon(cat.icon)}
                                    <span>{cat.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Results count indicator */}
                    <div className="mt-4 text-xs text-zinc-500 font-mono">
                        Showing {filteredFaqs.length} of {allFaqs.length} questions
                        {searchQuery && ` for "${searchQuery}"`}
                    </div>
                </div>

                {/* Empty State */}
                {filteredFaqs.length === 0 ? (
                    <div className="text-center py-16 bg-zinc-50 rounded-3xl border border-dashed border-zinc-300 p-8">
                        <HelpCircle className="size-12 text-zinc-400 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-zinc-900">No matching questions found</h3>
                        <p className="text-sm text-zinc-500 mt-1 max-w-md mx-auto">
                            We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Try another term or contact our sales team directly.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("all");
                            }}
                            className="mt-5 px-5 py-2.5 bg-zinc-900 text-white text-xs font-semibold rounded-xl hover:bg-zinc-800 transition"
                        >
                            Reset Search &amp; Show All
                        </button>
                    </div>
                ) : (
                    /* Accordion Items List */
                    <div className="space-y-4">
                        {filteredFaqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={faq.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                                        isOpen
                                            ? "bg-white border-zinc-900/50 shadow-md ring-1 ring-zinc-900/10"
                                            : "bg-zinc-50/70 border-zinc-200/80 hover:bg-white hover:border-zinc-300"
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer gap-4"
                                    >
                                        <div className="flex items-start gap-3">
                                            {faq.highlight && (
                                                <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                                                    Key Fact
                                                </span>
                                            )}
                                            <h3 className={`font-semibold text-sm md:text-base pr-2 ${
                                                isOpen ? "text-zinc-950 font-bold" : "text-zinc-800"
                                            }`}>
                                                {faq.question}
                                            </h3>
                                        </div>

                                        <div
                                            className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                                isOpen ? "bg-zinc-900 text-white" : "bg-zinc-200/70 text-zinc-600"
                                            }`}
                                        >
                                            {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                            >
                                                <div className="px-5 md:px-6 pb-6 pt-1 border-t border-zinc-100">
                                                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                                                        {faq.answer}
                                                    </p>

                                                    {/* Quick Related Action for key facts */}
                                                    {faq.id === "money-needed-to-buy-plot" && (
                                                        <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-3">
                                                            <a
                                                                href="/plots"
                                                                className="inline-flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-700 font-bold"
                                                            >
                                                                <span>View Sunflower Block Plots &amp; Payment Plans</span>
                                                                <ArrowRight size={13} />
                                                            </a>
                                                        </div>
                                                    )}

                                                    {faq.id === "sbca-sda-approval" && (
                                                        <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                                                            <CheckCircle2 size={14} className="text-emerald-600" />
                                                            <span>Officially verified by Sindh Building Control Authority (SBCA) and Sehwan Development Authority (SDA)</span>
                                                        </div>
                                                    )}

                                                    {faq.id === "villas-possession-timeline" && (
                                                        <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-3">
                                                            <a
                                                                href="/villas"
                                                                className="inline-flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-700 font-bold"
                                                            >
                                                                <span>Explore 80 &amp; 120 SQ.YDS Villas Floor Plans</span>
                                                                <ArrowRight size={13} />
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
