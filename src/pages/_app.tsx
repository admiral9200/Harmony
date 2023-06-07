import client from "@/apollo";
import LayoutFC from "@/layout";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppPropsWithLayout } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import { Provider } from "jotai";
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
    <Provider>
      <ApolloProvider client={client}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
        </Head>
        <ToastContainer />
        <LayoutFC {...Component}>
          <Component {...pageProps} />
        </LayoutFC>
      </ApolloProvider>
    </Provider>
  );
};
export default App;
