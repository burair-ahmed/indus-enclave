export interface LandmarkItem {
    name: string;
    distance?: string;
    tag?: string;
    description?: string;
}

export interface LandmarkCategory {
    id: string;
    title: string;
    icon: string;
    countText: string;
    items: LandmarkItem[];
}

export const locationMeta = {
    googleMapsUrl:
        "https://www.google.com/maps/place/Indus+Enclave+Housing+Society/@25.177413,67.7904459,4143m/data=!3m1!1e3!4m6!3m5!1s0x394c97046d725e1f:0x6e232ae4786a43c5!8m2!3d25.1929845!4d67.8132019!16s%2Fg%2F11ssf_yydm?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
    routeMapImage: "/map-80-1024x523.jpg",
    coordinates: "25.1929845, 67.8132019",
    exitNumber: "Exit 8",
    motorway: "M-9 Karachi–Hyderabad Motorway",
    city: "Nooriabad Industrial City",
    driveTimes: [
        { label: "Karachi Toll Plaza", time: "45 Mins", distance: "Approx. 55 KM" },
        { label: "DHA City Karachi", time: "25 Mins", distance: "Approx. 35 KM" },
        { label: "Hyderabad Bypass", time: "50 Mins", distance: "Approx. 65 KM" },
        { label: "Port Qasim Sea Port", time: "55 Mins", distance: "Direct Link Route" }
    ]
};

export const aboutLocationContent = {
    title: "About The Location",
    paragraph1:
        "Nooriabad has regained its potential to grow immensely as an attractive industrial estate. Interest of government has revitalized the zone with policies that benefit investors and industrialists. Direct link to motorway provides means for people to find work here from Karachi and other parts of Sindh.",
    paragraph2:
        "For the aspect of residence, Indus Enclave is a lucrative and very reasonable project for locals who work in the Nooriabad Industrial Area, eliminating painful daily commutes while providing upscale gated amenities.",
    paragraph3:
        "Added security on motorway with highway police keeps the road secured with possibility of faster authority response in case of emergencies or accidents. Around more than 200 production facilities are operational with more industrial developments still in progress. Access to Port Qasim and Karachi Port also provides timely transportation of goods via sea route."
};

export const locationAtAGlance = [
    {
        title: "Strategic Motorway Location",
        description: "Direct frontage on the prime M-9 Karachi–Hyderabad Motorway at Nooriabad Exit 8 with dedicated interchange access.",
        icon: "Compass"
    },
    {
        title: "Ideal for Industrial Setup",
        description: "Adjoining one of Sindh's premier manufacturing economic zones with high commercial appreciation.",
        icon: "Factory"
    },
    {
        title: "Complete Infrastructure",
        description: "Availability of wide carpeted avenues, water supply, electricity, and high-speed transit links.",
        icon: "Building2"
    },
    {
        title: "Tax Relief by Government",
        description: "Government-backed fiscal incentives, special zone policies, and tax benefits for businesses and industrialists.",
        icon: "BadgePercent"
    },
    {
        title: "Highway Patrol 24/7 Security",
        description: "Dedicated Motorway Police patrolling keeps transit safe with rapid response units in case of emergency.",
        icon: "ShieldCheck"
    },
    {
        title: "Access to Sea Ports",
        description: "Streamlined logistics access directly to Port Muhammad Bin Qasim and Karachi Port via arterial corridors.",
        icon: "Ship"
    },
    {
        title: "Public Transportation",
        description: "Regular inter-city coaches, bus transits, and commuter vans operating continuously between Karachi and Nooriabad.",
        icon: "Bus"
    },
    {
        title: "Direct M-9 Connectivity",
        description: "Signal-free dual carriageway ensuring smooth travel to Karachi center and interior Sindh cities.",
        icon: "Navigation"
    }
];

