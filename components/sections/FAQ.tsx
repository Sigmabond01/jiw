"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "Is Japan safe for foreign workers?",
        a: "Yes. Japan is consistently ranked among the safest countries in the world. Our support team also provides 24/7 emergency assistance to ensure your peace of mind."
    },
    {
        q: "Are there any recruitment fees?",
        a: "No. We strictly adhere to ethical recruitment standards. Candidates do not pay any recruitment fees to us. All costs are borne by the employer."
    },
    {
        q: "Do I need to speak Japanese before arriving?",
        a: "Yes. Basic proficiency (N4 level) is required for the visa. We provide comprehensive language training partnerships to help you achieve this goal."
    },
    {
        q: "Can I bring my family?",
        a: "Initially, the SSW 1 visa does not allow family accompaniment. However, upgrading to SSW 2 (after 5 years or passing exams) opens the path for family benefits."
    },
    {
        q: "What happens if I have an issue at work?",
        a: "We remain your partner even after placement. We check in regularly and act as a mediator between you and your employer to resolve any misunderstandings."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-secondary/5">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-serif font-medium text-center mb-16 text-foreground">
                    Common Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-border bg-white transition-colors hover:border-primary/30">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-hidden"
                            >
                                <span className="font-medium text-foreground pr-8">{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus className="w-4 h-4 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-4 h-4 text-muted-foreground shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/10">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
