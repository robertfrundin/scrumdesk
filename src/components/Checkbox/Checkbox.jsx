import styles from './style.module.css'
import React from 'react'
import { addColor, removeColor } from '../../Redux/toolkitSlice'
import { store } from '../../Redux'
import { useDispatch } from 'react-redux'
export const Checkbox = ({ text, color, checked }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.checkbox__container}>
      <input
        onClick={(event) => {
          event.target.checked ? store.dispatch(addColor(color)) : store.dispatch(removeColor(color))
        }}
        type="checkbox"
        id="c1"
        className={styles.checkbox}
      ></input>
      <label htmlFor="c1" className={styles.label}>
        {text}
      </label>
    </div>
  )
}
