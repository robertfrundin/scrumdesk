import styles from './style.module.css'
import arrow from './assets/arrow.svg'
import { Input } from '../../components/Input/Input'
import { Tag } from '../../components/Tag/Tag'
import { Comment } from '../../components/Comment/Comment'
import { Button } from '../../components/Button/Button'
import { DeleteModal } from '../../components/DeleteModal/DeleteModal'
import { AddComment } from '../../components/AddComment/AddComment'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFormik, Formik } from 'formik'
import { store } from '../../Redux'
import { editTicket, setDeleteModal } from '../../Redux/toolkitSlice'
import { createSelector } from 'reselect'
export const Ticket = () => {
  const [popupOpened, setPopupOpened] = useState(false)
  const { ticketId } = useParams()
  const selectTickets = (state) => state.toolkit.tickets
  const ticketSelector = createSelector(selectTickets, (items) => {
    return items.find((el) => el.id == ticketId)
  })
  const ticket = useSelector(ticketSelector)
  const getDeleteModalStatus = createSelector(
    (state) => state.toolkit.deleteModalOpened,
    (value) => value
  )
  const deleteModalOpened = useSelector(getDeleteModalStatus)
  const [editMode, setEditMode] = useState(false)
  const [commentOpened, setCommentOpened] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: ticket.name,
      description: ticket.description,
      id: ticketId,
    },
    onSubmit: (values) => {
      store.dispatch(editTicket(values))
    },
  })
  return (
    <div className={styles.ticket}>
      {commentOpened ? <AddComment closer={setCommentOpened} id={ticketId} /> : ''}
      {!!deleteModalOpened ? <DeleteModal id={ticketId} /> : ''}
      <button className={styles.back}>
        <Link to="/">
          <img src={arrow} alt="" />
          Вернуться к задачам
        </Link>
      </button>

      {popupOpened ? (
        <div className={styles.options__popup}>
          <button
            onClick={() => {
              setPopupOpened(false)
              store.dispatch(setDeleteModal())
            }}
          >
            Удалить
          </button>
          <button
            onClick={() => {
              setEditMode(true)
              setPopupOpened(false)
            }}
          >
            Редактировать
          </button>
          <button onClick={() => setPopupOpened(false)} className={styles.options__popup__close}></button>
        </div>
      ) : (
        <div onClick={() => setPopupOpened(true)} className={styles.options}>
          <span></span>
        </div>
      )}
      <h5 className={styles.task__category}>{ticket.category}</h5>
      <Formik>
        <form onSubmit={formik.handleSubmit} className={styles.task__content}>
          <Input name="name" onChange={formik.handleChange} value={formik.values.name} nonEditable={editMode ? false : true} placeholder={ticket.name}></Input>
          <Input name="description" onChange={formik.handleChange} value={formik.values.description} nonEditable={editMode ? false : true} placeholder={ticket.description ? '' : 'Введите описание'} multiline={true}></Input>
          <div className={styles.tagwrap}>
            {ticket.tags.map((el, idx) => {
              return <Tag color={el} size="m" key={idx}></Tag>
            })}
          </div>
          {!!ticket.comments
            ? ticket.comments.map((el, idx) => {
                return <Comment author={el.author} content={el.text} key={idx}></Comment>
              })
            : ''}

          <button
            onClick={() => {
              setCommentOpened(true)
            }}
            className={styles.addcomment}
          >
            Добавить комментарий
          </button>
          <div className={styles.savebutton__container}>{editMode ? <Button text="Сохранить" size="s"></Button> : ''}</div>
        </form>
      </Formik>
    </div>
  )
}
