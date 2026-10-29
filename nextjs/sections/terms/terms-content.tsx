"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FileText,
    Globe,
    Scale,
    AlertTriangle,
    ShieldCheck,
    Ban,
    Pencil,
    HelpCircle,
    Building2,
    Landmark,
    CreditCard,
    ArrowRight,
    Mail,
    Phone,
    MapPin
} from "lucide-react";

interface Section {
    id: string;
    title: string;
    icon: React.ReactNode;
}

const sections: Section[] = [
    { id: "acceptance", title: "1. Acceptance of Terms", icon: <FileText size={18} /> },
    { id: "website-use", title: "2. Website Use & Eligibility", icon: <Globe size={18} /> },
    { id: "property-bookings", title: "3. Property Bookings & Payments", icon: <CreditCard size={18} /> },
    { id: "project-info", title: "4. Project Information & Accuracy", icon: <Building2 size={18} /> },
    { id: "intellectual-property", title: "5. Intellectual Property", icon: <Pencil size={18} /> },
    { id: "disclaimers", title: "6. Disclaimers & Limitations", icon: <AlertTriangle size={18} /> },
    { id: "prohibited-conduct", title: "7. Prohibited Conduct", icon: <Ban size={18} /> },
    { id: "regulatory-compliance", title: "8. Regulatory Compliance", icon: <Landmark size={18} /> },
    { id: "governing-law", title: "9. Governing Law & Disputes", icon: <Scale size={18} /> },
    { id: "changes-to-terms", title: "10. Changes to Terms", icon: <ShieldCheck size={18} /> },
    { id: "contact-us", title: "11. Contact Us", icon: <Mail size={18} /> },
];

