import FlexImage from "../FlexImage";
import styles from './index.module.scss'

export default function Media({size = 'large'}) {
  const width = size === 'small' ? 32 : 70
  const medias = ['twitter', 'ins', 'telegram', 'medium']
  return (
    <ul className={styles.ul}>
      {medias.map(media => {
        return (
          <li key={media}>
            <FlexImage
              src={`/images/media/${media}.png`}
              width={width}
              height={width}
              className="animate__animated"
              data-animate="animate__backInUp"
            />
          </li>
        )
      })}
    </ul>
  )
}
