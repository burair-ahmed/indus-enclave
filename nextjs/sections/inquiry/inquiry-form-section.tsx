"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    CheckCircle2,
    Sparkles,
    Phone,
    Mail,
    MapPin,
    Clock,
    ShieldCheck,
    MessageSquare,
    Building2,
    Layers,
    FileCheck
} from "lucide-react";

export function InquiryFormSection() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [numbers, setNumbers] = useState("");
    const [category, setCategory] = useState<"Sunflower" | "Rose">("Sunflower");
    const [propertyType, setPropertyType] = useState<"Plot" | "Villa">("Plot");
    const [reason, setReason] = useState<"Payment Plan" | "Other">("Payment Plan");
    const [otherReasonText, setOtherReasonText] = useState("");
    const [additionalNotes, setAdditionalNotes] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 600);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumbers("");
        setCategory("Sunflower");
        setPropertyType("Plot");
        setReason("Payment Plan");
        setOtherReasonText("");
        setAdditionalNotes("");
    };

    const whatsappText = encodeURIComponent(
        `*New Inquiry - Indus Enclave*\n\n` +
        `• Name: ${firstName} ${lastName}\n` +
        `• Email: ${email || "N/A"}\n` +
        `• Numbers: ${numbers}\n` +
        `• Category: ${category} Block\n` +
        `• Type: ${propertyType}\n` +
        `• Reason: ${reason}${reason === "Other" && otherReasonText ? ` (${otherReasonText})` : ""}\n` +
        (additionalNotes ? `• Notes: ${additionalNotes}\n` : "")
    );

    return (
        <section id="inquire-form" className="py-20 md:py-24 w-full bg-zinc-50 border-t border-zinc-200 scroll-mt-20">
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* Left / Main Form Column */}
                    <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200/90 shadow-sm relative">
                        {/* Top Badge */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="size-2 rounded-full bg-amber-500" />
                            <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                                Property Inquiry Form
                            </span>
                        </div>

                        {/* Title Requested by User: "Inquire Now" */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                            Inquire Now
                        </h2>
                        <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed">
                            Fill in the details below to receive comprehensive pricing, allotment availability, and official payment schedules.
                        </p>

                        <div className="w-full h-px bg-zinc-100 my-6" />

                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    className="py-10 px-4 flex flex-col items-center text-center"
                                >
                                    <div className="size-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                                        <CheckCircle2 size={36} />
                                    </div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                        Inquiry Submitted Successfully
                                    </span>
                                    <h3 className="text-2xl font-bold text-zinc-900 mt-3">
                                        Thank You, {firstName} {lastName}!
                                    </h3>
                                    <p className="text-zinc-600 text-sm max-w-md mt-2 leading-relaxed">
                                        Your inquiry for a <strong>{category} Block {propertyType}</strong> regarding <strong>{reason}</strong> has been logged.
                                        Our representative will contact you via <strong>{numbers}</strong> or <strong>{email}</strong> shortly.
                                    </p>

                                    {/* WhatsApp Direct Relay Option */}
                                    <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                        <a
                                            href={`https://wa.me/923293023156?text=${whatsappText}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-5 rounded-xl text-xs md:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                                        >
                                            <MessageSquare size={16} />
                                            <span>Connect on WhatsApp</span>
                                        </a>
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold py-3 px-5 rounded-xl text-xs md:text-sm transition-all"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                                    {/* 1. NAME FIELD: First and Last */}
                                    <div>
                                        <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-2">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div>
                                                <input
                                                    type="text"
                                                    required
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    placeholder="First Name"
                                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition"
                                                />
                                                <span className="text-[11px] text-zinc-400 mt-1 block">First</span>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    required
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    placeholder="Last Name"
                                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition"
                                                />
                                                <span className="text-[11px] text-zinc-400 mt-1 block">Last</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. EMAIL FIELD */}
                                    <div>
                                        <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your.email@example.com"
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition"
                                            />
                                            <Mail size={16} className="text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* 3. NUMBERS FIELD (Phone / WhatsApp) */}
                                    <div>
                                        <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-2">
                                            Numbers <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                required
                                                value={numbers}
                                                onChange={(e) => setNumbers(e.target.value)}
                                                placeholder="+92 3XX XXXXXXX"
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition"
                                            />
                                            <Phone size={16} className="text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                        <span className="text-[11px] text-zinc-400 mt-1 block">
                                            Mobile or WhatsApp contact number
                                        </span>
                                    </div>

                                    {/* 4. CATEGORY: Sunflower / Rose */}
                                    <div>
                                        <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-2.5">
                                            Category
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setCategory("Sunflower")}
                                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                                    category === "Sunflower"
                                                        ? "bg-amber-500/10 border-amber-500 text-zinc-950 shadow-sm"
                                                        : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className={`size-3 rounded-full ${category === "Sunflower" ? "bg-amber-500" : "bg-zinc-300"}`} />
                                                    <div>
                                                        <span className="font-bold text-sm block">Sunflower</span>
                                                        <span className="text-[11px] text-zinc-500 block">Sunflower Block</span>
                                                    </div>
                                                </div>
                                                {category === "Sunflower" && (
                                                    <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                                                )}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setCategory("Rose")}
                                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                                    category === "Rose"
                                                        ? "bg-rose-500/10 border-rose-500 text-zinc-950 shadow-sm"
                                                        : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className={`size-3 rounded-full ${category === "Rose" ? "bg-rose-500" : "bg-zinc-300"}`} />
                                                    <div>
                                                        <span className="font-bold text-sm block">Rose</span>
                                                        <span className="text-[11px] text-zinc-500 block">Rose Block</span>
                                                    </div>
                                                </div>
                                                {category === "Rose" && (
                                                    <CheckCircle2 size={16} className="text-rose-600 shrink-0" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* 5. TYPE: Plot / Villa */}
                                    <div>
                                        <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-2.5">
                                            Type
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setPropertyType("Plot")}
                                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                                    propertyType === "Plot"
                                                        ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                                                        : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <Layers size={18} className={propertyType === "Plot" ? "text-amber-400" : "text-zinc-500"} />
                                                    <div>
                                                        <span className="font-bold text-sm block">Plot</span>
                                                        <span className={`text-[11px] block ${propertyType === "Plot" ? "text-zinc-300" : "text-zinc-500"}`}>
                                                            Residential Plot (80 / 120 SQ.YDS)
                                                        </span>
                                                    </div>
                                                </div>
                                                {propertyType === "Plot" && (
                                                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                                                )}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setPropertyType("Villa")}
                                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                                    propertyType === "Villa"
                                                        ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                                                        : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <Building2 size={18} className={propertyType === "Villa" ? "text-amber-400" : "text-zinc-500"} />
                                                    <div>
                                                        <span className="font-bold text-sm block">Villa</span>
                                                        <span className={`text-[11px] block ${propertyType === "Villa" ? "text-zinc-300" : "text-zinc-500"}`}>
                                                            Constructed Luxury Villa
                                                        </span>
                                                    </div>
                                                </div>
                                                {propertyType === "Villa" && (
                                                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* 6. REASON: Payment Plan / Other */}
                                    <div>
                                        <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-2.5">
                                            Reason
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setReason("Payment Plan")}
                                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                                    reason === "Payment Plan"
                                                        ? "bg-amber-500/10 border-amber-500 text-zinc-950 shadow-sm"
                                                        : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <FileCheck size={18} className={reason === "Payment Plan" ? "text-amber-600" : "text-zinc-400"} />
                                                    <div>
                                                        <span className="font-bold text-sm block">Payment Plan</span>
                                                        <span className="text-[11px] text-zinc-500 block">3 &amp; 5 Years Schedule</span>
                                                    </div>
                                                </div>
                                                {reason === "Payment Plan" && (
                                                    <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                                                )}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setReason("Other")}
                                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                                    reason === "Other"
                                                        ? "bg-amber-500/10 border-amber-500 text-zinc-950 shadow-sm"
                                                        : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <Sparkles size={18} className={reason === "Other" ? "text-amber-600" : "text-zinc-400"} />
                                                    <div>
                                                        <span className="font-bold text-sm block">Other</span>
                                                        <span className="text-[11px] text-zinc-500 block">Custom Inquiry / Questions</span>
                                                    </div>
                                                </div>
                                                {reason === "Other" && (
                                                    <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                                                )}
                                            </button>
                                        </div>

                                        {/* Expandable specific reason input if Other is selected */}
                                        {reason === "Other" && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="mt-3"
                                            >
                                                <input
                                                    type="text"
                                                    value={otherReasonText}
                                                    onChange={(e) => setOtherReasonText(e.target.value)}
                                                    placeholder="Please specify your reason (e.g. Site Visit, Allotment status, Commercial)"
                                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Optional message notes */}
                                    <div>
                                        <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-2">
                                            Additional Message (Optional)
                                        </label>
                                        <textarea
                                            rows={3}
                                            value={additionalNotes}
                                            onChange={(e) => setAdditionalNotes(e.target.value)}
                                            placeholder="Tell us if you have any preferred visiting day or specific plot preferences..."
                                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition resize-none"
                                        />
                                    </div>

                                    {/* 7. SUBMIT BUTTON */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 text-white font-semibold py-4 rounded-xl text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                                        >
                                            {isSubmitting ? (
                                                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <Send size={16} />
                                                    <span>Submit Inquiry</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Disclaimer */}
                                    <p className="text-[11px] text-zinc-400 text-center">
                                        By submitting this form, you agree to be contacted by Indus Enclave advisors regarding property information.
                                    </p>
                                </form>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Support & Advisory Info */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Fast Response Guarantee Card */}
                        <div className="bg-zinc-900 text-white p-7 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                                    <ShieldCheck size={14} />
                                    <span>Direct Sales Desk</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    Official Indus Enclave Property Desk
                                </h3>
                                <p className="text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                                    Whether you are planning to book an 80 SQ.YDS or 120 SQ.YDS plot in Sunflower Block, or explore modern villas, our experienced advisors provide authentic pricing, allotment verifications, and on-site visits.
                                </p>

                                <div className="mt-6 pt-6 border-t border-zinc-800 space-y-4 text-xs sm:text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400">
                                            <Phone size={15} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <a href="tel:+923293023156" className="text-white hover:text-amber-400 transition font-mono font-medium">
                                                +92 329 302 3156
                                            </a>
                                            <span className="text-zinc-600">/</span>
                                            <a href="tel:+923168228918" className="text-white hover:text-amber-400 transition font-mono font-medium">
                                                +92 316 822 8918
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400">
                                            <Mail size={15} />
                                        </div>
                                        <a href="mailto:info@indusenclave.com" className="text-white hover:text-amber-400 transition">
                                            info@indusenclave.com
                                        </a>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                                            <MapPin size={15} />
                                        </div>
                                        <span className="text-zinc-300 leading-relaxed">
                                            No. 1 &amp; 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi.
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-amber-400">
                                            <Clock size={15} />
                                        </div>
                                        <span className="text-zinc-300">
                                            Monday – Saturday: 10:00 AM – 7:00 PM
                                        </span>
                                    </div>
                                </div>

                                {/* Instant WhatsApp Action */}
                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    <a
                                        href="https://wa.me/923293023156?text=Hello%20Indus%20Enclave!%20I%20would%20like%20to%20inquire%20about%20plots%20and%20villas."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                                    >
                                        <MessageSquare size={16} />
                                        <span>Direct Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Inquiry Highlights Checklist */}
                        <div className="bg-white p-6 sm:p-7 rounded-3xl border border-zinc-200 shadow-sm">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-4">
                                What You Receive After Inquiring
                            </h4>
                            <div className="space-y-3 text-xs sm:text-sm text-zinc-600">
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Official Sunflower &amp; Rose Block payment plan schedules</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Detailed plot and villa layout architectural dimensions</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Free scheduled on-site guided tour with transportation support</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Clear documentation &amp; verification of allotment files</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
