import styles from './style.module.css'
import React from 'react'
export const Comment = ({ author, content }) => {
  return (
    <React.Fragment>
      <div className={styles.header}>{author}</div>
      <p className={styles.content}>{content}.</p>
    </React.Fragment>
  )
}
