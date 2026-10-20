"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, Mail } from "lucide-react";

export function ContactHero() {
    return (
        <motion.section
            className="flex flex-col items-center min-h-[65vh] justify-center bg-black bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat px-4 w-full pt-24 pb-20"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-white/20 backdrop-blur text-sm text-white pl-2 pr-4 py-1 rounded-full flex items-center gap-2 border border-white/20"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <MessageSquare size={16} />
                <p>We are Here For You</p>
            </motion.div>

            <motion.h1
                className="text-4xl sm:text-5xl md:text-[60px] text-zinc-50 font-medium max-w-3xl text-center mt-5 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Let&apos;s Start a Conversation About Your Next Move
            </motion.h1>

            <motion.p
                className="text-white/80 max-w-xl text-center mt-4 text-sm sm:text-base leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Have questions about a property, scheduling a private viewing, or investing with Indus Enclave? Our advisory team is always ready to guide you.
            </motion.p>

            <motion.div
                className="flex flex-wrap items-center justify-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <a
                    href="#contact-form"
                    className="bg-zinc-50 hover:bg-zinc-200 px-6 py-2.5 rounded-md text-zinc-800 text-sm font-medium cursor-pointer transition flex items-center gap-2"
                >
                    <Mail size={16} />
                    <span>Send a Message</span>
                </a>
                <a
                    href="tel:+923293023156"
                    className="border border-slate-200/60 bg-black/30 backdrop-blur text-zinc-50 px-5 py-2.5 rounded-md text-sm font-medium cursor-pointer transition hover:bg-white/10 flex items-center gap-2"
                >
                    <PhoneCall size={16} />
                    <span>Call Sales Office</span>
                </a>
            </motion.div>
        </motion.section>
    );
}