import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          CryptoBase - A chrome extension for everything related to
          cryptocurrencies.
        </title>
        <meta
          name="description"
          content="CryptoBase - A chrome extension for everything related to cryptocuurencies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>The website will be live, shortly.</h1>
      </main>
    </div>
  );
};

export default Home;
