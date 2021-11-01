import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
