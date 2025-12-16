"use client";

import { motion } from "motion/react";

export default function About() {
    const values = [
        {
            title: "Speed",
            jp: "速度",
            desc: "We act fast and adapt faster to deliver results without delay."
        },
        {
            title: "Accountability",
            jp: "責任",
            desc: "We take ownership of every outcome and stand by our commitments."
        },
        {
            title: "Transparency",
            jp: "透明性",
            desc: "We keep every process clear and honest, with no hidden surprises."
        }
    ];

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>

            <div className="container mx-auto px-6 max-w-5xl text-center">

                {/* Intro */}
                <div className="mb-24">
                    <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-xs">About Us</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-foreground leading-tight">Building Lives Together</h3>
                    <div className="w-12 h-0.5 bg-primary/40 mx-auto mb-10"></div>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                        We are a recruitment startup based in Tokyo, Japan, dedicated to supporting workers in the caregiving care sector. We exist to bridge the gap between talent and opportunity with integrity.
                    </p>
                </div>

                {/* Our Approach (Three Pillars) */}
                <div className="mb-32">
                    <h4 className="text-2xl font-serif mb-12 italic text-foreground/80">Our Approach</h4>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Local Partnerships", desc: "Collaborating with trusted educational institutions in India to ensure quality training." },
                            { title: "Cultural Support", desc: "Comprehensive language and cultural training to ensure smooth integration in Japan." },
                            { title: "Ethical Pathways", desc: "Zero-fee recruitment for candidates, ensuring a sustainable and dignified migration." }
                        ].map((pillar, i) => (
                            <div key={i} className="p-8 border-t border-primary/20 hover:border-primary/60 transition-colors text-left group">
                                <span className="text-4xl text-primary/10 font-serif font-black absolute -mt-4 group-hover:text-primary/20 transition-colors">0{i + 1}</span>
                                <h5 className="text-lg font-bold mb-4 mt-8">{pillar.title}</h5>
                                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision - Centered Stack */}
                <div className="grid md:grid-cols-2 gap-16 mb-32 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 bg-white border border-border shadow-sm relative group hover:border-primary/30 transition-colors text-left"
                    >
                        <div className="absolute top-4 right-4 text-6xl text-border/20 font-serif font-bold group-hover:text-primary/10 transition-colors opacity-50">志</div>
                        <h3 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-xs">Mission</h3>
                        <h4 className="text-2xl font-serif mb-6 text-foreground">Walking Side-by-Side</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            From education in their home countries, to support in Japan, and continued guidance after settlement or return — we support every step of the journey.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-12 bg-white border border-border shadow-sm relative group hover:border-primary/30 transition-colors text-left"
                    >
                        <div className="absolute top-4 right-4 text-6xl text-border/20 font-serif font-bold group-hover:text-primary/10 transition-colors opacity-50">夢</div>
                        <h3 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-xs">Vision</h3>
                        <h4 className="text-2xl font-serif mb-6 text-foreground">Mutual Contribution</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            To achieve their respective goals, individuals and companies join hands across borders, solve each other’s challenges, and build a society where all can prosper together.
                        </p>
                    </motion.div>
                </div>

                {/* Values */}
                <div>
                    <div className="text-center mb-16 px-4">
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-3">Core Philosophy</span>
                        <h3 className="text-3xl font-serif font-medium">Our Values</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 mx-auto border border-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-500 bg-white">
                                    <span className="text-2xl font-serif group-hover:text-white transition-colors duration-500 text-foreground">{value.jp}</span>
                                </div>
                                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">{value.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
