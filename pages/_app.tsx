/*
 * @Author: hidari123
 * @Date: 2024-01-19 15:46:39
 * @LastEditors: hidari123
 * @LastEditTime: 2024-01-19 15:51:04
 * Copyright (c) 2024 by hidari, All Rights Reserved.
 */
import "@/app/globals.css";
import Layout from "@/components/layout";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
