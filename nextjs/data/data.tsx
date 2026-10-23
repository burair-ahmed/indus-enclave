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
        title: "All Properties are Government Approved",
        description: "Every plot and villa at Indus Enclave is fully approved by SBCA & SDA. You get proper paperwork, so your money is safe.",
        image: "/assets/house.png"
    },
    {
        icon: <MapPin className="size-5 text-zinc-600" />,
        title: "We Know This Area Very Well",
        description: "Our team lives and works near the M-9 Motorway. We can tell you everything about the location, roads, schools, and nearby facilities.",
        image: "/assets/galleryImage1.png"
    },
    {
        icon: <Handshake className="size-5 text-zinc-600" />,
        title: "We Help You from Start to Finish",
        description: "From your first question to the day you get your keys — we are with you every step of the way. No hidden steps, no confusion.",
        image: "/assets/galleryImage2.png"
    },
    {
        icon: <Landmark className="size-5 text-zinc-600" />,
        title: "Easy 3-Year Installment Plan",
        description: "You can pay in small monthly installments over 3 years. No need to pay everything at once — we make it simple and manageable.",
        image: "/assets/galleryImage3.png"
    },
    {
        icon: <Headset className="size-5 text-zinc-600" />,
        title: "Our Team is Always Available",
        description: "Call, WhatsApp, or visit us anytime. We are always ready to answer your questions and help you book your plot.",
        image: "/assets/galleryImage4.png"
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
