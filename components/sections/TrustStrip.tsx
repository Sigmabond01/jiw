"use client";

import { Building2, HeartHandshake, MapPin, ShieldCheck } from "lucide-react";

const trustItems = [
    {
        icon: MapPin,
        text: "Tokyo-Based HQ",
    },
    {
        icon: ShieldCheck,
        text: "Ethical Recruitment",
    },
    {
        icon: HeartHandshake,
        text: "Post-Arrival Support",
    },
    {
        icon: Building2,
        text: "Trusted Facilities",
    },
];

export default function TrustStrip() {
    return (
        <section className="border-y border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-6 md:py-8">
                <div className="flex flex-wrap justify-between items-center gap-6 md:gap-8">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors duration-300"
                        >
                            <item.icon className="w-5 h-5 md:w-4 md:h-4 stroke-[1.5]" />
                            <span className="text-sm md:text-sm font-medium tracking-wider uppercase">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
