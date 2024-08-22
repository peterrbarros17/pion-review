import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import AppContainer from "@/components/AppContainer";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import MainContainer from "@/components/AppContainer/MainContainer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pion Review - Acompanhe as reviews de jogos retros e atuais",
  description: "Site sobre reviews de jogos digitais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <AppHeader />
        <AppContainer>
          <MainContainer>{children}</MainContainer>
        </AppContainer>
        <AppFooter />
      </body>
    </html>
  );
}
