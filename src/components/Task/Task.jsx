import styles from './style.module.css'
import { Tag } from '../Tag/Tag'
import { Indicators } from '../Indicators/Indicators'
import { Link } from 'react-router-dom'
export const Task = ({ name, tags, indicators, id }) => {
  return (
    <div className={styles.task__container}>
      <Link to={`edit/${id}`}>
        <div className={styles.top}>
          <h4 className={styles.taskname}>{name}</h4>
          <Link to={`full/${id}`}>
            <button className={styles.options}>
              <span></span>
            </button>
          </Link>
        </div>
        <div className={styles.bottom}>
          <div className={styles.tagwrap}>
            {tags.map((el, idx) => (
              <Tag color={el} size="s" key={idx}></Tag>
            ))}
          </div>
          {!!indicators ? <Indicators warning={indicators.warning} comment={indicators.comment}></Indicators> : ''}
        </div>
      </Link>
    </div>
  )
}
