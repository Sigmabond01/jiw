"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Founder() {
    return (
        <section className="py-32 bg-background text-background relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-12 opacity-" />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="space-y-8 text-xl md:text-2xl font-serif font-light leading-relaxed text-foreground"
                >
                    <p>
                        In 2023, I spent nearly a year interning at an NGO in Bihar, India. There, I heard the same thing over and over again:
                    </p>
                    <p className="text-primary italic font-medium">
                        “I wish I could work in Japan—there are no jobs here.”
                    </p>
                    <p>
                        It struck me deeply. That’s why I decided to start my own company. My goal was simple: to help foreign nationals secure steady jobs in Japan and uplift their own communities.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col items-center"
                >
                    <div className="w-24 h-24 bg-white/10 rounded-full mb-6 overflow-hidden border border-white/20">
                        {/* Photo Placeholder */}
                        <img src="/founder.png" className=" bg-white/5 flex items-center justify-center text-xs text-white/30" />
                    </div>
                    <h3 className="text-xl text-foreground font-medium tracking-widest uppercase">Eisuke Shigetoku</h3>
                    <p className="text-primary text-sm mt-2 tracking-wider">Founder & CEO</p>
                </motion.div>
            </div>
        </section>
    );
}
