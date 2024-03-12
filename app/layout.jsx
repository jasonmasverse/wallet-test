import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MasWallet",
  description: "Maschain Wallet Experience",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
         layout: {
          socialButtonsVariant: 'auto',
          logoImageUrl: "/maschain.png",
          logoPlacement: "inside",
        }
      }}
    >
      <html lang="en" className="no-scrollbar">
        <body className={`${inter.className} bg-[url('/bg.png')] bg-cover bg-no-repeat`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
