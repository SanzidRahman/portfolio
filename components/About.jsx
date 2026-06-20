"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <>

            <section id="about" className="py-16">
                <div className="mx-auto max-w-7xl px-4 flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-slate-100 text-center mb-6 text-4xl font-bold">
                            About Me
                        </h2>

                        <p className=" max-w-3xl text-lg text-slate-200 dark:text-gray-300">
                            I'm a Full Stack Developer specializing in modern web
                            applications with Next.js, Node.js, Express.js and MongoDB.
                            I love building scalable products and solving real-world
                            problems through software.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>

    );
}