
import React from 'react'
import Logo from '../Logo'
import Typer from '../Typer'
import Button from '../Button'
import styles from './styles.css'
import { nextMeetup } from '../config'

export default function Header() {
  return (
    <div className={styles.root}>
      <Logo />
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Hamburg's<br />Angular Meetup
          </h1>
          <Typer />
          <div className={styles.date}>
            Next Meetup on <span className={styles.highlight}>{nextMeetup.date}</span>
          </div>
          <Button className={styles.button} href={nextMeetup.link} large>
            RSVP & Join us on Meetup
          </Button>
        </div>
      </div>
    </div>
  )
}
