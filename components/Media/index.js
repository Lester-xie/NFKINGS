import FlexImage from "../FlexImage";
import styles from './index.module.scss'

export default function Media({size = 'large'}) {
  const width = size === 'small' ? 26 : 70
  const mediasList = [
    {
      name: 'twitter',
      url: 'https://twitter.com/nfkingspro'
    },
    {
      name: 'ins',
      url: 'https://www.instagram.com/'
    },
    {
      name: 'telegram',
      url: 'https://t.me/nfkingspro'
    },
    {
      name: 'medium',
      url: 'https://medium.com/@NFKingsPro'
    },
  ]
  return (
    <ul className={styles.ul}>
      {mediasList.map(media => {
        return (
          <li key={media.name}>
            <a href={media.url}>
              <FlexImage
                src={`/images/media/${media.name}.png`}
                width={width}
                height={width}
                className="animate__animated"
                data-animate="animate__backInUp"
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
