import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'San Diego Roofing - Replacement & Repair Experts',
  description: 'Top-rated roofing services in San Diego for reliable roof replacement, repair, and inspection. Get a free estimate for your home or business today!',
  keywords: ["San Diego roofing, roof replacement San Diego, roof repair San Diego, roofing contractor, local roofer, residential roofing, commercial roofing, roof inspection, emergency roof repair"],
  openGraph: {
    "title": "San Diego Roofing - Replacement & Repair Experts",
    "description": "Top-rated roofing services in San Diego for reliable roof replacement, repair, and inspection. Get a free estimate for your home or business today!",
    "url": "https://www.sandroofing.com",
    "siteName": "San Diego Roofing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/low-view-man-working-roof-with-drill_23-2148748773.jpg",
        "alt": "Modern house with new roof in San Diego"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "San Diego Roofing - Replacement & Repair Experts",
    "description": "Top-rated roofing services in San Diego for reliable roof replacement, repair, and inspection. Get a free estimate for your home or business today!",
    "images": [
      "http://img.b2bpic.net/free-photo/low-view-man-working-roof-with-drill_23-2148748773.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
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
