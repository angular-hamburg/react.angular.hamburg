
import React from 'react'
import Header from '../Header'
import Container from '../Container'
import Talks from '../Talks'
import Section from '../Section'
import Team from '../Team'
import Community from '../Community'
import { aboutUs } from '../config'
import './styles.css'

export default function App() {
  return (
    <Container>
      <Header />
      <Talks />
      <Section title="What is this all about?" text={aboutUs} />
      <Team />
      <Community />
    </Container>
  )
}
