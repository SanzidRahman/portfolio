"use client";

import Link from "next/link";
import library from '@/public/library.png'
import ecommerce from '@/public/ecommerce.png'
import Image from "next/image";

const projects = [
    {
        title: "Library Management System",
        desc: "Complete library management solution.",
        href: 'https://library-application-frontend.vercel.app',
        image: library
    },
    {
        title: "E-Commerce Platform",
        desc: "Modern shopping application.",
        href: 'https://kidolux.vercel.app',
        image: ecommerce


    },
    {
        title: "SaaS Dashboard",
        desc: "Analytics and business dashboard.",
        href: 'https://library-application-frontend.vercel.app',
        image: library

    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className=" text-white mb-12 text-center text-4xl font-bold">
                    Featured Projects
                </h2>

                <div className=" text-white grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="overflow-hidden rounded-xl border"
                        >
                            <div className="h-56 bg-gray-200" >
                                <Image
                                    src={project.image}
                                    alt="library"
                                    height={300}
                                    width={300}
                                    className="object-cover h-full w-full"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {project.desc}
                                </p>

                                <div className="mt-6 flex gap-4">

                                    <Link className="rounded bg-blue-600 px-4 py-2 text-white" href={project.href}>Live</Link>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}