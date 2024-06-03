import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fluxo do Dinheiro",
  description: "Desenvolvido por Maicom Mateus Rampi",
  keywords: ["fluxo do dinheiro", "fluxo", "dinheiro", "maicom mateus rampi", "maicom", "mateus", "rampi", "Controle de Finanças Pessoais", "Controle de investimentos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} `} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
