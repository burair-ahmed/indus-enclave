import React from "react";
import { ShieldCheck, MapPin, Handshake, Landmark, Headset } from "lucide-react";

export interface WhyChooseUsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
    {
        icon: <ShieldCheck className="size-5 text-zinc-600" />,
        title: "100% Government Approved (SBCA & SDA)",
        description: "Indus Enclave is fully approved by the Sindh Building Control Authority (SBCA) and Sehwan Development Authority (SDA). Clear land titles, secure documentation, and complete legal peace of mind.",
        image: "/assets/IMG-20231027-WA0048-min.webp"
    },
    {
        icon: <MapPin className="size-5 text-zinc-600" />,
        title: "Prime M-9 Motorway Location",
        description: "Strategically located directly along the booming Karachi-Hyderabad M-9 Motorway corridor, offering seamless high-speed connectivity and excellent future capital appreciation.",
        image: "/assets/IMG-20231027-WA0048-min.webp"
    },
    {
        icon: <Landmark className="size-5 text-zinc-600" />,
        title: "Flexible 5-Year Installment Plan",
        description: "Own your residential plot with manageable monthly payments starting from just Rs. 5,000/month over a 60-month easy plan with zero hidden surcharges.",
        image: "/assets/IMG-20231027-WA0048-min.webp"
    },
    {
        icon: <Handshake className="size-5 text-zinc-600" />,
        title: "Rapid On-Ground Development",
        description: "Physical infrastructure is actively underway — featuring completed precast boundary walls, wide planned boulevards, underground utility network, and the grand Masjid Al-Jabbar.",
        image: "/assets/IMG-20231027-WA0048-min.webp"
    },
    {
        icon: <Headset className="size-5 text-zinc-600" />,
        title: "Dedicated Al-Ashraf Group Support",
        description: "Backed by the proven reputation of Al-Ashraf Group. Our on-site and customer advisory team provides transparent guidance from plot selection through possession.",
        image: "/assets/IMG-20231027-WA0048-min.webp"
    }
];

export interface TestimonialItem {
    name: string;
    location: string;
    avatar: string;
    text: string;
}

export const testimonialsCol1: TestimonialItem[] = [
    {
        name: "Ahmed Raza",
        location: "Karachi, Pakistan",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=120&h=120&q=80",
        text: "I booked my 80 sq. yards plot and the whole process was very easy. The team explained everything step by step."
    },
    {
        name: "Fatima Noor",
        location: "Hyderabad, Pakistan",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=120&h=120&q=80",
        text: "The location on the M-9 Motorway is great. Good roads, clean area, and the monthly installments are very affordable."
    },
    {
        name: "Imran Sheikh",
        location: "Dubai, UAE",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=120&h=120&q=80",
        text: "I am living abroad and booked my plot on a video call. The team was very helpful and sent me all the documents on time."
    }
];

export const testimonialsCol2: TestimonialItem[] = [
    {
        name: "Khalid Hussain",
        location: "Nooriabad, Sindh",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=120&h=120&q=80",
        text: "I work nearby in the industrial area. This project is perfect for workers who want to live close to their job without a long commute."
    },
    {
        name: "Sana Malik",
        location: "Lahore, Pakistan",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fit=crop&w=120&h=120&q=80",
        text: "The 120 sq. yards villa floor plan is very spacious. Two big bedrooms, a nice kitchen, and a proper lounge for the family."
    },
    {
        name: "Tariq Memon",
        location: "Karachi, Pakistan",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=120&h=120&q=80",
        text: "I am a first-time buyer and was very nervous. But the team was patient, kind, and answered all my questions. Very happy with my decision."
    }
];
