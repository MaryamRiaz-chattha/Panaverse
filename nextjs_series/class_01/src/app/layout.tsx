import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <nav className="bg-red-950  text-white text-center space-x-2  p-5 gap-3">
            <Link href="/home" className="gap-5 justify-between">
              HOME
            </Link>
            <Link href="/News" className="gap-5 justify-between">
              NEWS
            </Link>
            <Link href="/Aboutus" className="gap-5 justify-between">
              ABOUT US
            </Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
