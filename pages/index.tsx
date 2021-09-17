import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Heart } from "phosphor-react";

import Icon from "../public/icon-128.png";
import ScreenshotAlert from "../public/screenshot-alert.png";
import styles from "../styles/Home.module.css";

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CryptoBase | Explore, Follow And Set Alerts for cryptos</title>
        <meta
          name="description"
          content="CryptoBase - Explore, Follow And Set Alerts for cryptos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroLogo}>
            <Image src={Icon} alt="CryptoBase Logo" width="60" height="60" />
          </div>
          <div className={styles.heroContainer}>
            <div className={styles.heroBoxOne}>
              <h1>
                Never miss that crypto <br /> opportunity again.
              </h1>
              <h3>
                A chrome extension that's built to keep you <br /> ahead in the
                crypto market. Always.
              </h3>
            </div>
            <div className={styles.heroBoxTwo}>&nbsp;</div>
          </div>
        </section>
        <section className={styles.about}>
          <span>&nbsp;</span>
        </section>
        <section className={styles.features}>
          <span>&nbsp;</span>
        </section>
        <section className={styles.description}>
          <h1>Stay on top of the market</h1>
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionBoxOne}>
              <Image src={ScreenshotAlert} alt="Screenshot Alert" />
            </div>
            <div className={styles.descriptionBoxTwo}>
              <h1>Leave it on us for regular updates.</h1>
              <h3>Get notifications instantly via browser, every minute.</h3>
            </div>
          </div>
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
            <a
              className={styles.footerLink}
              target="_blank"
              href="https://github.com/nischalNikit"
            >
              Nischal Nikit
            </a>
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Home;
