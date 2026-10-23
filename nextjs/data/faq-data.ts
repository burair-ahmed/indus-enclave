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
        answer: "Yes, Indus Enclave is approved from both SBCA & SDA Authorities. The project holds all required government approvals, ensuring 100% legal security, clear land ownership title, and complete peace of mind for your investment.",
        category: "approvals",
        highlight: true
    },
    {
        id: "location-m9",
        question: "What is the location of Indus Enclave?",
        answer: "Indus Enclave is strategically located on the prime location of the M9 motorway Nooriabad city Exit 8. It is an easy 45–50 minute drive from Karachi Toll Plaza and offers direct, signal-free highway access to both Karachi and Hyderabad.",
        category: "approvals",
        highlight: true
    },
    {
        id: "amenities-offered",
        question: "What amenities Indus Enclave offer to residents?",
        answer: "School, Masjid, Park, Industries, electricity, water, wide roads etc. Additionally, Indus Enclave features 24/7 gated security with guards and CCTV, clean drinking water filtration, medical clinics, shopping centers, and playgrounds for children.",
        category: "amenities",
        highlight: true
    },
    {
        id: "money-needed-to-buy-plot",
        question: "How much money do I need to buy a plot in Indus Enclave?",
        answer: "Indus Enclave is one of the most affordable housing project on the M9 motorway. You can buy a plot in Indus Enclave in less than a million pkr. For example, an 80 SQ.YDS residential plot in Sunflower Block costs just Rs. 800,000 total, with booking starting from only Rs. 25,000 and easy monthly installments of Rs. 10,000 over 3 years.",
        category: "pricing",
        highlight: true
    },

    // ─── ADDITIONAL HELPFUL FAQS ───
    {
        id: "plot-sizes-available",
        question: "What plot sizes are available in Indus Enclave?",
        answer: "Indus Enclave offers residential plots in Sunflower Block in two popular sizes: 80 SQ. YDS (30' × 24') and 120 SQ. YDS (20' × 36'), as well as commercial plots on the main boulevards.",
        category: "pricing"
    },
    {
        id: "payment-plans-structure",
        question: "How do the payment plans work?",
        answer: "We offer an easy 3-year (36 months) monthly installment plan for plots, and a 5-year (60 months) plan for constructed villas. Both plans start with low down payments and small monthly payments that any family can comfortably afford.",
        category: "pricing"
    },
    {
        id: "extra-charges-policy",
        question: "Are there extra charges for special category plots?",
        answer: "A standard 10% extra charge applies only if you choose a special category plot: West Open (10%), Corner Plot (10%), Main Road Facing (10%), or Park Facing (10%). Standard plots have no extra charges.",
        category: "pricing"
    },
    {
        id: "villas-possession-timeline",
        question: "When can I move into a constructed villa?",
        answer: "For constructed villas, possession is handed over within 2 years (24 months). You can move into your new home and continue paying the remaining installments over the next 3 years of your 5-year plan.",
        category: "possession"
    },
    {
        id: "plot-possession-timeline",
        question: "When can I start building my house on my plot?",
        answer: "Plot possession and construction permission are given as you complete your installment milestones. Once you receive possession, you can start building your home according to approved guidelines (Ground + 1 Floor + Rooftop).",
        category: "possession"
    },
    {
        id: "required-booking-documents",
        question: "What documents do I need to book a plot?",
        answer: "Booking a plot is very simple. You only need: (1) Two passport-size photos, (2) Copy of your CNIC or NICOP, (3) Copy of your nominee's CNIC, and (4) The booking payment receipt or bank slip.",
        category: "booking"
    },
    {
        id: "overseas-pakistanis-booking",
        question: "Can Overseas Pakistanis book a plot online?",
        answer: "Yes! Overseas Pakistanis can complete the entire booking online. You can send your payment via bank transfer, verify documents via WhatsApp, and receive your official allotment file via registered courier.",
        category: "booking"
    },
    {
        id: "schedule-site-visit",
        question: "How can I visit the site in person?",
        answer: "We arrange free guided site visits from our Karachi office. You can book a free tour by sending a message on WhatsApp or calling our team at +92 329 302 3156.",
        category: "booking"
    },
    {
        id: "head-office-location",
        question: "Where is the Indus Enclave office located in Karachi?",
        answer: "Our head office is located at No. 1 & 2, Mezzanine Floor, Osif Arcade, Block No. 15, Gulshan-e-Iqbal, Karachi. We are open Monday through Saturday from 10:00 AM to 7:00 PM.",
        category: "approvals"
    },
    {
        id: "water-electricity-gas",
        question: "What is the status of electricity, water, and utilities?",
        answer: "Indus Enclave is planned with complete modern utilities: clean drinking water supply with water filtration, underground electricity network, modern sewerage system, and wide carpeted roads.",
        category: "amenities"
    },
    {
        id: "why-invest-m9-motorway",
        question: "Why is buying near Nooriabad on the M-9 Motorway a good decision?",
        answer: "Nooriabad on the M-9 Motorway is growing rapidly with over 200 operational factories and new jobs. Buying a plot here today at affordable rates gives your family a peaceful home and strong profit as land values rise along the highway.",
        category: "approvals"
    }
];
