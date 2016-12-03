
import React from 'react'
import Section from '../Section'
import Button from '../Button'
import styles from './styles.css'
import { nextTalks } from '../config'

export default function Talks() {
  const renderReservedSlot = (talk, key) => {
    const { title, speaker, banner, description } = talk
    return (
      <li className={styles.talk} key={key}>
        <h3 className={styles.title}>{title}</h3>
        <p>by {speaker}</p>
        <img className={styles.banner} src={banner} alt={title} />
        <p className={styles.description}>{description}</p>
      </li>
    )
  }

  const renderFreeSlot = key => (
    <li className={`${styles.talk} ${styles.freeSlot}`} key={key}>
      <h3 className={styles.title}>Free Slot</h3>
      <p className={styles.description}>This slot could be yours!</p>
      <Button className={styles.submit} href="#" secondary>
        Submit a Talk
      </Button>
      <p className={styles.note}>
        Trouble finding an idea for a talk?<br />
        Feel free to contact us.
      </p>
    </li>
  )

  const renderTalks = () =>
    nextTalks.map((talk, i) => {
      if (talk.reserved) { return renderReservedSlot(talk, i) }
      return renderFreeSlot(i)
    })

  return (
    <Section contentClassName={styles.content} title="The Talks">
      {renderTalks()}
    </Section>
  )
}
