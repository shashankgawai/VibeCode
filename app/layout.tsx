import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Advik Embroidery Studio | Luxury Handcrafted Aari Embroidery",
  description: "Exquisite handcrafted Aari embroidery for luxury bridal couture and festive wear. Custom embroidery services that bring your vision to life with intricate craftsmanship.",
  keywords: "Aari embroidery, luxury embroidery, bridal embroidery, custom couture, handcrafted embroidery, festive wear",
  openGraph: {
    title: "Advik Embroidery Studio | Luxury Handcrafted Aari Embroidery",
    description: "Exquisite handcrafted Aari embroidery for luxury bridal couture and festive wear.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
