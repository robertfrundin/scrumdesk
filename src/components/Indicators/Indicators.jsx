import warningImg from './assets/warning-comment.svg'
import commentImg from './assets/text-comment.svg'
import styles from './style.module.css'
export const Indicators = ({ warning, comment }) => {
  return (
    <div className={styles.icons}>
      {!!warning ? <img className={styles.icon} src={warningImg} alt="" /> : ''}
      {!!comment ? <img className={styles.icon} src={commentImg} alt="" /> : ''}
    </div>
  )
}
