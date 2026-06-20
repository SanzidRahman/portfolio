"use client";

const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
];

export default function Skills() {
    return (
        <>

            <section id="about" className="py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-12 text-center text-white text-4xl font-bold">
                        Skills
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="rounded-xl border border-white p-6 text-center transition hover:-translate-y-2"
                            >
                                <h3 className="text-white font-semibold">{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section></>
    );
}