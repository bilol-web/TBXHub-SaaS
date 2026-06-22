import "../components/plasmic/tbxhub_new_landing_saas/plasmic.css"; // plasmic-import: uAEPi88t4b3bpYVaXpTdTs/projectcss
import "@/styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
export default function MyApp({ Component, pageProps }: AppProps) {
  // Note: we intentionally do NOT pass a global `Link` to PlasmicRootProvider.
  // Doing so routes every Plasmic link straight to next/link, which throws
  // "href expects a string" for the design's href-less nav links (Features,
  // Pricing, Login, etc.). Without it, Plasmic's internal link renderer uses
  // next/link only when an href exists and falls back to a plain <a> otherwise.
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
