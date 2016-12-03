
import React from 'react'
import x from 'throw-if-missing'
import styles from './styles.css'

export default function Section({ title = x`title`, text, children, contentClassName }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>{title}</span>
      </h2>
      {text && <p className={styles.text}>{text}</p>}
      {children && <ul className={`${styles.content} ${contentClassName}`}>{children}</ul>}
    </div>
  )
}
