import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import Footer from "@/components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Seatsnaps",
  description: "Seatsnaps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <AntdRegistry>{children}</AntdRegistry>
        <Footer />
      </body>
    </html>
  );
}
