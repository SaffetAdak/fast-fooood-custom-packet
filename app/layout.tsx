import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom Packet Creator | fast fooood",
  description: "fast fooood, custom Packet Creator ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F9F5F2] text-black  font-normal relative w-full h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
