import LayoutFC from "@/layout";
import "@/styles/globals.css";
import type { AppPropsWithLayout } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import { Provider } from "jotai";
import PlausibleProvider from "next-plausible";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        (event.key === "-" || event.key === "+" || event.key === "=")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <PlausibleProvider domain="harmony.whil.online">
      <Provider>
        <Head>
          <title>Harmony Web Editor Design</title>
          {/* {props.icon && (
      <link rel="icon" type="image/png" href={props.icon ?? `/favicon.png`} />
    )} */}
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="canonical" content="https://harmony.whil.online/" />
          <meta
            name="keywords"
            content={`react reactkonva next.js typescript jotai`}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Harmony offers an innovative solution for React projects that require image editing, PDF creation, and dynamic web design capabilities, similar to popular tools like Figma, Adobe XD, and Adobe Photoshop"
          />
          <meta name="title" content="Harmony Web Editor Design" />
          <meta
            name="description"
            content="Harmony offers an innovative solution for React projects that require image editing, PDF creation, and dynamic web design capabilities, similar to popular tools like Figma, Adobe XD, and Adobe Photoshop"
          />
          <meta name="googlebot" content="index,follow" />

          <meta property="og:locale" content="ES" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Harmony Web Editor Design" />
          <meta
            property="og:description"
            content="Harmony offers an innovative solution for React projects that require image editing, PDF creation, and dynamic web design capabilities, similar to popular tools like Figma, Adobe XD, and Adobe Photoshop"
          />
          <meta property="og:url" content="https://harmony.whil.online/" />
          <meta property="og:site_name" content="Harmony Web Editor Design" />
          <meta property="og:image" content="/coverd.png" />

          <meta property="og:image:secure_url" content="/coverd.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Harmony Web Editor Design" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Harmony offers an innovative solution for React projects that require image editing, PDF creation, and dynamic web design capabilities, similar to popular tools like Figma, Adobe XD, and Adobe Photoshop"
          />
          <meta name="twitter:title" content="Harmony Web Editor Design" />
          <meta name="twitter:image" content="/coverd.png" />

          <meta property="og:image" itemProp="image" content="/coverd.png" />
          <meta property="og:image:secure_url" content="/coverd.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
        </Head>
        <ToastContainer />
        <LayoutFC {...Component}>
          <Component {...pageProps} />
        </LayoutFC>
      </Provider>
    </PlausibleProvider>
  );
};
export default App;
