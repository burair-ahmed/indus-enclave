export interface PaymentMilestone {
    title: string;
    amount: number;
    amountFormatted: string;
    timing: string;
    description: string;
    highlight?: boolean;
    formula?: string;
}

export interface TableRowPlan {
    modeOfPayment: string;
    col1: string;
    col2: string;
    highlight?: boolean;
    isSubtotal?: boolean;
    isTotal?: boolean;
}

export interface PaymentPlanCategory {
    id: "residential" | "commercial" | "cottage-industry";
    title: string;
    subtitle: string;
    badge: string;
    duration: string;
    description: string;
    tableHeaders: [string, string, string]; // [Mode of Payment, Size 1, Size 2]
    tableRows: TableRowPlan[];
    note?: string;
}

export interface PlotData {
    id: "80-sq-yards" | "120-sq-yards";
    title: string;
    sizeSqYards: number;
    sizeSqFt: number;
    block: string;
    tagline: string;
    totalAmount: number;
    totalAmountFormatted: string;
    paymentPlanDuration: string;
    description: string;
    dimensions: {
        frontage: string;
        depth: string;
        areaSqYds: string;
        areaSqFt: string;
        aspectRatio: string;
        roadWidth: string;
        permittedFloors: string;
        constructionType: string;
    };
    dimensionImage: {
        src?: string;
        alt: string;
        placeholderTitle: string;
        placeholderSubtitle: string;
    };
    milestones: PaymentMilestone[];
    installments: {
        monthly: {
            amountPerMonth: number;
            amountFormatted: string;
            count: number;
            totalAmount: number;
            totalFormatted: string;
        };
        halfYearly?: {
            amountPerInstallment: number;
            amountFormatted: string;
            count: number;
            totalAmount: number;
            totalFormatted: string;
            optionB?: {
                amountPerInstallment: number;
                amountFormatted: string;
                count: number;
                totalAmount: number;
                totalFormatted: string;
            };
        };
    };
    initialDownPaymentTotal: number;
    initialDownPaymentFormatted: string;
    possessionAmount: number;
    possessionFormatted: string;
}

export interface ExtraChargeItem {
    id: "corner" | "road-facing" | "park-facing" | "west-open";
    name: string;
    percentage: number;
    percentageText: string;
    description: string;
    icon: string;
}

// 4. Extra Charges as specified by developer
export const extraChargesList: ExtraChargeItem[] = [
    {
        id: "corner",
        name: "Corner Plot",
        percentage: 10,
        percentageText: "10%",
        description: "Opens onto two streets, giving you extra natural light, dual access, more parking space, and premium resale value.",
        icon: "SquareDashedBottomCode"
    },
    {
        id: "road-facing",
        name: "Main Road Facing",
        percentage: 5,
        percentageText: "5%",
        description: "Faces directly onto wide main commercial/residential boulevards for easy driving access and prime visibility.",
        icon: "Navigation"
    },
    {
        id: "park-facing",
        name: "Park Facing",
        percentage: 5,
        percentageText: "5%",
        description: "Directly overlooks landscaped green family parks, jogging tracks, and open recreational grounds.",
        icon: "Trees"
    },
    {
        id: "west-open",
        name: "West Open",
        percentage: 5,
        percentageText: "5%",
        description: "Catches the cool evening breeze, providing superior natural ventilation and energy-efficient comfort year-round.",
        icon: "Wind"
    }
];

// All plot choices for the interactive Extra Charges Calculator
export interface CalculatorPlotOption {
    id: string;
    category: "Residential" | "Commercial" | "Cottage Industry";
    name: string;
    size: string;
    price: number;
    formattedPrice: string;
}

