import { getDefaultConfig, createAuthenticationAdapter, RainbowKitAuthenticationProvider, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from "wagmi";

import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";



import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouBuidl | by GiveStation",
  description: "YouBuidl is crowdfunding web3 tool created by GiveStation for developers, creators and teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="main__Wrapper">
          <Aside />
          <main>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
