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
        "Nooriabad is growing rapidly as a major business and industrial center. With strong government support and a direct connection to the M-9 Motorway, people from Karachi and Hyderabad find it convenient and rewarding to live, work, and invest here.",
    paragraph2:
        "For families and professionals working in Nooriabad or along the motorway, Indus Enclave is an affordable and comfortable gated community that saves hours of travel time every day while offering modern amenities.",
    paragraph3:
        "24/7 Motorway Police make daily travel safe and secure. With more than 200 active factories nearby and easy routes to Port Qasim and Karachi, Indus Enclave offers both a peaceful lifestyle and strong future property value."
};

export const locationAtAGlance = [
    {
        title: "Prime Motorway Location",
        description: "Located right on the M-9 Karachi–Hyderabad Motorway at Exit 8 Nooriabad for fast, convenient access.",
        icon: "Compass"
    },
    {
        title: "Close to Job Centers",
        description: "Surrounded by thriving industrial zones, creating strong rental demand and great investment returns.",
        icon: "Factory"
    },
    {
        title: "Complete Infrastructure",
        description: "Wide paved roads, reliable water, electricity, and carefully planned neighborhood layouts.",
        icon: "Building2"
    },
    {
        title: "Government-Backed Growth",
        description: "Special economic incentives and industrial policies that drive steady development in the region.",
        icon: "BadgePercent"
    },
    {
        title: "24/7 Highway Patrol Security",
        description: "Active Motorway Police patrols ensure safe, worry-free journeys for you and your family.",
        icon: "ShieldCheck"
    },
    {
        title: "Direct Port Access",
        description: "Easy highway connections to Port Qasim and Karachi Port for trade and transport.",
        icon: "Ship"
    },
    {
        title: "Public Transportation",
        description: "Regular buses, coaches, and local vans connect Nooriabad with Karachi and nearby towns throughout the day.",
        icon: "Bus"
    },
    {
        title: "Direct M-9 Highway",
        description: "Wide, signal-free expressway for a smooth, fast drive to Karachi and Hyderabad.",
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