export function TermsContent() {
    const [activeSection, setActiveSection] = useState("acceptance");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-120px 0px -60% 0px" }
        );

        sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 w-full bg-zinc-50 border-t border-zinc-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

                    {/* Left Sticky Table of Contents (Desktop) */}
                    <aside className="hidden lg:block lg:col-span-4">
                        <div className="sticky top-28 bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
                            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-100">
                                <FileText size={18} className="text-amber-500" />
                                <h3 className="font-bold text-zinc-900 text-sm tracking-wide uppercase">
                                    Table of Contents
                                </h3>
                            </div>

                            <nav className="space-y-1">
                                {sections.map((sec) => {
                                    const isActive = activeSection === sec.id;
                                    return (
                                        <button
                                            key={sec.id}
                                            onClick={() => scrollToSection(sec.id)}
                                            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-all cursor-pointer ${
                                                isActive
                                                    ? "bg-amber-50 text-amber-900 font-semibold border-l-2 border-amber-500 pl-2.5"
                                                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                                            }`}
                                        >
                                            <span className={`shrink-0 ${isActive ? "text-amber-600" : "text-zinc-400"}`}>
                                                {sec.icon}
                                            </span>
                                            <span className="truncate">{sec.title}</span>
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="mt-8 pt-5 border-t border-zinc-100 bg-zinc-50 rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 mb-1">
                                    <HelpCircle size={15} className="text-amber-500" />
                                    <span>Have a Question?</span>
                                </div>
                                <p className="text-[11px] text-zinc-500 leading-relaxed">
                                    Our team is ready to assist with any questions about these terms or your booking agreement.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline mt-2.5"
                                >
                                    <span>Contact Legal Team</span>
                                    <ArrowRight size={13} />
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Right Main Content */}
                    <div className="lg:col-span-8 flex flex-col gap-12">

                        {/* Summary Callout Banner */}
                        <div className="bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 p-6 md:p-8 rounded-3xl border border-amber-200/80 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-2xl bg-amber-500 text-zinc-950 flex items-center justify-center shrink-0 shadow-md">
                                    <Scale size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                                        Our Commitment to Transparency
                                    </h2>
                                    <p className="text-zinc-600 text-sm mt-1.5 leading-relaxed font-light">
                                        These Terms of Service govern your use of the Indus Enclave website and all services
                                        provided by Al-Ashraf Group of Companies. By accessing our platform or engaging in
                                        any booking, you agree to be bound by these terms. We encourage you to read them
                                        carefully.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section: Acceptance of Terms */}
                        <TermsSection
                            id="acceptance"
                            icon={<FileText size={22} />}
                            title="1. Acceptance of Terms"
                        >
                            <p>
                                By accessing or using the Indus Enclave website (the &quot;Site&quot;), inquiring about
                                plots or villas, submitting a booking form, or engaging with Al-Ashraf Group of
                                Companies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) in any capacity, you confirm that you have read,
                                understood, and agree to be bound by these Terms of Service (&quot;Terms&quot;).
                            </p>
                            <p>
                                If you do not agree with any part of these Terms, you must not use our Site or
                                services. Continued use of the Site after any updates to these Terms constitutes
                                your acceptance of the revised Terms.
                            </p>
                            <InfoCard icon={<ShieldCheck size={16} />} color="amber">
                                These terms apply to all visitors, prospective buyers, confirmed plot/villa owners,
                                agents, and any other parties who interact with Indus Enclave or Al-Ashraf Group
                                of Companies.
                            </InfoCard>
                        </TermsSection>

                        {/* Section: Website Use & Eligibility */}
                        <TermsSection
                            id="website-use"
                            icon={<Globe size={22} />}
                            title="2. Website Use & Eligibility"
                        >
                            <p>
                                Our Site is intended for individuals who are at least 18 years of age and have the
                                legal capacity to enter into binding agreements under Pakistani law. By using the
                                Site, you represent that you meet these eligibility requirements.
                            </p>
                            <BulletList items={[
                                "You may use the Site solely for lawful purposes and in accordance with these Terms.",
                                "You agree not to use the Site in any way that violates applicable local, national, or international laws or regulations.",
                                "You are responsible for ensuring that all persons who access the Site through your internet connection are aware of these Terms.",
                                "We reserve the right to restrict access to the Site or any part of it at our discretion without notice.",
                                "The Site is intended primarily for residents of Pakistan and Overseas Pakistanis considering property investment.",
                            ]} />
                        </TermsSection>

                        {/* Section: Property Bookings & Payments */}
                        <TermsSection
                            id="property-bookings"
                            icon={<CreditCard size={22} />}
                            title="3. Property Bookings & Payments"
                        >
                            <p>
                                All bookings for residential plots, commercial plots, cottage industry plots, and
                                villas at Indus Enclave are subject to a formal booking agreement signed between the
                                buyer and Al-Ashraf Group of Companies. The following terms apply:
                            </p>
                            <BulletList items={[
                                "Booking amounts are non-refundable unless specifically stated in the signed booking agreement.",
                                "Plot selection, allocation, and confirmation charges are separate from the monthly or yearly installment amounts.",
                                "All installment payments must be made on or before the due dates specified in the payment schedule.",
                                "Late payment may result in surcharges as outlined in the individual booking agreement.",
                                "All payments must be made via bank transfer, pay order, or other officially accepted methods. Cash payments at our offices may be accepted subject to issuance of an official receipt.",
                                "Plot dimensions, locations, and prices are subject to change prior to formal allocation. Confirmed allocations are governed solely by the allotment letter.",
                                "Extra charges for corner plots, main road facing, park facing, and west-open plots apply as stated in the payment schedule brochure.",
                            ]} />
                            <InfoCard icon={<AlertTriangle size={16} />} color="orange">
                                Any verbal commitments or promises made outside of a signed, stamped agreement
                                issued by Al-Ashraf Group of Companies hold no legal weight. Always obtain written
                                confirmation for all transactions.
                            </InfoCard>
                        </TermsSection>

                        {/* Section: Project Information & Accuracy */}
                        <TermsSection
                            id="project-info"
                            icon={<Building2 size={22} />}
                            title="4. Project Information & Accuracy"
                        >
                            <p>
                                We strive to keep all information on this Site accurate and up to date. However,
                                the following applies:
                            </p>
                            <BulletList items={[
                                "Renderings, floor plans, and imagery shown on this Site are for illustrative purposes only and may differ from the final construction.",
                                "Prices, availability, and payment plans displayed on the Site are subject to change without prior notice.",
                                "The project timeline, development phases, and possession dates are estimates based on current planning and may be revised.",
                                "SBCA and SDA approval references are accurate at the time of publication but buyers are encouraged to independently verify regulatory status.",
                                "Al-Ashraf Group of Companies makes no warranty, express or implied, that the information on this Site is complete, current, or error-free.",
                            ]} />
                        </TermsSection>

                        {/* Section: Intellectual Property */}
                        <TermsSection
                            id="intellectual-property"
                            icon={<Pencil size={22} />}
                            title="5. Intellectual Property"
                        >
                            <p>
                                All content on this Site — including but not limited to text, graphics, logos, images,
                                floor plans, brochures, payment schedules, and software — is the exclusive property of
                                Al-Ashraf Group of Companies or its licensors and is protected under applicable
                                intellectual property laws.
                            </p>
                            <BulletList items={[
                                "You may not copy, reproduce, distribute, transmit, publish, or create derivative works from any content on this Site without prior written permission.",
                                "Indus Enclave, Al-Ashraf Group, and all associated logos and branding are trademarks of the company. Unauthorized use is strictly prohibited.",
                                "You may print or download content for personal, non-commercial reference use only.",
                                "Any feedback, suggestions, or ideas submitted to us may be used by us without any obligation to you.",
                            ]} />
                        </TermsSection>

                        {/* Section: Disclaimers & Limitations */}
                        <TermsSection
                            id="disclaimers"
                            icon={<AlertTriangle size={22} />}
                            title="6. Disclaimers & Limitations of Liability"
                        >
                            <p>
                                To the fullest extent permitted by applicable law, Al-Ashraf Group of Companies
                                disclaims all warranties, express or implied, in connection with the Site and your
                                use of it.
                            </p>
                            <BulletList items={[
                                "We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
                                "We are not liable for any loss or damage arising from your reliance on information obtained through this Site.",
                                "We are not responsible for the content of external websites linked from our Site.",
                                "In no event shall Al-Ashraf Group of Companies be liable for any indirect, incidental, special, or consequential damages arising from the use of, or inability to use, our Site or services.",
                                "Our total liability to you for any claims arising under these Terms shall not exceed the booking amount paid by you for the specific property in question.",
                            ]} />
                            <InfoCard icon={<Scale size={16} />} color="amber">
                                Nothing in these Terms limits our liability for death or personal injury caused by
                                our negligence, or for fraud or fraudulent misrepresentation.
                            </InfoCard>
                        </TermsSection>

                        {/* Section: Prohibited Conduct */}
                        <TermsSection
                            id="prohibited-conduct"
                            icon={<Ban size={22} />}
                            title="7. Prohibited Conduct"
                        >
                            <p>
                                You agree not to engage in any of the following when using our Site or services:
                            </p>
                            <BulletList items={[
                                "Impersonating any person or entity, or misrepresenting your affiliation with any person or entity.",
                                "Using the Site to submit false, misleading, or fraudulent booking inquiries.",
                                "Attempting to gain unauthorized access to any portion of the Site or its related systems.",
                                "Transmitting any unsolicited or unauthorized advertising or promotional material.",
                                "Using any automated means (bots, scrapers, crawlers) to access, query, or index the Site without permission.",
                                "Reverse engineering, decompiling, or disassembling any software associated with the Site.",
                                "Engaging in any conduct that could damage, disable, or impair the Site or interfere with other users' access.",
                                "Reselling, sub-licensing, or transferring any booking or allocation made under your name without written consent from Al-Ashraf Group of Companies.",
                            ]} />
                        </TermsSection>

                        {/* Section: Regulatory Compliance */}
                        <TermsSection
                            id="regulatory-compliance"
                            icon={<Landmark size={22} />}
                            title="8. Regulatory Compliance"
                        >
                            <p>
                                Indus Enclave is a housing project developed under the regulatory framework of
                                Pakistani authorities, including but not limited to SBCA (Sindh Building Control
                                Authority) and SDA (Sindh Development Authority).
                            </p>
                            <BulletList items={[
                                "All buyers are responsible for ensuring their own compliance with applicable tax laws, including Withholding Tax, Capital Value Tax (CVT), and any other property-related taxes.",
                                "Overseas Pakistanis are encouraged to consult their legal and tax advisors before entering into any property transaction.",
                                "Al-Ashraf Group of Companies complies with anti-money laundering (AML) regulations and may require documentation for identity verification.",
                                "Any property transfer or resale must comply with applicable SBCA/SDA transfer procedures and NOC requirements.",
                            ]} />
                        </TermsSection>

                        {/* Section: Governing Law & Disputes */}
                        <TermsSection
                            id="governing-law"
                            icon={<Scale size={22} />}
                            title="9. Governing Law & Dispute Resolution"
                        >
                            <p>
                                These Terms and any disputes arising from them shall be governed by and construed
                                in accordance with the laws of the Islamic Republic of Pakistan.
                            </p>
                            <BulletList items={[
                                "Any disputes arising from property bookings or these Terms shall first be attempted to be resolved through amicable negotiation between the parties.",
                                "If negotiation fails, disputes shall be referred to arbitration in Karachi, Pakistan, in accordance with the Arbitration Act applicable at the time.",
                                "The courts of Karachi, Sindh, shall have exclusive jurisdiction over any matters that cannot be resolved through arbitration.",
                                "Buyers waive any objection to the laying of venue of any proceedings in Karachi, Sindh.",
                            ]} />
                            <InfoCard icon={<ShieldCheck size={16} />} color="amber">
                                Nothing in this section prevents either party from seeking urgent injunctive or
                                other equitable relief from a court of competent jurisdiction.
                            </InfoCard>
                        </TermsSection>

                        {/* Section: Changes to Terms */}
                        <TermsSection
                            id="changes-to-terms"
                            icon={<ShieldCheck size={22} />}
                            title="10. Changes to These Terms"
                        >
                            <p>
                                We reserve the right to update or modify these Terms of Service at any time.
                                Changes will be effective immediately upon posting to the Site.
                            </p>
                            <BulletList items={[
                                "We will indicate the effective date of the latest revision at the top of this page.",
                                "For material changes, we may notify registered users or active booking clients via email or WhatsApp.",
                                "Your continued use of the Site or services after changes are posted constitutes your acceptance of the revised Terms.",
                                "We encourage you to review these Terms periodically to stay informed of any updates.",
                            ]} />
                        </TermsSection>

                        {/* Section: Contact Us */}
                        <TermsSection
                            id="contact-us"
                            icon={<Mail size={22} />}
                            title="11. Contact Us"
                        >
                            <p>
                                If you have any questions, concerns, or require clarification about these Terms of
                                Service, please reach out to us through any of the following channels:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                <ContactCard
                                    icon={<Building2 size={20} />}
                                    label="Company"
                                    value="Al-Ashraf Group of Companies"
                                />
                                <ContactCard
                                    icon={<Phone size={20} />}
                                    label="Phone / WhatsApp"
                                    value="+92 300 0000000"
                                    href="tel:+923000000000"
                                />
                                <ContactCard
                                    icon={<Mail size={20} />}
                                    label="Email"
                                    value="info@indusenclave.com"
                                    href="mailto:info@indusenclave.com"
                                />
                                <ContactCard
                                    icon={<MapPin size={20} />}
                                    label="Location"
                                    value="M-9 Motorway, Karachi, Sindh, Pakistan"
                                />
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-6 py-3 rounded-2xl transition-colors shadow-sm"
                                >
                                    <Mail size={16} />
                                    Send Us a Message
                                </a>
                                <a
                                    href="/privacy-policy"
                                    className="inline-flex items-center justify-center gap-2 border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 text-zinc-700 font-semibold text-sm px-6 py-3 rounded-2xl transition-colors"
                                >
                                    <ShieldCheck size={16} />
                                    View Privacy Policy
                                </a>
                            </div>
                        </TermsSection>

                        {/* Effective Date Footer */}
                        <div className="text-xs text-zinc-400 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span>© {new Date().getFullYear()} Al-Ashraf Group of Companies. All rights reserved.</span>
                            <span className="hidden sm:inline text-zinc-300">•</span>
                            <span>Indus Enclave Housing Project — Effective October 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Sub-components ─── */

function TermsSection({
    id,
    icon,
    title,
    children,
}: {
    id: string;
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            id={id}
            className="scroll-mt-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3 mb-5">
                <div className="size-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    {icon}
                </div>
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight">{title}</h2>
            </div>
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 md:p-8 shadow-sm flex flex-col gap-4 text-zinc-600 text-sm leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 size-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <ArrowRight size={11} />
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function InfoCard({
    icon,
    color,
    children,
}: {
    icon: React.ReactNode;
    color: "amber" | "orange";
    children: React.ReactNode;
}) {
    const colors = {
        amber: "bg-amber-50 border-amber-200 text-amber-800",
        orange: "bg-orange-50 border-orange-200 text-orange-800",
    };
    return (
        <div className={`flex items-start gap-3 p-4 rounded-2xl border ${colors[color]}`}>
            <span className="shrink-0 mt-0.5">{icon}</span>
            <p className="text-[13px] leading-relaxed font-medium">{children}</p>
        </div>
    );
}

function ContactCard({
    icon,
    label,
    value,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    const inner = (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-amber-600">
                {icon}
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">{label}</span>
            </div>
            <p className="text-sm font-semibold text-zinc-800 leading-snug">{value}</p>
        </div>
    );

    return (
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 hover:border-amber-300 hover:bg-amber-50/30 transition-colors">
            {href ? (
                <a href={href} className="block">
                    {inner}
                </a>
            ) : (
                inner
            )}
        </div>
    );
}
