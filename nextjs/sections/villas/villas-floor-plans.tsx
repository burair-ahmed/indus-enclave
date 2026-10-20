"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bed,
    Bath,
    Tv,
    Utensils,
    Maximize2,
    Compass,
    Sparkles,
    CheckCircle2,
    Download,
    Trees
} from "lucide-react";
import { villasData, RoomDetail } from "@/data/villas-data";

/* ─── Room meta for 80 sq. yards (matches real floor plan image) ─── */
const rooms80: Record<string, {
    name: string;
    dimension: string;
    description: string;
    features: string[];
    category: string;
}> = {
    bath1: {
        name: "Bathroom 1",
        dimension: "4'-0\" × 6'-6\"",
        description: "Upper private ensuite bathroom with anti-slip designer tiling, premium ceramic sanitary ware, and exhaust ventilation.",
        features: ["Anti-slip ceramic tiles", "Premium sanitary ware", "Exhaust ventilation", "Concealed plumbing"],
        category: "bathroom"
    },
    washing: {
        name: "Washing Area",
        dimension: "Utility Space",
        description: "Dedicated washing and utility room with water inlet/outlet connections and ventilation duct.",
        features: ["Water inlet/outlet points", "Ventilation duct", "Drain slope flooring", "Washing machine space"],
        category: "bathroom"
    },
    bath2: {
        name: "Bathroom 2",
        dimension: "4'-0\" × 6'-6\"",
        description: "Lower ensuite bathroom attached to Bedroom 2 with modern vanity and full-height waterproof wall tiles.",
        features: ["Full-height wall tiles", "Vanity counter space", "Chrome water fittings", "Exhaust fan point"],
        category: "bathroom"
    },
    bed1: {
        name: "Bedroom 1",
        dimension: "10'-0\" × 10'-0\"",
        description: "Spacious upper bedroom with cross-ventilation window, wardrobe niche, and direct access to Bathroom 1.",
        features: ["100 sq. ft. area", "Attached Ensuite Bath", "Cross-ventilation window", "Wardrobe niche"],
        category: "bedroom"
    },
    bed2: {
        name: "Bedroom 2",
        dimension: "10'-0\" × 10'-0\"",
        description: "Generously sized lower bedroom suitable for family or guests, with attached Bathroom 2 and lounge access.",
        features: ["100 sq. ft. area", "Attached Ensuite Bath", "Natural daylight window", "Ceramic floor tiles"],
        category: "bedroom"
    },
    passage: {
        name: "Passage",
        dimension: "Corridor",
        description: "Top passage corridor connecting the entrance porch to the bedrooms and lounge areas efficiently.",
        features: ["Connects all zones", "Natural light inlet", "Wide clearance", "Granite / marble flooring"],
        category: "outdoor"
    },
    porch: {
        name: "Porch",
        dimension: "Car Porch / Entrance",
        description: "Covered main entrance porch providing car parking, secure access, and curb-appeal facade presentation.",
        features: ["Vehicle parking area", "Main security gate", "Facade lighting points", "Paved driveway"],
        category: "outdoor"
    },
    lounge: {
        name: "TV Lounge",
        dimension: "10'-0\" × 12'-0\"",
        description: "Central TV lounge and living space — the heart of the villa where the family gathers. Opens to kitchen.",
        features: ["120 sq. ft. area", "Media wall ready", "Recessed LED lighting", "High ceiling clearance"],
        category: "living"
    },
    green: {
        name: "Green Area",
        dimension: "Garden / Landscape Strip",
        description: "Dedicated green landscape strip beside the porch for planting, outdoor seating, or ornamental garden.",
        features: ["Water outlet point", "Natural daylight", "Garden / lawn space", "Boundary wall access"],
        category: "outdoor"
    },
    kitchen: {
        name: "Kitchen + Dining",
        dimension: "10'-0\" × 12'-0\"",
        description: "Modern open kitchen with dedicated dining zone. Features granite countertops and integrated exhaust.",
        features: ["120 sq. ft. area", "Granite countertops", "Gas + exhaust points", "Dedicated dining zone"],
        category: "kitchen"
    }
};

/* ─── Helper to pick an icon for a category ─── */
function CategoryIcon({ cat }: { cat: string }) {
    if (cat === "bedroom") return <Bed size={16} />;
    if (cat === "bathroom") return <Bath size={16} />;
    if (cat === "living") return <Tv size={16} />;
    if (cat === "kitchen") return <Utensils size={16} />;
    if (cat === "outdoor") return <Trees size={16} />;
    return <Compass size={16} />;
}

