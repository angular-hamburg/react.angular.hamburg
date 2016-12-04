
import React, { Component } from 'react'
import styles from './styles.css'

export default class Typer extends Component {

  componentWillMount() {
    if (!navigator.onLine) {
      this.setState({ online: false })
    }
  }

  componentDidMount() {
    window.addEventListener('online', () =>
      this.setState({ online: true }))

    window.addEventListener('offline', () =>
      this.setState({ online: false }))
  }

  render() {
    if (this.state !== null) {
      const status = this.state.online ? styles.online : styles.offline
      return (
        <div className={`${styles.indicator} ${status}`}>
          You are currently offline
        </div>
      )
    }

    return null
  }

}
