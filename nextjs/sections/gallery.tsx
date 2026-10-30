"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // 8 newly added real site development photos (same amount as original 8)
    const images = [
        {
            src: "/assets/IMG-20231027-WA0029-min.webp",
            alt: "Indus Enclave Grand Entrance Gateway Arch",
        },
        {
            src: "/assets/IMG-20231027-WA0032-min.webp",
            alt: "White Horse Sculptures Landmark Roundabout",
        },
        {
            src: "/assets/IMG-20231027-WA0034-min.webp",
            alt: "Water Fountain and Indus Enclave Landmark Tower",
        },
        {
            src: "/assets/IMG-20231027-WA0030-min.webp",
            alt: "Tree-Lined Main Boulevard Entry",
        },
        {
            src: "/assets/IMG-20231027-WA0045-min.webp",
            alt: "Model Villas On Site with Contemporary Architecture",
        },
        {
            src: "/assets/IMG-20231027-WA0039-min.webp",
            alt: "Wide Paved Main Boulevard with Street Lighting",
        },
        {
            src: "/assets/IMG-20231027-WA0036-min.webp",
            alt: "Site Reception Office and Visitor Courtyard",
        },
        {
            src: "/assets/IMG-20231027-WA0037-min.webp",
            alt: "Green Landscaped Park with Sculpture Artwork",
        },
    ];

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            const totalHeight = rect.height;
            const scrolled = -rect.top;
            const maxScroll = totalHeight - viewHeight;

            if (maxScroll <= 0) return;

            // Clamped scroll progress (0 to 1)
            const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
            
            // Calculate limit (total scrollable horizontal width)
            const limit = Math.max(0, track.scrollWidth - window.innerWidth);
            
            // Apply horizontal transform on the track
            track.style.transform = `translateX(-${progress * limit}px)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        
        // Timeout to ensure elements are measured after paint/images loaded
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-[180vh] w-full">
            {/* Sticky view wrapper */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                
                {/* Horizontal scroll track */}
                <div
                    ref={trackRef}
                    className="flex gap-5 px-4 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20 will-change-transform transition-transform duration-300 ease-out"
                >
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[410px] md:w-[364px] md:h-[457px] shrink-0 rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 shadow-xl border border-zinc-800/40 group"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 364px"
                                className="object-cover object-center pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-105"
                                priority={index < 2}
                            />
                            {/* Subtle luxury vignette gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}