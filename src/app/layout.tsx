import {
  ClerkProvider,
} from '@clerk/nextjs'
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ourFileRouter } from './api/uploadthing/core';
import { extractRouterConfig } from 'uploadthing/server';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Galvery",
  description: "Galvery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <NextSSRPlugin
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
