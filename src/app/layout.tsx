import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://pion-review.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pion Review — reviews de jogos, diretas",
    template: "%s · Pion Review",
  },
  description:
    "Reviews de jogos atuais e retrô, escritas a partir de gameplay real. Notas, capas e verdades sem marketing.",
  keywords: [
    "review de jogos",
    "soulslike",
    "análise de games",
    "Pion Review",
    "gameplay",
  ],
  authors: [{ name: "Pion Review" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Pion Review",
    title: "Pion Review — reviews de jogos, diretas",
    description:
      "Reviews de jogos atuais e retrô, escritas a partir de gameplay real.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pion Review",
    description: "Reviews de jogos escritas a partir de gameplay real.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pion Review",
  url: siteUrl,
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/results?title={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--brand)] focus:px-3 focus:py-2 focus:text-black"
        >
          Pular para o conteúdo
        </a>
        <AppHeader />
        <main id="conteudo" className="mx-auto w-full max-w-6xl px-4 py-8 md:py-10">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
