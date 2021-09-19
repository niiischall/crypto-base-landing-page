import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Heart, BellRinging, NotePencil, Fire, Browsers } from "phosphor-react";

import Icon from "../public/icon-128.png";
import ScreenshotAlert from "../public/screenshot-alert.png";
import ScreenGif from "../public/screen-video.gif";
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
              <h1>CryptoBase.</h1>
              <h2>Personalize Your Crypto Experience.</h2>
              <h3>
                A chrome extension that's built to keep you <br /> ahead in the
                crypto market. Always.
              </h3>
              <Link href="https://chrome.google.com/webstore/detail/cryptobase/ikfflekndepjnkfemndojilpkipdonfi">
                <a target="_blank">
                  <button className={styles.link}>
                    <Browsers size={22} weight="fill" color="#669900" /> add to
                    chrome
                  </button>
                </a>
              </Link>
            </div>
            <div className={styles.heroBoxTwo}>&nbsp;</div>
          </div>
        </section>
        <section className={styles.about}>
          <h1>We'll help you spot the next trading opportunity!</h1>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutBox}>
              <BellRinging size={48} weight="fill" color="#669900" />
              <h3 className={styles.aboutHeading}>
                Set alerts for trending cryptos.
              </h3>
              <p className={styles.aboutText}>
                Set chrome notifications for each of the cryptos through our
                extension.
              </p>
            </div>
            <div className={styles.aboutBox}>
              <NotePencil size={48} weight="fill" color="#669900" />
              <h3 className={styles.aboutHeading}>
                Gets details before investing in cryptos.
              </h3>
              <p className={styles.aboutText}>
                Through our in-built search, get details about any of the
                popular cryptos.
              </p>
            </div>
            <div className={styles.aboutBox}>
              <Fire size={48} weight="fill" color="#669900" />
              <h3 className={styles.aboutHeading}>
                Keep up with the new cryptos in market.
              </h3>
              <p className={styles.aboutText}>
                Get to know about the new trending cryptos in our trending page.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            <h1>It just takes ONE click to create an alert!</h1>
            <div className={styles.featuresVideo}>
              <Image
                src={ScreenGif}
                alt="Screen Video"
                width="800"
                height="500"
              />
            </div>
          </div>
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
