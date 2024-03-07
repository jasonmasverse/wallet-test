import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maschain",
  description: "Maschain Wallet Experience",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#7C3AED' } }}>
      <html lang="en">
        <body className={`${inter.className} bg-custom-background`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
