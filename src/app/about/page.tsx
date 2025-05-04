import Head from "next/head";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Mada Facility Management Ltd | London Electrical & Cooling Specialists",
  description:
    "Mada Facility Management Ltd is a leading London electrical contractor & F‑Gas certified cooling specialist. Learn about our expert team, accreditations, and commitment to sustainability.",
  keywords:
    "London electrical contractor, cooling systems specialist, F‑Gas engineer, sustainable HVAC, NAPIT electrician, facility management UK",
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.madaaircon.co.uk/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mada Facility Management Ltd",
              url: "https://www.madaaircon.co.uk",
              logo: "https://www.madaaircon.co.uk/assets/logo/logo-full.png",
              sameAs: [
                "https://www.facebook.com/madaaircon",
                "https://www.linkedin.com/company/madaaircon",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+44-20-1234-5678",
                  contactType: "customer service",
                  areaServed: "GB",
                },
              ],
            }),
          }}
        />
      </Head>
      <AboutClient />
    </>
  );
}
