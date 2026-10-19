import type { Metadata } from "next";
import "./globals.css";
import { site } from "../data/site";
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://titilib.vercel.app");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author }],
  creator: site.author,
  publisher: site.name,
  keywords: ["TITILIB", "Thifanny Vitória", "biblioteca digital", "livros", "literatura brasileira", "romance", "suspense psicológico"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Biblioteca digital de ${site.author}`,
    description: "Descubra histórias de Thifanny Vitória para ler online ou baixar em PDF e EPUB.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TITILIB — Biblioteca digital de Thifanny Vitória" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Biblioteca digital de ${site.author}`,
    description: "Histórias de Thifanny Vitória para ler online ou baixar.",
    images: ["/twitter-image"],
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html>; }