export const calculatorPlotOptions: CalculatorPlotOption[] = [
    {
        id: "res-80-standard",
        category: "Residential",
        name: "80 Sq. Yds. Residential (Standard Plan)",
        size: "80 Sq. Yds.",
        price: 770000,
        formattedPrice: "Rs. 770,000"
    },
    {
        id: "res-80-equal",
        category: "Residential",
        name: "80 Sq. Yds. Residential (Equal Plan)",
        size: "80 Sq. Yds.",
        price: 880000,
        formattedPrice: "Rs. 880,000"
    },
    {
        id: "res-120-standard",
        category: "Residential",
        name: "120 Sq. Yds. Residential (Standard Plan)",
        size: "120 Sq. Yds.",
        price: 1100000,
        formattedPrice: "Rs. 1,100,000"
    },
    {
        id: "res-120-equal",
        category: "Residential",
        name: "120 Sq. Yds. Residential (Equal Plan)",
        size: "120 Sq. Yds.",
        price: 1320000,
        formattedPrice: "Rs. 1,320,000"
    },
    {
        id: "comm-100",
        category: "Commercial",
        name: "100 Sq. Yds. Commercial Plot",
        size: "100 Sq. Yds.",
        price: 2750000,
        formattedPrice: "Rs. 2,750,000"
    },
    {
        id: "comm-200",
        category: "Commercial",
        name: "200 Sq. Yds. Commercial Plot",
        size: "200 Sq. Yds.",
        price: 5500000,
        formattedPrice: "Rs. 5,500,000"
    },
    {
        id: "cottage-200",
        category: "Cottage Industry",
        name: "200 Sq. Yds. Cottage Industry Plot",
        size: "200 Sq. Yds.",
        price: 2200000,
        formattedPrice: "Rs. 2,200,000"
    },
    {
        id: "cottage-400",
        category: "Cottage Industry",
        name: "400 Sq. Yds. Cottage Industry Plot",
        size: "400 Sq. Yds.",
        price: 4480000,
        formattedPrice: "Rs. 4,480,000"
    }
];

// 1. Residential Plots - Standard Plan & Equal Installment Plan
export const residentialStandardPlan: PaymentPlanCategory = {
    id: "residential",
    title: "Residential Plots — Standard 5-Year Plan",
    subtitle: "Flexible 60-month schedule with your choice of 4 or 8 half-yearly installments",
    badge: "5 Years / 60 Months",
    duration: "5 Years (60 Months)",
    description:
        "Affordable residential plots in Sunflower Block with convenient booking from Rs. 60,000 and low monthly installments starting at Rs. 5,000/month.",
    tableHeaders: ["Mode of Payment", "80 Sq. Yds.", "120 Sq. Yds."],
    tableRows: [
        { modeOfPayment: "Booking", col1: "60,000", col2: "100,000" },
        { modeOfPayment: "Selection of Plot", col1: "30,000", col2: "80,000" },
        { modeOfPayment: "Allocation + Confirmation", col1: "40,000", col2: "50,000" },
        {
            modeOfPayment: "60 Monthly Installments",
            col1: "5,000 × 60 = 300,000",
            col2: "7,000 × 60 = 420,000",
            highlight: true
        },
        {
            modeOfPayment: "OR — 4 Half-Yearly Installments",
            col1: "50,000 × 4 = 200,000",
            col2: "65,000 × 4 = 260,000"
        },
        {
            modeOfPayment: "OR — 8 Half-Yearly Installments",
            col1: "25,000 × 8 = 200,000",
            col2: "32,500 × 8 = 260,000"
        },
        { modeOfPayment: "On Demarcation", col1: "40,000", col2: "40,000" },
        { modeOfPayment: "Before Possession", col1: "30,000", col2: "50,000" },
        {
            modeOfPayment: "Cost of Plot",
            col1: "770,000",
            col2: "1,100,000",
            isTotal: true
        }
    ],
    note: "Buyers can choose between 4 Half-Yearly installments OR 8 Half-Yearly installments according to their preferred cash flow."
};

export const residentialEqualPlan: PaymentPlanCategory = {
    id: "residential",
    title: "Residential Plots — Equal Installment Plan",
    subtitle: "Simple and predictable monthly payments with no intermediate lump sums",
    badge: "Equal 60 Months",
    duration: "5 Years (60 Months)",
    description:
        "Designed for salaried individuals and families who prefer uniform, stress-free monthly installments across 5 full years.",
    tableHeaders: ["Mode of Payment", "80 Sq. Yds.", "120 Sq. Yds."],
    tableRows: [
        {
            modeOfPayment: "60 Monthly Installments",
            col1: "10,000 × 60 = 600,000",
            col2: "15,000 × 60 = 900,000",
            highlight: true
        },
        { modeOfPayment: "On Demarcation", col1: "120,000", col2: "180,000" },
        { modeOfPayment: "Before Possession", col1: "80,000", col2: "120,000" },
        {
            modeOfPayment: "Cost of Plot",
            col1: "880,000",
            col2: "1,320,000",
            isTotal: true
        }
    ]
};

