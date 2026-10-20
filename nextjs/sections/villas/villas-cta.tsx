"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Send,
    CheckCircle2,
    Calendar,
    Sparkles,
    MessageSquare
} from "lucide-react";

export function VillasCta() {
    const [villaChoice, setVillaChoice] = useState<"80 SQ. Yards" | "120 SQ. Yards">("80 SQ. Yards");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const whatsappMessage = encodeURIComponent(
        `Hello Indus Enclave! I am interested in the ${villaChoice} Villa floor plan and 5-Year Payment Plan. Please share official details.`
    );

    return (
        <section id="inquire" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            <div className="bg-zinc-900 rounded-[36px] text-white p-8 md:p-14 lg:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-32 -right-32 size-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
                    {/* Left Column: Heading & Contact Points */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider w-fit border border-white/10">
                            <Sparkles size={14} />
                            <span>Reserve Your Villa</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                            Start Your Journey to <br />
                            <span className="text-amber-400">Indus Enclave Villas</span>
                        </h2>

                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                            Book your chosen 80 SQ. Yards or 120 SQ. Yards villa today with guaranteed possession within 2 years
                            and a hassle-free 5-year installment plan. Schedule a private site tour or request an allotment schedule.
                        </p>

                        <div className="flex flex-col gap-3.5 pt-2 text-xs md:text-sm text-zinc-300">
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400">
                                    <Phone size={15} />
                                </div>
                                <span>+92 329 302 3156 &nbsp;|&nbsp; +92 316 822 8918</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400">
                                    <Mail size={15} />
                                </div>
                                <span>info@indusenclave.com</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                                    <MapPin size={15} />
                                </div>
                                <span>No. 1 &amp; 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi</span>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <div className="pt-2">
                            <a
                                href={`https://wa.me/923293023156?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-bold shadow-lg transition-all"
                            >
                                <MessageSquare size={16} />
                                <span>Chat on WhatsApp Directly</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="lg:col-span-6 bg-zinc-800/90 border border-zinc-700/80 rounded-3xl p-6 md:p-8 backdrop-blur-md">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 text-center flex flex-col items-center"
                            >
                                <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                                    <CheckCircle2 size={36} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Thank You for Your Inquiry!</h3>
                                <p className="text-xs text-zinc-300 mt-2 max-w-sm">
                                    Our Indus Enclave sales specialist will get in touch with you shortly with the complete floor plan dossier and installment breakdown for the {villaChoice} Villa.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-xs text-amber-400 underline hover:text-amber-300 cursor-pointer"
                                >
                                    Submit another inquiry
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-white mb-1">
                                    Villa Reservation &amp; Site Visit Form
                                </h3>

                                {/* Select Villa Size */}
                                <div>
                                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                                        Select Villa Preference
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setVillaChoice("80 SQ. Yards")}
                                            className={`p-3 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                                                villaChoice === "80 SQ. Yards"
                                                    ? "bg-amber-500 text-zinc-950 border-amber-500"
                                                    : "bg-zinc-900/60 text-zinc-300 border-zinc-700 hover:border-zinc-600"
                                            }`}
                                        >
                                            80 SQ. Yards Villa
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setVillaChoice("120 SQ. Yards")}
                                            className={`p-3 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                                                villaChoice === "120 SQ. Yards"
                                                    ? "bg-amber-500 text-zinc-950 border-amber-500"
                                                    : "bg-zinc-900/60 text-zinc-300 border-zinc-700 hover:border-zinc-600"
                                            }`}
                                        >
                                            120 SQ. Yards Villa
                                        </button>
                                    </div>
                                </div>

                                {/* Full Name */}
                                <div>
                                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Tariq Khan"
                                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                                        Phone / WhatsApp Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="e.g. +92 300 1234567"
                                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="e.g. name@example.com"
                                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="mt-2 w-full bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer shadow-md flex items-center justify-center gap-2"
                                >
                                    <Send size={14} />
                                    <span>Submit Villa Inquiry</span>
                                </button>

                                <p className="text-[11px] text-zinc-400 text-center mt-1">
                                    Guaranteed privacy. 100% no obligation.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
