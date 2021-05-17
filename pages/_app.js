import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Layout } from "../components/layout/";

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
