export interface PaymentMilestone {
    title: string;
    amount: number;
    amountFormatted: string;
    timing: string;
    description: string;
    highlight?: boolean;
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
    // Dimension details
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
    // Placeholder image configuration for dimension image
    dimensionImage: {
        src?: string; // Replace with user's image path when provided (e.g., "/plots/80-sq-yds-dimension.png")
        alt: string;
        placeholderTitle: string;
        placeholderSubtitle: string;
    };
    // Milestones
    milestones: PaymentMilestone[];
    // Monthly & Half-Yearly Breakdown details
    installments: {
        monthly: {
            amountPerMonth: number;
            amountFormatted: string;
            count: number;
            totalAmount: number;
            totalFormatted: string;
        };
        halfYearly: {
            amountPerInstallment: number;
            amountFormatted: string;
            count: number;
            totalAmount: number;
            totalFormatted: string;
        };
    };
    initialDownPaymentTotal: number;
    initialDownPaymentFormatted: string;
    possessionAmount: number;
    possessionFormatted: string;
}

export interface ExtraChargeItem {
    id: "west-open" | "corner" | "road-facing" | "park-facing";
    name: string;
    percentage: number;
    percentageText: string;
    description: string;
    icon: string;
}

export const extraChargesList: ExtraChargeItem[] = [
    {
        id: "west-open",
        name: "West Open",
        percentage: 10,
        percentageText: "10%",
        description: "Enjoys cool sea breeze and natural evening cross-ventilation, highly prized in Karachi's coastal climate.",
        icon: "Wind"
    },
    {
        id: "corner",
        name: "Corner Plot",
        percentage: 10,
        percentageText: "10%",
        description: "Dual-road frontage with enhanced architectural design freedom, extra natural light, and wider parking access.",
        icon: "SquareDashedBottomCode"
    },
    {
        id: "road-facing",
        name: "Road Facing",
        percentage: 10,
        percentageText: "10%",
        description: "Direct frontage on the main boulevard / wide arterial avenues for premier visibility and swift transit.",
        icon: "Navigation"
    },
    {
        id: "park-facing",
        name: "Park Facing",
        percentage: 10,
        percentageText: "10%",
        description: "Direct scenic views of landscaped community parks, green recreational lawns, and quiet pedestrian pathways.",
        icon: "Trees"
    }
];