// 2. Commercial Plots
export const commercialPlan: PaymentPlanCategory = {
    id: "commercial",
    title: "Commercial Plots Payment Plan",
    subtitle: "High-yield commercial plots on prime arterial boulevards for businesses and investors",
    badge: "5 Years Commercial",
    duration: "5 Years (60 Months)",
    description:
        "Strategically positioned commercial plots designed for plazas, corporate offices, retail showrooms, and high-return commercial complexes.",
    tableHeaders: ["Mode of Payment", "100 Sq. Yds.", "200 Sq. Yds."],
    tableRows: [
        { modeOfPayment: "Booking", col1: "200,000", col2: "400,000" },
        { modeOfPayment: "Selection of Plot", col1: "200,000", col2: "250,000" },
        { modeOfPayment: "Allocation + Confirmation", col1: "150,000", col2: "300,000" },
        {
            modeOfPayment: "60 Monthly Installments",
            col1: "16,000 × 60 = 960,000",
            col2: "36,000 × 60 = 2,160,000",
            highlight: true
        },
        {
            modeOfPayment: "5 Yearly Installments",
            col1: "100,000 × 5 = 500,000*",
            col2: "250,000 × 5 = 1,250,000"
        },
        { modeOfPayment: "On Demarcation", col1: "300,000", col2: "400,000" },
        { modeOfPayment: "Before Possession", col1: "290,000", col2: "240,000" },
        {
            modeOfPayment: "Cost of Plot",
            col1: "2,750,000",
            col2: "5,500,000",
            isTotal: true
        }
    ],
    note: "*The 100 Sq. Yds. column appears to print 400,000 as the yearly-installment total, although 100,000 × 5 equals 500,000. Please confirm this amount with the developer."
};

// 3. Cottage Industry Plots
export const cottageIndustryPlan: PaymentPlanCategory = {
    id: "cottage-industry",
    title: "Cottage Industry Plots Payment Plan",
    subtitle: "Dedicated industrial-commercial plots for workshops, manufacturing, and warehousing",
    badge: "5 Years Industrial",
    duration: "5 Years (60 Months)",
    description:
        "Expansive plots tailored for small enterprises, light manufacturing, warehousing, and cottage industries with comprehensive logistical connectivity.",
    tableHeaders: ["Mode of Payment", "200 Sq. Yds.", "400 Sq. Yds."],
    tableRows: [
        { modeOfPayment: "Booking", col1: "200,000", col2: "350,000" },
        { modeOfPayment: "Selection of Plot", col1: "75,000", col2: "200,000" },
        { modeOfPayment: "Allocation + Confirmation", col1: "75,000", col2: "150,000" },
        {
            modeOfPayment: "60 Monthly Installments",
            col1: "15,000 × 60 = 900,000",
            col2: "20,000 × 60 = 1,200,000",
            highlight: true
        },
        {
            modeOfPayment: "10 Half-Yearly Installments",
            col1: "50,000 × 10 = 500,000",
            col2: "120,000 × 10 = 1,200,000"
        },
        { modeOfPayment: "On Demarcation", col1: "150,000", col2: "350,000" },
        { modeOfPayment: "Before Possession", col1: "100,000", col2: "350,000" },
        {
            modeOfPayment: "Cost of Plot",
            col1: "2,200,000",
            col2: "4,480,000",
            isTotal: true
        }
    ]
};

