"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed z-50 flex items-center justify-between left-1/2 -translate-x-1/2 transition-all duration-500 p-4 ${scrolled ? "lg:w-5xl w-[calc(100vw-14px)] bg-white/60 backdrop-blur-2xl rounded-full mt-4 pl-6 shadow" : "md:px-16 lg:px-24 xl:px-32 w-full"}`}>
                <a href="/">
                    <Image width={100} height={100} src="/indus-logo.webp" alt="Logo" className={`transition-all duration-500 h-12 w-auto ${scrolled ? "" : ""}`} />
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6 md:gap-10 text-sm">
                    <a href="/" className={`transition-colors duration-500 ${scrolled ? "text-zinc-800 hover:text-zinc-600" : "text-white hover:text-white/90"}`}>Home</a>
                    <a href="/plots" className={`transition-colors duration-500 ${scrolled ? "text-zinc-800 hover:text-zinc-600" : "text-white hover:text-white/90"}`}>Plots</a>
                    <a href="/villas" className={`transition-colors duration-500 ${scrolled ? "text-zinc-800 hover:text-zinc-600" : "text-white hover:text-white/90"}`}>Villas</a>
                    <a href="/gallery" className={`transition-colors duration-500 ${scrolled ? "text-zinc-800 hover:text-zinc-600" : "text-white hover:text-white/90"}`}>Gallery</a>
                    <a href="/about" className={`transition-colors duration-500 ${scrolled ? "text-zinc-800 hover:text-zinc-600" : "text-white hover:text-white/90"}`}>About</a>
                    <a href="/contact" className={`transition-colors duration-500 ${scrolled ? "text-zinc-800 hover:text-zinc-600" : "text-white hover:text-white/90"}`}>Contact</a>
                </div>

                <a href="/contact" className={`hidden md:block px-6 py-2.5 rounded-[6px] text-sm font-medium cursor-pointer transition-all duration-500 ${scrolled ? "bg-zinc-900 text-white hover:bg-zinc-800 rounded-full" : "bg-zinc-50 text-zinc-800 hover:bg-zinc-200"}`}>
                    Get Started
                </a>

                <button onClick={() => setMobileOpen(true)} className={`md:hidden p-2 rounded-md aspect-square font-medium transition cursor-pointer ${scrolled ? "text-zinc-800" : "text-white"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} md:hidden max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/90 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-6 md:gap-10 text-sm`}>
                <a href="/" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-white/90 text-lg transition-colors">Home</a>
                <a href="/plots" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-white/90 text-lg transition-colors">Plots</a>
                <a href="/villas" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-white/90 text-lg transition-colors">Villas</a>
                <a href="/gallery" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-white/90 text-lg transition-colors">Gallery</a>
                <a href="/about" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-white/90 text-lg transition-colors">About</a>
                <a href="/contact" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-white/90 text-lg transition-colors">Contact</a>

                <button onClick={() => setMobileOpen(false)} className="md:hidden bg-white text-zinc-800 p-2 rounded-md aspect-square font-medium transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </>
    );
}
