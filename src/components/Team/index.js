
import React from 'react'
import Section from '../Section'
import Avatar from '../Avatar'
import Link from '../Link'
import styles from './styles.css'
import { team } from '../config'

export default function Team() {
  const members = () => team.map((member, i) => {
    const { name, job, company, twitter, avatar } = member
    return (
      <li className={styles.member} key={i}>
        <Avatar src={avatar} alt={name} />
        <div className={styles.name}>{name}</div>
        <div>{job}</div>
        <div>at {company}</div>
        <Link className={styles.link} target="_blank" href={`http://twitter.com/${twitter}`} title={`${twitter} on Twitter`}>
          {`@${twitter}`}
        </Link>
      </li>
    )
  })

  return (
    <Section title="The Team">{members()}</Section>
  )
}
