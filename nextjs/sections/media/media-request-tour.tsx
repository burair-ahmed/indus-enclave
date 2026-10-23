"use client";

import { motion } from "framer-motion";
import { Video, Globe, PhoneCall, CheckCircle, ShieldCheck, ArrowRight, MessageSquare, Phone } from "lucide-react";

export function MediaRequestTour() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full bg-white">
            <div className="bg-zinc-900 rounded-[36px] text-white p-8 md:p-14 lg:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden">
                {/* Background ambient glow */}
                <div className="absolute -top-32 -right-32 size-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left text */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                            <Globe size={14} />
                            <span>Overseas &amp; Remote Investor Desk</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                            Can&apos;t Visit in Person? <br />
                            <span className="text-amber-400">Request a Live Video Inspection</span>
                        </h2>

                        <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed font-light max-w-xl">
                            For overseas Pakistani buyers and out-of-city investors, our site engineers
                            conduct scheduled 1-on-1 WhatsApp video walkthroughs and dedicated drone passes
                            showing your specific plot number, road access, and surrounding development.
                        </p>

                        {/* Feature bullets */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                                <CheckCircle size={16} className="text-amber-400 shrink-0" />
                                <span>Live 1-on-1 WhatsApp Video Calls</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                                <CheckCircle size={16} className="text-amber-400 shrink-0" />
                                <span>Specific Plot Pinpoint Inspection</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                                <CheckCircle size={16} className="text-amber-400 shrink-0" />
                                <span>SDA &amp; SBCA File Verification</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                                <CheckCircle size={16} className="text-amber-400 shrink-0" />
                                <span>Direct Engineer Q&amp;A on Site</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">
                            <a
                                href="/inquiry"
                                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-amber-500/10 flex items-center gap-2"
                            >
                                <Video size={16} />
                                <span>Schedule Video Walkthrough</span>
                            </a>

                            <a
                                href="https://wa.me/923293023156?text=Hello%20Indus%20Enclave,%20I%20would%20like%20to%20request%20a%20video%20tour%20of%20Sunflower%20Block."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center gap-2"
                            >
                                <MessageSquare size={16} />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Right side contact card */}
                    <div className="lg:col-span-5">
                        <div className="bg-zinc-950/80 rounded-2xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative">
                            <div className="size-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                                <PhoneCall size={22} />
                            </div>

                            <h3 className="text-xl font-bold text-white">Al-Ashraf Group Media Desk</h3>
                            <p className="text-xs text-zinc-400 mt-1">
                                Direct assistance for media releases, official footage requests, and high-res video downloads.
                            </p>

                            <div className="mt-6 space-y-3.5 text-xs sm:text-sm">
                                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                                    <span className="text-zinc-500 block text-[11px]">UAN Hotline</span>
                                    <span className="text-white font-semibold text-base">111-ASHRAF (274-723)</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                                    <span className="text-zinc-500 block text-[11px]">Direct Support</span>
                                    <span className="text-white font-semibold">+92 329 302 3156</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                                    <span className="text-zinc-500 block text-[11px]">Email</span>
                                    <span className="text-white font-semibold">info@alashrafgoc.com</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-emerald-400">
                                <ShieldCheck size={16} />
                                <span>Official Registered Project • SBCA &amp; SDA Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
