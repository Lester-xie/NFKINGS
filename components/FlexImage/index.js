import Image from 'next/image'
import useFlexWidth from "../../hooks/useFlexWidth";

import styles from './index.module.scss'

export default function FlexImage({width, height, zoom = false, mask = true, ...props}) {
  const clientWidth = 1920
  const newWidth = useFlexWidth(width, clientWidth);
  const newHeight = useFlexWidth(height, clientWidth);
  if (zoom) {
    const newStyles = {
      width: newWidth + 'px',
      height: newHeight + 'px',
      overflow: 'hidden'
    }
    return (
      <div style={newStyles}>
        <div className={zoom ? styles.image : ''}>
          <div className={mask ? styles.mask : ''} />
          <Image priority width={newWidth} height={newHeight} objectFit="cover" {...props} />
        </div>
      </div>
    )
  }
  return <Image width={newWidth} height={newHeight} {...props} />
}
