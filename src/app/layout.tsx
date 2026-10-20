import type { Metadata } from "next";
import { Goldman, Open_Sans, Hubot_Sans } from "next/font/google";
import "./globals.css";
import FloatingButton from "@/components/FloatingButton";

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const sans = Hubot_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bariki Tech",
  description: "Bariki Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9WJ39W1W0K"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9WJ39W1W0K');
            `,
          }}
        />
      </head>
      <body
        className={`${sans.variable} ${goldman.variable} antialiased`}
      >
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
