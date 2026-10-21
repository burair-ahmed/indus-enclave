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
    MessageSquare,
    ArrowRight
} from "lucide-react";

export function PlotsCta() {
    const [plotChoice, setPlotChoice] = useState<"80 SQ.YDS Plot" | "120 SQ.YDS Plot">("80 SQ.YDS Plot");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const whatsappMessage = encodeURIComponent(
        `Hello Indus Enclave! I am interested in booking a ${plotChoice} in Sunflower Block with the 3-Year Payment Plan. Please share allotment details and schedule a site visit.`
    );

    return (
        <section id="inquire" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            <div className="bg-zinc-900 rounded-[36px] text-white p-8 md:p-14 lg:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden">
                {/* Decorative glow elements */}
                <div className="absolute -top-32 -right-32 size-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
                    {/* Left Column: Heading & Contact info */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider w-fit border border-white/10">
                            <Sparkles size={14} />
                            <span>Reserve Your Plot</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                            Reserve Your Plot in <br />
                            <span className="text-amber-400">Sunflower Block Today</span>
                        </h2>

                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                            Embark on the journey to your dream home with Indus Enclave. Secure your 80 SQ.YDS or 120 SQ.YDS plot
                            with flexible 3-year installments, transparent milestones, and immediate plot allocation.
                        </p>

                        <div className="flex flex-col gap-3.5 pt-2 text-xs md:text-sm text-zinc-300">
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400">
                                    <Phone size={15} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <a href="tel:+923293023156" className="hover:text-white transition">
                                        +92 329 302 3156
                                    </a>
                                    <span className="text-zinc-600">/</span>
                                    <a href="tel:+923168228918" className="hover:text-white transition">
                                        +92 316 822 8918
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400">
                                    <Mail size={15} />
                                </div>
                                <a href="mailto:info@indusenclave.com" className="hover:text-white transition">
                                    info@indusenclave.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                                    <MapPin size={15} />
                                </div>
                                <span>
                                    No. 1 &amp; 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi.
                                </span>
                            </div>
                        </div>

                        {/* WhatsApp Direct Action Button */}
                        <div className="pt-2">
                            <a
                                href={`https://wa.me/923293023156?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-600/30"
                            >
                                <MessageSquare size={16} />
                                <span>Inquire on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Interactive Booking Reservation Card */}
                    <div className="lg:col-span-6 bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
                        {submitted ? (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="py-12 flex flex-col items-center text-center gap-4"
                            >
                                <div className="size-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                                <p className="text-zinc-400 text-sm max-w-sm">
                                    Thank you, <span className="text-white font-semibold">{name || "Valued Customer"}</span>.
                                    Our Indus Enclave representative will reach out shortly regarding your {plotChoice} inquiry.
                                </p>
                                <a
                                    href="/contact"
                                    className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition"
                                >
                                    Open Full Contact Page
                                </a>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Schedule a Site Visit</h3>
                                    <p className="text-xs text-zinc-400 mt-1">
                                        Fill out your details to receive the official plot allotment brochure.
                                    </p>
                                </div>

                                {/* Plot Choice Segment */}
                                <div className="pt-2">
                                    <label className="text-xs font-medium text-zinc-400 block mb-2">
                                        Select Plot Size
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setPlotChoice("80 SQ.YDS Plot")}
                                            className={`p-3 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                                                plotChoice === "80 SQ.YDS Plot"
                                                    ? "bg-amber-500 text-zinc-950 border-amber-500 shadow-md"
                                                    : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700"
                                            }`}
                                        >
                                            80 SQ.YDS Plot
                                            <span className="block text-[10px] font-normal opacity-80 mt-0.5">
                                                Rs. 800,000 Only
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPlotChoice("120 SQ.YDS Plot")}
                                            className={`p-3 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                                                plotChoice === "120 SQ.YDS Plot"
                                                    ? "bg-amber-500 text-zinc-950 border-amber-500 shadow-md"
                                                    : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700"
                                            }`}
                                        >
                                            120 SQ.YDS Plot
                                            <span className="block text-[10px] font-normal opacity-80 mt-0.5">
                                                Rs. 1,200,000 Only
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-medium text-zinc-400 block mb-1.5">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Tariq Khan"
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-medium text-zinc-400 block mb-1.5">
                                        Phone Number / WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+92 3XX XXXXXXX"
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-medium text-zinc-400 block mb-1.5">
                                        Message / Preferred Date
                                    </label>
                                    <textarea
                                        rows={2}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="I would like to schedule a visit to Sunflower Block this weekend..."
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                                >
                                    <Send size={15} />
                                    <span>Submit Plot Booking Request</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
