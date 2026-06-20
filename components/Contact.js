export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="mx-auto max-w-3xl px-4">

                <h2 className="mb-10 text-center text-4xl font-bold text-slate-100">
                    Contact Me
                </h2>

                <p className="mb-10 text-center text-slate-400">
                    Have a project in mind? Let’s build something great together.
                </p>

                <form className="space-y-6">

                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/50 p-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/50 p-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />

                    {/* Message */}
                    <textarea
                        rows={6}
                        placeholder="Your Message"
                        className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900/50 p-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-4 font-medium text-white transition hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}