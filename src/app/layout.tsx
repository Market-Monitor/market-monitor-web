import "./globals.css";

import { Sofia_Sans } from "@next/font/google";
import Header from "./Header";

const sofia_sans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sofia_sans.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