// Backwards-compatible residential plot dimension and milestone data
export const plotsData: Record<"80-sq-yards" | "120-sq-yards", PlotData> = {
    "80-sq-yards": {
        id: "80-sq-yards",
        title: "80 SQ.YDS RESIDENTIAL PLOT",
        sizeSqYards: 80,
        sizeSqFt: 720,
        block: "Sunflower Block",
        tagline: "Ideal for Small Families & High Capital Appreciation",
        totalAmount: 770000,
        totalAmountFormatted: "770,000 Only",
        paymentPlanDuration: "5 Years (60 Months) Payment Plan",
        description:
            "Own your own 80 Sq. Yards plot in Sunflower Block for Rs. 770,000 total. You can start with an easy Rs. 60,000 booking fee, pay comfortable Rs. 5,000 monthly installments for 5 years, and build a beautiful double-storey home with a car porch for your family.",
        dimensions: {
            frontage: "30'-0\"",
            depth: "24'-0\"",
            areaSqYds: "80 Sq. Yards",
            areaSqFt: "720 Sq. Ft",
            aspectRatio: "1 : 0.8 Standard Residential",
            roadWidth: "40' - 60' Wide Carpeted Road",
            permittedFloors: "Ground + 1 Floor + Rooftop",
            constructionType: "Single Family Residential Villa / Duplex"
        },
        dimensionImage: {
            src: "/80_yards_plot.jpg",
            alt: "80 SQ.YDS Plot Layout & Dimension Map - Indus Enclave",
            placeholderTitle: "80 SQ.YDS Plot Dimension Diagram",
            placeholderSubtitle: "Official Layout: 30' Frontage × 24' Depth (720 Sq.Ft) — Sunflower Block"
        },
        milestones: [
            {
                title: "Booking",
                amount: 60000,
                amountFormatted: "60,000",
                timing: "At the time of Application",
                description: "Initial booking deposit to secure plot registration in Sunflower Block."
            },
            {
                title: "Selection of Plot",
                amount: 30000,
                amountFormatted: "30,000",
                timing: "Upon Plot Selection",
                description: "Selection fee upon choosing your preferred plot number and orientation."
            },
            {
                title: "Allocation + Confirmation",
                amount: 40000,
                amountFormatted: "40,000",
                timing: "Within 30 Days of Booking",
                description: "Official allocation and documentation confirmation letter."
            },
            {
                title: "60 Monthly Installments",
                amount: 300000,
                amountFormatted: "300,000",
                formula: "5,000 × 60 = 300,000",
                timing: "Monthly over 60 Months",
                description: "60 easy monthly installments of Rs. 5,000 each."
            },
            {
                title: "Half-Yearly Installments",
                amount: 200000,
                amountFormatted: "200,000",
                formula: "50,000 × 4 OR 25,000 × 8 = 200,000",
                timing: "Half-Yearly Schedule",
                description: "Choice of 4 installments of Rs. 50,000 OR 8 installments of Rs. 25,000."
            },
            {
                title: "On Demarcation",
                amount: 40000,
                amountFormatted: "40,000",
                timing: "Site Demarcation Milestone",
                description: "Physical boundary marking and on-site plot verification."
            },
            {
                title: "Before Possession",
                amount: 30000,
                amountFormatted: "30,000",
                timing: "Prior to Key Handover",
                description: "Final clearance payment before physical possession and title handover.",
                highlight: true
            }
        ],
        installments: {
            monthly: {
                amountPerMonth: 5000,
                amountFormatted: "5,000",
                count: 60,
                totalAmount: 300000,
                totalFormatted: "300,000"
            },
            halfYearly: {
                amountPerInstallment: 50000,
                amountFormatted: "50,000",
                count: 4,
                totalAmount: 200000,
                totalFormatted: "200,000",
                optionB: {
                    amountPerInstallment: 25000,
                    amountFormatted: "25,000",
                    count: 8,
                    totalAmount: 200000,
                    totalFormatted: "200,000"
                }
            }
        },
        initialDownPaymentTotal: 130000,
        initialDownPaymentFormatted: "130,000",
        possessionAmount: 30000,
        possessionFormatted: "30,000"
    },
    "120-sq-yards": {
        id: "120-sq-yards",
        title: "120 SQ.YDS RESIDENTIAL PLOT",
        sizeSqYards: 120,
        sizeSqFt: 1080,
        block: "Sunflower Block",
        tagline: "Spacious Plot for an Executive 4 to 5 Bedroom Family Home",
        totalAmount: 1100000,
        totalAmountFormatted: "1,100,000 Only",
        paymentPlanDuration: "5 Years (60 Months) Payment Plan",
        description:
            "Our 120 Sq. Yards plot in Sunflower Block is priced at Rs. 1,100,000 total. Booking starts at Rs. 100,000 with convenient monthly installments of Rs. 7,000 for 5 years. This gives you ample space for a multi-bedroom villa, front lawn, car porch, and rooftop terrace.",
        dimensions: {
            frontage: "20'-0\"",
            depth: "36'-0\"",
            areaSqYds: "120 Sq. Yards",
            areaSqFt: "1,080 Sq. Ft",
            aspectRatio: "1 : 1.8 Executive Residential",
            roadWidth: "45' - 80' Wide Avenue",
            permittedFloors: "Ground + 1 Floor + Penthouse / Terrace",
            constructionType: "Executive Family Villa with Lawn & Car Porch"
        },
        dimensionImage: {
            src: "/120_yards_plot-1024x1024.jpeg",
            alt: "120 SQ.YDS Plot Layout & Dimension Map - Indus Enclave",
            placeholderTitle: "120 SQ.YDS Plot Dimension Diagram",
            placeholderSubtitle: "Official Layout: 20' Frontage × 36' Depth (1,080 Sq.Ft) — Sunflower Block"
        },
        milestones: [
            {
                title: "Booking",
                amount: 100000,
                amountFormatted: "100,000",
                timing: "At the time of Application",
                description: "Initial booking deposit to secure plot registration in Sunflower Block."
            },
            {
                title: "Selection of Plot",
                amount: 80000,
                amountFormatted: "80,000",
                timing: "Upon Plot Selection",
                description: "Selection fee upon choosing your preferred plot number and avenue location."
            },
            {
                title: "Allocation + Confirmation",
                amount: 50000,
                amountFormatted: "50,000",
                timing: "Within 30 Days of Booking",
                description: "Official allocation and documentation confirmation letter."
            },
            {
                title: "60 Monthly Installments",
                amount: 420000,
                amountFormatted: "420,000",
                formula: "7,000 × 60 = 420,000",
                timing: "Monthly over 60 Months",
                description: "60 easy monthly installments of Rs. 7,000 each."
            },
            {
                title: "Half-Yearly Installments",
                amount: 260000,
                amountFormatted: "260,000",
                formula: "65,000 × 4 OR 32,500 × 8 = 260,000",
                timing: "Half-Yearly Schedule",
                description: "Choice of 4 installments of Rs. 65,000 OR 8 installments of Rs. 32,500."
            },
            {
                title: "On Demarcation",
                amount: 40000,
                amountFormatted: "40,000",
                timing: "Site Demarcation Milestone",
                description: "Physical boundary marking and on-site plot verification."
            },
            {
                title: "Before Possession",
                amount: 50000,
                amountFormatted: "50,000",
                timing: "Prior to Key Handover",
                description: "Final clearance payment before physical possession and title handover.",
                highlight: true
            }
        ],
        installments: {
            monthly: {
                amountPerMonth: 7000,
                amountFormatted: "7,000",
                count: 60,
                totalAmount: 420000,
                totalFormatted: "420,000"
            },
            halfYearly: {
                amountPerInstallment: 65000,
                amountFormatted: "65,000",
                count: 4,
                totalAmount: 260000,
                totalFormatted: "260,000",
                optionB: {
                    amountPerInstallment: 32500,
                    amountFormatted: "32,500",
                    count: 8,
                    totalAmount: 260000,
                    totalFormatted: "260,000"
                }
            }
        },
        initialDownPaymentTotal: 230000,
        initialDownPaymentFormatted: "230,000",
        possessionAmount: 50000,
        possessionFormatted: "50,000"
    }
};

export const sunflowerFeatures = [
    {
        title: "Prime Sunflower Block Location",
        description: "Situated in the most elevated and well-connected sector of Indus Enclave with direct access to wide arterial avenues.",
        icon: "MapPin"
    },
    {
        title: "Complete Underground Utilities",
        description: "Sleek, underground electrification, dedicated water filtration, advanced gas lines, and high-capacity storm water drainage.",
        icon: "Zap"
    },
    {
        title: "Gated Security & 24/7 Surveillance",
        description: "Three-tier guarded security, biometric visitor verification, active security patrols, and high-definition CCTV coverage.",
        icon: "ShieldCheck"
    },
    {
        title: "Lush Parks & Family Recreational Spaces",
        description: "Dedicated landscaped parks, jogging tracks, children's play grounds, and central community center.",
        icon: "Trees"
    },
    {
        title: "Immediate Capital Appreciation",
        description: "Rapid development progress and strategic highway proximity ensure outstanding return on investment for discerning buyers.",
        icon: "TrendingUp"
    },
    {
        title: "Flexible 60-Month Schedule",
        description: "No heavy lump-sum financial strain with monthly installments as low as Rs. 5,000 and flexible half-yearly options.",
        icon: "CalendarCheck"
    }
];
