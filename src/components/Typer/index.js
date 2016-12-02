
import React, { Component } from 'react'
import iterator from './iterator'
import styles from './styles.css'

export default class Typer extends Component {

  componentDidMount() {
    const randomDelay = () => Math.floor(Math.random() * 350) + 100
    const typingIterator = iterator()

    const type = () => {
      setTimeout(() => {
        this.setState({ text: typingIterator.next().value })
        type()
      }, randomDelay())
    }

    type()
  }

  render() {
    return (
      <div className={styles.root}>
        <span className={styles.text}>for{this.state ? this.state.text : ''}</span>
        <span className={styles.cursor} />
      </div>
    )
  }
}
