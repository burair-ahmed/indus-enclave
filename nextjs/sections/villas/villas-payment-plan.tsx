"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    Clock,
    CreditCard,
    CheckCircle2,
    ShieldCheck,
    KeyRound,
    Coins,
    HelpCircle,
    ArrowRight
} from "lucide-react";
import { villasData } from "@/data/villas-data";

export function VillasPaymentPlan() {
    const [selectedVilla, setSelectedVilla] = useState<"80-sq-yards" | "120-sq-yards">("80-sq-yards");

    const currentVilla = villasData[selectedVilla];
    const plan = currentVilla.paymentPlan;

    return (
        <section id="payment-plan" className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-50 border-y border-zinc-200">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                        <CreditCard size={14} className="text-zinc-700" />
                        <span>Investment &amp; Schedule</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Flexible Payment Plans
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Indus Enclave makes owning your dream villa seamless with transparent terms,
                        budget-friendly schedules, and possession in only 2 years.
                    </p>

                    {/* Switcher */}
                    <div className="flex items-center p-1.5 bg-white rounded-full border border-zinc-200 mt-8 shadow-sm">
                        <button
                            onClick={() => setSelectedVilla("80-sq-yards")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                selectedVilla === "80-sq-yards"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            80 Sq. Yards Villa
                        </button>
                        <button
                            onClick={() => setSelectedVilla("120-sq-yards")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                selectedVilla === "120-sq-yards"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            120 Sq. Yards Villa
                        </button>
                    </div>
                </div>

                {/* 3 Core Highlight Pillars Requested by User */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Pillar 1: Villa Identity */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white p-7 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden"
                    >
                        <div className="size-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-800 mb-5">
                            <Coins size={24} />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                            Villa Classification
                        </span>
                        <h3 className="text-2xl font-bold text-zinc-900 mt-1">
                            {selectedVilla === "80-sq-yards" ? "80 Sq. Yards Villa" : "120 Sq. Yards Villa"}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                            {currentVilla.summary}
                        </p>
                        <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-zinc-700">
                            <CheckCircle2 size={15} className="text-emerald-600" />
                            <span>Indus Enclave Prime Location</span>
                        </div>
                    </motion.div>

                    {/* Pillar 2: Possessions Within 2 Years */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-7 rounded-3xl shadow-lg relative overflow-hidden"
                    >
                        <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-5 border border-white/20">
                            <KeyRound size={24} />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-amber-100">
                            Milestone Guarantee
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">
                            Possessions Within 2 Years
                        </h3>
                        <p className="text-xs text-amber-50 mt-2 leading-relaxed">
                            Move into your constructed villa in just 24 months. Live comfortably in your dream home
                            while your remaining payments continue over the remaining 3 years.
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-white">
                            <CheckCircle2 size={15} className="text-amber-200" />
                            <span>Guaranteed Construction Delivery</span>
                        </div>
                    </motion.div>

                    {/* Pillar 3: 5 Years Payment Plan */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-zinc-900 text-white p-7 rounded-3xl border border-zinc-800 shadow-xl relative overflow-hidden"
                    >
                        <div className="size-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-amber-400 mb-5 border border-zinc-700">
                            <Clock size={24} />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                            Payment Tenor
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">
                            5 Years Payment Plan
                        </h3>
                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                            Structured across 60 monthly installments designed for financial serenity.
                            Easy installment plans with no heavy lump-sum burdens.
                        </p>
                        <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs font-semibold text-zinc-300">
                            <CheckCircle2 size={15} className="text-emerald-400" />
                            <span>Easy Installments Plan</span>
                        </div>
                    </motion.div>
                </div>

                {/* Structured Breakdown Timeline */}
                <div className="bg-white rounded-3xl p-6 md:p-10 border border-zinc-200 shadow-sm">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-100 pb-6 mb-8">
                        <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                                Step-By-Step Schedule
                            </span>
                            <h3 className="text-2xl font-bold text-zinc-900 mt-1">
                                {plan.title}
                            </h3>
                            <p className="text-sm text-zinc-600 mt-1">
                                {plan.tagline}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-zinc-100 text-zinc-800 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                                60 Total Months
                            </span>
                            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                                Possession at Month 24
                            </span>
                        </div>
                    </div>

                    {/* Timeline Stages */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {plan.breakdownSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className={`p-5 rounded-2xl border transition-all ${
                                    step.stage.includes("Possession")
                                        ? "bg-amber-50/80 border-amber-300 shadow-sm"
                                        : "bg-zinc-50 border-zinc-200/80"
                                }`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="size-7 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">
                                        {idx + 1}
                                    </span>
                                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                                        step.stage.includes("Possession")
                                            ? "bg-amber-500 text-white"
                                            : "bg-zinc-200 text-zinc-800"
                                    }`}>
                                        {step.percentage}
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-zinc-900">
                                    {step.stage}
                                </h4>
                                <p className="text-xs text-amber-700 font-semibold mt-1">
                                    {step.timing}
                                </p>
                                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Key Plan Bullet Points */}
                    <div className="mt-8 pt-6 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {plan.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                                <span>{h}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Bar */}
                    <div className="mt-10 p-6 bg-zinc-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div>
                            <h4 className="text-lg font-bold">Want the full official payment breakdown?</h4>
                            <p className="text-xs text-zinc-400 mt-1">
                                Speak with our dedicated sales advisors for exact installment amounts and bank payment channels.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <a
                                href="#inquire"
                                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold transition shadow-sm"
                            >
                                Inquire Now
                            </a>
                            <a
                                href="tel:+923293023156"
                                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium border border-zinc-700 transition"
                            >
                                Call Sales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
