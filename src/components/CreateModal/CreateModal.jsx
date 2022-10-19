import { Input } from '../Input/Input'
import { Multiselect } from '../Multiselect/Multiselect'
import { Button } from '../Button/Button'
import closeButton from './assets/close.svg'
import styles from './style.module.css'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { clearColors, createTicket, setCreateModal } from '../../Redux/toolkitSlice'
import { store } from '../../Redux'
import { Link } from 'react-router-dom'
import { useFormik, Formik } from 'formik'
export const CreateModal = () => {
  // store.dispatch(clearColors())
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    onSubmit: (values) => {
      const { name, description } = values
      const id = Math.floor(Math.random() * 1000)
      const newTicket = { name, id, category: 'Todo', tags: store.getState().toolkit.selectedColors }
      store.dispatch(createTicket(newTicket))
    },
  })
  const dispatch = useDispatch()
  return ReactDOM.createPortal(
    <div className={styles.modal__wrap}>
      <div className={styles.modal}>
        <Link
          onClick={() => {
            store.dispatch(clearColors())
          }}
          to="/"
        >
          <img className={styles.close} src={closeButton} alt="" />
        </Link>
        <h5 className={styles.modal__header}>Создать тикет</h5>
        <Formik>
          <form onSubmit={formik.handleSubmit} className={styles.modal__content}>
            <Input name="name" onChange={formik.handleChange} multiline={false} placeholder="Название" value={formik.values.name}></Input>
            <Input name="description" onChange={formik.handleChange} multiline={true} value={formik.values.description}></Input>
            <Multiselect></Multiselect>
            <Button text="Сохранить"></Button>
          </form>
        </Formik>
      </div>
    </div>,
    document.getElementById('root')
  )
}
