import styles from './style.module.css'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import closeButton from './assets/close.svg'
import ReactDOM from 'react-dom'
import { useFormik, Formik } from 'formik'
import { store } from '../../Redux'
import { addComment } from '../../Redux/toolkitSlice'
export const AddComment = ({ id, closer }) => {
  const formik = useFormik({
    initialValues: {
      author: '',
      text: '',
    },
    onSubmit: (values) => {
      const { author, text } = values
      const payload = { id, comment: { author, text } }
      store.dispatch(addComment(payload))
    },
  })
  return ReactDOM.createPortal(
    <div className={styles.modal__wrap}>
      <div className={styles.modal}>
        <img className={styles.close} src={closeButton} onClick={() => closer()} alt="" />
        <h5 className={styles.modal__header}>Добавить комментарий</h5>
        <Formik>
          <form onSubmit={formik.handleSubmit} className={styles.modal__content}>
            <Input name="author" onChange={formik.handleChange} value={formik.values.author} multiline={false} placeholder="Автор"></Input>
            <Input name="text" onChange={formik.handleChange} value={formik.values.text} multiline={true}></Input>

            <Button size="l" text="Сохранить"></Button>
          </form>
        </Formik>
      </div>
    </div>,
    document.getElementById('root')
  )
}
