
import React, { PropTypes } from 'react'
import styles from './styles.css'

export default function Link({ href, title, className, children }) {
  return (
    <a className={`${styles.link} ${className}`} href={href} title={title}>
        {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string
}
