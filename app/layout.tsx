import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const clashDisplay = localFont({
  src: [
    {path: "./fonts/ClashDisplay-Extralight.otf", weight: "200", style:"normal"},
    {path: "./fonts/ClashDisplay-Light.otf", weight: "300", style:"normal"},
    {path: "./fonts/ClashDisplay-Regular.otf", weight: "400", style: "normal"},
    {path: "./fonts/ClashDisplay-Medium.otf", weight: "500", style: "normal"},
    {path: "./fonts/ClashDisplay-SemiBold.otf", weight: "600", style: "normal"},
    {path: "./fonts/ClashDisplay-Bold.otf", weight: "700", style:"normal"},
  ],
  variable: "--font-clash",
});

const Satoshi = localFont ({
  src: [
    {path: "./fonts//OTF/Satoshi-Light.otf", weight: "300", style: "normal"},
    {path: "./fonts/OTF/Satoshi-Regular.otf", weight: "400", style: "normal"},
    {path: "./fonts/OTF/Satoshi-Medium.otf", weight: "500", style: "normal"},
    {path: "./fonts/OTF/Satoshi-Bold.otf", weight: "700", style: "normal"},
    {path: "./fonts/OTF/Satoshi-Black.otf", weight: "900", style: "normal"},
  ],
  variable: "--font-satoshi"
});


export const metadata: Metadata = {
  title: "Fair Cars Stuttgart | Fahrzeug An - und Verkauf",
  description: "Fair Cars Stuttgart – Ihr zuverlässiger Partner für den An- und Verkauf von Fahrzeugen in Stuttgart. Faire Preise, persönliche Beratung, schnelle Abwicklung.",

   icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${Satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
