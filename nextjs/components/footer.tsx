"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 mt-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

                    {/* Left Brand Details */}
                    <div className="lg:col-span-7 flex flex-col items-start gap-6">
                        <a href="#" className="select-none">
                            <img src="logo-1.webp" alt="Indus Enclave" className="h-16 md:h-20 w-auto object-contain" />
                        </a>
                        <p className="text-zinc-300 text-sm/5.5 max-w-md">
                            Helping families, home buyers, and investors secure their dream properties with confidence, full legal approvals, and transparent payment plans.
                        </p>

                        {/* A Project of Al-Ashraf Group of Companies Card */}
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col gap-1.5 w-full max-w-md">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                                A Project Of
                            </span>
                            <h4 className="text-base font-bold text-white tracking-wide">
                                Al-Ashraf Group Of Companies
                            </h4>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-zinc-300">
                                <a
                                    href="tel:111274723"
                                    className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-mono"
                                >
                                    <Phone size={13} className="text-amber-400" />
                                    <span>UAN: 111-ASHRAF (274-723)</span>
                                </a>
                                <a
                                    href="mailto:info@alashrafgoc.com"
                                    className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                                >
                                    <Mail size={13} className="text-amber-400" />
                                    <span>info@alashrafgoc.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact details with icons */}
                        <div className="flex flex-col gap-2.5 text-xs text-zinc-400 pt-1">
                            <div className="flex items-start gap-2.5">
                                <MapPin size={15} className="text-zinc-300 shrink-0 mt-0.5" />
                                <span>No. 1 &amp; 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi.</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone size={15} className="text-zinc-300 shrink-0" />
                                <div className="flex items-center gap-2">
                                    <a href="tel:+923293023156" className="hover:text-white transition-colors">+92 329 302 3156</a>
                                    <span className="text-zinc-600">/</span>
                                    <a href="tel:+923168228918" className="hover:text-white transition-colors">+92 316 822 8918</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail size={15} className="text-zinc-300 shrink-0" />
                                <a href="mailto:info@indusenclave.com" className="hover:text-white transition-colors">info@indusenclave.com</a>
                            </div>
                        </div>

                        {/* Social Buttons */}
                        <div className="flex items-center gap-3 pt-1">
                            <a
                                href="https://www.facebook.com/IndusEnclave"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="size-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                            >
                                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/indusenclave/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="size-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                            >
                                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@IndusEnclaveHousingProject/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube Channel"
                                className="size-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-red-600 transition-colors"
                            >
                                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Link Columns */}
                    <div className="lg:col-span-5 flex justify-between gap-8 flex-wrap">
                        {/* Explore */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white">Explore</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a href="/" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Home
                                </motion.a>
                                <motion.a href="/plots" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Plots
                                </motion.a>
                                <motion.a href="/villas" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Villas
                                </motion.a>
                                <motion.a href="/location" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Location
                                </motion.a>
                                <motion.a href="/gallery" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Gallery
                                </motion.a>
                                <motion.a href="/media" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.32, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Media
                                </motion.a>
                                <motion.a href="/inquiry" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Inquiry
                                </motion.a>
                                <motion.a href="/faq" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    FAQ
                                </motion.a>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white">Social</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a
                                    href="https://www.instagram.com/indusenclave/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors duration-200 group"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    <svg className="size-4 shrink-0 fill-current text-[#E4405F] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span>Instagram</span>
                                </motion.a>
                                <motion.a
                                    href="https://www.facebook.com/IndusEnclave"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors duration-200 group"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    <svg className="size-4 shrink-0 fill-current text-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    <span>Facebook</span>
                                </motion.a>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white">Company</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a href="/about" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    About
                                </motion.a>
                                <motion.a href="/contact" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Contact
                                </motion.a>
                                <motion.a href="https://alashrafgoc.com" className="hover:text-white transition-colors duration-200"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Al-Ashraf Group
                                </motion.a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800"></div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 text-xs text-zinc-300">
                    <p>Copyright 2026 © Indus Enclave — A Project Of Al-Ashraf Group Of Companies. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                        <a href="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
                    </div>
                </div>
                <svg className="absolute bottom-9 right-0 w-xl md:w-206.75 h-52.25 pointer-events-none select-none" viewBox="0 0 1000 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text
                        x="990"
                        y="170"
                        textAnchor="end"
                        fontFamily="var(--font-urbanist), sans-serif"
                        fontSize="90"
                        fontWeight="800"
                        fill="none"
                        stroke="#27272a"
                        strokeWidth="1.5"
                        letterSpacing="-1"
                    >
                        Indus Enclave
                    </text>
                </svg>
            </div>
        </footer>
    );
}
