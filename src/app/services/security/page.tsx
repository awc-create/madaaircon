import Head from "next/head";
import SecurityClient from "./SecurityClient";

export const metadata = {
  title: "Security System Installations London | CCTV, Alarms, Intercoms | MadaAirCon",
  description:
    "Install smart security systems for homes and businesses across London. CCTV, intercoms, motion detectors, fire alarms & more by F‑Gas certified MadaAirCon.",
  keywords:
    "CCTV installation London, intercom systems, smart locks, motion detectors, fire alarms, security systems UK",
};

export default function SecurityPage() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.madaaircon.co.uk/services/security"
        />
      </Head>
      <SecurityClient />
    </>
  );
}
