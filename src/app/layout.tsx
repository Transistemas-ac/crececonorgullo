import type { Metadata } from "next";
import "@/styles/shared/variables.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crece Con Orgullo",
  description: "Programa de Acompañamiento a la Identidad de Género",
  metadataBase: new URL("https://transistemas.org"),
  openGraph: {
    title: "Crece Con Orgullo",
    description: "Programa de Acompañamiento a la Identidad de Género",
    url: "https://transistemas.org",
    siteName: "Crece Con Orgullo",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Crece Con Orgullo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crece Con Orgullo",
    description: "Programa de Acompañamiento a la Identidad de Género",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '6em', width: '100%' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
