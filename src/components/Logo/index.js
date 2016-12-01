
import React from 'react'
import styles from './styles.css'

export default function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="media/logo.jpg" role="presentation" />
    </div>
  )
}
