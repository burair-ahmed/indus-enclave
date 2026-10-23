export interface VideoItem {
    id: string;
    youtubeId?: string;
    title: string;
    category: "Site Progress & Drone" | "Virtual Walkthroughs" | "Promotional & TVC" | "Investor Desk & Interviews";
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
    "Site Progress & Drone",
    "Virtual Walkthroughs",
    "Promotional & TVC",
    "Investor Desk & Interviews",
] as const;

export const siteVideos: VideoItem[] = [
    {
        id: "sunflower-block-launch-3A-TNzFRjvI",
        youtubeId: "3A-TNzFRjvI",
        title: "INDUS ENCLAVE | NEW BLOCK LAUNCH | SUNFLOWER BLOCK",
        category: "Virtual Walkthroughs",
        duration: "03:55",
        date: "Official Release",
        thumbnail: "https://img.youtube.com/vi/3A-TNzFRjvI/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/3A-TNzFRjvI?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Sunflower Block Launch",
        resolution: "1080p FHD",
        views: "3.5K views",
        featured: true,
        description:
            "Official announcement and video walkthrough of the flagship Sunflower Block launch at Indus Enclave on the M-9 Motorway. Showcasing affordable 80 & 120 Sq. Yds residential plots on easy 3-year installments.",
        keyHighlights: [
            "Official Sunflower Block residential launch",
            "80 and 120 Sq. Yards plot layouts and boundary demarcations",
            "Prime location on M-9 Motorway Exit 8 Nooriabad",
            "Affordable installment schedules under 1 Million PKR",
        ],
        locationTag: "Sunflower Block, M-9 Motorway",
    },
    {
        id: "ceo-talks-ep1-iUsZxweCYs4",
        youtubeId: "iUsZxweCYs4",
        title: "INDUS ENCLAVE | CEO TALKS | EPISODE 1",
        category: "Investor Desk & Interviews",
        duration: "05:51",
        date: "Executive Series",
        thumbnail: "https://img.youtube.com/vi/iUsZxweCYs4/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/iUsZxweCYs4?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "CEO Interview",
        resolution: "1080p FHD",
        views: "6.2K views",
        featured: true,
        description:
            "The CEO of Indus Enclave shares the foundational mission of Al-Ashraf Group: delivering verified, approved, and truly affordable housing for middle-income families along the burgeoning M-9 Karachi-Hyderabad growth corridor.",
        keyHighlights: [
            "Vision for affordable, high-standard community living",
            "SBCA & SDA regulatory approval assurances",
            "Nooriabad economic and industrial revitalization impact",
            "Long-term value creation and investor security",
        ],
        locationTag: "Corporate Head Office",
    },
    {
        id: "site-update-fast-pace-US3CBP3pwLQ",
        youtubeId: "US3CBP3pwLQ",
        title: "Development Update: Fast Pace Construction & Machinery on Site",
        category: "Site Progress & Drone",
        duration: "00:46",
        date: "Site Milestone",
        thumbnail: "https://img.youtube.com/vi/US3CBP3pwLQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/US3CBP3pwLQ?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Fast Pace Progress",
        resolution: "1080p FHD",
        views: "462 views",
        featured: false,
        description:
            "On-ground machinery action footage documenting soil grading, heavy earthmoving equipment, and fast-paced road cutting across the Indus Enclave project land.",
        keyHighlights: [
            "Heavy bulldozers and graders active on site",
            "Rapid road demarcation and ground leveling",
            "Site team engineering supervision",
            "Direct highway access verification",
        ],
        locationTag: "Site Office, M-9 Exit 8",
    },
    {
        id: "indus-enclave-tvc-DLc3aS13S_4",
        youtubeId: "DLc3aS13S_4",
        title: "Indus Enclave Official TV Commercial (TVC)",
        category: "Promotional & TVC",
        duration: "01:26",
        date: "Broadcast Media",
        thumbnail: "https://img.youtube.com/vi/DLc3aS13S_4/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/DLc3aS13S_4?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Official TVC",
        resolution: "1080p FHD",
        views: "548 views",
        featured: false,
        description:
            "The official television commercial for Indus Enclave by Al-Ashraf Group of Companies, capturing the aspiration of peaceful, secure family living away from urban congestion.",
        keyHighlights: [
            "Official national television commercial",
            "Al-Ashraf Group of Companies presentation",
            "Gated security, modern utilities, and lush parks",
            "Affordable pricing with transparent payment plans",
        ],
        locationTag: "National Media Campaign",
    },
    {
        id: "site-update-asaishon-ki-manzil-BQijU28qpcA",
        youtubeId: "BQijU28qpcA",
        title: "Indus Enclave | Asaishon Ki Manzil | Site Update",
        category: "Site Progress & Drone",
        duration: "01:06",
        date: "Site Milestone",
        thumbnail: "https://img.youtube.com/vi/BQijU28qpcA/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/BQijU28qpcA?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Site Progress",
        resolution: "1080p FHD",
        views: "830 views",
        featured: false,
        description:
            "A ground report showing actual site progress, boundary structures, and landscape transformation at Indus Enclave Nooriabad.",
        keyHighlights: [
            "On-site infrastructure and road network development",
            "Boundary markers and perimeter security setup",
            "Convenient access from M-9 motorway toll interchange",
            "Verified on-ground civil engineering works",
        ],
        locationTag: "Main Site Boulevard",
    },
    {
        id: "two-reasons-to-invest-ojVhn4BlEVo",
        youtubeId: "ojVhn4BlEVo",
        title: "آپ کو انڈس انکلیو میں سرمایہ کاری کرنے کی دو وجوہات",
        category: "Investor Desk & Interviews",
        duration: "01:49",
        date: "Investor Guide",
        thumbnail: "https://img.youtube.com/vi/ojVhn4BlEVo/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/ojVhn4BlEVo?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Investment Insights",
        resolution: "1080p FHD",
        views: "381 views",
        featured: false,
        description:
            "Two compelling reasons why investing in Indus Enclave offers extraordinary capital appreciation and peace of mind for both residential buyers and commercial investors.",
        keyHighlights: [
            "Affordable entry point below 1 Million PKR",
            "High growth potential along the Nooriabad industrial corridor",
            "Dual SBCA and SDA government approval security",
            "Strategic Motorway Exit 8 accessibility",
        ],
        locationTag: "Investor Advisory Desk",
    },
    {
        id: "revolution-in-housing-ueWSFQFbgmg",
        youtubeId: "ueWSFQFbgmg",
        title: "Indus Enclave | A Revolution in Housing | Official Site Video",
        category: "Site Progress & Drone",
        duration: "02:41",
        date: "Documentary",
        thumbnail: "https://img.youtube.com/vi/ueWSFQFbgmg/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/ueWSFQFbgmg?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Site Documentary",
        resolution: "1080p FHD",
        views: "507 views",
        featured: false,
        description:
            "Comprehensive site documentary exploring how Indus Enclave is pioneering master-planned, gated community living on the M-9 highway with modern civic amenities.",
        keyHighlights: [
            "Detailed master plan layout inspection",
            "Proximity to Nooriabad industrial estate and employment hubs",
            "Underground utility planning and water reservoir design",
            "Master entrance gate and commercial boulevard review",
        ],
        locationTag: "Indus Enclave Site",
    },
    {
        id: "ceo-visit-site-M_1VK-Arygo",
        youtubeId: "M_1VK-Arygo",
        title: "CEO Dai Ali Danial Site Visit & Inspection at Indus Enclave",
        category: "Site Progress & Drone",
        duration: "02:09",
        date: "Leadership Inspection",
        thumbnail: "https://img.youtube.com/vi/M_1VK-Arygo/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/M_1VK-Arygo?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Leadership Inspection",
        resolution: "1080p FHD",
        views: "1.0K views",
        featured: false,
        description:
            "CEO Dai Ali Danial conducts an extensive on-ground inspection of ongoing civil construction, road demarcations, and development timelines at Indus Enclave.",
        keyHighlights: [
            "Executive on-ground engineering review",
            "Quality assurance of road cutting and grading works",
            "Commitment to on-schedule possession for plot owners",
            "Interactive discussion with site project managers",
        ],
        locationTag: "Site Ground Zero",
    },
    {
        id: "grand-launch-hPjZp-aY2Ig",
        youtubeId: "hPjZp-aY2Ig",
        title: "Indus Enclave - Grand Launch Event & Ceremony",
        category: "Promotional & TVC",
        duration: "01:51",
        date: "Corporate Event",
        thumbnail: "https://img.youtube.com/vi/hPjZp-aY2Ig/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/hPjZp-aY2Ig?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Grand Launch",
        resolution: "1080p FHD",
        views: "2.0K views",
        featured: false,
        description:
            "Highlights from the Grand Launch ceremony of Indus Enclave, attended by leading real estate consultants, dignitaries, and prospective home buyers.",
        keyHighlights: [
            "Grand launch ceremony and ribbon cutting",
            "Keynote addresses on Sindh's real estate future",
            "Unveiling of the master plan model",
            "Booking confirmations for early buyers",
        ],
        locationTag: "Grand Event Arena",
    },
    {
        id: "al-ashraf-presents-IBdJc9owtM8",
        youtubeId: "IBdJc9owtM8",
        title: "Al Ashraf Group of Companies Presents 'Indus Enclave' - A Place of Comfort",
        category: "Promotional & TVC",
        duration: "01:29",
        date: "Corporate Feature",
        thumbnail: "https://img.youtube.com/vi/IBdJc9owtM8/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/IBdJc9owtM8?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Corporate Showcase",
        resolution: "1080p FHD",
        views: "3.9K views",
        featured: false,
        description:
            "A corporate presentation by Al-Ashraf Group detailing the values of trust, reliability, and social responsibility driving the Indus Enclave project.",
        keyHighlights: [
            "Al-Ashraf Group of Companies project pedigree",
            "Architectural vision of a self-sustaining green city",
            "Focus on family security and wholesome environment",
            "Unprecedented value per square yard on M-9",
        ],
        locationTag: "Al-Ashraf Group Media",
    },
    {
        id: "plots-available-m9-2Cwd1iIfoNM",
        youtubeId: "2Cwd1iIfoNM",
        title: "Residential Plots Available - Most Affordable Housing on M9 Motorway",
        category: "Virtual Walkthroughs",
        duration: "00:26",
        date: "Quick Spotlight",
        thumbnail: "https://img.youtube.com/vi/2Cwd1iIfoNM/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/2Cwd1iIfoNM?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Quick Spotlight",
        resolution: "1080p FHD",
        views: "176 views",
        featured: false,
        description:
            "Short site highlight spotlighting ready residential plots available in Sunflower Block on M-9 Motorway Karachi at unmatched rates.",
        keyHighlights: [
            "Ready-for-allotment residential plots",
            "Immediate booking starting from Rs. 25,000",
            "Full motorway frontage near Exit 8",
        ],
        locationTag: "Sunflower Block",
    },
    {
        id: "teaser-place-of-comfort-lAxSHOkly1o",
        youtubeId: "lAxSHOkly1o",
        title: "Indus Enclave -- A Place of Comfort (Project Teaser)",
        category: "Promotional & TVC",
        duration: "00:06",
        date: "Project Teaser",
        thumbnail: "https://img.youtube.com/vi/lAxSHOkly1o/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/lAxSHOkly1o?autoplay=1&rel=0",
        videoType: "youtube",
        badge: "Teaser",
        resolution: "1080p FHD",
        views: "680 views",
        featured: false,
        description:
            "Official project teaser introducing Indus Enclave as the ultimate place of comfort and peaceful living on the M-9 motorway.",
        keyHighlights: [
            "Signature project branding teaser",
            "Al-Ashraf Group quality hallmark",
        ],
        locationTag: "Nooriabad City",
    },
];

export const mediaStats = [
    { value: "12+", label: "Official YouTube Releases" },
    { value: "HD/4K", label: "On-Site Video Footage" },
    { value: "15K+", label: "Total Views on Channel" },
    { value: "100%", label: "Verified & Approved Coverage" },
];
