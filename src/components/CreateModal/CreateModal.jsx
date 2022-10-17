import { Input } from '../Input/Input'
import { Multiselect } from '../Multiselect/Multiselect'
import { Button } from '../Button/Button'
import closeButton from './assets/close.svg'
import styles from './style.module.css'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { createTicket, setCreateModal } from '../../Redux/toolkitSlice'
import { store } from '../../Redux'
import { useForm } from 'react-hook-form'
export const CreateModal = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  const dispatch = useDispatch()
  return ReactDOM.createPortal(
    <div className={styles.modal__wrap}>
      <div className={styles.modal}>
        <img onClick={() => dispatch(setCreateModal())} className={styles.close} src={closeButton} alt="" />
        <h5 className={styles.modal__header}>Создать тикет</h5>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.modal__content}>
          <Input {...register('firstName', { required: true, maxLength: 20 })} multiline={false} placeholder="Название"></Input>
          <Input multiline={true} placeholder="Описание"></Input>
          <Multiselect></Multiselect>
          <Button text="Сохранить"></Button>
        </form>
      </div>
    </div>,
    document.getElementById('root')
  )
}
