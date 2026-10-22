export interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: "approvals" | "pricing" | "amenities" | "possession" | "booking";
    highlight?: boolean;
}

export interface FaqCategory {
    id: "all" | "approvals" | "pricing" | "amenities" | "possession" | "booking";
    name: string;
    icon: string;
}

export const faqCategories: FaqCategory[] = [
    { id: "all", name: "All Questions", icon: "HelpCircle" },
    { id: "approvals", name: "Approvals & Location", icon: "ShieldCheck" },
    { id: "pricing", name: "Pricing & Payment", icon: "Coins" },
    { id: "amenities", name: "Amenities & Community", icon: "Trees" },
    { id: "possession", name: "Possession & Construction", icon: "KeyRound" },
    { id: "booking", name: "Booking & Overseas", icon: "FileText" }
];

export const allFaqs: FaqItem[] = [
    // ─── USER SPECIFIED QUESTIONS ───
    {
        id: "sbca-sda-approval",
        question: "Is Indus Enclave Approved From SBCA & SDA?",
        answer: "Yes, Indus Enclave is approved from both SBCA & SDA Authorities. The project holds all required regulatory approvals, ensuring 100% legal security, clear land ownership title, and sanctioned master planning for peaceful investment.",
        category: "approvals",
        highlight: true
    },
    {
        id: "location-m9",
        question: "What is the location of Indus Enclave?",
        answer: "Indus Enclave is strategically located on the prime location of the M9 motorway Nooriabad city Exit 8. It offers rapid, signal-free highway transit to and from Karachi (approx. 45–50 minutes from the Toll Plaza) and Hyderabad, positioned right in Sindh's premier industrial and residential growth corridor.",
        category: "approvals",
        highlight: true
    },
    {
        id: "amenities-offered",
        question: "What amenities Indus Enclave offer to residents?",
        answer: "School, Masjid, Park, Industries, electricity, water, wide roads etc. Additionally, Indus Enclave features 24/7 gated security with CCTV surveillance, modern healthcare clinics, underground utilities, commercial shopping zones, children's play grounds, and dedicated water filtration facilities.",
        category: "amenities",
        highlight: true
    },
    {
        id: "money-needed-to-buy-plot",
        question: "How much money do I need to buy a plot in Indus Enclave?",
        answer: "Indus Enclave is one of the most affordable housing project on the M9 motorway. You can buy a plot in Indus Enclave in less than a million pkr. For instance, an 80 SQ.YDS residential plot in Sunflower Block is priced at only Rs. 800,000 total, with easy booking starting from just Rs. 25,000 and monthly installments of Rs. 10,000 over 3 years.",
        category: "pricing",
        highlight: true
    },

    // ─── COMPREHENSIVE CURATED FAQS ───
    {
        id: "plot-sizes-available",
        question: "What plot sizes are available in Indus Enclave?",
        answer: "Indus Enclave offers well-demarcated residential plots in Sunflower Block and Rose Block, predominantly in 80 SQ. YDS (20' × 36' / 720 Sq.Ft) and 120 SQ. YDS (24' × 45' / 1,080 Sq.Ft) sizes, along with prime commercial plots along the main boulevards.",
        category: "pricing"
    },
    {
        id: "payment-plans-structure",
        question: "What payment plan structures are offered for plots and villas?",
        answer: "We provide convenient 3-Year (36-month) flexible installment plans for residential plots and 5-Year (60-month) easy installment plans for luxury designer villas. All plans include low initial down payments, quarterly or half-yearly installments, and possession-linked milestones.",
        category: "pricing"
    },
    {
        id: "extra-charges-policy",
        question: "Are there extra charges for prime or category plots?",
        answer: "Standardized 10% premium charges apply exclusively to prime category plots: West Open (10%), Corner Plot (10%), Main Road Facing (10%), and Park Facing (10%). If a plot possesses two attributes (e.g. Corner + Park Facing), both surcharges apply.",
        category: "pricing"
    },
    {
        id: "villas-possession-timeline",
        question: "When is possession granted for constructed villas?",
        answer: "Constructed villas at Indus Enclave come with guaranteed possession within 2 years (24 months). You can move into your constructed home while continuing to pay the remaining installments over the remaining 3 years of your 5-year plan.",
        category: "possession"
    },
    {
        id: "plot-possession-timeline",
        question: "When can I take possession and start construction on my plot?",
        answer: "Plot possession and physical demarcation letters are issued upon completion of infrastructural milestones as per your payment plan. After possession, you can commence custom construction adhering to SBCA and SDA architectural guidelines (Ground + 1 + Rooftop terrace).",
        category: "possession"
    },
    {
        id: "required-booking-documents",
        question: "What documents are required to book a plot or villa?",
        answer: "Booking requires: (1) Two passport-sized photographs of the applicant, (2) Copy of the applicant's CNIC / NICOP, (3) Copy of the Next-of-Kin (Nominee) CNIC, and (4) Booking payment slip or pay order in favor of Indus Enclave.",
        category: "booking"
    },
    {
        id: "overseas-pakistanis-booking",
        question: "Can Overseas Pakistanis invest or book a plot online?",
        answer: "Yes, we have a dedicated Overseas Investor Desk. Overseas buyers can complete the entire process remotely via online bank transfer / wire, digital document verification, and WhatsApp video consultations. Original allotment files are securely shipped via registered international courier or kept for collection at our Karachi office.",
        category: "booking"
    },
    {
        id: "schedule-site-visit",
        question: "How do I schedule a free guided visit to the Indus Enclave site?",
        answer: "We arrange free weekend and weekday guided tours with executive transport departing from our Karachi sales office. You can book your site visit by submitting an inquiry online, messaging us on WhatsApp, or calling our sales hotline at +92 329 302 3156 / +92 316 822 8918.",
        category: "booking"
    },
    {
        id: "head-office-location",
        question: "Where is the Indus Enclave head office located in Karachi?",
        answer: "Our head office is conveniently located at No. 1 & 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi. Our office is open Monday through Saturday from 10:00 AM to 7:00 PM.",
        category: "approvals"
    },
    {
        id: "water-electricity-gas",
        question: "What is the status of utilities (electricity, water, gas) at Indus Enclave?",
        answer: "Indus Enclave is designed with comprehensive infrastructure including dedicated deep-well water supply with reverse-osmosis filtration, underground electricity distribution network, modern sewerage system, and planned gas connections.",
        category: "amenities"
    },
    {
        id: "why-invest-m9-motorway",
        question: "Why is M-9 Motorway Nooriabad considered a high-growth investment zone?",
        answer: "The Karachi–Hyderabad M-9 corridor is Pakistan's fastest growing industrial and urban expansion hub. With high government focus, rapid industrialization in Nooriabad, educational setups, and upcoming connectivity bypasses, properties in this belt are appreciating rapidly, making Indus Enclave ideal for both immediate affordability and high-yield capital gains.",
        category: "approvals"
    }
];
