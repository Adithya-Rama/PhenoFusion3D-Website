import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhenoFusion3D — Integrated 3D Hyperspectral Plant Analytics",
  description:
    "PhenoFusion3D is an integrated 3D–hyperspectral analytics tool that extracts structural and spectral traits from plant scans, developed at the ANU node of the Australian Plant Phenomics Network.",
  keywords: [
    "plant phenomics",
    "3D hyperspectral",
    "plant science",
    "APPN",
    "ANU",
    "plant breeding",
    "trait extraction",
  ],
  openGraph: {
    title: "PhenoFusion3D",
    description: "Integrated 3D–Hyperspectral Plant Analytics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050a0a] text-[#f0fdf4] antialiased`}>
        {children}
      </body>
    </html>
  );
}
