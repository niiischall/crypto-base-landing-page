import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Icon from "../public/icon-128.png";

import styles from "../styles/Privacy.module.css";

export const Privacy: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy - CryptoBase</title>
        <meta name="description" content="CryptoBase - Privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image src={Icon} alt="CryptoBase Logo" width="35" height="35" />
          <Link href="/">
            <a>
              <h1 className={styles.heading}>CryptoBase</h1>
            </a>
          </Link>
        </div>
        <section className={styles.section}>
          <h2>Privacy Policy</h2>
          <p>Last updated: September 15, 2021</p>
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the.
          </p>
        </section>
        <section className={styles.section}>
          <h2>INTERPRETATION AND DEFINITIONS</h2>
          <h3>INTERPRETATION</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h3>DEFINITIONS</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li>
              <p>
                Account means a unique account created for You to access our
                Service or parts of our Service.
              </p>
            </li>
            <li>
              <p>
                Company (referred to as either "the Company", "We", "Us" or
                "Our" in this Agreement) refers to CryptoBase.
              </p>
            </li>
            <li>
              <p>Country refers to: Bengaluru, India.</p>
            </li>
            <li>
              <p>
                Device means any device that can access the Service such as a
                computer, a cellphone or a digital tablet.
              </p>
            </li>
            <li>
              <p>
                Personal Data is any information that relates to an identified
                or identifiable individual.
              </p>
            </li>
            <li>
              <p>Service refers to the Chrome Extension.</p>
            </li>
            <li>
              <p>
                Service Provider means any natural or legal person who processes
                the data on behalf of the Company. It refers to third-party
                companies or individuals employed by the Company to facilitate
                the Service, to provide the Service on behalf of the Company, to
                perform services related to the Service or to assist the Company
                in analyzing how the Service is used.
              </p>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>COLLECTING AND USING YOUR PERSONAL DATA</h2>
          <h3>TYPES OF DATA COLLECTED</h3>
          <h4>PERSONAL DATA</h4>
          <p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul>
            <li>
              <p>Email address</p>
            </li>
            <li>
              <p>Usage data</p>
            </li>
          </ul>
          <h4>USAGE DATA</h4>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
          </p>
          <p>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>
        </section>
        <section className={styles.section}>
          <h2>USE OF YOUR PERSONAL DATA</h2>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul>
            <li>
              <p>
                To provide and maintain our Service, including to monitor the
                usage of our Service.
              </p>
            </li>
            <li>
              <p>
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
              </p>
            </li>
            <li>
              <p>
                To contact You: To contact You by email, telephone calls, SMS,
                or other equivalent forms of electronic communication, such as a
                mobile application's push notifications regarding updates or
                informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </p>
            </li>
            <li>
              <p>
                To manage Your requests: To attend and manage Your requests to
                Us.
              </p>
            </li>
            <li>
              <p>
                For business transfers: We may use Your information to evaluate
                or conduct a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of Our
                assets, whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which Personal Data held
                by Us about our Service users is among the assets transferred.
              </p>
            </li>
            <li>
              <p>
                For other purposes: We may use Your information for other
                purposes, such as data analysis, identifying usage trends,
                determining the effectiveness of our promotional campaigns and
                to evaluate and improve our Service, products, services,
                marketing and your experience.
              </p>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>SECURITY OF YOUR PERSONAL DATA</h2>
          <p>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
        </section>
        <section className={styles.section}>
          <h2>LINKS TO OTHER WEBSITES</h2>
          <p>
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site.
          </p>
          <p>
            We strongly advise You to review the Privacy Policy of every site
            You visit. We have no control over and assume no responsibility for
            the content, privacy policies or practices of any third party sites
            or services.
          </p>
        </section>
        <section className={styles.section}>
          <h2>CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Privacy;
