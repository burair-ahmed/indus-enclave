"use client";

import { motion } from "framer-motion";
import { Navigation, MapPin, Phone, MessageSquare, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { locationMeta } from "@/data/location-data";

export function LocationCta() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            <div className="bg-zinc-900 rounded-[36px] text-white p-8 md:p-14 lg:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute -top-32 -right-32 size-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                        <ShieldCheck size={14} />
                        <span>Visit Us On-Site</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                        Experience the Location <br />
                        <span className="text-amber-400">In Person</span>
                    </h2>

                    <p className="text-zinc-300 text-sm md:text-base mt-4 leading-relaxed font-light max-w-xl">
                        Join our scheduled guided site visits departing every week from our Karachi Sales Gallery
                        at Osif Arcade, Gulshan-e-Iqbal, or navigate directly to Nooriabad Exit 8 on the M-9 Motorway.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8 w-full">
                        <a
                            href={locationMeta.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-md flex items-center gap-2"
                        >
                            <Navigation size={16} />
                            <span>Navigate with Google Maps</span>
                            <ExternalLink size={13} />
                        </a>

                        <a
                            href="https://wa.me/923293023156?text=Hello%20Indus%20Enclave!%20I%20would%20like%20to%20schedule%20a%20guided%20site%20visit%20to%20Nooriabad%20Exit%208."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center gap-2"
                        >
                            <MessageSquare size={16} />
                            <span>Book Site Tour via WhatsApp</span>
                        </a>

                        <a
                            href="/inquiry"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-6 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
                        >
                            <Calendar size={16} className="text-amber-400" />
                            <span>Submit Inquiry</span>
                        </a>
                    </div>

                    {/* Footer Address Note */}
                    <div className="mt-8 pt-8 border-t border-zinc-800 text-xs text-zinc-400 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-amber-400" />
                            <span>Head Office: Osif Arcade, Block 15, Gulshan-e-Iqbal, Karachi</span>
                        </span>
                        <span>•</span>
                        <span>Site: M-9 Karachi–Hyderabad Motorway, Exit 8</span>
                        <span>•</span>
                        <a href="tel:+923293023156" className="text-zinc-300 hover:text-white transition">
                            +92 329 302 3156
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
