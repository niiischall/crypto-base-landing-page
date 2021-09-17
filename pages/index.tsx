import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Heart } from "phosphor-react";

import Icon from "../public/icon-128.png";
import styles from "../styles/Home.module.css";

export const Home: NextPage = () => {
  return (
    <>
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
        <section className={styles.hero}>
          <span>&nbsp;</span>
        </section>
        <section className={styles.about}>
          <span>&nbsp;</span>
        </section>
        <section className={styles.features}>
          <span>&nbsp;</span>
        </section>
        <section className={styles.description}>
          <span>&nbsp;</span>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerHeadingContainer}>
            <Image src={Icon} alt="CryptoBase Logo" width="35" height="35" />
            <h1 className={styles.footerHeading}>CryptoBase</h1>
          </div>
          <h3 className={styles.footerSubheading}>
            Built with{" "}
            <span className={styles.footerHeart}>
              <Heart size={24} color="#ea481f" weight="fill" />
            </span>
            by{" "}
            <a className={styles.footerLink} target="_blank" href="https://github.com/nischalNikit">
              Nischal Nikit
            </a>
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Home;
