import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/Global.css";

export const metadata: Metadata = {
  title: "Madaaircon Website",
  description: "Website Showcasing Electrical and Cooling Systems Contracting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="background-wrapper"></div>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}