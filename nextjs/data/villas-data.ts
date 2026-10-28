export interface RoomDetail {
    id: string;
    name: string;
    category: "bedroom" | "bathroom" | "living" | "kitchen" | "outdoor";
    dimension: string;
    description: string;
    features: string[];
    // Architectural SVG coordinates for blueprint visualization
    svgRect: {
        x: number;
        y: number;
        width: number;
        height: number;
        labelX?: number;
        labelY?: number;
    };
}

export interface VillaFloorPlan {
    id: "80-sq-yards" | "120-sq-yards";
    title: string;
    sizeSqYards: number;
    sizeSqFt: number;
    project: string;
    tagline: string;
    summary: string;
    image: string;
    rooms: {
        bedrooms: {
            count: number;
            dimension: string;
            details: string;
        };
        bathrooms: {
            count: number;
            dimension: string;
            details: string;
        };
        livingLounge: {
            name: string;
            dimension: string;
            details: string;
        };
        kitchenDining: {
            name: string;
            dimension: string;
            details: string;
        };
    };
    roomList: RoomDetail[];
    paymentPlan: {
        title: string;
        tagline: string;
        duration: string;
        possessionTime: string;
        highlights: string[];
        breakdownSteps: {
            stage: string;
            description: string;
            percentage: string;
            timing: string;
        }[];
    };
    highlights: string[];
}

