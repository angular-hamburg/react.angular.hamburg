import React from 'react'
import Section from '../Section'
import Link from '../Link'
import styles from './styles.css'
import { sponsors } from '../config'

export default function Team() {
  const theSponsors = () => sponsors.map((sponsor, i) => {
    const { name, role, link, logo } = sponsor
    return (
      <li className={styles.sponsor} key={i}>
        <img className={styles.logo} src={logo} alt={name} />
        <div>
          <Link target="_blank" className={styles.name} href={link} title={link}>
            {name}
          </Link>
          <div className={styles.role}>{role}</div>
        </div>
      </li>
    )
  })

  return (
    <Section title="The Sponsors" contentClassName={styles.sponsors}>
      {theSponsors()}
    </Section>
  )
}
