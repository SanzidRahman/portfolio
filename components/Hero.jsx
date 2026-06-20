"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import image from "@/public/IMG_20251115_092039.jpg";

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Subtitle with Typewriter */}
                        <span className="mb-4 font-semibold text-blue-400">
                            <Typewriter
                                words={[
                                    "Full Stack Developer",
                                    "React Enthusiast",
                                    "Next.js Specialist",
                                    "MongoDB Explorer",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>

                        {/* Heading with Typewriter */}
                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl text-slate-100">
                            <Typewriter
                                words={[
                                    "Hi, I'm Sanzid Rahman",

                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={60}
                                delaySpeed={2000}
                            />
                        </h1>

                        {/* Paragraph with Typewriter */}
                        <p className="mt-6 max-w-xl text-lg text-slate-400">
                            <Typewriter
                                words={[
                                    "I build modern, scalable, and high-performance web applications.",
                                    "Specialized in Next.js, React, Node.js, Express.js, and MongoDB.",
                                    "Passionate about clean code and great UI/UX.",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={40}
                                delaySpeed={2500}
                            />
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                            >
                                View Projects
                            </Link>

                            <Link
                                href="#contact"
                                className="rounded-lg border border-slate-700 px-6 py-3 text-slate-200 transition hover:bg-slate-800"
                            >
                                Hire Me
                            </Link>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Next.js", "React", "Node.js", "Express", "MongoDB"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center justify-center"
                    >
                        {/* Outer glow / gradient card */}
                        <div className="relative aspect-square w-80 sm:w-96">

                            {/* Soft background gradient blob */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 blur-2xl opacity-40" />

                            {/* Main image container */}
                            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-700/40 bg-slate-900 shadow-2xl">

                                <Image
                                    src={image}
                                    alt="Portrait of Sanzid Rahman"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 80vw, 400px"
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
