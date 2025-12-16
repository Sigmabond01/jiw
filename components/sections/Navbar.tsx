"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Mission", href: "#mission" },
        { name: "Why", href: "#why-japan" },
        { name: "Services", href: "#services" },
        { name: "Team", href: "#team" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-serif ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-widest text-primary flex items-center gap-2">
                    JOBISWELL
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-[0.15em] text-foreground/80 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/7543057561"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-md tracking-wider border border-primary"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-8 space-y-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-serif font-medium text-foreground hover:text-primary tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/7543057561"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center px-6 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
