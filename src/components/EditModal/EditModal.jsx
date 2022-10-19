import { Input } from '../Input/Input'
import { Multiselect } from '../Multiselect/Multiselect'
import { Button } from '../Button/Button'
import closeButton from './assets/close.svg'
import styles from './style.module.css'
import { Tag } from '../Tag/Tag'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { useFormik, Formik } from 'formik'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../Redux'
import { editTicket, clearColors } from '../../Redux/toolkitSlice'
import { createSelector } from 'reselect'

export const EditModal = () => {
  const { ticketId } = useParams()
  const selectTickets = (state) => state.toolkit.tickets
  const ticketSelector = createSelector(selectTickets, (items) => {
    return items.find((el) => el.id == ticketId)
  })

  const ticket = useSelector(ticketSelector)
  const formik = useFormik({
    initialValues: {
      name: ticket.name,
      description: ticket.description ? ticket.description : 'Введите описание',
      id: ticketId,
    },
    onSubmit: (values) => {
      const { name, description, id } = values
      const editedTicket = { name, id, description, tags: store.getState().toolkit.selectedColors }
      store.dispatch(editTicket(editedTicket))
      store.dispatch(clearColors())
    },
  })
  return ReactDOM.createPortal(
    <div className={styles.modal__wrap}>
      <div className={styles.modal}>
        <Link to="/">
          {' '}
          <img className={styles.close} src={closeButton} alt="" />
        </Link>
        <h5 className={styles.modal__header}>Редактировать</h5>
        <Formik>
          <form onSubmit={formik.handleSubmit} className={styles.modal__content}>
            <Input name="name" onChange={formik.handleChange} value={formik.values.name} multiline={false} placeholder={ticket.name}></Input>
            <Input name="description" onChange={formik.handleChange} value={formik.values.description} multiline={true} placeholder={ticket.description}></Input>
            <div className={styles.tags}>
              {ticket.tags.map((el, idx) => (
                <Tag key={idx} color={el} size="m"></Tag>
              ))}
            </div>
            <Multiselect></Multiselect>
            <Button text="Сохранить"></Button>
          </form>
        </Formik>
      </div>
    </div>,
    document.getElementById('root')
  )
}
