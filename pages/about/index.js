import Layout from "../../components/Layout";
import Link from 'next/link'
import styles from './index.module.scss'
import {useEffect} from "react";
import {callObserver} from "../../utils";
import FlexImage from "../../components/FlexImage";
import useAnimateNumber from 'use-animate-number';

const slideInUp = {
  className: 'animate__animated',
  'data-animate': 'animate__slideInUp'
}
const slideInLeft = {
  className: 'animate__animated',
  'data-animate': 'animate__slideInLeft'
}
const slideInRight = {
  className: 'animate__animated',
  'data-animate': 'animate__slideInRight'
}
const zoomIn = {
  className: 'animate__animated',
  'data-animate': 'animate__zoomIn'
}

const ops = {decimals: 0, duration: 2000}

export default function About() {
  useEffect(() => {
    callObserver('main')
    setValue325(325);
    setValue180(180);
    setValue20(20);
    setValue50(50);
  }, []);
  const [value325, setValue325] = useAnimateNumber(0, ops);
  const [value180, setValue180] = useAnimateNumber(0, ops);
  const [value20, setValue20] = useAnimateNumber(0, ops);
  const [value50, setValue50] = useAnimateNumber(0, ops);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.bannerWrap}>
          <FlexImage width={1920} height={442} src="/images/about/banner.jpg" />
          <div className={styles.bannerDes}>
            <div className={styles.left}>
              <div {...slideInUp}>
                <h3>NFKINGS IS A LEADING INNOVATIVE NFT ECOSYSTEM PLATFORM</h3>
                <p>Established in 2021, NFKings has signed numerous top-tier intellectual properties, brands and celebrities to be part of its NFT Ecosystem that comprises NFTs, Game-Fi and a Metaverse.</p>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <p><span>{`>${value325}`}k</span> NFTs sold</p>
                <p><span>{value180}</span> countries</p>
                <p><span>{`>${value20}`}</span> categories</p>
                <p><span>{`>${value50}`}mil</span> combined fan base</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bannerItem}>
          <div {...slideInLeft}>
            <FlexImage width={960} height={542} src="/images/about/about_banner1.jpg" />
          </div>
          <div className={styles.content}>
            <div {...slideInRight}>
              <div className={styles.right}>
                <h3>ABOUT US</h3>
                <p>NFKings is a leading NFT ecosystem platform that is focused on the three key pillars that build the foundation for sustainability of the Metaverse. Firstly, the creation and production of branded NFTs that will populate the Metaverse. Secondly, the creation and production of NFT games that entertain users while allowing growth of utility for these branded NFTs. Lastly, a beautifully created Metaverse that links NFTs and Game-fi into one arena where all of us mingle, socialise and interact. Essentially, a new internet world on the blockchain.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.content}>
            <div {...slideInLeft}>
              <div className={styles.left}>
                <h3>OUR OFFER TO CLIENTS</h3>
                <p>Established in 2021, NFKings Productions Limited (“NFKings”) is a fast-growing NFT creatives, production and distribution company for many top tier Intellectual Properties (“IPs”) and Brands. The first core competence of NFKings is in its creative and production capability. The core creative team consists of award-winning creatives, film / animation directors and KOLs whose impressive portfolio include Cartoon Network, Disney, National Geographic, Warner Group, Jay Chou, Meditery Boxes on Binance NFT at US$20 each in seconds, grossing US$2.5mil.</p>
              </div>
            </div>
          </div>
          <div {...slideInRight}>
            <FlexImage width={960} height={542} src="/images/about/about_banner2.jpg" />
          </div>
        </div>
        <div className={styles.aboutWrap}>
          <div {...slideInUp}>
            <h3>ABOUT US</h3>
            <p>NFKings is a leading NFT ecosystem platform that is focused on the three key pillars that build the foundation for sustainability of the Metaverse. Firstly, the creation and production of branded NFTs that will populate the Metaverse. Secondly, the creation and production of NFT games ed NFTs. Lastly, a beautifully created Metaverse that links NFTs and Game-fi into one arena where all of us mingle, socialise and interact. Essentially, a new internet world on the blockchain.</p>
            <FlexImage width={946} height={542} src="/images/about/about_banner3.jpg" />
          </div>
        </div>
        <div className={styles.portfolio}>
          <h3>PORTFOLIO</h3>
          <ul>
            <li>
              <FlexImage src="/images/about/new3.png" width={87} height={87} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/1.png" width={140} height={45} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/2.png" width={100} height={76} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/3.png" width={154} height={44} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/new1.png" width={218} height={43} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/5.png" width={78} height={116} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/4.png" width={154} height={72} {...zoomIn}/>
            </li>
          </ul>
          <ul>
            <li>
              <FlexImage src="/images/about/new2.png" width={92} height={92} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/6.png" width={168} height={168} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/7.png" width={142} height={142} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/8.png" width={115} height={83} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/new4.png" width={136} height={50} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/9.png" width={108} height={66} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/10.png" width={109} height={81} {...zoomIn}/>
            </li>
          </ul>
          <div className={styles.more}>
            <Link href="/projects">
              <a >MORE···</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
