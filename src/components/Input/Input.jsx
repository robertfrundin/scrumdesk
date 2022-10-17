import styles from './style.module.css'
import React from 'react'
export const Input = React.forwardRef(({ placeholder, multiline }, ref) => {
  if (multiline) {
    return <textarea ref={ref} placeholder={placeholder} className={styles.multi}></textarea>
  } else {
    return <input ref={ref} type="text" placeholder={placeholder} className={styles.single} />
  }
})