export const villasData: Record<"80-sq-yards" | "120-sq-yards", VillaFloorPlan> = {
    "80-sq-yards": {
        id: "80-sq-yards",
        title: "80 SQ. Yards Villa",
        sizeSqYards: 80,
        sizeSqFt: 720,
        project: "Indus Enclave",
        tagline: "A Comfortable Home for Your Family",
        summary: "A well-designed 2-bedroom home perfect for small families. It has good natural light, proper ventilation, and all the space you need for comfortable daily life.",
        image: "/assets/house.png",
        rooms: {
            bedrooms: {
                count: 2,
                dimension: "10'-0\" x 10'-0\"",
                details: "2 good-sized bedrooms with windows, wardrobe space, and their own private bathrooms."
            },
            bathrooms: {
                count: 2,
                dimension: "4'-0\" x 6'-6\"",
                details: "2 clean modern bathrooms with good tiles and proper fittings."
            },
            livingLounge: {
                name: "TV Lounge + Living",
                dimension: "10'-0\" x 12'-0\"",
                details: "A comfortable living room where the whole family can sit together and watch TV."
            },
            kitchenDining: {
                name: "1 Kitchen + Dining",
                dimension: "10'-0\" x 12'-0\"",
                details: "A practical kitchen with space for cooking and a dining area for family meals."
            }
        },
        roomList: [
            {
                id: "bed1",
                name: "Master Bedroom",
                category: "bedroom",
                dimension: "10'-0\" x 10'-0\"",
                description: "A spacious master bedroom with a window, wardrobe space, and its own private bathroom.",
                features: ["100 sq. ft. area", "Private Attached Bathroom", "Large Window", "Fan & Light Wiring"],
                svgRect: { x: 30, y: 30, width: 170, height: 160, labelX: 115, labelY: 110 }
            },
            {
                id: "bed2",
                name: "Bedroom 2",
                category: "bedroom",
                dimension: "10'-0\" x 10'-0\"",
                description: "Second bedroom ideal for children or guests, with good ventilation and its own bathroom.",
                features: ["100 sq. ft. area", "Private Attached Bathroom", "Ventilation Window", "Tiled Floor"],
                svgRect: { x: 300, y: 30, width: 170, height: 160, labelX: 385, labelY: 110 }
            },
            {
                id: "bath1",
                name: "Bathroom 1",
                category: "bathroom",
                dimension: "4'-0\" x 6'-6\"",
                description: "Private ensuite bathroom with contemporary vanity counter and waterproof finishes.",
                features: ["26 sq. ft. area", "Exhaust Duct Connection", "Premium Ceramic Fittings", "Shower Area"],
                svgRect: { x: 205, y: 30, width: 90, height: 80, labelX: 250, labelY: 70 }
            },
            {
                id: "bath2",
                name: "Bathroom 2",
                category: "bathroom",
                dimension: "4'-0\" x 6'-6\"",
                description: "Ensuite bath serving bedroom 2 with modern plumbing and anti-slip flooring.",
                features: ["26 sq. ft. area", "Modern Sanitary Ware", "Waterproof Wall Tiles", "Quality Fixtures"],
                svgRect: { x: 205, y: 115, width: 90, height: 75, labelX: 250, labelY: 152 }
            },
            {
                id: "lounge",
                name: "TV Lounge + Living",
                category: "living",
                dimension: "10'-0\" x 12'-0\"",
                description: "The main living area of the home -- comfortable and connected to the bedrooms and entrance.",
                features: ["120 sq. ft. area", "Media Wall Ready", "High Ceiling Clearance", "Recessed LED Lighting"],
                svgRect: { x: 30, y: 195, width: 230, height: 175, labelX: 145, labelY: 285 }
            },
            {
                id: "kitchen",
                name: "Kitchen + Dining",
                category: "kitchen",
                dimension: "10'-0\" x 12'-0\"",
                description: "A practical kitchen with counter space and a family dining area.",
                features: ["120 sq. ft. area", "Granite Countertops", "Dedicated Dining Space", "Exhaust & Gas Points"],
                svgRect: { x: 265, y: 195, width: 205, height: 175, labelX: 367, labelY: 285 }
            },
            {
                id: "porch",
                name: "Front Porch & Entrance",
                category: "outdoor",
                dimension: "Compact Entrance",
                description: "A covered front entrance for easy and secure access to your home.",
                features: ["Covered Foyer", "Main Security Door", "Intercom Conduit", "Planter Area"],
                svgRect: { x: 30, y: 380, width: 440, height: 80, labelX: 250, labelY: 420 }
            }
        ],
        paymentPlan: {
            title: "5 Years Easy Payment Plan",
            tagline: "Move In After Just 2 Years While Continuing Your Payments",
            duration: "5 Years (60 Months)",
            possessionTime: "Within 2 Years",
            highlights: [
                "Move into your home after just 2 years",
                "Spread your payments comfortably across 5 years (60 months)",
                "Small monthly installments that fit your family budget",
                "Clear payment stages with no surprises or hidden fees",
                "Clear legal ownership documentation"
            ],
            breakdownSteps: [
                {
                    stage: "Booking",
                    percentage: "10%",
                    timing: "At the Start",
                    description: "Pay the first amount to reserve your plot on the master plan."
                },
                {
                    stage: "Confirmation",
                    percentage: "10%",
                    timing: "Within 30-60 Days",
                    description: "Receive your official allocation letter after the second payment."
                },
                {
                    stage: "60 Monthly Installments",
                    percentage: "50%",
                    timing: "Over 5 Years (60 Months)",
                    description: "Pay small monthly amounts for 5 years — easy on the pocket."
                },
                {
                    stage: "Get Your Keys!",
                    percentage: "15%",
                    timing: "In 2 Years (Month 24)",
                    description: "You receive the keys and can move into your home after just 2 years!"
                },
                {
                    stage: "Remaining Payments",
                    percentage: "10%",
                    timing: "Years 3 to 5",
                    description: "Continue living in your home while paying off the small remaining balance."
                }
            ]
        },
        highlights: [
            "2 Full Bedrooms with Private Ensuite Bathrooms",
            "Family TV Lounge and Connected Living Area",
            "Practical Kitchen with Dedicated Dining Space",
            "Keys & Possession Handed Over in 2 Years",
            "5-Year Flexible Installments Schedule"
        ]
    },
    "120-sq-yards": {
        id: "120-sq-yards",
        title: "120 SQ. Yards Villa",
        sizeSqYards: 120,
        sizeSqFt: 1080,
        project: "Indus Enclave",
        tagline: "Expansive Luxury & Enhanced Architectural Grandeur",
        summary: "An expansive executive 2-bedroom residence offering heightened luxury, enlarged bedrooms (12' x 13'), spacious baths, premium finishes, and a sprawling living sanctuary.",
        image: "/assets/house.png",
        rooms: {
            bedrooms: {
                count: 2,
                dimension: "12'-0\" x 13'-0\"",
                details: "2 Grand master bedrooms featuring generous walk-in wardrobe spaces and private ensuite baths."
            },
            bathrooms: {
                count: 2,
                dimension: "5'-0\" x 7'-0\"",
                details: "2 Luxury executive bathrooms with premium vanity basins, glass shower enclosures, and designer tiles."
            },
            livingLounge: {
                name: "TV Lounge + Living",
                dimension: "12'-0\" x 13'-0\"",
                details: "A big and comfortable living room with large windows and plenty of space for the family."
            },
            kitchenDining: {
                name: "1 Kitchen + Dining",
                dimension: "7'-0\" x 8'-0\"",
                details: "A well-designed kitchen with good counter space and room for a dining table nearby."
            }
        },
        roomList: [
            {
                id: "bed1",
                name: "Master Bedroom 1",
                category: "bedroom",
                dimension: "12'-0\" x 13'-0\"",
                description: "A large master bedroom with plenty of space for a double bed, wardrobe, and its own bathroom.",
                features: ["156 sq. ft. area", "Attached Executive Ensuite", "Balcony/Garden View", "Air-Conditioner Points"],
                svgRect: { x: 30, y: 30, width: 195, height: 175, labelX: 127, labelY: 117 }
            },
            {
                id: "bed2",
                name: "Master Bedroom 2",
                category: "bedroom",
                dimension: "12'-0\" x 13'-0\"",
                description: "Second big bedroom with the same size and comfort as the first, with its own bathroom.",
                features: ["156 sq. ft. area", "Attached Ensuite Bath", "Large Picture Window", "High-End Tile Flooring"],
                svgRect: { x: 275, y: 30, width: 195, height: 175, labelX: 372, labelY: 117 }
            },
            {
                id: "bath1",
                name: "Executive Bath 1",
                category: "bathroom",
                dimension: "5'-0\" x 7'-0\"",
                description: "A full-size bathroom with good quality fittings, clean tiles, and a shower area.",
                features: ["35 sq. ft. area", "Imported Sanitary Ware", "Glass Partition Space", "Anti-Bacterial Finishes"],
                svgRect: { x: 230, y: 30, width: 40, height: 85, labelX: 250, labelY: 72 }
            },
            {
                id: "bath2",
                name: "Executive Bath 2",
                category: "bathroom",
                dimension: "5'-0\" x 7'-0\"",
                description: "Full-size bathroom attached to Bedroom 2 with a mirror, basin, and proper water pressure.",
                features: ["35 sq. ft. area", "Premium Ceramic Basins", "Chrome Water Fittings", "Exhaust Ventilation"],
                svgRect: { x: 230, y: 120, width: 40, height: 85, labelX: 250, labelY: 162 }
            },
            {
                id: "lounge",
                name: "TV Lounge + Living",
                category: "living",
                dimension: "12'-0\" x 13'-0\"",
                description: "A big and open living room where the family can relax, sit together, and enjoy time at home.",
                features: ["156 sq. ft. area", "Chandelier Hook Point", "Wall Niches & LED Trims", "Multi-Seat Capacity"],
                svgRect: { x: 30, y: 210, width: 250, height: 170, labelX: 155, labelY: 295 }
            },
            {
                id: "kitchen",
                name: "1 Kitchen + Dining",
                category: "kitchen",
                dimension: "7'-0\" x 8'-0\"",
                description: "A practical kitchen with good counter space and easy access to the dining area.",
                features: ["56 sq. ft. area", "Modular Countertops", "Cooktop & Hood Space", "Twin Stainless Sink"],
                svgRect: { x: 285, y: 210, width: 185, height: 170, labelX: 377, labelY: 295 }
            },
            {
                id: "porch",
                name: "Car Porch & Entrance Garden",
                category: "outdoor",
                dimension: "Spacious Front Porch",
                description: "A dedicated front porch where you can park your car, with a proper gate and entrance.",
                features: ["Vehicle Parking Space", "Modern Facade Lighting", "Dedicated Gate Access", "Water Outlet Point"],
                svgRect: { x: 30, y: 385, width: 440, height: 75, labelX: 250, labelY: 422 }
            }
        ],
        paymentPlan: {
            title: "5 Years Easy Payment Plan",
            tagline: "Move In After Just 2 Years While Continuing Your Payments",
            duration: "5 Years (60 Months)",
            possessionTime: "Within 2 Years",
            highlights: [
                "Move into your executive villa after just 2 years",
                "Spread payments comfortably over 5 years (60 months)",
                "Small monthly installments designed for financial peace of mind",
                "Full ownership transfer upon completion of the plan",
                "Approved NOC and complete documentation provided"
            ],
            breakdownSteps: [
                {
                    stage: "Booking",
                    percentage: "10%",
                    timing: "At the Start",
                    description: "Pay the first amount to reserve your plot on the master plan."
                },
                {
                    stage: "Confirmation",
                    percentage: "10%",
                    timing: "Within 30-60 Days",
                    description: "Receive your official allocation letter after the second payment."
                },
                {
                    stage: "60 Monthly Installments",
                    percentage: "50%",
                    timing: "Over 5 Years (60 Months)",
                    description: "Easy monthly payments — small and manageable every month for 5 years."
                },
                {
                    stage: "Get Your Keys!",
                    percentage: "15%",
                    timing: "In 2 Years (Month 24)",
                    description: "You receive the keys and can move into your home after just 2 years!"
                },
                {
                    stage: "Remaining Payments",
                    percentage: "10%",
                    timing: "Years 3 to 5",
                    description: "Continue living in your home while paying off the small remaining balance."
                }
            ]
        },
        highlights: [
            "Enlarged 12' x 13' Master Bedrooms",
            "Luxury 5' x 7' Executive Bathrooms",
            "Grand 12' x 13' TV Lounge & Living Space",
            "Keys & Possession Handed Over in 2 Years",
            "5-Year Flexible Installments Schedule"
        ]
    }
};