export const landmarkCategories: LandmarkCategory[] = [
    {
        id: "schools",
        title: "Schools & Academies",
        icon: "GraduationCap",
        countText: "6 Educational Centers",
        items: [
            { name: "FWO Army Public School", distance: "2 KM", tag: "Army Public School System" },
            { name: "Noor Academy", distance: "1 KM", tag: "Primary & Secondary" },
            { name: "ZDS School", distance: "3 KM", tag: "Community School" },
            { name: "ERA Academy", distance: "14 KM", tag: "Higher Education" },
            { name: "Government Elementary School", distance: "19 KM", tag: "Public Education" },
            { name: "Government Primary School Wali Muhammad Shoro", distance: "10 KM", tag: "Primary Education" }
        ]
    },
    {
        id: "industries",
        title: "Industrial Giants (200+ Operational)",
        icon: "Factory",
        countText: "Major Manufacturing Hub",
        items: [
            { name: "National Foods & Mustaqim Dyeing", tag: "Food & Textile Conglomerate" },
            { name: "Popular Aseptic Packaging PVT. Ltd", tag: "Packaging Industry" },
            { name: "Marhaba Textile Ltd", tag: "Textile Exports" },
            { name: "CIBA Pharmaceuticals Pvt. Ltd", tag: "Healthcare & Pharma" },
            { name: "Printing Industry Pvt. Ltd", tag: "Industrial Printing" },
            { name: "Sapphire Textile Mills Ltd", tag: "Leading Textile Producer" },
            { name: "Popular Fiber Mills Pvt. Ltd", tag: "Synthetic Fibres" },
            { name: "Faisal Spinning Mills Ltd", tag: "Spinning & Yarns" },
            { name: "Al Razzaq Fibres Pvt. Ltd", tag: "Fibres & Polymers" },
            { name: "R&R Agro Pvt. Ltd", tag: "Agri-Business" },
            { name: "Pakistan Cables Ltd", tag: "Premier Electrical Cables" },
            { name: "Metco Textile Pvt. Ltd", tag: "Textile Operations" },
            { name: "SAZQ Industries", tag: "Manufacturing" },
            { name: "Crescent Fibres Pvt. Ltd", tag: "Industrial Fibres" },
            { name: "Esa Cement", tag: "Cement & Construction" },
            { name: "Dada Bhai Cement Industries Limited", tag: "Heavy Building Materials" }
        ]
    },
    {
        id: "restaurants",
        title: "Restaurants & Dining",
        icon: "Utensils",
        countText: "10 Popular Food Stops",
        items: [
            { name: "Highway Grill", tag: "BBQ & Pakistani Cuisine" },
            { name: "Noori Restaurant", tag: "Traditional Dining" },
            { name: "Taj Hotel", tag: "Motorway Dining" },
            { name: "Al Madina Restaurant", tag: "Family Dining" },
            { name: "Bismillah Hotel", tag: "Chai & Desi Breakfast" },
            { name: "Quetta Dubai Restaurant", tag: "Balochi Tikka & Chai" },
            { name: "Raja Khursheed Old Corner", tag: "Historic Stop" },
            { name: "Shadoo Palari Hotel", tag: "Local Delicacies" },
            { name: "Al Malik Fruit & Juice Corner", tag: "Fresh Juices & Shakes" },
            { name: "Bismillah Falooda & Ice Cream", tag: "Desserts & Ice Cream" }
        ]
    },
    {
        id: "societies",
        title: "Nearby Societies & Suburbs",
        icon: "Home",
        countText: "12 Adjacent Townships",
        items: [
            { name: "DHA City Karachi", tag: "Premier Defense Housing" },
            { name: "ASF City", tag: "Airport Security Force Housing" },
            { name: "Bahria Green", tag: "Bahria Master Community" },
            { name: "Shehr-e-Baqa", tag: "Adjacent Residential Community" },
            { name: "Raji City", tag: "Suburban Scheme" },
            { name: "Ideal City", tag: "Planned Community" },
            { name: "PAK Base Bholari", tag: "Air Force Base Environs" },
            { name: "Kirthar National Park", tag: "Ecological Reserve & Hills" },
            { name: "Boola Khan", tag: "Historic Tehsil Center" },
            { name: "Thano Ahmed Khan", tag: "Suburban Center" },
            { name: "Jhampir", tag: "Wind Corridor & Green Zone" },
            { name: "Nagori Cooperative Dairy Farming Society", tag: "Agri-Farming Sector" }
        ]
    },
    {
        id: "fuel",
        title: "Fuel Stations & CNG",
        icon: "Fuel",
        countText: "9 Reliable Fuel Stops",
        items: [
            { name: "Ali Baba CNG", tag: "CNG & Expressway Convenience" },
            { name: "PSO Petrol Pump", tag: "Pakistan State Oil Hub" },
            { name: "Shell Petrol Pump", tag: "Premium Fuels & Lubes" },
            { name: "Byco Petroleum", tag: "Motorway Fueling" },
            { name: "Sunny Petrol Pump", tag: "24/7 Motorway Station" },
            { name: "Fast Petrol Pump", tag: "Quick Service Stop" },
            { name: "Hascol Petroleum", tag: "Fuel & Convenience" },
            { name: "Khan Petrol Station", tag: "Fuel Stop" },
            { name: "Memon Petrol Pump", tag: "Commercial Diesel & Petrol" }
        ]
    },
    {
        id: "banks",
        title: "Banks & Financial Centers",
        icon: "Landmark",
        countText: "Full Commercial Banking",
        items: [
            { name: "Bank Al Habib Nooriabad Branch", tag: "Branch Banking & 24/7 ATM" },
            { name: "Dubai Islamic Bank", tag: "Shariah Compliant Banking & ATM" }
        ]
    },
    {
        id: "parks",
        title: "Parks & Excursions",
        icon: "Trees",
        countText: "Recreation & Nature",
        items: [
            { name: "Kirthar National Park", tag: "Sindh's Largest Wildlife Sanctuary" },
            { name: "Maplewood's", tag: "Resort & Farm Living" },
            { name: "Dreamworld Resort Environs", tag: "Family Waterpark & Resort Belt" }
        ]
    },
    {
        id: "transit",
        title: "Railway & Connectivity",
        icon: "Train",
        countText: "Transit Hubs",
        items: [
            { name: "Jampir Train Station", distance: "30 KM", tag: "Pakistan Railways Main Line" },
            { name: "Karachi–Hyderabad M-9 Motorway", distance: "0 KM Direct", tag: "6-Lane National Expressway" }
        ]
    }
];
