import "@src/styles.css";

import React, { FC, useEffect } from "react";

import { AppProps } from "next/app";
import Head from "next/head";

import { setUpAnalytics } from "@src/utils/firebase";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    setUpAnalytics();
  }, []);

  return (
    <>
      <Head>
        <title>Worldschool</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
