import styles from './style.module.css'
import React from 'react'
export const Input = React.forwardRef(({ placeholder, multiline, nonEditable, value, onChange, name }, ref) => {
  if (multiline) {
    return <textarea name={name} onChange={onChange} value={placeholder} disabled={nonEditable ? true : false} ref={ref} className={styles.multi}></textarea>
  } else {
    return <input name={name} onChange={onChange} value={value} disabled={nonEditable ? true : false} ref={ref} type="text" className={styles.single} />
  }
})
