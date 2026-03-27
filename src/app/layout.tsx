import type { Metadata } from "next";
import "@/styles/shared/variables.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crece Con Orgullo",
  description: "Programa de Acompañamiento a la Identidad de Género",
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
