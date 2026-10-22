"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export function FaqCta() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            <div className="bg-zinc-900 rounded-[36px] text-white p-8 md:p-14 lg:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden">
                {/* Background ambient glow */}
                <div className="absolute -top-32 -right-32 size-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                        <ShieldCheck size={14} />
                        <span>Dedicated Investor Support</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                        Still Have Questions About <br />
                        <span className="text-amber-400">Indus Enclave?</span>
                    </h2>

                    <p className="text-zinc-300 text-sm md:text-base mt-4 leading-relaxed font-light max-w-xl">
                        Our property specialists are ready to guide you through SBCA/SDA approval verifications,
                        Sunflower Block plot bookings, site tour bookings, and tailored installment options.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8 w-full">
                        <a
                            href="/inquiry"
                            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-amber-500/10 flex items-center gap-2"
                        >
                            <span>Submit an Inquiry</span>
                            <ArrowRight size={16} />
                        </a>

                        <a
                            href="https://wa.me/923293023156?text=Hello%20Indus%20Enclave!%20I%20have%20questions%20regarding%20plots%2C%20pricing%20and%20approvals."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center gap-2"
                        >
                            <MessageSquare size={16} />
                            <span>Chat on WhatsApp</span>
                        </a>

                        <a
                            href="tel:+923293023156"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-6 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
                        >
                            <Phone size={16} className="text-amber-400" />
                            <span>+92 329 302 3156</span>
                        </a>
                    </div>

                    <div className="mt-8 pt-8 border-t border-zinc-800 text-xs text-zinc-400 flex flex-wrap items-center justify-center gap-6">
                        <span>Office: Osif Arcade, Block 15, Gulshan-e-Iqbal, Karachi</span>
                        <span>•</span>
                        <span>Site: M-9 Motorway Nooriabad Exit 8</span>
                        <span>•</span>
                        <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
