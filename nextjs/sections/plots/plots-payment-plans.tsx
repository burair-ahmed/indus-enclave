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
    Coins,
    Banknote,
    BadgePercent,
    Sparkles,
    PhoneCall,
    Home,
    Building2,
    Factory,
    Info,
    HelpCircle,
    Check,
    MessageSquare
} from "lucide-react";
import {
    residentialStandardPlan,
    residentialEqualPlan,
    commercialPlan,
    cottageIndustryPlan,
    PaymentPlanCategory,
    TableRowPlan
} from "@/data/plots-data";

type PlanCategoryTab = "residential" | "commercial" | "cottage-industry";
type ResidentialSubPlan = "standard" | "equal";

export function PlotsPaymentPlans() {
    const [activeCategory, setActiveCategory] = useState<PlanCategoryTab>("residential");
    const [residentialSubPlan, setResidentialSubPlan] = useState<ResidentialSubPlan>("standard");

    // Determine current plan object to display
    const currentPlan: PaymentPlanCategory =
        activeCategory === "residential"
            ? residentialSubPlan === "standard"
                ? residentialStandardPlan
                : residentialEqualPlan
            : activeCategory === "commercial"
            ? commercialPlan
            : cottageIndustryPlan;

    // Helper text for WhatsApp inquiry button
    const getWhatsAppMessage = () => {
        let planLabel = "";
        if (activeCategory === "residential") {
            planLabel =
                residentialSubPlan === "standard"
                    ? "Residential Plots (Standard 5-Year Plan - 80 & 120 Sq. Yds.)"
                    : "Residential Plots (Equal Installment Plan - 80 & 120 Sq. Yds.)";
        } else if (activeCategory === "commercial") {
            planLabel = "Commercial Plots (100 & 200 Sq. Yds.)";
        } else {
            planLabel = "Cottage Industry Plots (200 & 400 Sq. Yds.)";
        }
        return encodeURIComponent(
            `Hello Indus Enclave! I am interested in the ${planLabel}. Please share the official payment schedule and booking procedure.`
        );
    };

    return (
        <section id="payment-plans" className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-50 border-y border-zinc-200 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
                        <CreditCard size={14} className="text-amber-600" />
                        <span>Official Payment Schedules</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Transparent Plots Payment Plans
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Explore comprehensive 5-year (60 months) flexible payment schedules across Residential,
                        Commercial, and Cottage Industry plots with zero hidden charges.
                    </p>

                    {/* Primary 3-Category Tabs Switcher */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-white rounded-2xl sm:rounded-full border border-zinc-200 mt-8 shadow-sm w-full max-w-2xl">
                        <button
                            type="button"
                            onClick={() => setActiveCategory("residential")}
                            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                                activeCategory === "residential"
                                    ? "bg-zinc-900 text-white shadow-md"
                                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                            }`}
                        >
                            <Home size={16} />
                            <span>1. Residential Plots</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveCategory("commercial")}
                            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                                activeCategory === "commercial"
                                    ? "bg-zinc-900 text-white shadow-md"
                                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                            }`}
                        >
                            <Building2 size={16} />
                            <span>2. Commercial Plots</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveCategory("cottage-industry")}
                            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                                activeCategory === "cottage-industry"
                                    ? "bg-zinc-900 text-white shadow-md"
                                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                            }`}
                        >
                            <Factory size={16} />
                            <span>3. Cottage Industry</span>
                        </button>
                    </div>

                    {/* Sub-Plan Switcher for Residential (Standard vs Equal Plan) */}
                    {activeCategory === "residential" && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center p-1 bg-zinc-200/80 rounded-full border border-zinc-300 mt-4 shadow-inner"
                        >
                            <button
                                type="button"
                                onClick={() => setResidentialSubPlan("standard")}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                    residentialSubPlan === "standard"
                                        ? "bg-amber-500 text-zinc-950 shadow"
                                        : "text-zinc-700 hover:text-zinc-950"
                                }`}
                            >
                                Standard 60-Month Plan
                            </button>
                            <button
                                type="button"
                                onClick={() => setResidentialSubPlan("equal")}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                    residentialSubPlan === "equal"
                                        ? "bg-amber-500 text-zinc-950 shadow"
                                        : "text-zinc-700 hover:text-zinc-950"
                                }`}
                            >
                                Equal Installment Plan
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* Plan Introduction Banner */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${residentialSubPlan}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-3xl p-6 md:p-8 border border-zinc-200 shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
                                    {currentPlan.badge}
                                </span>
                                <span className="text-xs text-zinc-500 font-medium">
                                    Indus Enclave Official Brochure
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
                                {currentPlan.title}
                            </h3>
                            <p className="text-zinc-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                                {currentPlan.subtitle}. {currentPlan.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                            <a
                                href={`https://wa.me/923293023156?text=${getWhatsAppMessage()}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow flex items-center gap-2"
                            >
                                <MessageSquare size={16} />
                                <span>Get Schedule on WhatsApp</span>
                            </a>
                            <a
                                href="#extra-charges"
                                className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-1.5"
                            >
                                <BadgePercent size={16} className="text-amber-600" />
                                <span>Calculate Extra Charges</span>
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* 3 Visual Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Metric 1 */}
                    <div className="bg-white p-7 rounded-3xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="size-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-5">
                                <Coins size={24} />
                            </div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                                Plot Category
                            </span>
                            <h4 className="text-2xl font-bold text-zinc-900 mt-1">
                                {currentPlan.tableHeaders[1]} &amp; {currentPlan.tableHeaders[2]}
                            </h4>
                            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                                Prime master-planned locations with complete underground electricity, sewerage, water, and carpeted roads.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-zinc-700">
                            <CheckCircle2 size={15} className="text-emerald-600" />
                            <span>100% Legally Approved Layout</span>
                        </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-7 rounded-3xl shadow-lg flex flex-col justify-between">
                        <div>
                            <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-5 border border-white/20">
                                <Clock size={24} />
                            </div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-amber-100">
                                Flexible Payment Tenor
                            </span>
                            <h4 className="text-2xl font-bold text-white mt-1">
                                {currentPlan.duration}
                            </h4>
                            <p className="text-xs text-amber-50 mt-2 leading-relaxed">
                                Convenient 60 monthly installments designed for predictable budgeting without financial stress.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-white">
                            <CheckCircle2 size={15} className="text-amber-200" />
                            <span>No Hidden Surcharges</span>
                        </div>
                    </div>

                    {/* Metric 3 */}
                    <div className="bg-zinc-900 text-white p-7 rounded-3xl border border-zinc-800 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="size-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-amber-400 mb-5 border border-zinc-700">
                                <KeyRound size={24} />
                            </div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                                Guaranteed Milestone Handover
                            </span>
                            <h4 className="text-2xl font-bold text-white mt-1">
                                Demarcation &amp; Possession
                            </h4>
                            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                                Complete documentation, verification, demarcation on master layout, and physical site handover.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs font-semibold text-zinc-300">
                            <CheckCircle2 size={15} className="text-emerald-400" />
                            <span>Full Ownership Transfer</span>
                        </div>
                    </div>
                </div>

                {/* The Complete Payment Schedule Table */}
                <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden mb-12">
                    <div className="p-6 md:p-8 bg-zinc-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                                Complete Tabular Schedule
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">
                                {currentPlan.title}
                            </h3>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-zinc-200 text-xs font-mono border border-white/10 w-fit">
                            <span>Duration: 60 Months</span>
                        </div>
                    </div>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200 bg-zinc-100/80 text-zinc-800">
                                    <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-1/2 md:w-2/5">
                                        {currentPlan.tableHeaders[0]}
                                    </th>
                                    <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-right w-1/4 md:w-3/10">
                                        {currentPlan.tableHeaders[1]}
                                    </th>
                                    <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-right w-1/4 md:w-3/10">
                                        {currentPlan.tableHeaders[2]}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm">
                                {currentPlan.tableRows.map((row, idx) => {
                                    if (row.isTotal) {
                                        return (
                                            <tr
                                                key={row.modeOfPayment}
                                                className="bg-amber-500/10 font-extrabold text-zinc-950 border-t-2 border-amber-500"
                                            >
                                                <td className="py-5 px-6 font-bold text-sm sm:text-base text-zinc-900 flex items-center gap-2">
                                                    <span className="size-2 rounded-full bg-amber-500" />
                                                    <span>{row.modeOfPayment}</span>
                                                </td>
                                                <td className="py-5 px-6 font-mono font-black text-right text-base sm:text-lg text-amber-900">
                                                    Rs. {row.col1}
                                                </td>
                                                <td className="py-5 px-6 font-mono font-black text-right text-base sm:text-lg text-amber-900">
                                                    Rs. {row.col2}
                                                </td>
                                            </tr>
                                        );
                                    }

                                    return (
                                        <tr
                                            key={row.modeOfPayment + idx}
                                            className={`transition-colors ${
                                                row.highlight
                                                    ? "bg-amber-50/60 font-semibold text-zinc-900"
                                                    : idx % 2 === 0
                                                    ? "bg-white hover:bg-zinc-50/80"
                                                    : "bg-zinc-50/40 hover:bg-zinc-50"
                                            }`}
                                        >
                                            <td className="py-4 px-6 text-zinc-800 font-medium">
                                                <div className="flex items-center gap-2">
                                                    {row.highlight && (
                                                        <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                                                    )}
                                                    <span>{row.modeOfPayment}</span>
                                                </div>
                                            </td>
                                            <td
                                                className={`py-4 px-6 text-right font-mono ${
                                                    row.highlight
                                                        ? "text-zinc-900 font-bold"
                                                        : "text-zinc-700"
                                                }`}
                                            >
                                                {row.col1.includes("=") ? (
                                                    <span className="inline-block bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                                                        {row.col1}
                                                    </span>
                                                ) : (
                                                    row.col1
                                                )}
                                            </td>
                                            <td
                                                className={`py-4 px-6 text-right font-mono ${
                                                    row.highlight
                                                        ? "text-zinc-900 font-bold"
                                                        : "text-zinc-700"
                                                }`}
                                            >
                                                {row.col2.includes("=") ? (
                                                    <span className="inline-block bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                                                        {row.col2}
                                                    </span>
                                                ) : (
                                                    row.col2
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Note Box if applicable */}
                    {currentPlan.note && (
                        <div className="p-4 md:p-6 bg-amber-50/80 border-t border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
                            <Info size={18} className="text-amber-700 shrink-0 mt-0.5" />
                            <p className="leading-relaxed font-medium">
                                <span className="font-bold">Important Brochure Note:</span> {currentPlan.note}
                            </p>
                        </div>
                    )}
                </div>

                {/* Additional Guidance & Callouts */}
                {activeCategory === "residential" && residentialSubPlan === "standard" && (
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-zinc-200 shadow-sm mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-zinc-900">
                                    Flexible Half-Yearly Installment Options
                                </h4>
                                <p className="text-xs text-zinc-500">
                                    Choose the installment cadence that matches your financial planning
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                                    Option A — 4 Half-Yearly
                                </span>
                                <div className="font-semibold text-zinc-900">
                                    • 80 Sq. Yds: 50,000 × 4 = Rs. 200,000
                                </div>
                                <div className="font-semibold text-zinc-900 mt-1">
                                    • 120 Sq. Yds: 65,000 × 4 = Rs. 260,000
                                </div>
                                <p className="text-zinc-500 text-xs mt-2">
                                    Higher bi-annual installments completed in fewer payment cycles.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                                    Option B — 8 Half-Yearly
                                </span>
                                <div className="font-semibold text-zinc-900">
                                    • 80 Sq. Yds: 25,000 × 8 = Rs. 200,000
                                </div>
                                <div className="font-semibold text-zinc-900 mt-1">
                                    • 120 Sq. Yds: 32,500 × 8 = Rs. 260,000
                                </div>
                                <p className="text-zinc-500 text-xs mt-2">
                                    Smaller bi-annual installments spread evenly over more payment cycles.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom Assistance Strip */}
                <div className="relative bg-zinc-900 rounded-3xl p-8 md:p-10 border border-zinc-800 text-white shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                            Transparent Developer Pricing
                        </span>
                        <h4 className="text-2xl font-bold text-white">
                            Need Assistance Choosing the Right Plot?
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                            Our team provides direct site tours, file allocation verification, and tailored installment scheduling to suit your requirements.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
                        <a
                            href="/contact"
                            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center gap-2"
                        >
                            <Calendar size={16} />
                            <span>Schedule a Site Visit</span>
                        </a>
                        <a
                            href="tel:+923293023156"
                            className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border border-zinc-700"
                        >
                            <PhoneCall size={16} className="text-amber-400" />
                            <span>+92 329 302 3156</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
