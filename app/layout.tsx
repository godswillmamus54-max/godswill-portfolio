import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://godswillai.dev"),

  title: {
    default:
      "Ogheneochuko Godswill | AI Automation Engineer & DevOps Engineer",
    template: "%s | Ogheneochuko Godswill",
  },

  description:
    "Professional portfolio of Ogheneochuko Godswill, an AI Automation Engineer and DevOps & Cloud Engineer building production-ready AI systems, workflow automation, cloud infrastructure, and intelligent business solutions.",

  keywords: [
    "Ogheneochuko Godswill",
    "AI Automation Engineer",
    "AI Automation",
    "Workflow Automation Engineer",
    "n8n Automation",
    "n8n Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Docker",
    "AI Agents",
    "OpenAI",
    "Cloud Automation",
    "Workflow Automation",
    "Nigeria",
    "Abuja",
  ],

  authors: [
    {
      name: "Ogheneochuko Godswill",
      url: "https://godswillai.dev",
    },
  ],

  creator: "Ogheneochuko Godswill",

  alternates: {
    canonical: "https://godswillai.dev",
  },

  openGraph: {
    type: "website",
    url: "https://godswillai.dev",
    title:
      "Ogheneochuko Godswill | AI Automation Engineer & DevOps Engineer",
    description:
      "AI Automation, DevOps and Cloud Engineering portfolio featuring production automation systems, AI workflows, cloud infrastructure and software projects.",
    siteName: "Ogheneochuko Godswill Portfolio",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ogheneochuko Godswill | AI Automation Engineer & DevOps Engineer",
    description:
      "AI Automation, DevOps and Cloud Engineering portfolio featuring production-ready automation systems and cloud projects.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}