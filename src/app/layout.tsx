import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Crimson_Text } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const crimsonText = Crimson_Text({
  variable: "--font-serif-alt",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Sacred Heart Girls' High School",
  description: "Empowering Young Women Through 170 Years of Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${lato.variable} ${crimsonText.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 bg-sh-gold text-sh-navy">
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
