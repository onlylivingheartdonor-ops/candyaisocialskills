export const metadata = {
  title: "Candy AI Review 2026: Can an AI Improve Your Social Skills?",
  description: "30-day test using Candy AI as a conversation coach. No relationship replacement. Just real social skills practice for flirting, banter, and confidence.",
  alternates: {
    canonical: "https://candyaisocialskills.vercel.app",
  },
  openGraph: {
    title: "Candy AI Review 2026: Can an AI Improve Your Social Skills?",
    description: "30-day test using Candy AI as a conversation coach. No relationship replacement. Just real social skills practice.",
    url: "https://candyaisocialskills.vercel.app",
    siteName: "AI Social Skills Lab",
    images: [
      {
        url: "https://candyaisocialskills.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Candy AI Social Skills Review",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candy AI Review 2026: Can an AI Improve Your Social Skills?",
    description: "30-day test using Candy AI as a conversation coach.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  authors: [{ name: "David Graham" }],
  creator: "AI Social Skills Lab",
  publisher: "AI Social Skills Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-site-verification" content="googlec8aca910a6f4f023" />
  </head>
      <body>{children}</body>
    </html>
  );
}