import Layout from "../../components/Layout";

import styles from './index.module.scss'
import Link from "next/link";
import Media from "/components/Media";
import FlexImage from "../../components/FlexImage";
import {useEffect} from "react";
import {callObserver} from "../../utils";

const slideInUp = {
  className: 'animate__animated',
  'data-animate': 'animate__slideInUp'
}

export default function About() {
  useEffect(() => {
    callObserver('main')
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.bannerWrap}>
          <FlexImage width={1920} height={443} src="/images/contact/banner.jpg" />
          <div className={styles.h3}>
            <h3 {...slideInUp}>CONTACT US</h3>
            <div className={styles.div}>
              <Link href="/">
                <a>HOME</a>
              </Link>
              <span className={styles.span}>CONTACT US</span>
            </div>
            </div>
        </div>
        <div className={styles.contactWrap}>
          <div className={styles.contact}>
            <p className={styles.touch}>Get in Touch</p>
            <p className={styles.work}>If you are interested in working with us, please get in touch</p>
            <div className={styles.combination}>
              <FlexImage width={39} height={27} src="/images/contact/envelope.jpg" />
              <span className={styles.email}>enquiry@nfkings.io</span>
            </div>
            <div className={styles.media}>
              <Media size="small"/>
            </div>
          </div>
          <div className={styles.form}>
            <p className={styles.touch}>Contact Form</p>
            <div className={styles.inputWrap}>
              <input type="text" placeholder="Name"/>
              <input type="text" placeholder="Email address"/>
            </div>
            <textarea placeholder="Your Message..." />
            <button>Send Message...</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
