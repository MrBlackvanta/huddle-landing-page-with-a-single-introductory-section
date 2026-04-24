import BgDesktopIcon from "@/components/icons/BgDesktopIcon";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huddle Landing Page with a Single Introductory Section",
  description:
    "Frontend Mentor Huddle Landing Page with a Single Introductory Section challenge built with Next.js and TypeScript.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="bg-violet grid min-h-dvh w-full place-content-center">
        <BgDesktopIcon className="fixed -top-10 hidden sm:block" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
