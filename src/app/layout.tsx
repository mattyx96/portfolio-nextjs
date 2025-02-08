import type {Metadata} from "next";
import "./globals.css";
import "nebula-ds-react-library/style"
import React from "react";
import {Orbitron, Roboto_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Matteo Omicini's Portfolio",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    }
};

const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})
const robotoMonoFont = Roboto_Mono({weight: ['400', '500', '600', '700'], subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${orbitronFont.className} ${robotoMonoFont.className}`} lang="en">
        <head>
            <meta name="theme-color" content="#000"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
            <title>{metadata.title?.toString()}</title>
        </head>
        <body>
        <Analytics/>
        {children}
        </body>
        </html>
    );
}
