import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Elegantia Romana | Sartoria Artigianale di Lusso a Roma',
  description: 'Elegantia Romana è la sartoria di lusso nel cuore di Roma. Abiti su misura, camicie artigianali e consulenza premium per uomini e donne. Eccellenza italiana.',
  openGraph: {
    "title": "Elegantia Romana | L'Arte Sartoriale",
    "description": "Scopri l'esclusività dell'artigianalità sartoriale romana.",
    "siteName": "Elegantia Romana",
    "type": "website"
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
