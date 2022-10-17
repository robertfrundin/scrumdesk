import styles from './style.module.css'
import arrow from './assets/arrow.svg'
import { Input } from '../../components/Input/Input'
import { Tag } from '../../components/Tag/Tag'
import { Comment } from '../../components/Comment/Comment'
import { Button } from '../../components/Button/Button'
export const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <button className={styles.back}>
        <img src={arrow} alt="" />
        Вернуться к задачам
      </button>
      <div className={styles.options}>
        <span></span>
        <div className={styles.options__popup}>
          <button>Удалить</button>
          <button>Редактировать</button>
          <button className={styles.options__popup__close}></button>
        </div>
      </div>
      <h5 className={styles.task__category}>Todo</h5>
      <div className={styles.task__content}>
        <Input placeholder="Нарисовать иллюстрации"></Input>
        <Input placeholder="Подробное описание" multiline={true}></Input>
        <div className={styles.tagwrap}>
          <Tag color="red" size="m"></Tag>
          <Tag color="yellow" size="m"></Tag>
        </div>
        <Comment
          author="Иван Иванов"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        ></Comment>
        <button className={styles.addcomment}>Добавить комментарий</button>
        <div className={styles.savebutton__container}>
          <Button text="Сохранить" size="s"></Button>
        </div>
      </div>
    </div>
  )
}
