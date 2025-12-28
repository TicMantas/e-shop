import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ReactQueryProviderClient from "./ReactQueryProviderClient";
import "./globals.css";
import Navbar from "./containers/Navbar/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { SignUpProvider } from "./context/Signup/SignUpContext";
import Footer from "./containers/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-10 md:pt-20`}
      >
        <ReactQueryProviderClient>
          <ThemeProvider>
            <SignUpProvider>
              <Navbar />
              {children}
              <Footer/>
            </SignUpProvider>
          </ThemeProvider>
        </ReactQueryProviderClient>
      </body>
    </html>
  );
}