export function VillasFloorPlans() {
    const [selectedVillaId, setSelectedVillaId] = useState<"80-sq-yards" | "120-sq-yards">("80-sq-yards");
    const [selectedRoomId, setSelectedRoomId] = useState<string>("lounge");
    const [viewMode, setViewMode] = useState<"blueprint" | "cards">("blueprint");

    const currentVilla = villasData[selectedVillaId];

    /* For 80 sq yards: use our accurate roomList, for 120: use data */
    const roomMeta = selectedVillaId === "80-sq-yards"
        ? rooms80[selectedRoomId] || rooms80["lounge"]
        : (() => {
            const r = currentVilla.roomList.find(r => r.id === selectedRoomId) || currentVilla.roomList[0];
            return {
                name: r.name,
                dimension: r.dimension,
                description: r.description,
                features: r.features,
                category: r.category
            };
        })();

    const roomList80 = Object.keys(rooms80);
    const roomList120 = currentVilla.roomList;

    const handleDownloadBrochure = () => {
        window.print();
    };

    /* ── colour helpers for blueprint ── */
    const sel = (id: string) => selectedRoomId === id;
    const fill = (id: string, base: string) => sel(id) ? "#f59e0b" : base;
    const fo   = (id: string) => sel(id) ? 0.38 : 1;
    const sw   = (id: string) => sel(id) ? "#f59e0b" : "#52525b";
    const swW  = (id: string) => sel(id) ? "2.5" : "2";
    const dashedBorder = (id: string) => sel(id) ? "#fbbf24" : "#3f3f46";
    const labelFill = (id: string) => sel(id) ? "#ffffff" : "#e4e4e7";
    const dimFill   = (id: string) => sel(id) ? "#fef08a" : "#71717a";

    return (
        <section id="floor-plans" className="relative py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Compass size={14} className="text-zinc-700" />
                    <span>Architectural Layouts</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                    Floor Plans of Villas
                </h2>
                <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                    Designed by leading structural architects for <span className="font-semibold text-zinc-800">Indus Enclave</span>.
                    Every inch is engineered for spaciousness, natural illumination, and premium modern family living.
                </p>

                {/* Villa Size Tabs */}
                <div className="flex items-center p-1.5 bg-zinc-100 rounded-full border border-zinc-200 mt-8 shadow-inner">
                    <button
                        onClick={() => { setSelectedVillaId("80-sq-yards"); setSelectedRoomId("lounge"); }}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                            selectedVillaId === "80-sq-yards" ? "bg-zinc-900 text-white shadow-md" : "text-zinc-600 hover:text-zinc-900"
                        }`}
                    >
                        80 SQ. Yards Villa
                    </button>
                    <button
                        onClick={() => { setSelectedVillaId("120-sq-yards"); setSelectedRoomId("lounge"); }}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                            selectedVillaId === "120-sq-yards" ? "bg-zinc-900 text-white shadow-md" : "text-zinc-600 hover:text-zinc-900"
                        }`}
                    >
                        120 SQ. Yards Villa
                    </button>
                </div>
            </div>

            {/* Current Villa Banner */}
            <motion.div
                key={selectedVillaId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm mb-10"
            >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-100 pb-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {currentVilla.project}
                            </span>
                            <span className="text-zinc-400 text-xs">•</span>
                            <span className="text-zinc-500 text-xs font-medium">Single-Family Modern Villa</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-2">{currentVilla.title}</h3>
                        <p className="text-zinc-600 text-sm mt-1 max-w-xl">{currentVilla.tagline}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            onClick={() => setViewMode(viewMode === "blueprint" ? "cards" : "blueprint")}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 hover:border-zinc-400 text-zinc-700 text-xs font-medium bg-zinc-50 hover:bg-zinc-100 transition cursor-pointer"
                        >
                            <Maximize2 size={14} />
                            <span>{viewMode === "blueprint" ? "View Room Cards" : "View Blueprint"}</span>
                        </button>
                        <button
                            onClick={handleDownloadBrochure}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition cursor-pointer shadow-sm"
                        >
                            <Download size={14} />
                            <span>Print / Save</span>
                        </button>
                    </div>
                </div>

                {/* 4 Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="bg-zinc-50 hover:bg-zinc-100/80 transition p-4 rounded-2xl border border-zinc-200/80 flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-zinc-900 text-white shrink-0 mt-0.5"><Bed size={18} /></div>
                        <div>
                            <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">2 Bedrooms</span>
                            <p className="text-lg font-bold text-zinc-900 mt-0.5">{currentVilla.rooms.bedrooms.dimension}</p>
                            <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{currentVilla.rooms.bedrooms.details}</p>
                        </div>
                    </div>
                    <div className="bg-zinc-50 hover:bg-zinc-100/80 transition p-4 rounded-2xl border border-zinc-200/80 flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-zinc-900 text-white shrink-0 mt-0.5"><Bath size={18} /></div>
                        <div>
                            <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">2 Bathrooms</span>
                            <p className="text-lg font-bold text-zinc-900 mt-0.5">{currentVilla.rooms.bathrooms.dimension}</p>
                            <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{currentVilla.rooms.bathrooms.details}</p>
                        </div>
                    </div>
                    <div className="bg-zinc-50 hover:bg-zinc-100/80 transition p-4 rounded-2xl border border-zinc-200/80 flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-zinc-900 text-white shrink-0 mt-0.5"><Tv size={18} /></div>
                        <div>
                            <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">TV Lounge + Living</span>
                            <p className="text-lg font-bold text-zinc-900 mt-0.5">{currentVilla.rooms.livingLounge.dimension}</p>
                            <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{currentVilla.rooms.livingLounge.details}</p>
                        </div>
                    </div>
                    <div className="bg-zinc-50 hover:bg-zinc-100/80 transition p-4 rounded-2xl border border-zinc-200/80 flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-zinc-900 text-white shrink-0 mt-0.5"><Utensils size={18} /></div>
                        <div>
                            <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">1 Kitchen + Dining</span>
                            <p className="text-lg font-bold text-zinc-900 mt-0.5">{currentVilla.rooms.kitchenDining.dimension}</p>
                            <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{currentVilla.rooms.kitchenDining.details}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Interactive Blueprint & Room Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Visualizer Area */}
                <div className="lg:col-span-7 xl:col-span-8 bg-zinc-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl border border-zinc-800">
                    {/* CAD Grid Backdrop */}
                    <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #18181b 1px)",
                            backgroundSize: "24px 24px",
                            backgroundPosition: "0 0, 12px 12px",
                        }}
                    />

                    {/* Blueprint Header */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                                Interactive Blueprint • {currentVilla.title}
                            </span>
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">Click any room to inspect</div>
                    </div>

                    {/* ════════════════════════════════════════════════
                        SVG FLOOR PLAN
                    ════════════════════════════════════════════════ */}
                    <div className="relative z-10 w-full flex items-center justify-center py-2">
                        {selectedVillaId === "80-sq-yards" ? (
                            /* ╔══════════════════════════════════════════╗
                               ║  80 SQ. YARDS — Accurate Recreation      ║
                               ║  Based on actual Indus Enclave blueprint  ║
                               ║                                           ║
                               ║  Layout (left→right, top→bottom):         ║
                               ║  Left col:  BATH / WASHING / BATH         ║
                               ║  Center:    BED (top) / BED (bottom)      ║
                               ║  Top-right: PASSAGE + PORCH               ║
                               ║  Mid-right: LOUNGE | GREEN                ║
                               ║  Bot-right: KITCHEN                       ║
                               ╚══════════════════════════════════════════╝ */
                            <svg
                                viewBox="0 0 700 540"
                                className="w-full max-w-[660px] h-auto drop-shadow-2xl select-none"
                            >
                                {/* ── Title ── */}
                                <text x="350" y="12" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="monospace" letterSpacing="1">
                                    INDUS ENCLAVE • 80 SQ. YARDS • GROUND FLOOR PLAN
                                </text>

                                {/* ── Outer perimeter wall ── */}
                                <rect x="20" y="20" width="660" height="510" fill="#0d0d10" stroke="#3f3f46" strokeWidth="5" />

                                {/* ══════════════════════════════
                                    LEFT COLUMN  x:20–160
                                    BATH1 (top) / WASHING (mid) / BATH2 (bottom)
                                ══════════════════════════════ */}

                                {/* Internal vertical wall (right edge of left column) */}
                                {/* drawn implicitly by room borders */}

                                {/* BATH 1 — top left */}
                                <g onClick={() => setSelectedRoomId("bath1")} className="cursor-pointer group">
                                    <rect x="20" y="20" width="140" height="145"
                                        fill={fill("bath1", "#1e1e25")} fillOpacity={fo("bath1")}
                                        stroke={sw("bath1")} strokeWidth={swW("bath1")} />
                                    <rect x="25" y="25" width="130" height="135" fill="none"
                                        stroke={dashedBorder("bath1")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* door swing (opens downward into corridor) */}
                                    <path d="M155 135 A38 38 0 0 0 117 97" fill="none"
                                        stroke={sel("bath1") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" strokeDasharray="3 2" />
                                    <line x1="155" y1="135" x2="155" y2="97"
                                        stroke={sel("bath1") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" />
                                    <text x="90" y="83" textAnchor="middle" fill={labelFill("bath1")} fontSize="13" fontWeight="700" className="pointer-events-none">BATH</text>
                                    <text x="90" y="100" textAnchor="middle" fill={dimFill("bath1")} fontSize="9" fontFamily="monospace" className="pointer-events-none">4&apos;-0&quot; × 6&apos;-6&quot;</text>
                                </g>

                                {/* Wall between Bath1 and Washing */}
                                <line x1="20" y1="165" x2="160" y2="165" stroke="#3f3f46" strokeWidth="4" />

                                {/* WASHING — middle left */}
                                <g onClick={() => setSelectedRoomId("washing")} className="cursor-pointer group">
                                    <rect x="20" y="165" width="140" height="120"
                                        fill={fill("washing", "#181820")} fillOpacity={fo("washing")}
                                        stroke={sw("washing")} strokeWidth={swW("washing")} />
                                    <rect x="25" y="170" width="130" height="110" fill="none"
                                        stroke={dashedBorder("washing")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* door swing — opens right */}
                                    <path d="M155 260 A38 38 0 0 0 155 222" fill="none"
                                        stroke={sel("washing") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" strokeDasharray="3 2" />
                                    <line x1="155" y1="260" x2="117" y2="260"
                                        stroke={sel("washing") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" />
                                    <text x="90" y="222" textAnchor="middle" fill={labelFill("washing")} fontSize="12" fontWeight="700" className="pointer-events-none">WASHING</text>
                                </g>

                                {/* Wall between Washing and Bath2 */}
                                <line x1="20" y1="285" x2="160" y2="285" stroke="#3f3f46" strokeWidth="4" />

                                {/* BATH 2 — bottom left */}
                                <g onClick={() => setSelectedRoomId("bath2")} className="cursor-pointer group">
                                    <rect x="20" y="285" width="140" height="245"
                                        fill={fill("bath2", "#1e1e25")} fillOpacity={fo("bath2")}
                                        stroke={sw("bath2")} strokeWidth={swW("bath2")} />
                                    <rect x="25" y="290" width="130" height="235" fill="none"
                                        stroke={dashedBorder("bath2")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* door swing — opens up into bedroom2 corridor */}
                                    <path d="M155 370 A38 38 0 0 0 117 332" fill="none"
                                        stroke={sel("bath2") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" strokeDasharray="3 2" />
                                    <line x1="155" y1="370" x2="155" y2="332"
                                        stroke={sel("bath2") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" />
                                    <text x="90" y="398" textAnchor="middle" fill={labelFill("bath2")} fontSize="13" fontWeight="700" className="pointer-events-none">BATH</text>
                                    <text x="90" y="415" textAnchor="middle" fill={dimFill("bath2")} fontSize="9" fontFamily="monospace" className="pointer-events-none">4&apos;-0&quot; × 6&apos;-6&quot;</text>
                                </g>

                                {/* ── Vertical divider: left col | center bedrooms (x=160) ── */}
                                <line x1="160" y1="20" x2="160" y2="530" stroke="#3f3f46" strokeWidth="4.5" />

                                {/* ══════════════════════════════
                                    CENTER COLUMN  x:160–420
                                    BED 1 (top) / BED 2 (bottom)
                                ══════════════════════════════ */}

                                {/* BED 1 — top center */}
                                <g onClick={() => setSelectedRoomId("bed1")} className="cursor-pointer group">
                                    <rect x="160" y="20" width="260" height="250"
                                        fill={fill("bed1", "#262630")} fillOpacity={fo("bed1")}
                                        stroke={sw("bed1")} strokeWidth={swW("bed1")} />
                                    <rect x="165" y="25" width="250" height="240" fill="none"
                                        stroke={dashedBorder("bed1")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* door swing — opens from passage/corridor into bedroom */}
                                    <path d="M380 270 A42 42 0 0 0 338 228" fill="none"
                                        stroke={sel("bed1") ? "#f59e0b" : "#71717a"} strokeWidth="1.3" strokeDasharray="3 2" />
                                    <line x1="380" y1="270" x2="420" y2="270"
                                        stroke={sel("bed1") ? "#f59e0b" : "#71717a"} strokeWidth="1.3" />
                                    <text x="290" y="128" textAnchor="middle" fill={labelFill("bed1")} fontSize="18" fontWeight="800" className="pointer-events-none">BED</text>
                                    <text x="290" y="152" textAnchor="middle" fill={dimFill("bed1")} fontSize="11" fontFamily="monospace" className="pointer-events-none">10&apos;-0&quot; × 10&apos;-0&quot;</text>
                                </g>

                                {/* Wall between Bed1 and Bed2 */}
                                <line x1="160" y1="270" x2="420" y2="270" stroke="#3f3f46" strokeWidth="4" />

                                {/* BED 2 — bottom center */}
                                <g onClick={() => setSelectedRoomId("bed2")} className="cursor-pointer group">
                                    <rect x="160" y="270" width="260" height="260"
                                        fill={fill("bed2", "#262630")} fillOpacity={fo("bed2")}
                                        stroke={sw("bed2")} strokeWidth={swW("bed2")} />
                                    <rect x="165" y="275" width="250" height="250" fill="none"
                                        stroke={dashedBorder("bed2")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* door swing — opens from lounge into bedroom */}
                                    <path d="M380 440 A42 42 0 0 1 338 398" fill="none"
                                        stroke={sel("bed2") ? "#f59e0b" : "#71717a"} strokeWidth="1.3" strokeDasharray="3 2" />
                                    <line x1="380" y1="440" x2="420" y2="440"
                                        stroke={sel("bed2") ? "#f59e0b" : "#71717a"} strokeWidth="1.3" />
                                    <text x="290" y="385" textAnchor="middle" fill={labelFill("bed2")} fontSize="18" fontWeight="800" className="pointer-events-none">BED</text>
                                    <text x="290" y="409" textAnchor="middle" fill={dimFill("bed2")} fontSize="11" fontFamily="monospace" className="pointer-events-none">10&apos;-0&quot; × 10&apos;-0&quot;</text>
                                </g>

                                {/* ── Vertical divider: center | right zone (x=420) ── */}
                                <line x1="420" y1="20" x2="420" y2="530" stroke="#3f3f46" strokeWidth="4.5" />

                                {/* ══════════════════════════════
                                    TOP-RIGHT  x:420–680
                                    PASSAGE (top strip) + PORCH (right corner)
                                ══════════════════════════════ */}

                                {/* PASSAGE — top strip */}
                                <g onClick={() => setSelectedRoomId("passage")} className="cursor-pointer group">
                                    <rect x="420" y="20" width="260" height="90"
                                        fill={fill("passage", "#1a1a22")} fillOpacity={fo("passage")}
                                        stroke={sw("passage")} strokeWidth={swW("passage")} />
                                    <rect x="425" y="25" width="250" height="80" fill="none"
                                        stroke={dashedBorder("passage")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    <text x="550" y="60" textAnchor="middle" fill={labelFill("passage")} fontSize="14" fontWeight="700" className="pointer-events-none">PASSAGE</text>
                                </g>

                                {/* Wall below passage / start of porch top */}
                                <line x1="545" y1="110" x2="680" y2="110" stroke="#3f3f46" strokeWidth="4" />

                                {/* Vertical wall: lounge-right / porch-left (x=545) */}
                                <line x1="545" y1="110" x2="545" y2="420" stroke="#3f3f46" strokeWidth="4" />

                                {/* PORCH — top-right block */}
                                <g onClick={() => setSelectedRoomId("porch")} className="cursor-pointer group">
                                    <rect x="545" y="110" width="135" height="170"
                                        fill={fill("porch", "#151c15")} fillOpacity={fo("porch")}
                                        stroke={sel("porch") ? "#f59e0b" : "#22c55e"} strokeWidth={sel("porch") ? "2.5" : "2"} />
                                    <rect x="550" y="115" width="125" height="160" fill="none"
                                        stroke={sel("porch") ? "#fbbf24" : "#166534"} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* main entrance door swing */}
                                    <path d="M545 235 A48 48 0 0 0 497 187" fill="none"
                                        stroke="#22c55e" strokeWidth="1.6" strokeDasharray="3 2" />
                                    <line x1="545" y1="235" x2="545" y2="187" stroke="#22c55e" strokeWidth="1.6" />
                                    <text x="612" y="188" textAnchor="middle" fill={sel("porch") ? "#fff" : "#86efac"} fontSize="13" fontWeight="700" className="pointer-events-none">PORCH</text>
                                    <text x="612" y="205" textAnchor="middle" fill={sel("porch") ? "#fef08a" : "#4ade80"} fontSize="9" className="pointer-events-none">Main Entrance</text>
                                </g>

                                {/* Entrance arrow — right edge */}
                                <g transform="translate(685, 195)">
                                    <path d="M12 0 L0 -8 L0 8 Z" fill="#22c55e" />
                                    <text x="16" y="4" fill="#22c55e" fontSize="8" fontWeight="bold">ENTRY</text>
                                </g>

                                {/* ══════════════════════════════
                                    LOUNGE  x:420–545, y:110–420
                                ══════════════════════════════ */}
                                <g onClick={() => setSelectedRoomId("lounge")} className="cursor-pointer group">
                                    <rect x="420" y="110" width="125" height="310"
                                        fill={fill("lounge", "#242430")} fillOpacity={fo("lounge")}
                                        stroke={sw("lounge")} strokeWidth={swW("lounge")} />
                                    <rect x="425" y="115" width="115" height="300" fill="none"
                                        stroke={dashedBorder("lounge")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    <text x="482" y="253" textAnchor="middle" fill={labelFill("lounge")} fontSize="14" fontWeight="800" className="pointer-events-none">LOUNGE</text>
                                    <text x="482" y="272" textAnchor="middle" fill={dimFill("lounge")} fontSize="9" fontFamily="monospace" className="pointer-events-none">10&apos;-0&quot; × 12&apos;-0&quot;</text>
                                </g>

                                {/* ══════════════════════════════
                                    GREEN AREA  x:545–680, y:280–420
                                ══════════════════════════════ */}
                                <line x1="545" y1="280" x2="680" y2="280" stroke="#3f3f46" strokeWidth="4" />
                                <g onClick={() => setSelectedRoomId("green")} className="cursor-pointer group">
                                    <rect x="545" y="280" width="135" height="140"
                                        fill={fill("green", "#111a11")} fillOpacity={fo("green")}
                                        stroke={sel("green") ? "#f59e0b" : "#166534"} strokeWidth={sel("green") ? "2.5" : "2"} />
                                    <rect x="550" y="285" width="125" height="130" fill="none"
                                        stroke={sel("green") ? "#fbbf24" : "#166534"} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* decorative plant dots */}
                                    <circle cx="580" cy="330" r="6" fill={sel("green") ? "#fbbf24" : "#166534"} fillOpacity="0.5" />
                                    <circle cx="600" cy="350" r="8" fill={sel("green") ? "#fbbf24" : "#166534"} fillOpacity="0.4" />
                                    <circle cx="625" cy="325" r="5" fill={sel("green") ? "#fbbf24" : "#166534"} fillOpacity="0.5" />
                                    <circle cx="645" cy="348" r="7" fill={sel("green") ? "#fbbf24" : "#166534"} fillOpacity="0.4" />
                                    <text x="612" y="376" textAnchor="middle" fill={sel("green") ? "#fff" : "#86efac"} fontSize="13" fontWeight="700" className="pointer-events-none">GREEN</text>
                                </g>

                                {/* ══════════════════════════════
                                    KITCHEN  x:420–680, y:420–530
                                ══════════════════════════════ */}
                                <line x1="420" y1="420" x2="680" y2="420" stroke="#3f3f46" strokeWidth="4" />
                                <g onClick={() => setSelectedRoomId("kitchen")} className="cursor-pointer group">
                                    <rect x="420" y="420" width="260" height="110"
                                        fill={fill("kitchen", "#1c1c26")} fillOpacity={fo("kitchen")}
                                        stroke={sw("kitchen")} strokeWidth={swW("kitchen")} />
                                    <rect x="425" y="425" width="250" height="100" fill="none"
                                        stroke={dashedBorder("kitchen")} strokeWidth="0.8" strokeDasharray="4 3" />
                                    {/* kitchen counter representation */}
                                    <rect x="430" y="425" width="240" height="12" fill={sel("kitchen") ? "#f59e0b" : "#2f2f38"} fillOpacity="0.7" rx="2" />
                                    {/* door swing from lounge */}
                                    <path d="M456 420 A36 36 0 0 1 420 384" fill="none"
                                        stroke={sel("kitchen") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" strokeDasharray="3 2" />
                                    <line x1="456" y1="420" x2="456" y2="384"
                                        stroke={sel("kitchen") ? "#f59e0b" : "#71717a"} strokeWidth="1.2" />
                                    <text x="550" y="466" textAnchor="middle" fill={labelFill("kitchen")} fontSize="15" fontWeight="800" className="pointer-events-none">KITCHEN</text>
                                    <text x="550" y="485" textAnchor="middle" fill={dimFill("kitchen")} fontSize="10" fontFamily="monospace" className="pointer-events-none">10&apos;-0&quot; × 12&apos;-0&quot;</text>
                                </g>

                                {/* ── Scale bar & legend ── */}
                                <g transform="translate(22, 518)">
                                    <line x1="0" y1="0" x2="60" y2="0" stroke="#71717a" strokeWidth="1.5" />
                                    <line x1="0" y1="-4" x2="0" y2="4" stroke="#71717a" strokeWidth="1.5" />
                                    <line x1="60" y1="-4" x2="60" y2="4" stroke="#71717a" strokeWidth="1.5" />
                                    <text x="30" y="-6" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace">10&apos;-0&quot;</text>
                                </g>
                            </svg>
                        ) : (
                            /* ── 120 SQ. YARDS — schematic layout ── */
                            <svg
                                viewBox="0 0 600 500"
                                className="w-full max-w-[580px] h-auto drop-shadow-2xl select-none"
                            >
                                <text x="300" y="10" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="monospace" letterSpacing="1">
                                    INDUS ENCLAVE • 120 SQ. YARDS • GROUND FLOOR PLAN
                                </text>
                                <rect x="18" y="18" width="564" height="464" fill="#0d0d10" stroke="#3f3f46" strokeWidth="5" />
                                <g transform="translate(560, 46)" className="opacity-70">
                                    <circle cx="0" cy="0" r="14" fill="#27272a" stroke="#52525b" strokeWidth="1" />
                                    <path d="M0 -12 L3 0 L-3 0 Z" fill="#f59e0b" />
                                    <path d="M0 12 L3 0 L-3 0 Z" fill="#71717a" />
                                    <text x="-3" y="-14" fill="#f59e0b" fontSize="8" fontWeight="bold">N</text>
                                </g>
                                {roomList120.map((room: RoomDetail) => {
                                    const isSelected = selectedRoomId === room.id;
                                    const r = room.svgRect;
                                    const baseFill = room.category === "bedroom" ? "#262630" : room.category === "living" ? "#242430" : room.category === "kitchen" ? "#1c1c26" : room.category === "bathroom" ? "#1e1e25" : "#1a1a22";
                                    return (
                                        <g key={room.id} onClick={() => setSelectedRoomId(room.id)} className="cursor-pointer">
                                            <rect x={r.x} y={r.y} width={r.width} height={r.height}
                                                fill={isSelected ? "#f59e0b" : baseFill}
                                                fillOpacity={isSelected ? 0.38 : 1}
                                                stroke={isSelected ? "#f59e0b" : "#3f3f46"} strokeWidth={isSelected ? "2.5" : "2"} />
                                            <rect x={r.x + 4} y={r.y + 4} width={r.width - 8} height={r.height - 8} fill="none"
                                                stroke={isSelected ? "#fbbf24" : "#333340"} strokeWidth="0.8" strokeDasharray="4 3" />
                                            <text x={r.labelX || r.x + r.width / 2} y={(r.labelY || r.y + r.height / 2) - 9}
                                                textAnchor="middle" fill={isSelected ? "#fff" : "#e4e4e7"}
                                                fontSize={r.width < 80 ? "9" : "12"} fontWeight="700" className="pointer-events-none">{room.name}</text>
                                            <text x={r.labelX || r.x + r.width / 2} y={(r.labelY || r.y + r.height / 2) + 9}
                                                textAnchor="middle" fill={isSelected ? "#fef08a" : "#71717a"}
                                                fontSize={r.width < 80 ? "8" : "10"} fontFamily="monospace" fontWeight="500" className="pointer-events-none">{room.dimension}</text>
                                        </g>
                                    );
                                })}
                                <g transform="translate(300, 490)">
                                    <path d="M0 -12 L-6 -4 L6 -4 Z" fill="#22c55e" />
                                    <text x="0" y="6" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">MAIN ENTRANCE</text>
                                </g>
                            </svg>
                        )}
                    </div>

                    {/* Blueprint Footer */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t border-zinc-800 text-xs text-zinc-400">
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="flex items-center gap-1.5">
                                <span className="size-2.5 rounded-sm bg-zinc-700 border border-zinc-500" />
                                Bedrooms &amp; Living
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="size-2.5 rounded-sm bg-zinc-800 border border-zinc-600" />
                                Kitchen &amp; Baths
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="size-2.5 rounded-sm bg-emerald-900 border border-emerald-700" />
                                Outdoor / Green
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="size-2.5 rounded-sm bg-amber-500 border border-amber-300" />
                                Selected
                            </span>
                        </div>
                        <span className="text-zinc-500 font-mono">Approved Architectural Master Layout</span>
                    </div>
                </div>

                {/* Room Detail Inspector */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedRoomId + selectedVillaId}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm"
                        >
                            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                                <div className="flex items-center gap-2">
                                    <span className="p-2 rounded-xl bg-zinc-900 text-white">
                                        <CategoryIcon cat={roomMeta.category} />
                                    </span>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Room Specification</p>
                                        <h4 className="text-xl font-bold text-zinc-900 leading-none mt-0.5">{roomMeta.name}</h4>
                                    </div>
                                </div>
                                <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                                    Active Space
                                </span>
                            </div>

                            {/* Dimension Box */}
                            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-4 rounded-2xl my-5 shadow-inner">
                                <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">Official Dimensions</span>
                                <div className="flex items-baseline justify-between mt-1">
                                    <p className="text-2xl font-extrabold tracking-tight text-white font-mono">{roomMeta.dimension}</p>
                                    <span className="text-xs text-amber-400 font-medium">Standard Clearance</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-zinc-600 leading-relaxed">{roomMeta.description}</p>

                            {/* Features */}
                            <div className="mt-5 pt-4 border-t border-zinc-100">
                                <h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Included Features &amp; Finishes</h5>
                                <div className="grid grid-cols-1 gap-2">
                                    {roomMeta.features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
                                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Room Switcher */}
                            <div className="mt-6 pt-4 border-t border-zinc-100">
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                                    Quick Select Another Room:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedVillaId === "80-sq-yards"
                                        ? roomList80.map((id) => (
                                            <button
                                                key={id}
                                                onClick={() => setSelectedRoomId(id)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                                                    selectedRoomId === id ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                                }`}
                                            >
                                                {rooms80[id].name}
                                            </button>
                                        ))
                                        : roomList120.map((room: RoomDetail) => (
                                            <button
                                                key={room.id}
                                                onClick={() => setSelectedRoomId(room.id)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                                                    selectedRoomId === room.id ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                                }`}
                                            >
                                                {room.name}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Booking Prompt */}
                    <div className="bg-amber-50 border border-amber-200/80 rounded-3xl p-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5">
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-amber-950">
                                    Interested in {currentVilla.title}?
                                </h4>
                                <p className="text-xs text-amber-800/90 mt-1 leading-relaxed">
                                    Lock in your preferred villa location with our 5-year easy installments plan and guaranteed 2-year possession.
                                </p>
                                <a
                                    href="#inquire"
                                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl transition shadow-sm"
                                >
                                    <span>Request Allocation Deed</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Room Cards View */}
            {viewMode === "cards" && (
                <div className="mt-12">
                    <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                        <span>All Room Dimensions &amp; Specifications</span>
                        <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-mono">{currentVilla.title}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {selectedVillaId === "80-sq-yards"
                            ? roomList80.map((id) => {
                                const room = rooms80[id];
                                return (
                                    <div key={id} onClick={() => setSelectedRoomId(id)}
                                        className={`p-5 rounded-2xl border transition cursor-pointer ${
                                            selectedRoomId === id ? "bg-zinc-900 text-white border-zinc-900 shadow-lg" : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300"
                                        }`}>
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold text-base">{room.name}</h4>
                                            <span className={`text-xs px-2.5 py-1 rounded-md font-mono font-semibold ${selectedRoomId === id ? "bg-zinc-800 text-amber-300" : "bg-zinc-100 text-zinc-800"}`}>
                                                {room.dimension}
                                            </span>
                                        </div>
                                        <p className={`text-xs mt-2.5 leading-relaxed ${selectedRoomId === id ? "text-zinc-300" : "text-zinc-600"}`}>
                                            {room.description}
                                        </p>
                                    </div>
                                );
                            })
                            : roomList120.map((room: RoomDetail) => (
                                <div key={room.id} onClick={() => setSelectedRoomId(room.id)}
                                    className={`p-5 rounded-2xl border transition cursor-pointer ${
                                        selectedRoomId === room.id ? "bg-zinc-900 text-white border-zinc-900 shadow-lg" : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300"
                                    }`}>
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-base">{room.name}</h4>
                                        <span className={`text-xs px-2.5 py-1 rounded-md font-mono font-semibold ${selectedRoomId === room.id ? "bg-zinc-800 text-amber-300" : "bg-zinc-100 text-zinc-800"}`}>
                                            {room.dimension}
                                        </span>
                                    </div>
                                    <p className={`text-xs mt-2.5 leading-relaxed ${selectedRoomId === room.id ? "text-zinc-300" : "text-zinc-600"}`}>
                                        {room.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </section>
    );
}
