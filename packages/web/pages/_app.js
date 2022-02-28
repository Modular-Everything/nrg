import "../styles/sanitize.css";
import "../styles/globals.css";
import LogRocket from "logrocket";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="logrocket">{LogRocket.init("rpltij/nrg")}</Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
