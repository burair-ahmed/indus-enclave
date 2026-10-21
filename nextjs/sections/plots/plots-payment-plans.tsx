"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CreditCard,
    Calendar,
    Clock,
    CheckCircle2,
    KeyRound,
    ArrowRight,
    ShieldCheck,
    Coins,
    Banknote,
    BadgePercent,
    Sparkles,
    PhoneCall
} from "lucide-react";
import { plotsData, PlotData } from "@/data/plots-data";

export function PlotsPaymentPlans() {
    const [selectedPlot, setSelectedPlot] = useState<"80-sq-yards" | "120-sq-yards">("80-sq-yards");

    const currentPlot: PlotData = plotsData[selectedPlot];

    return (
        <section id="payment-plans" className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-50 border-y border-zinc-200">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                        <CreditCard size={14} className="text-zinc-700" />
                        <span>Sunflower Block Plots</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Transparent Payment Plan
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Flexible 3-year payment structures designed for both end-users and smart investors.
                        Transparent milestones with no hidden charges.
                    </p>

                    {/* Interactive Plot Switcher */}
                    <div className="flex items-center p-1.5 bg-white rounded-full border border-zinc-200 mt-8 shadow-sm">
                        <button
                            onClick={() => setSelectedPlot("80-sq-yards")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                selectedPlot === "80-sq-yards"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            80 SQ.YDS PLOT (Rs. 800,000)
                        </button>
                        <button
                            onClick={() => setSelectedPlot("120-sq-yards")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                selectedPlot === "120-sq-yards"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            120 SQ.YDS PLOT (Rs. 1,200,000)
                        </button>
                    </div>
                </div>

                {/* 3 Core Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Card 1: Plot Identity */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white p-7 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden flex flex-col justify-between"
                    >
                        <div>
                            <div className="size-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-800 mb-5">
                                <Coins size={24} />
                            </div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                                Total Investment
                            </span>
                            <h3 className="text-3xl font-extrabold text-zinc-900 mt-1">
                                Rs. {currentPlot.totalAmountFormatted}
                            </h3>
                            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                                {currentPlot.tagline}
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-zinc-700">
                            <CheckCircle2 size={15} className="text-emerald-600" />
                            <span>Sunflower Block Residential Plot</span>
                        </div>
                    </motion.div>

                    {/* Card 2: 3 Years Schedule */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-7 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between"
                    >
                        <div>
                            <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-5 border border-white/20">
                                <Clock size={24} />
                            </div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-amber-100">
                                Tenor &amp; Flexibility
                            </span>
                            <h3 className="text-3xl font-extrabold text-white mt-1">
                                {currentPlot.paymentPlanDuration}
                            </h3>
                            <p className="text-xs text-amber-50 mt-2 leading-relaxed">
                                Spread across 36 monthly installments ({currentPlot.installments.monthly.amountFormatted} / mo) and 6 half-yearly payments.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-white">
                            <CheckCircle2 size={15} className="text-amber-200" />
                            <span>Easy Installment Convenience</span>
                        </div>
                    </motion.div>

                    {/* Card 3: Final Possession */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-zinc-900 text-white p-7 rounded-3xl border border-zinc-800 shadow-xl relative overflow-hidden flex flex-col justify-between"
                    >
                        <div>
                            <div className="size-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-amber-400 mb-5 border border-zinc-700">
                                <KeyRound size={24} />
                            </div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                                Handover Milestone
                            </span>
                            <h3 className="text-3xl font-extrabold text-white mt-1">
                                Rs. {currentPlot.possessionFormatted}
                            </h3>
                            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                                Payable on physical demarcation and possession handover. Clear title ownership transfer.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs font-semibold text-zinc-300">
                            <CheckCircle2 size={15} className="text-emerald-400" />
                            <span>Guaranteed Possession Handover</span>
                        </div>
                    </motion.div>
                </div>

                {/* Step-by-Step Payment Breakdown Schedule */}
                <div className="bg-white rounded-3xl p-6 md:p-10 border border-zinc-200 shadow-sm mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-100 pb-6 mb-8">
                        <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                                Sunflower Block Plots
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-1">
                                {currentPlot.title} Payment Breakdown
                            </h3>
                            <p className="text-sm text-zinc-600 mt-1">
                                Complete payment schedule with exact milestone amounts and timing.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="bg-zinc-100 text-zinc-800 text-xs font-semibold px-4 py-2 rounded-full border border-zinc-200">
                                36 Total Months
                            </span>
                            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-4 py-2 rounded-full border border-amber-200">
                                Total: Rs. {currentPlot.totalAmountFormatted}
                            </span>
                        </div>
                    </div>

                    {/* Milestone Cards / Table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {currentPlot.milestones.map((milestone, idx) => (
                            <motion.div
                                key={milestone.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                                    milestone.highlight
                                        ? "bg-amber-50/70 border-amber-300 shadow-sm"
                                        : "bg-zinc-50/75 border-zinc-200/90 hover:bg-white hover:shadow-sm"
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">
                                            Step 0{idx + 1}
                                        </span>
                                        {milestone.highlight && (
                                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">
                                                Final Handover
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="text-base font-bold text-zinc-900">
                                        {milestone.title}
                                    </h4>
                                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>

                                <div className="mt-5 pt-3 border-t border-zinc-200/60">
                                    <span className="text-[11px] text-zinc-500 block">Amount</span>
                                    <div className="text-lg md:text-xl font-mono font-extrabold text-zinc-900 mt-0.5">
                                        Rs. {milestone.amountFormatted}
                                    </div>
                                    <span className="text-[11px] text-amber-800 font-medium mt-1 block">
                                        {milestone.timing}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary Totals Bar */}
                    <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-900 text-white p-6 rounded-2xl">
                        <div className="text-center sm:text-left">
                            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                                Complete 3-Year Plan Sum
                            </span>
                            <h4 className="text-xl md:text-2xl font-bold text-white mt-0.5">
                                Total Amount: <span className="text-amber-400">Rs. {currentPlot.totalAmountFormatted}</span>
                            </h4>
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href="/contact"
                                className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-md flex items-center gap-2"
                            >
                                <span>Schedule a Visit</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Indus Enclave Vision Statement / Narrative Provided by User */}
                <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-sm overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
                            <Sparkles size={14} className="text-amber-600" />
                            <span>Indus Enclave Commitment</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tight mb-5">
                            3 Years Payment Plan at Indus Enclave
                        </h3>

                        {/* Exact description paragraph from user */}
                        <p className="text-zinc-700 text-base md:text-lg leading-relaxed font-light mb-8 italic">
                            &ldquo;{currentPlot.description}&rdquo;
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="bg-zinc-900 hover:bg-zinc-800 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow flex items-center gap-2"
                            >
                                <Calendar size={16} className="text-amber-400" />
                                <span>Schedule a Visit</span>
                            </a>
                            <a
                                href="tel:+923293023156"
                                className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                            >
                                <PhoneCall size={16} className="text-zinc-600" />
                                <span>+92 329 302 3156</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
