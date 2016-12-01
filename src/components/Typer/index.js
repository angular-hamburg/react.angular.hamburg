
import React, { Component } from 'react'
import iterator from './iterator'
import styles from './styles.css'

export default class Typer extends Component {

  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  componentDidMount() {
    const randomTime = Math.floor(Math.random() * 400) + 250
    const iter = iterator()
    const type = () => {
      setTimeout(() => {
        this.setState({ text: iter.next().value })
        type()
      }, randomTime)
    }
    type()
  }

  render() {
    return (
      <div className={styles.root}>
        <span className={styles.text}>for{this.state.text}</span>
        <span className={styles.cursor} />
      </div>
    )
  }
}
