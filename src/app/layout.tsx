import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/share/navbar/Navbar";
import Footer from "@/share/footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tallia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div>
            <div>
              <Navbar />
            </div>
            <div className=" min-h-[70vh] pt-[90px]">
              {children}
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
