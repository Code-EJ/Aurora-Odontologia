import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fontes locais incluem o conjunto latino e deixam o build independente de serviços de fontes.
const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
});
const instrument = localFont({
  src: [
    { path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  adjustFontFallback: "Times New Roman",
  variable: "--font-instrument",
});

const title = "Aurora Odontologia | Um novo olhar para o seu sorriso";
const description = "Conheça a Aurora, uma clínica odontológica fictícia que reúne odontologia contemporânea e cuidado humano. Projeto demonstrativo de portfólio.";
const siteUrl = process.env.SITE_URL;

/** Metadados compartilhados pela landing page e pelas prévias sociais. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title,
  description,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "Aurora Odontologia", url: siteUrl },
  twitter: { card: "summary_large_image", title, description },
};

/** Define o idioma e disponibiliza as variáveis das fontes para toda a página. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={[inter.variable, instrument.variable].join(" ")}><body>{children}</body></html>;
}
