"use client";

import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";

export default function WhyJapan() {
    return (
        <section id="why-japan" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>
            <div className="container mx-auto px-6 max-w-6xl text-center">
                <div className="mb-20">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                        Current Landscape
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-8">
                        Why Japan?
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Japan is facing a huge population crisis, creating unprecedented opportunities for foreign talent.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Higher Income", icon: TrendingUp, desc: "Average monthly salary of 180k-250k JPY enables significant remittances.", highlight: "High Savings" },
                        { title: "Safety & Equality", icon: ShieldCheck, desc: "One of the world’s safest countries. Same wages and rights as Japanese nationals.", highlight: "Peace of Mind" },
                        { title: "Cultural Harmony", icon: HeartHandshake, desc: "High interest among Indian youth in Japanese culture creates a strong foundation.", highlight: "Mutual Respect" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-background p-10 shadow-sm border-t-4 border-primary/50 hover:border-primary transition-colors duration-300"
                        >
                            <div className="w-16 h-16 mx-auto bg-secondary/30 rounded-full flex items-center justify-center mb-8 text-primary">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-medium mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                {item.desc}
                            </p>
                            <span className="text-primary text-xs font-bold tracking-widest uppercase py-1 border-b border-primary/20">
                                {item.highlight}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
