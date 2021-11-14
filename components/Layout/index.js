import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.scss'

import FlexImage from "../FlexImage";
import Media from "../Media";
import {useEffect} from "react";
import {callObserver} from "../../utils";

export default function Layout({children}) {
  useEffect(() => {
    callObserver('footer')
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="Be a part of the new digital revolution"/>
        <meta name="og:title" content="NFKINGS"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <title>NFKINGS</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <FlexImage src="/images/logo.svg" width={72} height={72} />
          </a>
        </Link>
        <ul>
          <li className="animate__animated animate__backInRight">
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </li>
          <li className="animate__animated animate__backInRight">
            <Link href="#">
              <a>CONTACT US</a>
            </Link>
          </li>
          <li className="animate__animated animate__backInRight">
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li className="animate__animated animate__backInRight">
            <Link href="#">
              <a>Join the community</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className="animate__animated" data-animate="animate__slideInRight">
          <div>
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a>CONTACT US</a>
            </Link>
          </div>
        </div>
        <div className="animate__animated" data-animate="animate__zoomIn">
          <FlexImage src="/images/big-logo.png" width={189} height={281} />
        </div>
        <div className="animate__animated" data-animate="animate__slideInLeft">
          <p>support@nfkings.io</p>
          <p>Join the community</p>
          <div>
            <Media size="small" />
          </div>
        </div>
      </footer>
    </>
  )
}
