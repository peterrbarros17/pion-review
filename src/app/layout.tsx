import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import BodyContainer from "@/components/AppContainer";
import HeaderApp from "@/components/AppHeader";
import FooterApp from "@/components/AppFooter";
import BlurCircle from "@/components/_ui/RedBlurOfApp";
import MainContainer from "@/components/AppContainer/MainContainer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pion Review - Acompanhe as reviews de jogos retros e atuais",
  description: "App games review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <BlurCircle />
        <HeaderApp />
        <BodyContainer>
          <MainContainer>{children}</MainContainer>
        </BodyContainer>
        <FooterApp />
      </body>
    </html>
  );
}
