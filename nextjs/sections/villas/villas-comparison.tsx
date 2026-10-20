"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Scale } from "lucide-react";
import { comparisonSpecs } from "@/data/villas-data";

export function VillasComparison() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Scale size={14} className="text-zinc-700" />
                    <span>Direct Comparison</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                    Side-by-Side Specifications
                </h2>
                <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                    Compare key room measurements, floor plan dimensions, and payment terms to select the villa that fits your family's aspirations.
                </p>
            </div>

            {/* Comparison Table Container */}
            <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-zinc-200 bg-zinc-50/75">
                                <th className="p-5 md:p-6 text-xs font-bold uppercase tracking-wider text-zinc-500 w-1/3">
                                    Feature &amp; Dimension
                                </th>
                                <th className="p-5 md:p-6 text-sm md:text-base font-extrabold text-zinc-900 w-1/3">
                                    <div className="flex items-center gap-2">
                                        <span>80 SQ. Yards Villa</span>
                                        <span className="text-[10px] bg-zinc-200 text-zinc-800 px-2 py-0.5 rounded font-mono font-medium">
                                            Compact Luxury
                                        </span>
                                    </div>
                                </th>
                                <th className="p-5 md:p-6 text-sm md:text-base font-extrabold text-zinc-900 w-1/3 bg-amber-50/40">
                                    <div className="flex items-center gap-2">
                                        <span>120 SQ. Yards Villa</span>
                                        <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-mono font-medium">
                                            Executive Space
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 text-sm">
                            {comparisonSpecs.map((spec, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-zinc-50/50 transition-colors"
                                >
                                    <td className="p-4 md:p-5 font-medium text-zinc-700 flex items-center gap-2">
                                        <span className="size-1.5 rounded-full bg-zinc-400" />
                                        <span>{spec.feature}</span>
                                    </td>
                                    <td className="p-4 md:p-5 text-zinc-900 font-semibold font-mono text-xs md:text-sm">
                                        {spec.villa80}
                                    </td>
                                    <td className="p-4 md:p-5 text-zinc-900 font-semibold font-mono text-xs md:text-sm bg-amber-50/20">
                                        {spec.villa120}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer */}
                <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>All dimensions are based on sanctioned architectural drawings of Indus Enclave.</p>
                    <div className="flex items-center gap-2 font-medium text-zinc-800">
                        <Sparkles size={14} className="text-amber-500" />
                        <span>Both villas feature 2-Year Possession &amp; 5-Year Payment Plans</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
