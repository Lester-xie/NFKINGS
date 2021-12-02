import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.scss'

import Image from 'next/image'
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
            <Image src="/images/logo.svg" width={28} height={42} />
          </a>
        </Link>
        <ul>
          <li className="animate__animated animate__backInRight">
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </li>
          <li className="animate__animated animate__backInRight">
            <Link href="/projects">
              <a>PORTFOLIO</a>
            </Link>
          </li>
          <li className="animate__animated animate__backInRight">
            <Link href="/contact">
              <a>CONTACT US</a>
            </Link>
          </li>
          <li className="animate__animated animate__backInRight">
            <Link href="#">
              <a>
                <Image priority width={160} height={30} objectFit="cover" src="/videos/button.gif" />
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.floatRight}>
          <Image src="/images/search.png" width={16} height={16} />
          <span className={styles.language}>EN</span>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
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
        <div className="animate__animated" data-animate="animate__slideInLeft">
          <div>
            <Media size="small" />
            <p>enquiry@nfkings.io</p>
          </div>
        </div>
      </footer>
    </>
  )
}
