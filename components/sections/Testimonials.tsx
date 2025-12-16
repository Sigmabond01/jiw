"use client";

import { motion } from "motion/react";

const testimonials = [
    {
        quote: "The support was genuine. They didn't just find me a job; they taught me how to live in Tokyo.",
        author: "Ravi K.",
        role: "Caregiver, Saitama",
        type: "Candidate"
    },
    {
        quote: "We were worried about language barriers, but the staff provided by JobIsWell are exceptionally well-trained.",
        author: "T. Tanaka",
        role: "Facility Director, Yokohama",
        type: "Employer"
    },
    {
        quote: "Honest about the challenges, but always there to help us overcome them. A trustworthy partner.",
        author: "Priya S.",
        role: "Caregiver, Chiba",
        type: "Candidate"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Traditional Pattern Overlay (Subtle) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/seigaiha.png')]"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <h2 className="text-3xl font-serif font-medium text-center mb-20 text-foreground">
                    Voices from the Field
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-10 border-l-2 border-primary/20 hover:border-primary transition-colors shadow-sm"
                        >
                            <div className="text-primary/20 text-4xl font-serif font-bold mb-4">“</div>
                            <p className="text-muted-foreground leading-relaxed mb-8 italic font-light">
                                {t.quote}
                            </p>
                            <div>
                                <div className="font-bold text-foreground text-sm uppercase tracking-wider">{t.author}</div>
                                <div className="text-xs text-primary mt-1">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
