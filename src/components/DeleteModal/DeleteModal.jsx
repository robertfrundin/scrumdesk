import styles from './style.module.css'
import ReactDOM from 'react-dom'
import { store } from '../../Redux'
import { setDeleteModal, deleteTicket } from '../../Redux/toolkitSlice'
import { Link } from 'react-router-dom'

export const DeleteModal = ({ id }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal__wrap}>
      <div className={styles.modal__content}>
        <h6 className={styles.label}>Удалить тикет?</h6>
        <div className={styles.buttons}>
          <Link to={'/'}>
            <button
              onClick={() => {
                store.dispatch(setDeleteModal())
                store.dispatch(deleteTicket(id))
              }}
            >
              Да
            </button>
          </Link>

          <button onClick={() => store.dispatch(setDeleteModal())}>Нет</button>
        </div>
      </div>
    </div>,
    document.getElementById('root')
  )
}
