import "../styles/sanitize.css";
import "../styles/globals.css";
import "../styles/algoliasearchNetlify.css";

import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
        strategy="beforeInteractive"
      />
      <Script id="algolia-search">
        {`
          algoliasearchNetlify({
            appId: 'P87ZSQJCNB',
            apiKey: 'ee281042e56b76f587ebd3b02c53c81f',
            siteId: 'f06b5bae-3b08-4cb3-ab6c-3d2cca356d75',
            branch: 'main',
            selector: 'div#search',
            theme: {
              mark: 'var(--nrg-red)',
              background: 'var(--nrg-white)',
              selected: 'var(--nrg-lt-grey)',
              text: 'var(--nrg-black)',
              colorSourceIcon: 'var(--nrg-dk-grey)',
            }
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
