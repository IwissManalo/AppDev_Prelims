import type { Metadata } from "next";
import { El_Messiri, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thick Thread PH",
  description: "Where Creativity Meets Thread",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${elMessiri.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/TTLogo.png" type="image/png" />
      </head>
      <body className="font-el-messiri">
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}