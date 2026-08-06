import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "ETC - Elevated Travel Corporation | Luxury Travel Agency  | etc travel bd",
  description: "Comprehensive travel solutions tailored to your every need. Expert visa processing, luxury hotels, and premium flight bookings worldwide.",
  icons: {
    icon: "/gallery/etc_main_icon.png",
    shortcut: "/gallery/etc_main_logo.png",
    apple: "/gallery/etc_main_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
