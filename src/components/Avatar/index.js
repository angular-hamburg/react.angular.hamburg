
import React from 'react'
import x from 'throw-if-missing'
import styles from './styles.css'

export default function Avatar({ src = x`src`, alt = x`alt`, className }) {
  return <img className={`${styles.avatar} ${className}`} src={src} alt={alt} />
}
