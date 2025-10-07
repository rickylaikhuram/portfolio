import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ricky Laikhuram | Software Engineer & Developer Portfolio",
  description:
    "Portfolio of Ricky Laikhuram, showcasing software engineering projects, web development skills, and contact info for collaborations.",
  keywords: [
    "Ricky Laikhuram",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Full Stack Developer",
    "Web Development",
    "Projects",
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
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="uEC90Pwrv5dfsZQqYPLEgKIXxVpVkm_mvzZXwAkU5Sw"
        />
      </head>
      <body className="antialiased font-sans scroll-smooth bg-background text-foreground transition-colors duration-300">
        {/* Error reporting */}
        <ErrorReporter />

        {/* JSON-LD structured data for SEO */}
        <Script
          id="jsonld-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ricky Laikhuram",
            url: "https://rickylaikhuram.pages.dev",
            sameAs: [
              "https://www.linkedin.com/in/rickylaikhuram",
              "https://github.com/rickylaikhuram",
              "https://twitter.com/ricky_laikhuram",
            ],
            jobTitle: "Software Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Self-Employed / Freelance",
            },
          })}
        </Script>

        {/* Main content */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
