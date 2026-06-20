import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sanzid Rahman | Full Stack Developer",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-slate-950
          text-slate-100
          antialiased
        `}
      >
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900" />

          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-slate-400/20 blur-[150px]" />

          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-teal-300/20 blur-[150px]" />
        </div>

        {children}
      </body>
    </html>
  );
}