import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Layout } from "../components/shared/layout/";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