export const comparisonSpecs = [
    {
        feature: "Total Plot Area",
        villa80: "80 Sq. Yards (~720 Sq. Ft)",
        villa120: "120 Sq. Yards (~1,080 Sq. Ft)",
        category: "Dimensions"
    },
    {
        feature: "Bedrooms (Count)",
        villa80: "2 Bedrooms",
        villa120: "2 Bedrooms",
        category: "Accommodations"
    },
    {
        feature: "Bedroom Dimensions",
        villa80: "10'-0\" x 10'-0\"",
        villa120: "12'-0\" x 13'-0\"",
        category: "Dimensions"
    },
    {
        feature: "Bathrooms (Count)",
        villa80: "2 Bathrooms",
        villa120: "2 Bathrooms",
        category: "Accommodations"
    },
    {
        feature: "Bathroom Dimensions",
        villa80: "4'-0\" x 6'-6\"",
        villa120: "5'-0\" x 7'-0\"",
        category: "Dimensions"
    },
    {
        feature: "TV Lounge + Living",
        villa80: "10'-0\" x 12'-0\"",
        villa120: "12'-0\" x 13'-0\"",
        category: "Living Spaces"
    },
    {
        feature: "1 Kitchen + Dining",
        villa80: "10'-0\" x 12'-0\"",
        villa120: "7'-0\" x 8'-0\"",
        category: "Living Spaces"
    },
    {
        feature: "Possession Timeline",
        villa80: "Within 2 Years",
        villa120: "Within 2 Years",
        category: "Payment Plan"
    },
    {
        feature: "Installment Duration",
        villa80: "5 Years Payment Plan",
        villa120: "5 Years Payment Plan",
        category: "Payment Plan"
    },
    {
        feature: "Payment Structure",
        villa80: "Easy Installments Plan",
        villa120: "Easy Installments Plan",
        category: "Payment Plan"
    },
    {
        feature: "Project Community",
        villa80: "Indus Enclave Gated Society",
        villa120: "Indus Enclave Gated Society",
        category: "Community"
    }
];

