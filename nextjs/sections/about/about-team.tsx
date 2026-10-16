"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
    {
        name: "Arjun Mehta",
        role: "Founder & Managing Director",
        image: "/assets/galleryImage1.png",
    },
    {
        name: "Sana Raza",
        role: "Head of Sales",
        image: "/assets/galleryImage2.png",
    },
    {
        name: "Ravi Sharma",
        role: "Senior Property Advisor",
        image: "/assets/galleryImage3.png",
    },
    {
        name: "Priya Nair",
        role: "Client Relations Manager",
        image: "/assets/galleryImage4.png",
    },
];

export function AboutTeam() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-14">
                    <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-zinc-900 inline-block" />
                        <span className="text-sm text-zinc-900 tracking-wide">THE TEAM</span>
                    </motion.div>
                    <div className="w-36 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent mt-3.5" />
                    <motion.h2
                        className="text-3xl md:text-[40px]/12 text-zinc-900 mt-5 font-medium leading-tight max-w-lg"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Meet the People Behind Your Dream Home
                    </motion.h2>
                    <motion.p
                        className="text-zinc-500 text-sm md:text-base mt-3 max-w-md"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Our team of dedicated advisors brings together decades of local market knowledge and an unwavering commitment to your satisfaction.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            className="group flex flex-col overflow-hidden rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, type: "spring", stiffness: 280, damping: 60, mass: 1 }}
                        >
                            <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 flex flex-col gap-1">
                                <h3 className="text-zinc-900 font-medium text-base">{member.name}</h3>
                                <p className="text-zinc-500 text-sm">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
