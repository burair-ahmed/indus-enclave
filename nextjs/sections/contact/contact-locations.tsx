"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

const locations = [
    {
        name: "Indus Enclave Head Office",
        tag: "HEAD OFFICE",
        address: "Office No. 1 & 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi.",
        phone: "+92 329 302 3156",
        email: "info@indusenclave.com",
        hours: "Mon - Sat: 9:00 AM - 6:00 PM",
        image: "/assets/house.png",
        mapUrl: "https://www.google.com/maps/search/No.+7+%26+8,+Mezzanine+Floor,+Osif+Arcade,+Block+No.+15,+Gulshan-e-Iqbal,+Karachi./@24.9043252,67.0776129,19z/data=!5m1!1e1?entry=ttu"
    },
    {
        name: "Sales & Advisory Desk",
        tag: "CUSTOMER CARE",
        address: "Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi",
        phone: "+92 316 822 8918",
        email: "info@indusenclave.com",
        hours: "Mon - Sat: 10:00 AM - 6:00 PM",
        image: "/assets/galleryImage1.png",
        mapUrl: "https://www.google.com/maps/search/No.+7+%26+8,+Mezzanine+Floor,+Osif+Arcade,+Block+No.+15,+Gulshan-e-Iqbal,+Karachi./@24.9043252,67.0776129,19z/data=!5m1!1e1?entry=ttu"
    }
];

export function ContactLocations() {
    return (
        <section className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-14">
                    <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-zinc-900 inline-block" />
                        <span className="text-xs sm:text-sm text-zinc-900 font-medium tracking-wide">
                            OUR SPACES
                        </span>
                    </motion.div>

                    <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent mt-3.5" />

                    <motion.h2
                        className="text-3xl md:text-[38px] text-zinc-900 mt-5 font-medium leading-tight max-w-lg"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Visit Our Experience Centers
                    </motion.h2>

                    <motion.p
                        className="text-zinc-500 text-xs sm:text-sm md:text-base mt-2.5 max-w-md leading-relaxed"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Walk in anytime during operating hours or book a private consultation with our senior project advisors.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, type: "spring", stiffness: 280, damping: 60, mass: 1 }}
                        >
                            <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/75 backdrop-blur text-white text-[10px] tracking-wider font-semibold px-3 py-1 rounded-full uppercase">
                                        {loc.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-xl font-medium text-zinc-900 mb-3">
                                        {loc.name}
                                    </h3>

                                    <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-600 mb-6">
                                        <div className="flex items-start gap-2.5">
                                            <MapPin size={16} className="text-zinc-400 shrink-0 mt-0.5" />
                                            <span>{loc.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <Phone size={16} className="text-zinc-400 shrink-0" />
                                            <span>{loc.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <Mail size={16} className="text-zinc-400 shrink-0" />
                                            <span>{loc.email}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                                    <span className="text-xs text-zinc-400">
                                        {loc.hours}
                                    </span>
                                    <a
                                        href={loc.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                                    >
                                        <Navigation size={13} />
                                        <span>Directions</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}