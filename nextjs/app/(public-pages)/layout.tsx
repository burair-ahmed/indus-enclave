import type { Metadata } from 'next';
import React from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import LenisScroll from '@/components/lenis-scroll';

export const metadata: Metadata = {
    title: {
        default: 'Indus Enclave — Housing Project Karachi',
        template: '%s - Indus Enclave',
    },
    description:
        'Indus Enclave — A premier housing project by Al-Ashraf Group of Companies on M-9 Motorway, Karachi. Offering residential plots, commercial plots, and luxury villas with transparent payment plans.',
    appleWebApp: {
        title: 'Indus Enclave',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LenisScroll />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
