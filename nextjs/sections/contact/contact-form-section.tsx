"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Send, Sparkles, Building, Clock, ShieldCheck } from "lucide-react";

const houseImage = "/assets/house.png";

const inquiryTypes = [
    "Buying Property",
    "Selling Property",
    "Schedule Site Tour",
    "Investment Advisory",
    "Other Inquiries"
];

export function ContactFormSection() {
    const [selectedType, setSelectedType] = useState("Buying Property");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section id="contact-form" className="py-20 md:py-28 w-full bg-gray-50/80 scroll-mt-24">
            <div className="max-w-7xl w-full mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Interactive Form */}
                    <div className="lg:col-span-7 flex flex-col bg-white p-6 sm:p-10 rounded-2xl border border-zinc-100 shadow-sm">
                        <motion.div
                            className="flex items-center gap-1.5"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <span className="size-1.5 bg-zinc-900 inline-block" />
                            <span className="text-xs sm:text-sm text-zinc-900 font-medium tracking-wide">
                                SEND US A MESSAGE
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-[36px] text-zinc-900 mt-4 leading-tight font-medium"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                        >
                            How Can Our Advisors Assist You?
                        </motion.h2>

                        <motion.p
                            className="text-zinc-500 text-xs sm:text-sm mt-2 leading-relaxed"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            Please select an inquiry type and fill in your details below. We guarantee a prompt and tailored response.
                        </motion.p>

                        {/* Inquiry Type Chips */}
                        <div className="mt-8">
                            <label className="text-xs font-semibold text-zinc-500 tracking-wider block mb-3 uppercase">
                                INQUIRY TYPE
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {inquiryTypes.map((type) => {
                                    const active = selectedType === type;
                                    return (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setSelectedType(type)}
                                            className={`text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer font-medium ${
                                                active
                                                    ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                                                    : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100"
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Success Message Banner */}
                        {isSubmitted ? (
                            <motion.div
                                className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <CheckCircle2 className="size-6 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-semibold text-emerald-900">
                                        Message Sent Successfully!
                                    </h4>
                                    <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                                        Thank you, {formData.name || "valued client"}. Our senior real estate advisor has received your request regarding <strong>{selectedType}</strong> and will contact you within 24 hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                                        }}
                                        className="mt-3 text-xs font-medium text-emerald-800 underline hover:text-emerald-950"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            /* Form */
                            <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Name */}
                                    <div className="flex flex-col">
                                        <label className="text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-wide">
                                            Your Name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Michael Anderson"
                                            className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col">
                                        <label className="text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-wide">
                                            Email Address *
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="info@indusenclave.com"
                                            className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Phone */}
                                    <div className="flex flex-col">
                                        <label className="text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+92 329 302 3156"
                                            className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="flex flex-col">
                                        <label className="text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-wide">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            placeholder="e.g. 10 Marla Villa Inquiry"
                                            className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col">
                                    <label className="text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-wide">
                                        Your Message *
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about the property, your budget, preferred location, or any specific questions you have..."
                                        className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white text-xs font-medium px-8 py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                                    >
                                        <span>Submit Inquiry</span>
                                        <Send size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Visual Card & Highlights */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Image Showcase */}
                        <motion.div
                            className="relative overflow-hidden rounded-2xl group shadow-sm bg-zinc-900 border border-zinc-100"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden">
                                <Image
                                    src={houseImage}
                                    alt="Indus Enclave Experience Office"
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                                {/* Overlay Details */}
                                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 text-white">
                                    <span className="text-xs uppercase tracking-widest text-zinc-300 font-medium flex items-center gap-1.5">
                                        <Sparkles size={14} className="text-amber-400" />
                                        EXPERIENCE CENTER
                                    </span>
                                    <h3 className="text-xl font-medium text-white">
                                        Indus Enclave Sales Gallery
                                    </h3>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        Experience our master plan models, material samples, and discuss tailored payment plans in a welcoming setting.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Assurance Badges */}
                        <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex flex-col gap-4">
                            <div className="flex items-start gap-3.5">
                                <div className="size-9 rounded-lg bg-zinc-50 border border-zinc-200/60 flex items-center justify-center shrink-0">
                                    <Clock className="size-4 text-zinc-800" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-zinc-900">Swift Response Commitment</h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">We respond to every digital inquiry within 2 business hours.</p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-zinc-100" />

                            <div className="flex items-start gap-3.5">
                                <div className="size-9 rounded-lg bg-zinc-50 border border-zinc-200/60 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="size-4 text-zinc-800" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-zinc-900">Confidential &amp; Verified</h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">All communications and client proposals are held in strict confidence.</p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-zinc-100" />

                            <div className="flex items-start gap-3.5">
                                <div className="size-9 rounded-lg bg-zinc-50 border border-zinc-200/60 flex items-center justify-center shrink-0">
                                    <Building className="size-4 text-zinc-800" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-zinc-900">Complimentary Site Tours</h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">Private chauffeur-driven visits arranged upon appointment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}