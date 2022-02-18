import Head from "next/head";
import PropTypes from "prop-types";

import { Footer } from "../Footer";
import { Header } from "../Header";

export function Page({ data }) {
  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>{data?.title}</h1>
        Loaded in <pre style={{ display: "inline" }}>Page.js</pre>
      </main>

      <Footer />
    </>
  );
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
};
