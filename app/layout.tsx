import type { Metadata } from "next";
import { Geist, Geist_Mono, Oldenburg, Kapakana, Caudex } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oldenburg = Oldenburg({
  variable: "--font-oldenburg",
  subsets: ["latin"],
  weight: "400",
});

const kapakana = Kapakana({
  variable: "--font-kapakana",
  subsets: ["latin"],
  weight: "300",
});

const caudex = Caudex({
  variable: "--font-caudex",
  subsets: ["latin"],
  weight: [ "400", "700" ],
});

export const metadata: Metadata = {
  title: "Witchy doings",
  description: "A todo list for witches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oldenburg.variable} ${kapakana.variable} ${caudex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
