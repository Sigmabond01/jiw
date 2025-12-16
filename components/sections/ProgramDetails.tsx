"use client";

import { Check, Info } from "lucide-react";

export default function ProgramDetails() {
    return (
        <section className="py-24 bg-secondary/10 border-y border-border/60">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 border border-foreground/20 text-xs font-bold uppercase tracking-widest mb-4">
                        Official Status
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                        Specified Skilled Worker (i)
                    </h2>
                    <p className="mt-4 text-muted-foreground font-light">
                        Government-Designated Residency Status
                    </p>
                </div>

                <div className="bg-white border border-border p-8 md:p-12 shadow-sm">
                    {/* Header Strip */}
                    <div className="flex border-b-2 border-primary mb-10 pb-4 justify-between items-end">
                        <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">
                            Program Specification
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground uppercase">
                            Ref: SSW-Type1
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="font-serif text-lg border-b border-border/50 pb-2 mb-6 text-primary">
                                Employee Benefits
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Same salary standards as Japanese nationals",
                                    "Full social insurance coverage",
                                    "Paid leave and overtime compensation",
                                    "5-year renewable contract term",
                                    "Pathway to permanent residency (via SSW Type 2)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-serif text-lg border-b border-border/50 pb-2 mb-6 text-primary">
                                Eligibility Requirements
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "18 years of age or older",
                                    "JLPT N4 Level or JFT-Basic A2",
                                    "Caregiving Skills Evaluation Test (Pass)",
                                    "Caregiving Japanese Language Test (Pass)",
                                    "Clean medical and background record"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                                        <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
