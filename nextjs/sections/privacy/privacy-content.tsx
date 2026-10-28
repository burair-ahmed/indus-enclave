"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    FileText,
    Eye,
    Lock,
    Scale,
    Ban,
    Cookie,
    Globe,
    UserCheck,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    HelpCircle
} from "lucide-react";

interface Section {
    id: string;
    title: string;
    icon: React.ReactNode;
}

const sections: Section[] = [
    { id: "introduction", title: "1. Introduction & Scope", icon: <FileText size={18} /> },
    { id: "information-collected", title: "2. Information We Collect", icon: <Eye size={18} /> },
    { id: "how-we-use", title: "3. How We Use Information", icon: <ShieldCheck size={18} /> },
    { id: "document-security", title: "4. Document & Data Security", icon: <Lock size={18} /> },
    { id: "regulatory-disclosure", title: "5. Legal & Regulatory Disclosures", icon: <Scale size={18} /> },
    { id: "no-sale-policy", title: "6. No Selling of Personal Data", icon: <Ban size={18} /> },
    { id: "cookies-analytics", title: "7. Cookies & Digital Analytics", icon: <Cookie size={18} /> },
    { id: "overseas-clients", title: "8. Overseas Pakistanis & Remote Booking", icon: <Globe size={18} /> },
    { id: "buyer-rights", title: "9. Your Rights & Record Updates", icon: <UserCheck size={18} /> },
    { id: "contact-controller", title: "10. Contact & Privacy Office", icon: <Mail size={18} /> }
];

