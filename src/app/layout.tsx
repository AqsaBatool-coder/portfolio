import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import ScrollProgress from "@/components/ui/scroll-progress/page";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aqsa Batool — Full Stack Developer",
  description:
    "Portfolio of Aqsa Batool — Full Stack Developer building fast, accessible, secure web products with Next.js, Node.js and PostgreSQL.",
  keywords: [
    "Aqsa Batool",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Aqsa Batool" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-text antialiased">
        <ScrollProgress />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
