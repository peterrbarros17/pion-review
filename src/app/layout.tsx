import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import BodyContainer from "@/components/BodyContainerApp";
import MainContainer from "@/components/BodyContainerApp/MainContainerApp";
import HeaderApp from "@/components/HeaderApp";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pion Review | Games",
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
        <BodyContainer>
          <MainContainer>
            <HeaderApp />
            {children}
          </MainContainer>
        </BodyContainer>
      </body>
    </html>
  );
}
