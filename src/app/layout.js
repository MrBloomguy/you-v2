

import "@rainbow-me/rainbowkit/styles.css";

import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import Providers from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouBuidl | by GiveStation",
  description: "YouBuidl is crowdfunding web3 tool created by GiveStation for developers, creators and teams.",
};

export default function RootLayout({ children }) {
  const [stateStep, setStateStep] = useState(0);
  return (
    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="main__Wrapper">
          <Aside />
          <main>
            <Providers>
              <Header />
              {children}
            </Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
