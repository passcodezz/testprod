import "../styles/globals.css";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

import Navtop from "../components/Layout/Navtop";
import Navbuttom from "../components/Layout/Navbuttom";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";
// import Translate from "../components/UI/translate";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.js");
  // }, []);
  return (
    <>
      <Head>
        <title>Phop Automation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Navtop />
      <Navbuttom /> */}
        <Component {...pageProps} />
        {/* <Translate /> */}
        {/* <Footer /> */}
      </Layout>
    </>
  );
}

export default MyApp;
