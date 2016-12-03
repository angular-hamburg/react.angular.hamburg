
import React from 'react'
import x from 'throw-if-missing'
import styles from './styles.css'

export default function Link({
  href = x`href`, title = x`title`, className, children = x`children`
}) {
  return (
    <a className={`${styles.link} ${className}`} href={href} title={title}>
      {children}
    </a>
  )
}
