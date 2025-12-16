"use client";

import { motion } from "motion/react";
import { Briefcase, BookOpen, GraduationCap, Plane } from "lucide-react";

export default function Services() {
    const services = [
        { title: "Recruitment Support", icon: Briefcase, desc: "Connecting talent with opportunity." },
        { title: "Training & Curriculum", icon: GraduationCap, desc: "Language & manner curriculum." },
        { title: "Cultural Integration", icon: BookOpen, desc: "Comprehensive cultural workshops." },
        { title: "Post-Arrival Support", icon: Plane, desc: "Continued guidance in Japan." }
    ];

    return (
        <section id="services" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>
            <div className="container mx-auto px-6 max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-20 text-foreground">Our Services</h2>

                <div className="grid md:grid-cols-4 gap-px bg-border/30 border border-border/30 overflow-hidden shadow-sm">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ backgroundColor: "var(--color-background)" }}
                            className="bg-white p-12 hover:z-10 transition-colors duration-300 flex flex-col items-center"
                        >
                            <service.icon className="w-10 h-10 text-primary mb-6 stroke-1" />
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">{service.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
