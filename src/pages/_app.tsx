import client from "@/apollo";
import LayoutFC from "@/layout";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppPropsWithLayout } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      <LayoutFC {...Component}>
        <Component {...pageProps} />
      </LayoutFC>
    </ApolloProvider>
  );
};
export default App;
