"use client";

import { motion } from "framer-motion";
import {
    Compass,
    Factory,
    Building2,
    BadgePercent,
    ShieldCheck,
    Ship,
    Bus,
    Navigation,
    CheckCircle2
} from "lucide-react";
import { locationAtAGlance } from "@/data/location-data";

export function LocationAtAGlance() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Compass":
                return <Compass size={22} className="text-amber-500" />;
            case "Factory":
                return <Factory size={22} className="text-amber-500" />;
            case "Building2":
                return <Building2 size={22} className="text-amber-500" />;
            case "BadgePercent":
                return <BadgePercent size={22} className="text-amber-500" />;
            case "ShieldCheck":
                return <ShieldCheck size={22} className="text-amber-500" />;
            case "Ship":
                return <Ship size={22} className="text-amber-500" />;
            case "Bus":
                return <Bus size={22} className="text-amber-500" />;
            case "Navigation":
                return <Navigation size={22} className="text-amber-500" />;
            default:
                return <Compass size={22} className="text-amber-500" />;
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 w-full bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                        <Compass size={14} className="text-zinc-700" />
                        <span>Key Strategic Highlights</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Location at a Glance
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Why Indus Enclave on the M-9 Motorway represents one of Sindh&apos;s most promising residential and investment frontiers.
                    </p>
                </div>

                {/* 8 Strategic Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locationAtAGlance.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="size-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-5 shadow-sm">
                                    {getIcon(item.icon)}
                                </div>
                                <h3 className="text-base font-bold text-zinc-900 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-5 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                                <CheckCircle2 size={13} />
                                <span>Verified Feature</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
