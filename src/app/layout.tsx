import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/Global.css";

export const metadata: Metadata = {
  title: "Madaaircon Website",
  description: "Website Showcasing Electrical and Cooling Systems Contracting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Background Wrapper for the Logo (Stays Behind) */}
        <div className="background-wrapper"></div>

        {/* ✅ Navbar stays on top */}
        <Navbar />

        {/* ✅ Content wrapper ensures content is above background */}
        <main className="container">{children}</main>
      </body>
    </html>
  );
}