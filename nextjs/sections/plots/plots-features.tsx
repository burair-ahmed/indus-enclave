"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Zap,
    ShieldCheck,
    Trees,
    TrendingUp,
    CalendarCheck,
    Building,
    CheckCircle2
} from "lucide-react";
import { sunflowerFeatures } from "@/data/plots-data";

export function PlotsFeatures() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "MapPin":
                return <MapPin className="size-6 text-amber-500" />;
            case "Zap":
                return <Zap className="size-6 text-amber-500" />;
            case "ShieldCheck":
                return <ShieldCheck className="size-6 text-amber-500" />;
            case "Trees":
                return <Trees className="size-6 text-amber-500" />;
            case "TrendingUp":
                return <TrendingUp className="size-6 text-amber-500" />;
            case "CalendarCheck":
                return <CalendarCheck className="size-6 text-amber-500" />;
            default:
                return <Building className="size-6 text-amber-500" />;
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-50 border-t border-zinc-200 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-3">
                        <Building size={14} className="text-zinc-700" />
                        <span>Master Planned Living</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight">
                        Why Choose Sunflower Block?
                    </h2>
                    <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
                        Sunflower Block is specifically designated as Indus Enclave&apos;s prime residential haven,
                        blending modern city infrastructure with peaceful natural serenity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sunflowerFeatures.map((feat, idx) => (
                        <motion.div
                            key={feat.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.3 }}
                            whileHover={{ y: -4 }}
                            className="bg-white p-7 rounded-3xl border border-zinc-200 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="size-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5">
                                    {getIcon(feat.icon)}
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                                    {feat.title}
                                </h3>
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    {feat.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                                <CheckCircle2 size={14} />
                                <span>Indus Enclave Standard</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
