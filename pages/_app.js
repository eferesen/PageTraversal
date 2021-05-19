import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Layout } from "../components/shared/layout/";
import { useEffect, useReducer } from "react";

import Context from "../context/Context";

const appReducer = (state, action) => {
  switch (action.type) {
    case "setState": {
      return { ...state, ...action.payload };
    }
    case "getState": {
      return state;
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

function MyApp({ Component, pageProps, router }) {
  const [state, dispatch] = useReducer(appReducer, {});

  useEffect(() => {
    // Add any initial setup values here
    const start =  () => {
      dispatch({ type: "setState", payload: { direction: 1 } });
    };
    start();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Context.Provider value={{ state, dispatch }}>
          <Component {...pageProps} key={router.route} />
        </Context.Provider>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
