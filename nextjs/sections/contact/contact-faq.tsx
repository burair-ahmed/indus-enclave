"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        question: "How do I schedule a private site visit to Indus Enclave?",
        answer: "You can schedule a visit by submitting the contact form above, calling our sales hotline (+92 329 302 3156 / +92 316 822 8918), or emailing info@indusenclave.com. Our advisors will coordinate a dedicated time and arrange a personalized tour."
    },
    {
        question: "Are consultations available on weekends?",
        answer: "Yes, our Sales Gallery and Experience Center is open on Saturdays from 10:00 AM to 4:00 PM. Weekend private consultations can also be pre-booked upon request to fit your schedule."
    },
    {
        question: "What information should I have ready for our initial meeting?",
        answer: "Having an approximate budget, preferred property type (residential villa, plot, commercial unit), and desired timeline helps us tailor the most relevant options. No formal documents are required for an exploratory discussion."
    },
    {
        question: "Do you offer remote consultations for overseas Pakistani buyers?",
        answer: "Absolutely. We routinely host video consultations over Zoom or WhatsApp for overseas investors, complete with 3D virtual walkthroughs, updated construction progress footage, and digital paperwork handling."
    },
    {
        question: "How fast can I expect a response after submitting the contact form?",
        answer: "Our advisory desk reviews all inquiries within two business hours. You will receive an email confirmation and a personal call from an advisor designated to your specific property interest."
    }
];

export function ContactFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Heading */}
                <div className="lg:col-span-5 flex flex-col">
                    <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-zinc-900 inline-block" />
                        <span className="text-xs sm:text-sm text-zinc-900 font-medium tracking-wide">
                            FREQUENTLY ASKED
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 leading-tight font-medium max-w-md"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Everything You Need to Know Before Connecting
                    </motion.h2>

                    <motion.p
                        className="text-zinc-500 text-sm md:text-base mt-4 leading-relaxed max-w-md"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Got a question that isn&apos;t listed here? Send us a message or call our sales desk directly — we&apos;re always happy to assist.
                    </motion.p>
                </div>

                {/* Right Column: Accordion */}
                <div className="lg:col-span-7 flex flex-col gap-4 w-full">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className="bg-gray-50/70 rounded-xl border border-zinc-200/60 overflow-hidden"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-5 md:py-5 md:px-6 text-left hover:bg-zinc-100/50 transition cursor-pointer"
                                >
                                    <span className="text-sm md:text-base font-medium text-zinc-800 pr-4">
                                        {item.question}
                                    </span>
                                    <div className="shrink-0">
                                        {isOpen ? (
                                            <Minus className="size-4 text-zinc-800" />
                                        ) : (
                                            <Plus className="size-4 text-zinc-800" />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="p-5 md:px-6 pt-0 text-xs md:text-sm text-zinc-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}