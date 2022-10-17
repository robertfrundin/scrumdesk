import styles from './style.module.css'
import { Tag } from '../Tag/Tag'
import { Indicators } from '../Indicators/Indicators'
export const Task = ({ name, tags, indicators }) => {
  return (
    <div className={styles.task__container}>
      <div className={styles.top}>
        <h4 className={styles.taskname}>{name}</h4>
        <button className={styles.options}>
          <span></span>
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tagwrap}>
          {tags.map((el, idx) => (
            <Tag color={el} size="s" key={idx}></Tag>
          ))}
        </div>
        {!!indicators ? <Indicators warning={indicators.warning} comment={indicators.comment}></Indicators> : ''}
      </div>
    </div>
  )
}
