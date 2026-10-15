import type { Metadata } from "next";
import "./globals.css";
import { site } from "../data/site";
export const metadata: Metadata = { title: { default: site.name, template: `%s — ${site.name}` }, description: site.description, openGraph: { type: "website", title: site.name, description: site.description }, twitter: { card: "summary_large_image" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html>; }
