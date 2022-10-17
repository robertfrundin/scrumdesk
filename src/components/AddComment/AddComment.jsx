import styles from './style.module.css'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import closeButton from './assets/close.svg'
export const AddComment = () => {
  return (
    <div className={styles.modal__wrap}>
      <div className={styles.modal}>
        <img className={styles.close} src={closeButton} alt="" />
        <h5 className={styles.modal__header}>Добавить комментарий</h5>
        <div className={styles.modal__content}>
          <Input multiline={false} placeholder="Имя"></Input>
          <Input multiline={true} placeholder="Комментарий"></Input>

          <Button size="l" text="Сохранить"></Button>
        </div>
      </div>
    </div>
  )
}
