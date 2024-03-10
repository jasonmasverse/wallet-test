import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maschain",
  description: "Maschain Wallet Experience",
};

export default function RootLayout({ children }) {
  return (
  
      <html lang="en" className="no-scrollbar">
        <body className={`${inter.className}`}>
          {children}
        </body>
      </html>
  );
}
