import Layout from "../../components/Layout";

import styles from './index.module.scss'
import {useEffect} from "react";
import {callObserver} from "../../utils";
import FlexImage from "../../components/FlexImage";

const backInUp = {
  className: 'animate__animated',
  'data-animate': 'animate__backInUp'
}

const renderArticle = (title, subtitle, src) => {
  return (
    <article>
      <FlexImage
        src={`/images/article/${src}.jpg`}
        className="animate__animated"
        data-animate="animate__slideInUp"
        width={600}
        height={900}
        zoom
      />
      <div {...backInUp} className={styles.articleTitle}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  useEffect(() => {
    callObserver('main')
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <h3 {...backInUp}>PROJECTS</h3>
        <p {...backInUp}>ding NFT & Fan Token Creatives, Production & Distribution Agency </p>
        <div className={styles.articleWrap}>
          <div>
            {renderArticle('Vogue', 'VOGUE SG MYSTERYBOX', 'vogue')}
            {renderArticle('Trey Songz', 'Melos.StudioX Trey Songz', 'trey-songz')}
            {renderArticle('Jim Thompson', 'Jim ThompsonElephant Day NFT', 'jim-thompson')}
          </div>
          <div>
            {renderArticle('tokidoki', 'All Stars MysteryBox Series 1-3', 'tokidoki')}
            {renderArticle('Mighty Jaxx', 'Nyammy Treats: The Nyan Sum Cards', 'mighty-jaxx')}
            {renderArticle('APOKI', 'APOKI: GET ITOUT Mystery box', 'apoki')}
          </div>
        </div>
      </div>
    </Layout>
  )
}
