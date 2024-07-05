import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "nebula-ds-react-library/style"
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Matteo Omicini's Portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
            rel="stylesheet"/>
      <meta name="theme-color" content="#000"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/favicons/site.webmanifest"/>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
