import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "joel kalema",
  description: "Joel kalema's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="antialiased font-clash"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
