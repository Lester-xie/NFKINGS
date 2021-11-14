import { useEffect } from 'react';
import Layout from '../components/Layout'
import FlexImage from "../components/FlexImage";
import Media from "../components/Media";
import {callObserver} from "../utils";

import styles from '../styles/home.module.scss'

const backInUp = {
  className: 'animate__animated',
  'data-animate': 'animate__backInUp'
}

export default function Home() {
  useEffect(() => {
    callObserver('main')
  }, []);
  return (
    <Layout>
      <div>
        <video className={styles.video} autoPlay="autoplay" loop="loop" muted>
          <source src="/videos/video.mp4" type="video/mp4"/>
        </video>
        <div className={styles.container}>
          <article>
            <div>
              <FlexImage
                src="/images/article/vogue.jpg"
                className="animate__animated"
                data-animate="animate__slideInLeft"
                height={660}
                width={660}
                zoom
              />
            </div>
            <div className={styles.description}>
              <p {...backInUp}>Vogue</p>
              <p {...backInUp}>VOGUE SG MYSTERY BOX</p>
              <p {...backInUp}>Vogue Singapore is the undisputedfashion authority that empowers andinspires readers through elevatedimagery and intelligent stories</p>
            </div>
          </article>
          <article className="text-right">
            <div className={styles.description}>
              <p {...backInUp}>tokidoki</p>
              <p {...backInUp}>All Stars Mystery Box Series 1-3</p>
              <p {...backInUp}>tokidoki, which translates to “sometimes” in Japanese, is an internationally recognized and iconic lifestyle brand based on the</p>
            </div>
            <div>
              <FlexImage
                src="/images/article/tokidoki.jpg"
                className="animate__animated"
                data-animate="animate__slideInRight"
                height={660}
                width={660}
                zoom
              />
            </div>
          </article>
          <article>
            <div>
              <FlexImage
                src="/images/article/trey-songz.jpg"
                className="animate__animated"
                data-animate="animate__slideInLeft"
                height={660}
                width={660}
                zoom
              />
            </div>
            <div className={styles.description}>
              <p {...backInUp}>Trey Songz</p>
              <p {...backInUp}>Melos.Studio X Trey Songz</p>
              <p {...backInUp}>Trey Songz is s a famous & A-ListAmerican R&B singer, songwriter, record-producer and actor. Best MaleR&B Artist BET Awards and</p>
            </div>
          </article>
          <div {...backInUp}>
            <div className={styles.buttonWrap}>
              <button className={styles.btn}>SEE MORE &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrowRight} fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <h3 {...backInUp}>CONTACT US</h3>
          <p {...backInUp}>Join the community</p>
          <div className={styles.mediaWrap}>
            <Media />
          </div>
        </div>
        <div className={styles.about}>
          <h3 {...backInUp}>ABOUT US</h3>
          <p {...backInUp}>Established in 2021, NFKings Productions Limited (“NFKings”)</p>
          <p {...backInUp}>is a fast-growing NFT creatives, production and distribution</p>
          <p {...backInUp}>company for many top tier Intellectual Properties (“IPs”) and Brands. </p>
          <div {...backInUp}>
            <div className={styles.buttonWrap}>
              <button className={styles.btn}>CUSTOMERS</button>
            </div>
          </div>
          <ul {...backInUp}>
            <li>
              <FlexImage src="/images/about/1.png" width={157} height={51}/>
            </li>
            <li>
              <FlexImage src="/images/about/2.png" width={111} height={84}/>
            </li>
            <li>
              <FlexImage src="/images/about/3.png" width={172} height={50}/>
            </li>
            <li>
              <FlexImage src="/images/about/4.png" width={172} height={80}/>
            </li>
            <li>
              <FlexImage src="/images/about/5.png" width={87} height={129}/>
            </li>
          </ul>
          <ul {...backInUp}>
            <li>
              <FlexImage src="/images/about/6.png" width={187} height={187}/>
            </li>
            <li>
              <FlexImage src="/images/about/7.png" width={159} height={159}/>
            </li>
            <li>
              <FlexImage src="/images/about/8.png" width={128} height={93}/>
            </li>
            <li>
              <FlexImage src="/images/about/9.png" width={75} height={106}/>
            </li>
            <li>
              <FlexImage src="/images/about/10.png" width={99} height={96}/>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
