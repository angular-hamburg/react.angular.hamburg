
import React from 'react'
import Section from '../Section'
import Link from '../Link'
import styles from './styles.css'
import { platforms } from '../config'

export default function Community() {
  const renderPlatforms = () => platforms.map((platform, i) => {
    const { title, icon, url } = platform
    return (
      <li className={styles.platform} key={i}>
        <Link className={styles.link} href={url} title={title}>
          <span className={`fa fa-lg ${icon}`}></span>
        </Link>
      </li>
    )
  })

  return (
    <Section contentClassName={styles.platforms} title="Join the Community">
      {renderPlatforms()}
    </Section>
  )
}
