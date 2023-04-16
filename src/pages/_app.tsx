import LayoutFC from "@/layout";
import "@/styles/globals.css";
import type { AppPropsWithLayout } from "next/app";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <LayoutFC {...Component}>
      <Component {...pageProps} />
    </LayoutFC>
  );
};
export default App;
