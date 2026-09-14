import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import { SITE_URL } from "@/app/site";
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
  metadataBase: new URL(SITE_URL),
  title: "Huddle — build the community your fans will love",
  description:
    "Huddle re-imagines the way we build communities. Create connections with your users as you engage in genuine discussion.",
  alternates: { canonical: "/" },
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
      className={`${poppins.variable} ${openSans.variable} antialiased`}
    >
      <body className="bg-violet relative flex min-h-dvh w-full flex-col lg:bg-[url('/bg-desktop.svg')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
        {children}
        <Footer />
      </body>
    </html>
  );
}
