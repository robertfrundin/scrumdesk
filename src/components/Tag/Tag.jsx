import styles from './style.module.css'
import React from 'react'
export const Tag = ({ color, size }) => {
  return (
    <React.Fragment>
      <span className={styles.tag + ' ' + styles[color] + ' ' + styles[size]}></span>
    </React.Fragment>
  )
}
