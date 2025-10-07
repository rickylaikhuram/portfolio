import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Ricky Laikhuram | Software Engineer & Developer Portfolio",
  description:
    "Portfolio of Ricky Laikhuram, showcasing software engineering projects, web development skills, and contact info for collaborations.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [
    { name: "Ricky Laikhuram", url: "https://rickylaikhuram.pages.dev" },
  ],
  openGraph: {
    title: "Ricky Laikhuram | Software Engineer & Developer Portfolio",
    description:
      "Portfolio of Ricky Laikhuram, showcasing software engineering projects, web development skills, and contact info for collaborations.",
    url: "https://rickylaikhuram.pages.dev",
    siteName: "Ricky Laikhuram Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ricky Laikhuram Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricky Laikhuram | Software Engineer & Developer Portfolio",
    description:
      "Portfolio of Ricky Laikhuram, showcasing software engineering projects, web development skills, and contact info for collaborations.",
    images: ["/og-image.png"], 
    site: "@ricky_laikhuram",
    creator: "@ricky_laikhuram",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased font-sans scroll-smooth bg-background text-foreground transition-colors duration-300">
        <ErrorReporter />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
