
import React from 'react'
import styles from './styles.css'

export default function Banner() {
  return (
    <div className={styles.outerContainer}>
      <div className={`${styles.overlay} ${styles.blend}`}></div>
      <div className={`${styles.overlay} ${styles.gradientBottom}`}></div>
      <div className={`${styles.overlay} ${styles.gradientBottom}`}></div>
      <div className={`${styles.overlay} ${styles.gradientBottom}`}></div>
      <div className={`${styles.overlay} ${styles.gradientBottom}`}></div>
      <div className={`${styles.overlay} ${styles.gradientBottom}`}></div>
      <div className={styles.innerContainer}>
        <img className={styles.bannerImg} src="media/banner.jpg" alt="banner" />
      </div>
    </div>
  )
}

