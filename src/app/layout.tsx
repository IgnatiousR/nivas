import type { Metadata } from "next";
import { DM_Sans, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { brandMeta } from "@/data/brand-content";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-clean",
});

export const metadata: Metadata = {
  title: brandMeta.title,
  description: brandMeta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth antialiased",
        dmSans.variable,
        manrope.variable,
        playfairDisplay.variable,
      )}
    >
      <body className="bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
