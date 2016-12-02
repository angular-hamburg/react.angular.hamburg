
import React from 'react'
import x from 'throw-if-missing'
import styles from './styles.css'

export default function Container({ children = x`children` }) {
  return <div className={styles.root}>{children}</div>
}
