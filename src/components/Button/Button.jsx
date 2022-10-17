import styles from './style.module.css'
import { useDispatch } from 'react-redux'
import { createTicket, setCreateModal } from '../../Redux/toolkitSlice'
import { store } from '../../Redux'
export const Button = ({ type, text, plus, size }) => {
  const dispatch = useDispatch()
  let clickHandler = () => {}
  switch (type) {
    case 'createTicket': {
      clickHandler = () => {
        dispatch(setCreateModal())
      }
      break
    }
  }
  return (
    <button onClick={clickHandler} className={styles.button + ' ' + (!!plus ? styles.plus : '') + ' ' + styles[size]}>
      {text}
    </button>
  )
}
