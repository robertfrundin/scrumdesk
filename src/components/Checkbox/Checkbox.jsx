import styles from './style.module.css'
import React from 'react'
export const Checkbox = ({ text }) => {
  return (
    <div className={styles.checkbox__container}>
      <input type="checkbox" id="c1" className={styles.checkbox}></input>
      <label for="c1" className={styles.label}>
        {text}
      </label>
    </div>
  )
}
