import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const handwriting = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday Arti Singh ❤️ | From Sakshi Singh",
  description:
    "A journey from childhood village memories to forever friendship. A personal digital birthday gift for Arti Singh from Sakshi Singh.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>",
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
      className={`${sans.variable} ${serif.variable} ${handwriting.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#0b0c16] text-[#f7eee4] font-sans overflow-x-hidden selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}