export const plotsData: Record<"80-sq-yards" | "120-sq-yards", PlotData> = {
    "80-sq-yards": {
        id: "80-sq-yards",
        title: "80 SQ.YDS PLOT",
        sizeSqYards: 80,
        sizeSqFt: 720,
        block: "Sunflower Block",
        tagline: "Compact Residential Excellence & High-ROI Investment",
        totalAmount: 800000,
        totalAmountFormatted: "800,000 Only",
        paymentPlanDuration: "3 Years Payment Plan",
        description:
            "At Indus Enclave, we understand that your home is a reflection of your aspirations, and our pricing reflects this understanding. We offer transparent and competitive rates, coupled with flexible payment plans, ensuring that your dream of owning a luxurious home is attainable without financial stress. Investing in an Indus Enclave property means not just acquiring a house but securing your future, as our properties are designed to appreciate in value. Embark on the journey to your dream home with us, where your vision becomes a reality, and your investment is a step toward a prosperous future.",
        dimensions: {
            frontage: "20'-0\"",
            depth: "36'-0\"",
            areaSqYds: "80 Sq. Yards",
            areaSqFt: "720 Sq. Ft",
            aspectRatio: "1 : 1.8 Standard Residential",
            roadWidth: "40' - 60' Wide Carpeted Road",
            permittedFloors: "Ground + 1 Floor + Rooftop",
            constructionType: "Single Family Residential Villa / Duplex"
        },
        dimensionImage: {
            src: "", // Ready for user's image
            alt: "80 SQ.YDS Plot Dimension & Architectural Blueprint",
            placeholderTitle: "80 SQ.YDS Plot Dimension Diagram",
            placeholderSubtitle: "Standard Lot Size: 20' Frontage × 36' Depth (720 Sq.Ft) — Blueprint Space Reserved"
        },
        milestones: [
            {
                title: "Booking",
                amount: 25000,
                amountFormatted: "25,000",
                timing: "At the time of Application",
                description: "Initial booking deposit to secure plot registration in Sunflower Block."
            },
            {
                title: "Confirmation",
                amount: 25000,
                amountFormatted: "25,000",
                timing: "Within 30 Days of Booking",
                description: "Confirmation fee following verification and document issuance."
            },
            {
                title: "Allocation",
                amount: 25000,
                amountFormatted: "25,000",
                timing: "Upon File Allocation",
                description: "Official plot file allocation in your designated block."
            },
            {
                title: "Provisional Allotment",
                amount: 25000,
                amountFormatted: "25,000",
                timing: "Milestone Allotment",
                description: "Provisional allotment letter confirming plot entitlement."
            },
            {
                title: "Half Yearly Installments",
                amount: 210000,
                amountFormatted: "(35000 x 6)",
                timing: "Every 6 Months (6 Total)",
                description: "6 bi-annual installments of Rs. 35,000 spread over 3 years."
            },
            {
                title: "Monthly Installments",
                amount: 360000,
                amountFormatted: "(10000 x 36)",
                timing: "Monthly over 36 Months",
                description: "36 affordable monthly installments of Rs. 10,000."
            },
            {
                title: "On Possession",
                amount: 130000,
                amountFormatted: "130,000",
                timing: "At Physical Handover",
                description: "Final installment upon physical demarcation and possession handover.",
                highlight: true
            }
        ],
        installments: {
            monthly: {
                amountPerMonth: 10000,
                amountFormatted: "10,000",
                count: 36,
                totalAmount: 360000,
                totalFormatted: "360,000"
            },
            halfYearly: {
                amountPerInstallment: 35000,
                amountFormatted: "35,000",
                count: 6,
                totalAmount: 210000,
                totalFormatted: "210,000"
            }
        },
        initialDownPaymentTotal: 100000,
        initialDownPaymentFormatted: "100,000",
        possessionAmount: 130000,
        possessionFormatted: "130,000"
    },
    "120-sq-yards": {
        id: "120-sq-yards",
        title: "120 SQ.YDS PLOT",
        sizeSqYards: 120,
        sizeSqFt: 1080,
        block: "Sunflower Block",
        tagline: "Spacious Residential Canvas for Luxury Villas & Generational Wealth",
        totalAmount: 1200000,
        totalAmountFormatted: "1,200,000 Only",
        paymentPlanDuration: "3 Years Payment Plan",
        description:
            "At Indus Enclave, we’re committed to making your dream home a reality without compromising on quality or comfort. Our pricing is designed to cater to a variety of budgets and preferences, ensuring that the perfect home is within your reach. With transparent, competitive rates and flexible payment plans, we prioritize your financial ease. Investing in an Indus Enclave property means investing in a bright and prosperous future, as our homes are crafted not just for today, but for generations to come. Explore our pricing options today and step into the world of Indus Enclave, where your dream home awaits.",
        dimensions: {
            frontage: "24'-0\"",
            depth: "45'-0\"",
            areaSqYds: "120 Sq. Yards",
            areaSqFt: "1,080 Sq. Ft",
            aspectRatio: "1 : 1.875 Executive Residential",
            roadWidth: "45' - 80' Wide Avenue",
            permittedFloors: "Ground + 1 Floor + Penthouse / Terrace",
            constructionType: "Executive Family Villa with Lawn & Car Porch"
        },
        dimensionImage: {
            src: "", // Ready for user's image
            alt: "120 SQ.YDS Plot Dimension & Architectural Blueprint",
            placeholderTitle: "120 SQ.YDS Plot Dimension Diagram",
            placeholderSubtitle: "Standard Lot Size: 24' Frontage × 45' Depth (1,080 Sq.Ft) — Blueprint Space Reserved"
        },
        milestones: [
            {
                title: "Booking",
                amount: 90000,
                amountFormatted: "90,000",
                timing: "At the time of Application",
                description: "Initial booking deposit to secure plot registration in Sunflower Block."
            },
            {
                title: "Confirmation",
                amount: 90000,
                amountFormatted: "90,000",
                timing: "Within 30 Days of Booking",
                description: "Confirmation fee following verification and document issuance."
            },
            {
                title: "Allocation",
                amount: 90000,
                amountFormatted: "90,000",
                timing: "Upon File Allocation",
                description: "Official plot file allocation in your designated block."
            },
            {
                title: "Demarcation",
                amount: 90000,
                amountFormatted: "90,000",
                timing: "Milestone Demarcation",
                description: "Site demarcation and physical plot identification on master map."
            },
            {
                title: "Half Yearly Installments",
                amount: 210000,
                amountFormatted: "(35000 x 6)",
                timing: "Every 6 Months (6 Total)",
                description: "6 bi-annual installments of Rs. 35,000 spread over 3 years."
            },
            {
                title: "Monthly Installments",
                amount: 432000,
                amountFormatted: "(12000 x 36)",
                timing: "Monthly over 36 Months",
                description: "36 manageable monthly installments of Rs. 12,000."
            },
            {
                title: "On Possession",
                amount: 198000,
                amountFormatted: "198,000",
                timing: "At Physical Handover",
                description: "Final installment upon physical demarcation and possession handover.",
                highlight: true
            }
        ],
        installments: {
            monthly: {
                amountPerMonth: 12000,
                amountFormatted: "12,000",
                count: 36,
                totalAmount: 432000,
                totalFormatted: "432,000"
            },
            halfYearly: {
                amountPerInstallment: 35000,
                amountFormatted: "35,000",
                count: 6,
                totalAmount: 210000,
                totalFormatted: "210,000"
            }
        },
        initialDownPaymentTotal: 360000,
        initialDownPaymentFormatted: "360,000",
        possessionAmount: 198000,
        possessionFormatted: "198,000"
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
        title: "Flexible 36-Month Schedule",
        description: "No heavy lump-sum financial strain with monthly installments as low as Rs. 10,000 and 6 half-yearly payments.",
        icon: "CalendarCheck"
    }
];
