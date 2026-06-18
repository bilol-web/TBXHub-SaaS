import "../components/plasmic/tbxhub_new_landing_saas/plasmic.css"; // plasmic-import: uAEPi88t4b3bpYVaXpTdTs/projectcss
import "@/styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head} Link={Link}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
