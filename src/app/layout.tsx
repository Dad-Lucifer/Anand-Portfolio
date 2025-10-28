import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alex Chen | Creative Videographer & Editor",
  description: "Professional videographer and editor crafting cinematic visuals that tell unforgettable stories. Specializing in creative storytelling through motion.",
  keywords: ["videographer", "video editor", "cinematic", "storytelling", "filmmaker", "video production"],
  authors: [{ name: "Alex Chen" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Alex Chen | Creative Videographer & Editor",
    description: "Crafting visuals that tell unforgettable stories",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen | Creative Videographer & Editor",
    description: "Crafting visuals that tell unforgettable stories",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-outfit antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
