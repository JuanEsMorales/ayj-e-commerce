import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import lora from "./fonts/Lora";
import { ViewTransitions } from 'next-view-transitions'
import { BackLinkProvider } from "./context/backlink";

export const metadata: Metadata = {
  title: "A&J Bisutería",
  description: "Bisutería de A&J, con un diseño moderno y una experiencia de compra agradable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BackLinkProvider>
      <ViewTransitions>
        <html lang="en">
          <body className={`${lora.className}`}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ViewTransitions>
    </BackLinkProvider>
  );
}
