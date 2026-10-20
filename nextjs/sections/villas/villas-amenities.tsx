"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Trees,
    Zap,
    Droplet,
    Wifi,
    Car,
    Building2,
    Sparkles
} from "lucide-react";

export function VillasAmenities() {
    const amenities = [
        {
            icon: <ShieldCheck className="size-6 text-zinc-900" />,
            title: "24/7 Gated Security",
            description: "Manned checkpoints, automated boom barriers, and round-the-clock CCTV surveillance covering every avenue."
        },
        {
            icon: <Zap className="size-6 text-zinc-900" />,
            title: "Underground Electrification",
            description: "Modern subterranean electrical infrastructure eliminating overhead wires for safe, unobstructed community aesthetics."
        },
        {
            icon: <Droplet className="size-6 text-zinc-900" />,
            title: "Treated Water & Sewerage",
            description: "Dedicated clean water supply network and modern underground sewerage management for effortless daily living."
        },
        {
            icon: <Trees className="size-6 text-zinc-900" />,
            title: "Lush Parks & Playgrounds",
            description: "Beautifully manicured family gardens, children play zones, and paved jogging tracks right by your doorstep."
        },
        {
            icon: <Car className="size-6 text-zinc-900" />,
            title: "Wide Carpeted Boulevards",
            description: "Generous road network with designated pedestrian footpaths and energy-efficient LED street lighting."
        },
        {
            icon: <Building2 className="size-6 text-zinc-900" />,
            title: "Community Club & Mosque",
            description: "Centrally located grand Jamia Masjid and modern residents' clubhouse for social and spiritual wellbeing."
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-900 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur text-zinc-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
                        <Sparkles size={14} className="text-amber-400" />
                        <span>Indus Enclave Master Community</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
                        World-Class Infrastructure &amp; Amenities
                    </h2>
                    <p className="text-zinc-400 mt-3 text-sm md:text-base leading-relaxed">
                        Every villa at Indus Enclave is enveloped by an exceptionally planned, secure, and flourishing gated neighborhood.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amenities.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-zinc-800/80 border border-zinc-700/80 rounded-3xl p-6 hover:bg-zinc-800 transition duration-300"
                        >
                            <div className="size-12 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
