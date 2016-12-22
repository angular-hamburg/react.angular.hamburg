
import React from 'react'
import Indicator from '../Indicator'
import Banner from '../Banner'
import Header from '../Header'
import Container from '../Container'
import Talks from '../Talks'
import Section from '../Section'
import Team from '../Team'
import Sponsors from '../Sponsors'
import Community from '../Community'
import { aboutUs } from '../config'
import styles from './styles.css'

export default function App() {
  return (
    <div>
      <Indicator />
      <Banner />
      <Container>
        <Header />
        <Talks />
        <Section title="What is this all about?" text={aboutUs} />
        <Team />
        <Sponsors />
        <Community />
        <span className={styles.footer}>Made with ⚓ in Hamburg</span>
      </Container>
    </div>
  )
}
