"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Factory,
    Utensils,
    Home,
    Fuel,
    Landmark,
    Trees,
    Train,
    Search,
    MapPin,
    Building,
    CheckCircle2,
    X
} from "lucide-react";
import { landmarkCategories } from "@/data/location-data";

export function LocationLandmarks() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "GraduationCap":
                return <GraduationCap size={16} className="text-amber-500" />;
            case "Factory":
                return <Factory size={16} className="text-amber-500" />;
            case "Utensils":
                return <Utensils size={16} className="text-amber-500" />;
            case "Home":
                return <Home size={16} className="text-amber-500" />;
            case "Fuel":
                return <Fuel size={16} className="text-amber-500" />;
            case "Landmark":
                return <Landmark size={16} className="text-amber-500" />;
            case "Trees":
                return <Trees size={16} className="text-amber-500" />;
            case "Train":
                return <Train size={16} className="text-amber-500" />;
            default:
                return <MapPin size={16} className="text-amber-500" />;
        }
    };

    // Filter categories & items based on selected category and search
    const filteredCategories = useMemo(() => {
        return landmarkCategories
            .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
            .map((cat) => {
                const q = searchQuery.trim().toLowerCase();
                if (!q) return cat;

                const matchingItems = cat.items.filter(
                    (item) =>
                        item.name.toLowerCase().includes(q) ||
                        (item.tag && item.tag.toLowerCase().includes(q)) ||
                        (item.distance && item.distance.toLowerCase().includes(q))
                );

                return {
                    ...cat,
                    items: matchingItems
                };
            })
            .filter((cat) => cat.items.length > 0);
    }, [selectedCategory, searchQuery]);

    const totalMatchingItems = filteredCategories.reduce(
        (sum, cat) => sum + cat.items.length,
        0
    );

    return (
        <section id="landmarks" className="py-20 md:py-24 px-4 md:px-8 lg:px-16 w-full bg-zinc-50 border-t border-zinc-200 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                        <MapPin size={14} className="text-zinc-700" />
                        <span>Nearby Ecosystem &amp; Vicinity</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Surrounding Landmarks &amp; Amenities
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Explore renowned schools, banking branches, 200+ industrial complexes, dining spots,
                        fuel stations, and neighboring townships surrounding Indus Enclave.
                    </p>

                    {/* Search & Category Filter Controls */}
                    <div className="w-full max-w-xl mt-8">
                        <div className="relative flex items-center">
                            <Search className="size-4 text-zinc-400 absolute left-4 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search any landmark (e.g. FWO School, National Foods, Bank Al Habib, Shell)..."
                                className="w-full pl-11 pr-10 py-3 bg-white border border-zinc-200 rounded-2xl text-xs md:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 shadow-sm transition"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3.5 p-1 text-zinc-400 hover:text-zinc-600 rounded-full hover:bg-zinc-100 transition"
                                >
                                    <X size={15} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 mt-6 no-scrollbar">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                                selectedCategory === "all"
                                    ? "bg-zinc-900 text-white shadow"
                                    : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200"
                            }`}
                        >
                            All Categories
                        </button>
                        {landmarkCategories.map((cat) => {
                            const active = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                                        active
                                            ? "bg-zinc-900 text-white shadow"
                                            : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200"
                                    }`}
                                >
                                    {getIcon(cat.icon)}
                                    <span>{cat.title.split("(")[0].trim()}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-3 text-xs text-zinc-500 font-mono">
                        Showing {totalMatchingItems} landmarks
                        {searchQuery && ` matching "${searchQuery}"`}
                    </div>
                </div>

                {/* Categorized Landmark Blocks */}
                {filteredCategories.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-zinc-300 p-8">
                        <MapPin className="size-12 text-zinc-400 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-zinc-900">No landmarks found</h3>
                        <p className="text-xs text-zinc-500 mt-1 max-w-md mx-auto">
                            No landmarks matched &ldquo;{searchQuery}&rdquo;. Try another keyword or reset the filter.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("all");
                            }}
                            className="mt-4 px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-xl hover:bg-zinc-800 transition"
                        >
                            Reset Search
                        </button>
                    </div>
                ) : (
                    <div className="space-y-10">
                        {filteredCategories.map((cat) => (
                            <div key={cat.id} className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200/90 shadow-sm">
                                {/* Category Header */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-zinc-100">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                                            {getIcon(cat.icon)}
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-zinc-900">
                                                {cat.title}
                                            </h3>
                                            <span className="text-xs text-zinc-500">
                                                {cat.countText}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="bg-zinc-100 text-zinc-700 text-xs font-mono font-semibold px-3 py-1 rounded-full border border-zinc-200">
                                        {cat.items.length} {cat.items.length === 1 ? "Spot" : "Spots"}
                                    </span>
                                </div>

                                {/* Items Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                                    {cat.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-3.5 rounded-2xl bg-zinc-50/70 border border-zinc-200/70 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all flex items-center justify-between gap-2"
                                        >
                                            <div className="flex items-start gap-2.5 min-w-0">
                                                <span className="size-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                                <div className="min-w-0">
                                                    <h4 className="text-xs md:text-sm font-semibold text-zinc-900 truncate">
                                                        {item.name}
                                                    </h4>
                                                    {item.tag && (
                                                        <span className="text-[11px] text-zinc-500 block truncate">
                                                            {item.tag}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {item.distance && (
                                                <span className="shrink-0 text-[10px] md:text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                                                    {item.distance}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
