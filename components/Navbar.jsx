"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mt-4 flex h-16 items-center justify-between gap-20 rounded-full border border-white/10 bg-white/80 px-10 backdrop-blur-md dark:bg-slate-900/80">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-5xl font-bold tracking-tight"
                    >
                        <span className="text-blue-600">San</span>zid
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-md font-medium text-violet-900 transition hover:text-blue-600 dark:text-slate-300"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Resume Button
                    <div className="hidden md:block">
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Resume
                        </Link>
                    </div> */}

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-2xl md:hidden"
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.2 }}
                            className="mt-3 rounded-2xl border border-white/10 bg-white p-6 shadow-lg dark:bg-slate-900 md:hidden"
                        >
                            <ul className="space-y-5">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="block text-slate-700 dark:text-slate-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}

                                {/* <li>
                                    <Link
                                        href="/resume.pdf"
                                        target="_blank"
                                        className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white"
                                    >
                                        Download Resume
                                    </Link>
                                </li> */}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}