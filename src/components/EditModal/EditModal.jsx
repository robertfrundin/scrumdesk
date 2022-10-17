import { Input } from '../Input/Input'
import { Multiselect } from '../Multiselect/Multiselect'
import { Button } from '../Button/Button'
import closeButton from './assets/close.svg'
import styles from './style.module.css'
import { Tag } from '../Tag/Tag'
import { useState } from 'react'
import ReactDOM from 'react-dom'
export const EditModal = () => {
  const [active, setActive] = useState(true)
  return ReactDOM.createPortal(
    <div className={active ? styles.modal__wrap : styles.hidden}>
      <div className={styles.modal}>
        <img onClick={() => setActive(false)} className={styles.close} src={closeButton} alt="" />
        <h5 className={styles.modal__header}>Редактировать</h5>
        <div className={styles.modal__content}>
          <Input multiline={false} placeholder="Нарисовать иллюстрации"></Input>
          <Input multiline={true} placeholder="Описание"></Input>
          <div className={styles.tags}>
            <Tag color="blue" size="m"></Tag>
            <Tag color="red" size="m"></Tag>
            <Tag color="yellow" size="m"></Tag>
            <Tag color="blue" size="m"></Tag>
            <Tag color="red" size="m"></Tag>
            <Tag color="yellow" size="m"></Tag>
          </div>
          <Multiselect></Multiselect>
          <Button text="Сохранить"></Button>
        </div>
      </div>
    </div>,
    document.getelementById('root')
  )
}
