import styles from './style.module.css'
import React, { useState } from 'react'
import arrow from './assets/arrow.svg'
import { Checkbox } from '../Checkbox/Checkbox'
import { Tag } from '../Tag/Tag'
export const Multiselect = ({ selectedColors }) => {
  const colors = ['violet', 'green', 'red', 'orange', 'blue', 'lightgreen', 'darkblue', 'yellow']
  const [closed, setClosed] = useState(true)
  return (
    <React.Fragment>
      <button type="button" onClick={() => setClosed(!closed)} className={styles.header}>
        Выбрать тэг
        <img src={arrow} alt="" />
      </button>
      {!closed ? (
        <ul className={styles.list}>
          {colors.map((color, idx) => {
            return (
              <li key={idx} className={styles.item}>
                <Tag color={color} size="l"></Tag>
                <Checkbox color={color}></Checkbox>
              </li>
            )
          })}
        </ul>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}
