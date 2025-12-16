"use client";

import { motion } from "motion/react";

export default function Caregiving() {
    const benefits = [
        { text: "5-year Initial Period", jp: "五年" },
        { text: "PR Pathway", jp: "永住" },
        { text: "Family Reunification", jp: "家族" },
        { text: "Equal Wages", jp: "対等" },
    ];

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <div className="mb-20">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-4">The Work</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-foreground">Caregiving Focus</h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto font-light">
                        Non-medical, humane support for daily living.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center text-left">
                    <div className="space-y-6">
                        <p className="text-lg text-foreground leading-relaxed">
                            In Japan, caregiving (Kaigo) is a respected profession focused on dignity. It differs significantly from medical nursing.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Your primary role is to assist the elderly with their daily routine—ensuring they live with comfort, safety, and joy. It is physically demanding but emotionally rewarding work.
                        </p>
                    </div>

                    <div className="bg-secondary/10 p-8 border-l-4 border-primary">
                        <h3 className="text-xl font-serif text-foreground mb-6">Daily Responsibilities</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-foreground/80">
                                <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                                <span><strong>Life Support:</strong> Bathing, dressing, and toileting assistance.</span>
                            </li>
                            <li className="flex items-center gap-4 text-foreground/80">
                                <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                                <span><strong>Social Engagement:</strong> Recreational activities and conversation.</span>
                            </li>
                            <li className="flex items-center gap-4 text-foreground/80">
                                <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                                <span><strong>Environment:</strong> Cleaning rooms and meal assistance.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
