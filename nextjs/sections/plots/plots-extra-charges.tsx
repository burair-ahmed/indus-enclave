"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Percent,
    Wind,
    Maximize,
    Navigation,
    Trees,
    Check,
    Calculator,
    Info,
    ArrowRight
} from "lucide-react";
import { extraChargesList, ExtraChargeItem, plotsData } from "@/data/plots-data";

export function PlotsExtraCharges() {
    const [calcPlot, setCalcPlot] = useState<"80-sq-yards" | "120-sq-yards">("80-sq-yards");
    const [selectedCharges, setSelectedCharges] = useState<string[]>(["west-open"]);

    const baseAmount = plotsData[calcPlot].totalAmount;

    // Toggle extra charge
    const toggleCharge = (id: string) => {
        if (selectedCharges.includes(id)) {
            setSelectedCharges(selectedCharges.filter((c) => c !== id));
        } else {
            setSelectedCharges([...selectedCharges, id]);
        }
    };

    const totalPercentage = selectedCharges.length * 10;
    const extraChargesSum = (baseAmount * totalPercentage) / 100;
    const finalAmount = baseAmount + extraChargesSum;

    const getIcon = (id: string) => {
        switch (id) {
            case "west-open":
                return <Wind size={22} className="text-sky-500" />;
            case "corner":
                return <Maximize size={22} className="text-amber-500" />;
            case "road-facing":
                return <Navigation size={22} className="text-indigo-500" />;
            case "park-facing":
                return <Trees size={22} className="text-emerald-500" />;
            default:
                return <Percent size={22} className="text-zinc-500" />;
        }
    };

    return (
        <section id="extra-charges" className="py-20 px-4 md:px-8 lg:px-16 bg-white w-full">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
                        <Percent size={14} className="text-amber-600" />
                        <span>Premium Category Plots</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Extra Category Charges
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Special plots (like corner, west-open, road-facing, or park-facing) have a small 10% extra charge
                        because of their prime location and added benefits.
                    </p>
                </div>

                {/* 4 Extra Charges Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    {extraChargesList.map((charge) => {
                        const isSelected = selectedCharges.includes(charge.id);
                        return (
                            <motion.div
                                key={charge.id}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => toggleCharge(charge.id)}
                                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                                    isSelected
                                        ? "bg-zinc-900 text-white border-zinc-900 shadow-xl"
                                        : "bg-zinc-50 hover:bg-white text-zinc-900 border-zinc-200 hover:shadow-md"
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className={`size-12 rounded-2xl flex items-center justify-center ${
                                                isSelected ? "bg-zinc-800" : "bg-white shadow-sm border border-zinc-200"
                                            }`}
                                        >
                                            {getIcon(charge.id)}
                                        </div>
                                        <span
                                            className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                                                isSelected
                                                    ? "bg-amber-400 text-zinc-950 font-bold"
                                                    : "bg-amber-100 text-amber-900 font-bold"
                                            }`}
                                        >
                                            +{charge.percentageText}
                                        </span>
                                    </div>

                                    <h3 className={`text-xl font-bold ${isSelected ? "text-white" : "text-zinc-900"}`}>
                                        {charge.name}
                                    </h3>
                                    <p
                                        className={`text-xs mt-2 leading-relaxed ${
                                            isSelected ? "text-zinc-300" : "text-zinc-600"
                                        }`}
                                    >
                                        {charge.description}
                                    </p>
                                </div>

                                <div
                                    className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                                        isSelected
                                            ? "border-zinc-800 text-amber-400"
                                            : "border-zinc-200 text-zinc-600"
                                    }`}
                                >
                                    <span>{isSelected ? "Selected in Calculator" : "Click to Calculate"}</span>
                                    <div
                                        className={`size-5 rounded-full flex items-center justify-center ${
                                            isSelected ? "bg-amber-400 text-zinc-950" : "border border-zinc-300"
                                        }`}
                                    >
                                        {isSelected && <Check size={12} strokeWidth={3} />}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Interactive Real-Time Calculator Container */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 text-white rounded-3xl p-6 md:p-10 border border-zinc-800 shadow-2xl">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
                        <div className="flex items-center gap-3">
                            <div className="size-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                                <Calculator size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    Extra Charges Calculator
                                </h3>
                                <p className="text-xs text-zinc-400 mt-0.5">
                                    Select your plot size and tick any desired premium categories above to estimate the total cost.
                                </p>
                            </div>
                        </div>

                        {/* Switcher */}
                        <div className="flex items-center p-1 bg-zinc-800 rounded-full border border-zinc-700">
                            <button
                                onClick={() => setCalcPlot("80-sq-yards")}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                                    calcPlot === "80-sq-yards"
                                        ? "bg-amber-500 text-zinc-950 shadow"
                                        : "text-zinc-300 hover:text-white"
                                }`}
                            >
                                80 SQ.YDS (Rs. 800k)
                            </button>
                            <button
                                onClick={() => setCalcPlot("120-sq-yards")}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                                    calcPlot === "120-sq-yards"
                                        ? "bg-amber-500 text-zinc-950 shadow"
                                        : "text-zinc-300 hover:text-white"
                                }`}
                            >
                                120 SQ.YDS (Rs. 1.2M)
                            </button>
                        </div>
                    </div>

                    {/* Breakdown Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 items-center">
                        <div>
                            <span className="text-xs text-zinc-400 block">Base Plot Amount</span>
                            <div className="text-xl md:text-2xl font-mono font-bold text-white mt-1">
                                Rs. {baseAmount.toLocaleString()}
                            </div>
                            <span className="text-[11px] text-zinc-500 block mt-0.5">
                                {plotsData[calcPlot].title}
                            </span>
                        </div>

                        <div>
                            <span className="text-xs text-zinc-400 block">Extra Percentage</span>
                            <div className="text-xl md:text-2xl font-mono font-bold text-amber-400 mt-1">
                                +{totalPercentage}%
                            </div>
                            <span className="text-[11px] text-zinc-400 block mt-0.5">
                                {selectedCharges.length > 0
                                    ? selectedCharges
                                          .map((c) => extraChargesList.find((x) => x.id === c)?.name)
                                          .join(", ")
                                    : "No Extra Categories Selected"}
                            </span>
                        </div>

                        <div>
                            <span className="text-xs text-zinc-400 block">Extra Amount</span>
                            <div className="text-xl md:text-2xl font-mono font-bold text-amber-300 mt-1">
                                Rs. {extraChargesSum.toLocaleString()}
                            </div>
                            <span className="text-[11px] text-zinc-500 block mt-0.5">
                                Spread across your payment plan
                            </span>
                        </div>

                        <div className="bg-zinc-800/80 p-4 rounded-2xl border border-zinc-700 text-left sm:text-right">
                            <span className="text-xs text-zinc-400 block uppercase tracking-wider font-semibold">
                                Estimated Total
                            </span>
                            <div className="text-2xl md:text-3xl font-mono font-extrabold text-white mt-1">
                                Rs. {finalAmount.toLocaleString()}
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold hover:underline mt-2"
                            >
                                <span>Book This Plot</span>
                                <ArrowRight size={13} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