export const villaFaqs = [
    {
        q: "When will I receive possession of my villa?",
        a: "Possession for both the 80 Sq. Yards and 120 Sq. Yards villas is guaranteed within 2 years from booking, allowing you to move into your brand-new villa while continuing your remaining installments over the full 5-year plan."
    },
    {
        q: "How does the 5-Year Payment Plan work?",
        a: "The payment plan is designed for maximum financial ease. It includes a down payment upon booking, allocation confirmation, followed by 60 easy monthly installments spread over 5 years. At month 24 (Year 2), you receive physical keys and possession."
    },
    {
        q: "What is included in the 80 SQ. Yards Floor Plan?",
        a: "The 80 Sq. Yards villa floor plan at Indus Enclave includes 2 Bedrooms (10'-0\" x 10'-0\" each), 2 Bathrooms (4'-0\" x 6'-6\" each), a central TV Lounge + Living (10'-0\" x 12'-0\"), and 1 Kitchen + Dining (10'-0\" x 12'-0\")."
    },
    {
        q: "What is included in the 120 SQ. Yards Floor Plan?",
        a: "The 120 Sq. Yards villa floor plan features enlarged executive dimensions: 2 Bedrooms (12'-0\" x 13'-0\" each), 2 Bathrooms (5'-0\" x 7'-0\" each), a spacious TV Lounge + Living (12'-0\" x 13'-0\"), and 1 Kitchen + Dining (7'-0\" x 8'-0\")."
    },
    {
        q: "Can I customize the interior finishes of my villa?",
        a: "Yes! Indus Enclave offers customizable finishing options during the construction phase, including choices of tile accents, sanitary fittings, electrical switches, and kitchen cabinetry palettes."
    },
    {
        q: "How can I book a site visit or reserve a villa?",
        a: "You can schedule a private site visit or reserve your villa directly by filling out the inquiry form on this page, calling our sales team at +92 329 302 3156 / +92 316 822 8918, or visiting our office at Osif Arcade, Gulshan-e-Iqbal, Karachi."
    }
];
