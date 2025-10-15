import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ScrollRevealObserver } from "@/components/animations";

export const metadata: Metadata = {
  title: "OCRM - Gestão Inteligente de Relacionamento",
  description:
    "Transforme dados em decisões estratégicas com o OCRM. Unificação, automação e insights em tempo real para sua empresa.",
  generator: "OCRM",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#FFEA00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#FFEA00" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} dark text-white overflow-x-hidden`}
        style={{ backgroundColor: "#000000" }}
      >
        <ScrollRevealObserver />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
