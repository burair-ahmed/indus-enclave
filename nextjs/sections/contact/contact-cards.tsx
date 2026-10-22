"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const channels = [
    {
        icon: <MapPin className="size-5 text-zinc-800" />,
        title: "Visit Our Office",
        description: "Office No. 1 & 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi.",
        actionText: "View on Google Maps",
        actionHref: "https://www.google.com/maps/search/No.+7+%26+8,+Mezzanine+Floor,+Osif+Arcade,+Block+No.+15,+Gulshan-e-Iqbal,+Karachi./@24.9043252,67.0776129,19z/data=!5m1!1e1?entry=ttu",
        badge: "Head Office",
    },
    {
        icon: <Phone className="size-5 text-zinc-800" />,
        title: "Call Our Team",
        description: "+92 329 302 3156\n+92 316 822 8918",
        actionText: "Dial Directly",
        actionHref: "tel:+923293023156",
        badge: "Direct Hotline",
    },
    {
        icon: <Mail className="size-5 text-zinc-800" />,
        title: "Send an Email",
        description: "info@indusenclave.com",
        actionText: "Write to Us",
        actionHref: "mailto:info@indusenclave.com",
        badge: "Fast Response",
    },
    {
        icon: <Clock className="size-5 text-zinc-800" />,
        title: "Working Hours",
        description: "Monday - Friday: 10:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",
        actionText: "Book Appointment",
        actionHref: "#contact-form",
        badge: "Sunday Closed",
    },
];

export function ContactCards() {
    return (
        <section className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <motion.div
                            className="flex items-center gap-1.5"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <span className="size-1.5 bg-zinc-900 inline-block" />
                            <span className="text-sm text-zinc-900 tracking-wide font-medium">REACH OUT DIRECTLY</span>
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-[38px] text-zinc-900 mt-4 leading-tight font-medium max-w-lg"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                        >
                            Convenient Ways to Connect With Our Advisors
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-zinc-500 text-sm md:text-base max-w-md"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Whether you prefer dropping by our modern sales gallery, having a phone consultation, or sending a quick message, our team is at your service.
                    </motion.p>
                </div>

                {/* Al-Ashraf Group of Companies Parentage Banner */}
                <motion.div
                    className="mb-10 bg-zinc-900 text-white rounded-2xl p-6 md:p-7 border border-zinc-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-400/20">
                            <span>A Project Of</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            Al-Ashraf Group Of Companies
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                            Sindh&apos;s premier multi-disciplinary group driving modern industrial, real estate, and infrastructure excellence.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <a
                            href="tel:111274723"
                            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition font-mono"
                        >
                            <Phone size={15} />
                            <span>111-ASHRAF (274-723)</span>
                        </a>
                        <a
                            href="mailto:info@alashrafgoc.com"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition"
                        >
                            <Mail size={15} className="text-amber-400" />
                            <span>info@alashrafgoc.com</span>
                        </a>
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {channels.map((channel, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-50 border border-zinc-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 280, damping: 60, mass: 1 }}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="size-10 rounded-lg bg-white flex items-center justify-center border border-zinc-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                        {channel.icon}
                                    </div>
                                    <span className="text-[11px] font-medium tracking-wider text-zinc-500 bg-white px-2.5 py-1 rounded-full border border-zinc-100">
                                        {channel.badge}
                                    </span>
                                </div>

                                <h3 className="text-zinc-900 font-medium text-lg mb-2">
                                    {channel.title}
                                </h3>

                                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                    {channel.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-zinc-200/60">
                                <a
                                    href={channel.actionHref}
                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors group/link"
                                >
                                    <span>{channel.actionText}</span>
                                    <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Connect Banner */}
                <motion.div
                    className="mt-10 bg-gray-50 border border-zinc-100 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <div className="flex flex-col text-center sm:text-left">
                        <span className="text-sm font-medium text-zinc-900">Follow Our Official Channels</span>
                        <span className="text-xs text-zinc-500 mt-0.5">Stay connected for verified project updates, on-ground walkthroughs, and news.</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.facebook.com/IndusEnclave"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 text-xs font-medium px-4 py-2.5 rounded-lg transition-colors"
                        >
                            <svg className="size-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span>Facebook</span>
                        </a>

                        <a
                            href="https://www.instagram.com/indusenclave/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 text-xs font-medium px-4 py-2.5 rounded-lg transition-colors"
                        >
                            <svg className="size-4 fill-current text-[#E4405F]" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <span>Instagram</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}