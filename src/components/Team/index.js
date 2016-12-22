
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Section from '../Section'
import Link from '../Link'
import styles from './styles.css'
import { team } from '../config'

export default function Team() {
  const members = () => team.map((member, i) => {
    const { name, role, description, twitter, avatar } = member
    return (
      <li className={styles.member} key={i}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <div className={styles.name}>{name}</div>
        <div>{role.toUpperCase()}</div>
        <ReactMarkdown className={styles.markdown} source={description} />
        <Link className={styles.link} target="_blank" href={`http://twitter.com/${twitter}`} title={`${twitter} on Twitter`}>
          {`@${twitter}`}
        </Link>
      </li>
    )
  })

  return (
    <Section title="The Team" contentClassName={styles.team}>{members()}</Section>
  )
}
