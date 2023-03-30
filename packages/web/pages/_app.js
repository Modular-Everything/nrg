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
      <Script id="algolia-search" strategy="lazyOnload">
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
              selected: '#ddd',
              text: 'var(--nrg-black)',
              colorSourceIcon: 'var(--nrg-dk-grey)',
            }
          });
        `}
      </Script>

      <Script id="google-analytics" strategy="lazyOnload">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-48020924-3', 'auto');
          ga('send', 'pageview');
        `}
      </Script>

      <Script id="google-tag-manager" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NB3FPC2');`}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
