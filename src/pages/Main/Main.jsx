import React, { useState } from 'react'
import styles from './styles.module.css'
import { Task } from '../../components/Task/Task'
import { Filter } from './parts/Filter/Filter'
import { Button } from '../../components/Button/Button'
import { CreateModal } from '../../components/CreateModal/CreateModal'
import { EditModal } from '../../components/EditModal/EditModal'
import { store } from '../../Redux'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateModal } from '../../Redux/toolkitSlice'

export const Main = () => {
  let isCreateModalOpened = useSelector((state) => state.toolkit.createModalOpened)
  const tickets = useSelector((state) => state.toolkit.tickets)
  const dispatch = useDispatch()
  return (
    <div className={styles.page}>
      {isCreateModalOpened === true ? <CreateModal></CreateModal> : ''}
      <Filter></Filter>
      <main className={styles.main}>
        <div className={styles.column}>
          <h5 className={styles.column__header}>Todo</h5>
          <div className={styles.column__body}>
            {tickets.todo.map((el, idx) => {
              return <Task name={el.name} tags={el.tags} indicators={el.indicators} key={idx}></Task>
            })}

            <Button type="createTicket" text="Добавить тикет" plus={true}></Button>
          </div>
        </div>
        <div className={styles.column}>
          <h5 className={styles.column__header}>In Progress</h5>
          <div className={styles.column__body}>
            {tickets.inprogress.map((el, idx) => {
              return <Task name={el.name} tags={el.tags} indicators={el.indicators} key={idx}></Task>
            })}
            <Button type="createTicket" text="Добавить тикет" plus={true}></Button>
          </div>
        </div>
        <div className={styles.column}>
          <h5 className={styles.column__header}>Done</h5>
          <div className={styles.column__body}>
            {tickets.done.map((el, idx) => {
              return <Task name={el.name} tags={el.tags} indicators={el.indicators} key={idx}></Task>
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
