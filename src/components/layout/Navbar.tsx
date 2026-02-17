"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Platform", href: "#platform" },
    { name: "Science", href: "#science" },
    { name: "Impact", href: "#impact" },
    { name: "Company", href: "#company" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-6"
            )}
        >
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-emerald-900 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(15,175,154,0.3)] group-hover:shadow-[0_0_25px_rgba(15,175,154,0.5)] transition-shadow duration-300">
                    <span className="font-bold text-white text-lg">O</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">OXYGENIX<span className="text-primary">.AI</span></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <Link
                    href="/login"
                    className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                    Log In
                </Link>
                <Link
                    href="/demo"
                    className="group relative px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Book Demo
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                </Link>
            </div>
        </motion.nav>
    );
}
