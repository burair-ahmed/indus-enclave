export interface VideoItem {
    id: string;
    youtubeId?: string;
    title: string;
    category: "Site & Construction" | "Plot & House Tours" | "Commercials & TV Ads" | "Buyer Guides & Interviews";
    duration: string;
    date: string;
    thumbnail: string;
    videoUrl: string;
    videoType: "youtube" | "html5";
    badge: string;
    resolution: "4K UHD" | "1080p FHD";
    views: string;
    featured?: boolean;
    description: string;
    keyHighlights: string[];
    locationTag: string;
}

export function extractYoutubeId(urlOrId: string): string {
    const trimmed = urlOrId.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
        return trimmed;
    }
    const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : trimmed;
}

export function getYoutubeThumbnail(urlOrId: string, quality: "maxres" | "hq" = "hq"): string {
    const id = extractYoutubeId(urlOrId);
    return quality === "maxres"
        ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
        : `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function getYoutubeEmbedUrl(urlOrId: string): string {
    const id = extractYoutubeId(urlOrId);
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}

export const mediaCategories = [
    "All",
    "Site & Construction",
    "Plot & House Tours",
    "Commercials & TV Ads",
    "Buyer Guides & Interviews",
] as const;

export const siteVideos: VideoItem[] = [
    {
        id: "sunflower-block-launch-3A-TNzFRjvI",
        youtubeId: "3A-TNzFRjvI",
        title: "Sunflower Block Launch - 80 & 120 Sq. Yds Plots",
        category: "Plot & House Tours",
        duration: "03:55",
        date: "Official Launch",
        thumbnail: "https://img.youtube.com/vi/3A-TNzFRjvI/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/3A-TNzFRjvI?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Sunflower Block Launch",
        resolution: "1080p FHD",
        views: "3.5K views",
        featured: true,
        description:
            "Watch the official launch of Sunflower Block. See where the 80 and 120 sq. yard plots are located and learn how you can book your own plot on easy 3-year monthly installments.",
        keyHighlights: [
            "Official launch of the new Sunflower Block",
            "See the 80 and 120 Sq. Yard plot locations",
            "Direct access from M-9 Motorway Exit 8 (Nooriabad)",
            "Easy payment plan under 10 Lakh (1 Million) PKR",
        ],
        locationTag: "Sunflower Block, M-9 Motorway",
    },
    {
        id: "ceo-talks-ep1-iUsZxweCYs4",
        youtubeId: "iUsZxweCYs4",
        title: "CEO Talks - Our Mission to Make Homes Affordable for Everyone",
        category: "Buyer Guides & Interviews",
        duration: "05:51",
        date: "CEO Message",
        thumbnail: "https://img.youtube.com/vi/iUsZxweCYs4/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/iUsZxweCYs4?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "CEO Interview",
        resolution: "1080p FHD",
        views: "6.2K views",
        featured: true,
        description:
            "The CEO of Indus Enclave explains our vision: building a high-quality, fully approved housing society where middle-class families can actually afford to own their own home near Karachi.",
        keyHighlights: [
            "Why affordable housing is our #1 mission",
            "100% legal approvals from SBCA & SDA",
            "Great location right by the Nooriabad industrial hub",
            "Safe and transparent investment for families",
        ],
        locationTag: "Corporate Head Office",
    },
    {
        id: "site-update-fast-pace-US3CBP3pwLQ",
        youtubeId: "US3CBP3pwLQ",
        title: "Live On-Site Work: Heavy Machinery & Road Work in Progress",
        category: "Site & Construction",
        duration: "00:46",
        date: "Construction Update",
        thumbnail: "https://img.youtube.com/vi/US3CBP3pwLQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/US3CBP3pwLQ?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Work In Progress",
        resolution: "1080p FHD",
        views: "462 views",
        featured: false,
        description:
            "Watch bulldozers and road graders working live on the ground, cutting wide streets and leveling the land for plot owners.",
        keyHighlights: [
            "Bulldozers and leveling machines working live",
            "Cutting wide society roads and main boulevard",
            "Engineers and site staff supervising daily work",
            "Clear motorway access right outside the entrance",
        ],
        locationTag: "Site Office, M-9 Exit 8",
    },
    {
        id: "indus-enclave-tvc-DLc3aS13S_4",
        youtubeId: "DLc3aS13S_4",
        title: "Indus Enclave Official TV Commercial (TVC)",
        category: "Commercials & TV Ads",
        duration: "01:26",
        date: "TV Commercial",
        thumbnail: "https://img.youtube.com/vi/DLc3aS13S_4/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/DLc3aS13S_4?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Official TV Ad",
        resolution: "1080p FHD",
        views: "548 views",
        featured: false,
        description:
            "Our official TV commercial showing what daily life at Indus Enclave will look like: a peaceful, gated community with green parks, schools, and security for your children.",
        keyHighlights: [
            "Official television commercial by Al-Ashraf Group",
            "24/7 security with boundary walls and guards",
            "Lush family parks, grand masjid, and clean water",
            "Low prices with simple installment plans",
        ],
        locationTag: "National TV & Digital Campaign",
    },
    {
        id: "site-update-asaishon-ki-manzil-BQijU28qpcA",
        youtubeId: "BQijU28qpcA",
        title: "Site Progress - Roads & Boundary Wall Construction",
        category: "Site & Construction",
        duration: "01:06",
        date: "Construction Update",
        thumbnail: "https://img.youtube.com/vi/BQijU28qpcA/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/BQijU28qpcA?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Site Progress",
        resolution: "1080p FHD",
        views: "830 views",
        featured: false,
        description:
            "Take a quick real-life look at our construction progress, including boundary wall pillars, main road cutting, and land grading at Nooriabad Exit 8.",
        keyHighlights: [
            "Boundary wall and security pillar setup",
            "Main entrance boulevard construction",
            "Located directly at Exit 8 of M-9 Motorway",
            "Real on-ground development you can visit today",
        ],
        locationTag: "Main Site Boulevard",
    },
    {
        id: "two-reasons-to-invest-ojVhn4BlEVo",
        youtubeId: "ojVhn4BlEVo",
        title: "2 Big Reasons to Buy a Plot in Indus Enclave (Video Guide)",
        category: "Buyer Guides & Interviews",
        duration: "01:49",
        date: "Buyer Guide",
        thumbnail: "https://img.youtube.com/vi/ojVhn4BlEVo/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/ojVhn4BlEVo?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Why Buy Here",
        resolution: "1080p FHD",
        views: "381 views",
        featured: false,
        description:
            "Watch this video to understand the two biggest benefits of Indus Enclave: 100% legal government approvals (SBCA & SDA) and an unbeatable total price under 1 Million PKR.",
        keyHighlights: [
            "Total plot price under 10 Lakh (1 Million) PKR",
            "Rapid price growth along the M-9 Motorway corridor",
            "Peace of mind with dual SBCA & SDA approvals",
            "Close to over 200 operational factories in Nooriabad",
        ],
        locationTag: "Buyer Guide",
    },
    {
        id: "revolution-in-housing-ueWSFQFbgmg",
        youtubeId: "ueWSFQFbgmg",
        title: "Complete Society Tour: Facilities, Roads & Amenities",
        category: "Site & Construction",
        duration: "02:41",
        date: "Full Tour",
        thumbnail: "https://img.youtube.com/vi/ueWSFQFbgmg/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/ueWSFQFbgmg?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Society Tour",
        resolution: "1080p FHD",
        views: "507 views",
        featured: false,
        description:
            "Take a full walk through the project land. See the planned areas for the grand Jamia Masjid, school, hospital, parks, and wide commercial market.",
        keyHighlights: [
            "Complete master plan walkthrough",
            "Water reservoir and electricity planning",
            "Parks, community sports ground, and school zones",
            "Wide main boulevard with modern street lighting",
        ],
        locationTag: "Indus Enclave Site",
    },
    {
        id: "ceo-visit-site-M_1VK-Arygo",
        youtubeId: "M_1VK-Arygo",
        title: "CEO Site Inspection: Checking Work Quality on the Ground",
        category: "Site & Construction",
        duration: "02:09",
        date: "Site Inspection",
        thumbnail: "https://img.youtube.com/vi/M_1VK-Arygo/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/M_1VK-Arygo?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "CEO On Site",
        resolution: "1080p FHD",
        views: "1.0K views",
        featured: false,
        description:
            "CEO Dai Ali Danial visits the site in person to inspect the road cutting and make sure plot deliveries stay on schedule for all our buyers.",
        keyHighlights: [
            "CEO personally checks on-ground road work",
            "Reviewing machinery and earthmoving speed",
            "Keeping possession timelines on schedule",
            "Meeting directly with civil engineers on site",
        ],
        locationTag: "Site Ground",
    },
    {
        id: "grand-launch-hPjZp-aY2Ig",
        youtubeId: "hPjZp-aY2Ig",
        title: "Grand Launch Event - Celebrations & Ceremony",
        category: "Commercials & TV Ads",
        duration: "01:51",
        date: "Event Video",
        thumbnail: "https://img.youtube.com/vi/hPjZp-aY2Ig/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/hPjZp-aY2Ig?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Grand Launch",
        resolution: "1080p FHD",
        views: "2.0K views",
        featured: false,
        description:
            "Highlights from the official ribbon cutting and launch ceremony of Indus Enclave with real estate experts, business guests, and early plot buyers.",
        keyHighlights: [
            "Official ribbon cutting and project inauguration",
            "Display of master plan 3D society model",
            "Special launch prices for early buyers",
            "Speeches from Al-Ashraf Group leadership",
        ],
        locationTag: "Grand Event Arena",
    },
    {
        id: "al-ashraf-presents-IBdJc9owtM8",
        youtubeId: "IBdJc9owtM8",
        title: "About Al-Ashraf Group - The Builders Behind Indus Enclave",
        category: "Commercials & TV Ads",
        duration: "01:29",
        date: "Company Profile",
        thumbnail: "https://img.youtube.com/vi/IBdJc9owtM8/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/IBdJc9owtM8?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "About Builders",
        resolution: "1080p FHD",
        views: "3.9K views",
        featured: false,
        description:
            "Learn about the Al-Ashraf Group of Companies and our 20+ year reputation for trust, honest business, and delivering on our promises.",
        keyHighlights: [
            "Al-Ashraf Group's background and trusted reputation",
            "Committed to timely project completion",
            "Focus on family comfort and green living",
            "Best value per square yard on the M-9 motorway",
        ],
        locationTag: "Al-Ashraf Group Media",
    },
    {
        id: "plots-available-m9-2Cwd1iIfoNM",
        youtubeId: "2Cwd1iIfoNM",
        title: "Affordable Plots Available - Booking from Just Rs. 25,000",
        category: "Plot & House Tours",
        duration: "00:26",
        date: "Quick Video",
        thumbnail: "https://img.youtube.com/vi/2Cwd1iIfoNM/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/2Cwd1iIfoNM?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Booking Info",
        resolution: "1080p FHD",
        views: "176 views",
        featured: false,
        description:
            "A quick 26-second look at our available residential plots. Learn how you can start booking your plot today with just Rs. 25,000.",
        keyHighlights: [
            "Plots ready for booking right now",
            "Start with just Rs. 25,000 down payment",
            "Located right at Exit 8 on the M-9 Motorway",
        ],
        locationTag: "Sunflower Block",
    },
    {
        id: "teaser-place-of-comfort-lAxSHOkly1o",
        youtubeId: "lAxSHOkly1o",
        title: "Indus Enclave - A Place of Comfort (Quick Intro)",
        category: "Commercials & TV Ads",
        duration: "00:06",
        date: "Short Teaser",
        thumbnail: "https://img.youtube.com/vi/lAxSHOkly1o/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/lAxSHOkly1o?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Short Teaser",
        resolution: "1080p FHD",
        views: "680 views",
        featured: false,
        description:
            "A quick look at Indus Enclave: peaceful, secure, and affordable living right off the motorway.",
        keyHighlights: [
            "Quick project introduction",
            "A project of Al-Ashraf Group of Companies",
        ],
        locationTag: "Nooriabad City",
    },
];

export const mediaStats = [
    { value: "12", label: "Real Video Updates" },
    { value: "Live", label: "On-Site Construction" },
    { value: "15,000+", label: "YouTube Views" },
    { value: "100%", label: "Government Approved" },
];
