import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export const Privacy: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy - CryptoBase</title>
        <meta name="description" content="CryptoBase - Privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>The page will be live, shortly.</h1>
      </main>
    </div>
  );
};

export default Privacy;