export function PrivacyContent() {
    const [activeSection, setActiveSection] = useState("introduction");

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
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
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
                                    Our support team is available to assist you with any legal or privacy questions.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline mt-2.5"
                                >
                                    <span>Contact Privacy Team</span>
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
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                                        Our Commitment to You
                                    </h2>
                                    <p className="text-zinc-600 text-sm mt-1.5 leading-relaxed font-light">
                                        Indus Enclave and Al-Ashraf Group of Companies treat your personal and financial documentation
                                        with the utmost care and confidentiality. We only collect the information necessary to process
                                        your property bookings, prepare official allotment files, and provide you with seamless ownership support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <article id="introduction" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <FileText size={16} />
                                <span>Section 1</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Introduction &amp; Scope
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    This Privacy Policy explains how <strong>Indus Enclave Housing Project</strong> (&ldquo;Indus Enclave&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a flagship development by <strong>Al-Ashraf Group of Companies</strong>, collects, protects, uses, and safeguards information provided by visitors to our website (<a href="https://indusenclave.com" className="text-amber-600 underline font-normal">indusenclave.com</a>), prospective buyers, overseas clients, and registered plot and villa owners.
                                </p>
                                <p>
                                    By accessing our website, submitting an inquiry, scheduling a site visit, or providing documentation for booking a plot or constructed villa, you agree to the collection and handling of your information as outlined in this policy.
                                </p>
                            </div>
                        </article>

                        {/* Section 2 */}
                        <article id="information-collected" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <Eye size={16} />
                                <span>Section 2</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Information We Collect
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-4 font-light">
                                <p>
                                    We collect information only when it is voluntarily submitted by you or strictly required for legitimate property sales, booking verification, and ownership transfers:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                                        <h4 className="font-semibold text-zinc-900 text-sm mb-1.5 flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-amber-500"></span>
                                            Direct Contact &amp; Inquiries
                                        </h4>
                                        <p className="text-xs text-zinc-600 leading-relaxed">
                                            Your full name, phone number, WhatsApp contact, email address, city/country of residence, and property preferences submitted through our contact and inquiry forms.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                                        <h4 className="font-semibold text-zinc-900 text-sm mb-1.5 flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-amber-500"></span>
                                            Property Booking Documentation
                                        </h4>
                                        <p className="text-xs text-zinc-600 leading-relaxed">
                                            Copies of your CNIC or NICOP, passport-sized photographs, next-of-kin / nominee CNIC copy, mailing address, and bank payment receipts or deposit slips.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                                        <h4 className="font-semibold text-zinc-900 text-sm mb-1.5 flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-amber-500"></span>
                                            Payment Records &amp; Milestones
                                        </h4>
                                        <p className="text-xs text-zinc-600 leading-relaxed">
                                            Transaction dates, installment receipt numbers, bank draft references, and registered ledger balances associated with your allotted plot or villa file.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                                        <h4 className="font-semibold text-zinc-900 text-sm mb-1.5 flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-amber-500"></span>
                                            Technical Device Data
                                        </h4>
                                        <p className="text-xs text-zinc-600 leading-relaxed">
                                            Standard website traffic data such as browser type, device operating system, general location (city level), and pages viewed to ensure smooth site performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Section 3 */}
                        <article id="how-we-use" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <ShieldCheck size={16} />
                                <span>Section 3</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                How We Use Your Information
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    We use the information collected exclusively for legitimate real estate and customer service operations:
                                </p>
                                <ul className="space-y-2.5 pt-1 text-sm text-zinc-700">
                                    <li className="flex items-start gap-2.5">
                                        <span className="size-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                        <span><strong>Official Allotment &amp; Booking:</strong> Generating your official file number, verifying applicant identity, and issuing formal payment receipts and allotment letters.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="size-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                        <span><strong>Project &amp; Payment Communication:</strong> Sending timely notifications regarding installment due dates, development milestones, possession readiness, and event invitations.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="size-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                        <span><strong>Site Visit Coordination:</strong> Scheduling in-person guided site visits to our M-9 Motorway Nooriabad site, coordinating transport, and arranging property viewings.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="size-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                        <span><strong>Legal Verification:</strong> Fulfilling standard property ownership guidelines as prescribed by civic authorities like the Sindh Building Control Authority (SBCA) and Sehwan Development Authority (SDA).</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        {/* Section 4 */}
                        <article id="document-security" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <Lock size={16} />
                                <span>Section 4</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Document &amp; Data Security
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    We understand that real estate transactions involve critical personal and identification records. Indus Enclave enforces strict multi-layered security controls:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 text-center">
                                        <div className="size-9 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-2 text-zinc-800">
                                            <Lock size={18} />
                                        </div>
                                        <h5 className="font-bold text-xs text-zinc-900">Physical Record Vaults</h5>
                                        <p className="text-[11px] text-zinc-500 mt-1">Stored securely at our head office with restricted authorized personnel access.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 text-center">
                                        <div className="size-9 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-2 text-zinc-800">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <h5 className="font-bold text-xs text-zinc-900">Encrypted Digital Storage</h5>
                                        <p className="text-[11px] text-zinc-500 mt-1">Digital applicant scans and payment ledgers are protected behind secure servers.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 text-center">
                                        <div className="size-9 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-2 text-zinc-800">
                                            <FileText size={18} />
                                        </div>
                                        <h5 className="font-bold text-xs text-zinc-900">Non-Disclosure Training</h5>
                                        <p className="text-[11px] text-zinc-500 mt-1">Our sales consultants and staff operate under binding confidentiality protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Section 5 */}
                        <article id="regulatory-disclosure" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <Scale size={16} />
                                <span>Section 5</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Legal &amp; Regulatory Disclosures
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    As a legally certified project with approvals from the <strong>Sindh Building Control Authority (SBCA)</strong> and <strong>Sehwan Development Authority (SDA)</strong>, we comply fully with the laws of Pakistan.
                                </p>
                                <p>
                                    We may share property applicant data only when strictly required:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700">
                                    <li>With government development authorities for plot allotment registries, title transfers, and town planning records.</li>
                                    <li>With authorized banking institutions to verify official pay orders, direct bank transfers, or demand drafts.</li>
                                    <li>When required by a formal court order, legal subpoena, or statutory Pakistani law enforcement directive.</li>
                                </ul>
                            </div>
                        </article>

                        {/* Section 6 */}
                        <article id="no-sale-policy" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <Ban size={16} />
                                <span>Section 6</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Zero Third-Party Data Selling
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    We uphold a strict <strong>Zero Data Selling policy</strong>. We do not rent, sell, monetize, trade, or distribute your name, phone number, WhatsApp details, or financial records to third-party telemarketers, credit agencies, or advertising networks under any circumstances.
                                </p>
                                <p>
                                    Your contact information is used solely by official Indus Enclave and Al-Ashraf Group representatives to serve your direct property requirements.
                                </p>
                            </div>
                        </article>

                        {/* Section 7 */}
                        <article id="cookies-analytics" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <Cookie size={16} />
                                <span>Section 7</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Cookies &amp; Digital Analytics
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    Our website uses standard cookies and browser session storage to deliver an optimal user experience:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700">
                                    <li><strong>Essential Functional Cookies:</strong> Remembering your preference choices such as selected plot calculator values or modal states.</li>
                                    <li><strong>Media &amp; Video Embeds:</strong> When viewing site progress videos on our Media page, YouTube and Google services may set standard cookies to ensure smooth video streaming.</li>
                                    <li><strong>Anonymized Metrics:</strong> We may analyze aggregated, non-identifiable visitor numbers to evaluate popular pages and improve our website performance.</li>
                                </ul>
                                <p className="text-xs text-zinc-500">
                                    You can choose to disable or block cookies through your individual browser settings at any time without losing access to key website content.
                                </p>
                            </div>
                        </article>

                        {/* Section 8 */}
                        <article id="overseas-clients" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <Globe size={16} />
                                <span>Section 8</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Overseas Pakistanis &amp; Remote Booking
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    A significant portion of our investor family resides overseas in the UAE, Saudi Arabia, the UK, the United States, and across the globe. For remote clients:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700">
                                    <li>Digital scans of NICOP, passport, and remittance proofs received via our secure WhatsApp and official email lines are archived with strict confidentiality.</li>
                                    <li>Official allotment receipts, booking confirmation letters, and original files are dispatched through trackable international registered courier to your verified mailing address.</li>
                                    <li>You may designate an authorized local nominee or representative in Pakistan with a registered CNIC copy to collect physical documentation on your behalf.</li>
                                </ul>
                            </div>
                        </article>

                        {/* Section 9 */}
                        <article id="buyer-rights" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <UserCheck size={16} />
                                <span>Section 9</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Your Rights &amp; Record Updates
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    As a valued buyer or investor, you retain full rights regarding your personal records with Indus Enclave:
                                </p>
                                <div className="space-y-2 pt-1 text-sm text-zinc-700">
                                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-start gap-3">
                                        <span className="font-bold text-amber-600">✓</span>
                                        <div>
                                            <strong className="text-zinc-900">Right to Inspect &amp; Access:</strong> You may request a statement of account, ledger sheet, or review of your registered allotment file at any time.
                                        </div>
                                    </div>
                                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-start gap-3">
                                        <span className="font-bold text-amber-600">✓</span>
                                        <div>
                                            <strong className="text-zinc-900">Right to Rectify &amp; Update:</strong> If your phone number, email, or mailing address changes, contact our customer support team to update your records immediately.
                                        </div>
                                    </div>
                                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-start gap-3">
                                        <span className="font-bold text-amber-600">✓</span>
                                        <div>
                                            <strong className="text-zinc-900">Nominee Updates:</strong> You may update your nominated next-of-kin by submitting a formal written request accompanied by an updated CNIC copy.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Section 10 */}
                        <article id="contact-controller" className="bg-white p-7 md:p-9 rounded-3xl border border-zinc-200/80 shadow-sm scroll-mt-28">
                            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                                <Mail size={16} />
                                <span>Section 10</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                                Contact &amp; Privacy Office
                            </h2>
                            <div className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed space-y-3 font-light">
                                <p>
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal information is managed, please contact our legal and customer support office:
                                </p>

                                <div className="mt-6 p-6 rounded-2xl bg-zinc-900 text-white flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">
                                            Data Controller &amp; Developer
                                        </span>
                                        <h4 className="text-lg font-bold text-white mt-0.5">
                                            Indus Enclave • Al-Ashraf Group Of Companies
                                        </h4>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300 pt-2 border-t border-zinc-800">
                                        <div className="flex items-start gap-2.5">
                                            <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                                            <span>
                                                No. 1 &amp; 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi, Pakistan.
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2.5">
                                                <Phone size={15} className="text-amber-400 shrink-0" />
                                                <span>UAN: 111-ASHRAF (274-723)</span>
                                            </div>
                                            <div className="flex items-center gap-2.5">
                                                <Phone size={15} className="text-amber-400 shrink-0" />
                                                <span>+92 329 302 3156 / +92 316 822 8918</span>
                                            </div>
                                            <div className="flex items-center gap-2.5">
                                                <Mail size={15} className="text-amber-400 shrink-0" />
                                                <a href="mailto:info@indusenclave.com" className="hover:text-amber-300 underline">
                                                    info@indusenclave.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
}
