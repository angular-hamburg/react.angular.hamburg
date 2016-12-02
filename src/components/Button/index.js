
import React from 'react'
import x from 'throw-if-missing'
import styles from './styles.css'

export default function Button({
  href = x`href`, secondary = false, large = false, className, children
}) {
  return (
    <a
      className={
        `${styles.button}
         ${secondary ? styles.secondary : ''}
         ${large ? styles.large : ''} 
         ${className}`
      }
      href={href}
    >
      {children}
    </a>
  )
}
