import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-2xl font-bold">
                            Sanzid Rahman
                        </h3>

                        <p className="mt-3 text-white text-sm  dark:text-slate-400">
                            Full Stack Developer specializing in
                            Next.js, Node.js, Express.js, and MongoDB.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">
                            Quick Links
                        </h4>

                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#about"
                                    className="text-white hover:text-blue-600 dark:text-slate-400"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#skills"
                                    className="text-white hover:text-blue-600 dark:text-slate-400"
                                >
                                    Skills
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#projects"
                                    className="text-white hover:text-blue-600 dark:text-slate-400"
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#contact"
                                    className="text-white hover:text-blue-600 dark:text-slate-400"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">
                            Connect With Me
                        </h4>

                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/yourusername"
                                target="_blank"
                                className="rounded-lg border p-3 transition hover:-translate-y-1 hover:text-blue-600"
                            >
                                <FaGithub size={20} />
                            </Link>

                            <Link
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                className="rounded-lg border p-3 transition hover:-translate-y-1 hover:text-blue-600"
                            >
                                <FaLinkedin size={20} />
                            </Link>

                            <Link
                                href="https://facebook.com/yourusername"
                                target="_blank"
                                className="rounded-lg border p-3 transition hover:-translate-y-1 hover:text-blue-600"
                            >
                                <FaFacebook size={20} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t pt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    © {new Date().getFullYear()} Sanzid Rahman. All rights reserved.
                </div>
            </div>
        </footer>
    );
}