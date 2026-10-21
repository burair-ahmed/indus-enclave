"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Ruler,
    Compass,
    Layers,
    CheckCircle2,
    ImageIcon,
    Maximize2,
    Info,
    ArrowUpRight,
    MapPin,
    Building2,
    FileText
} from "lucide-react";
import { plotsData } from "@/data/plots-data";

export function PlotsDimensionSection() {
    const [selectedPlot, setSelectedPlot] = useState<"80-sq-yards" | "120-sq-yards">("80-sq-yards");

    const currentPlot = plotsData[selectedPlot];
    const { dimensions, dimensionImage } = currentPlot;

    return (
        <section id="plot-dimensions" className="py-20 px-4 md:px-8 lg:px-16 bg-white w-full">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                        <Ruler size={14} className="text-zinc-700" />
                        <span>Architectural &amp; Site Layout</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Plot Dimensions &amp; Layout
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Accurate plot boundaries, standard frontages, and depth specifications for Sunflower Block.
                        Plan your bespoke luxury villa with optimal space utilization.
                    </p>

                    {/* Plot Switcher */}
                    <div className="flex items-center p-1.5 bg-zinc-100 rounded-full border border-zinc-200 mt-8 shadow-inner">
                        <button
                            onClick={() => setSelectedPlot("80-sq-yards")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                selectedPlot === "80-sq-yards"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            80 SQ.YDS PLOT (20&apos; × 36&apos;)
                        </button>
                        <button
                            onClick={() => setSelectedPlot("120-sq-yards")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                selectedPlot === "120-sq-yards"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            120 SQ.YDS PLOT (24&apos; × 45&apos;)
                        </button>
                    </div>
                </div>

                {/* Main Content Grid: Image Space on Left, Dimension Specs on Right */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedPlot}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                    >
                        {/* ============================================================ */}
                        {/* DEDICATED SPACE FOR PLOT DIMENSION IMAGE (RESERVED FOR USER) */}
                        {/* ============================================================ */}
                        <div className="lg:col-span-7 flex flex-col">
                            <div className="relative flex-1 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-3xl p-6 md:p-8 border border-zinc-800 shadow-xl overflow-hidden flex flex-col justify-between min-h-[480px]">
                                {/* Blueprint Grid Background Pattern */}
                                <div
                                    className="absolute inset-0 opacity-15 pointer-events-none"
                                    style={{
                                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                                        backgroundSize: "24px 24px"
                                    }}
                                />

                                {/* Top Bar in Blueprint View */}
                                <div className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="size-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                                            <Compass size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                                                Sunflower Block • Indus Enclave
                                            </span>
                                            <h3 className="text-white font-bold text-lg">
                                                {currentPlot.title} Layout Dimension
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="bg-zinc-800/90 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700 font-mono">
                                        {currentPlot.dimensions.areaSqFt}
                                    </span>
                                </div>

                                {/* Image or Placeholder Slot */}
                                <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-6">
                                    {dimensionImage.src ? (
                                        /* When user provides the image, it renders here seamlessly */
                                        <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl bg-zinc-950/60 flex items-center justify-center">
                                            <Image
                                                src={dimensionImage.src}
                                                alt={dimensionImage.alt}
                                                fill
                                                className="object-contain p-4"
                                            />
                                        </div>
                                    ) : (
                                        /* High-fidelity Architectural Blueprint Representation & Designated Image Slot */
                                        <div className="w-full flex flex-col items-center">
                                            {/* Stylized Architectural Dimension Diagram */}
                                            <div className="w-full max-w-md bg-zinc-950/80 border-2 border-dashed border-amber-400/40 rounded-2xl p-6 relative shadow-2xl backdrop-blur-sm">
                                                {/* Dimension Markings Top (Frontage) */}
                                                <div className="flex items-center justify-between text-xs font-mono text-amber-300 pb-2 border-b border-amber-400/30 mb-3">
                                                    <span className="text-zinc-500">◀</span>
                                                    <span className="font-bold tracking-wider">
                                                        FRONTAGE: {dimensions.frontage}
                                                    </span>
                                                    <span className="text-zinc-500">▶</span>
                                                </div>

                                                {/* Inner Lot Wireframe Box */}
                                                <div className="relative aspect-[16/10] bg-zinc-900/90 rounded-xl border border-zinc-700/80 p-4 flex flex-col justify-between overflow-hidden">
                                                    {/* Orientation Corner Pill */}
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                                                            Sunflower Block
                                                        </span>
                                                        <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono">
                                                            <Compass size={12} className="text-amber-400" />
                                                            <span>N / W OPEN READY</span>
                                                        </div>
                                                    </div>

                                                    {/* Central Dimension Label */}
                                                    <div className="text-center my-auto py-2">
                                                        <div className="inline-flex items-center justify-center size-12 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 mb-2">
                                                            <Layers size={22} />
                                                        </div>
                                                        <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">
                                                            {dimensions.frontage} × {dimensions.depth}
                                                        </h4>
                                                        <p className="text-xs text-amber-300 font-mono mt-0.5">
                                                            {dimensions.areaSqYds} ({dimensions.areaSqFt})
                                                        </p>
                                                    </div>

                                                    {/* Road Frontage Indicator */}
                                                    <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                                                        <span>Front Access Road</span>
                                                        <span className="text-amber-400 font-semibold">{dimensions.roadWidth}</span>
                                                    </div>
                                                </div>

                                                {/* Dimension Markings Side (Depth) */}
                                                <div className="flex items-center justify-between text-xs font-mono text-amber-300 pt-2 border-t border-amber-400/30 mt-3">
                                                    <span className="text-zinc-500">▲</span>
                                                    <span className="font-bold tracking-wider">
                                                        DEPTH: {dimensions.depth}
                                                    </span>
                                                    <span className="text-zinc-500">▼</span>
                                                </div>
                                            </div>

                                            {/* Explicit Notification Tag for User */}
                                            <div className="mt-5 flex items-center gap-2 bg-amber-400/10 text-amber-300 border border-amber-400/30 px-4 py-2 rounded-xl text-xs font-medium">
                                                <ImageIcon size={16} className="shrink-0 text-amber-400" />
                                                <span>
                                                    <strong>Image Slot Reserved:</strong> Plot dimension diagram / blueprint image will be inserted here.
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Metadata Strip */}
                                <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <Building2 size={14} className="text-zinc-500" />
                                        <span>Construction: {dimensions.permittedFloors}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-amber-400" />
                                        <span className="text-zinc-300 font-medium">Sunflower Block Demarcated</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Detailed Specification Cards & Highlights */}
                        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                            {/* Key Dimension Specs Card */}
                            <div className="bg-zinc-50 p-6 md:p-8 rounded-3xl border border-zinc-200">
                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                                    Technical Specifications
                                </span>
                                <h3 className="text-2xl font-bold text-zinc-900">
                                    {currentPlot.title} Overview
                                </h3>
                                <p className="text-xs text-zinc-600 mt-1 mb-6 leading-relaxed">
                                    Standardized plot dimensions engineered to maximize architectural ventilation, setback allowances, and living space.
                                </p>

                                <div className="space-y-3.5">
                                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm text-sm">
                                        <span className="text-zinc-600 font-medium">Standard Frontage</span>
                                        <span className="font-mono font-bold text-zinc-900">{dimensions.frontage}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm text-sm">
                                        <span className="text-zinc-600 font-medium">Standard Depth</span>
                                        <span className="font-mono font-bold text-zinc-900">{dimensions.depth}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm text-sm">
                                        <span className="text-zinc-600 font-medium">Total Area</span>
                                        <span className="font-mono font-bold text-zinc-900">
                                            {dimensions.areaSqYds} ({dimensions.areaSqFt})
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm text-sm">
                                        <span className="text-zinc-600 font-medium">Road / Street Width</span>
                                        <span className="font-mono font-bold text-zinc-900">{dimensions.roadWidth}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm text-sm">
                                        <span className="text-zinc-600 font-medium">Permitted Structure</span>
                                        <span className="font-mono font-semibold text-zinc-900 text-xs md:text-sm text-right">
                                            {dimensions.permittedFloors}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Investment & Construction Benefits */}
                            <div className="bg-zinc-900 text-white p-6 md:p-7 rounded-3xl border border-zinc-800 shadow-lg">
                                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                    <CheckCircle2 size={15} />
                                    <span>Architectural Freedom</span>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">
                                    Design Your Dream Villa Your Way
                                </h4>
                                <p className="text-xs text-zinc-300 leading-relaxed mb-5">
                                    Build a custom luxury villa with dedicated car porch, open lawn, multiple master suites,
                                    and private rooftop patio in the secure perimeter of Sunflower Block.
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                                    <div>
                                        <span className="text-[11px] text-zinc-400 block">Total Price</span>
                                        <span className="text-xl font-bold text-amber-300">
                                            Rs. {currentPlot.totalAmountFormatted}
                                        </span>
                                    </div>
                                    <a
                                        href="#payment-plans"
                                        className="bg-white hover:bg-zinc-100 text-zinc-900 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow flex items-center gap-1.5"
                                    >
                                        <span>Payment Plan</span>
                                        <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
