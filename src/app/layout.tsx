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
        <Navbar /> {/* ✅ Navbar stays at the top */}
          <div>{children}
            <main className="background-wrapper"></main>
          </div> {/* ✅ Sections appear inside container */}
      </body>
    </html>
  );
}
