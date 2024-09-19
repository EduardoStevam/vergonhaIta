import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";

const inter = Inter({
  weight: ['400', '500', '600', '700', '800', "900"],
  subsets: ['latin'],
  preload: false,
});

export const metadata: Metadata = {
  title: "Vergonha",
  description: "Vergonha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
