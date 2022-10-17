import styles from './style.module.css'
export const DeleteModal = () => {
  return (
    <div className={styles.modal__wrap}>
      <div className={styles.modal__content}>
        <h6 className={styles.label}>Удалить тикет?</h6>
        <div className={styles.buttons}>
          <button>Да</button>
          <button>Нет</button>
        </div>
      </div>
    </div>
  )
}
