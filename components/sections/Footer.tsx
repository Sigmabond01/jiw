"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-24 text-center border-t border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>
            <div className="relative z-10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-[0.2em] text-primary mb-6">JOB IS WELL</h2>
                        <div className="w-16 h-px bg-primary/30 mx-auto my-8"></div>
                        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto font-light">
                            Building global careers with empathy and rigor.
                        </p>
                    </div>

                    <div className="flex justify-center gap-12 text-sm uppercase tracking-widest text-muted-foreground mb-16">
                        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>

                    <div className="text-xs text-muted-foreground/50 tracking-widest">
                        &copy; 2025 JOB IS WELL CO., LTD. TOKYO.
                    </div>
                </div>
            </div>
        </footer>
    );
}