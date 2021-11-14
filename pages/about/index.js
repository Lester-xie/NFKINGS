import Layout from "../../components/Layout";

import styles from './index.module.scss'
import {useEffect} from "react";
import {callObserver} from "../../utils";
import FlexImage from "../../components/FlexImage";

const backInUp = {
  className: 'animate__animated',
  'data-animate': 'animate__backInUp'
}
const zoomIn = {
  className: 'animate__animated',
  'data-animate': 'animate__zoomIn'
}

function useDescription(title) {
  return (
    <>
      <h3 {...backInUp} dangerouslySetInnerHTML={{__html: title}} />
      <div className={styles.description}>
        <div {...backInUp}>
          <p>Established in 2021, NFKings Productions Limited (“NFKings”)</p>
          <p>is a fast-growing NFT creatives, production and distribution</p>
          <p>company for many top tier Intellectual Properties (“IPs”) and Brands. </p>
          <p>The first core competence of NFKings is in its creative</p>
          <p>and production capability.</p>
          <p>The core creative team consists of award-winning creatives, </p>
          <p>film / animation directors and KOLs whose impressive portfolio</p>
          <p>include Cartoon Network, Disney, National Geographic, Warner </p>
          <p>Group, Jay Chou, MediaCorp, Vogue, Esquire, Youku, De Beers, </p>
          <p>Samsung amongst many others.</p>
          <p>The second core competence of NFKings is in the solicitation</p>
          <p>and management of IPs and Brands. In a short span of just 2 months,</p>
          <p>NFKings has secured more than 100 top tier IPs and Brands, to create,</p>
          <p>produce and distribute their first ever NFTs. </p>
          <p>These IPs and Brands cover a wide range of industries including </p>
          <p>celebrities, fashion, toys, esports, sports, galleries, artists etc.</p>
          <p>Our first IP “tokidoki” sold out 125,000 Mystery Boxes on Binance </p>
          <p>NFT at US$20 each in seconds, grossing US$2.5mil.</p>
        </div>
      </div>
    </>
  )
}

export default function About() {
  useEffect(() => {
    callObserver('main')
  }, []);
const description = useDescription('ABOUT US')
const philosophy = useDescription('COMPANY<br />PHILOSOPHY')
  return (
    <Layout>
      <div className={styles.container}>
        {description}
        <FlexImage
          src="/images/about/about-banner.jpg"
          className="animate__animated"
          data-animate="animate__zoomIn"
          height={889}
          width={1920}
        />
        <div className={styles.companyWrap}>
          {philosophy}
        </div>
        <div className={styles.customers}>
          <h3>CUSTOMERS</h3>
          <ul className={styles.ul1}>
            <li>
              <FlexImage src="/images/about/1.png" width={201} height={65} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/2.png" width={143} height={108} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/3.png" width={221} height={64} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/4.png" width={221} height={103} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/5.png" width={112} height={166} {...zoomIn}/>
            </li>
          </ul>
          <ul>
            <li>
              <FlexImage src="/images/about/6.png" width={240} height={240} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/7.png" width={204} height={204} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/8.png" width={164} height={119} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/9.png" width={97} height={136} {...zoomIn}/>
            </li>
            <li>
              <FlexImage src="/images/about/10.png" width={127} height={124} {...zoomIn}/>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
