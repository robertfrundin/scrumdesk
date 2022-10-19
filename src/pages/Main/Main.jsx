import React, { useState } from 'react'
import styles from './styles.module.css'
import { Task } from '../../components/Task/Task'
import { Filter } from './parts/Filter/Filter'
import { Button } from '../../components/Button/Button'
import { CreateModal } from '../../components/CreateModal/CreateModal'
import { EditModal } from '../../components/EditModal/EditModal'
import { store } from '../../Redux'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateModal, clearColors, editTicket } from '../../Redux/toolkitSlice'
import { Link } from 'react-router-dom'
import { createSelector } from 'reselect'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export const Main = ({ createModal, editModal }) => {
  const selectTickets = (state) => state.toolkit.tickets
  const ticketsSelector = createSelector(selectTickets, (items) =>
    items.reduce(
      (res, item) => {
        switch (item.category) {
          case 'Todo':
            res.todos.push(item)
            break

          case 'In progress':
            res.inProgress.push(item)
            break
          case 'Done':
            res.done.push(item)
            break
        }
        return res
      },
      { todos: [], inProgress: [], done: [] }
    )
  )
  const tickets = useSelector(ticketsSelector)
  const dispatch = useDispatch()
  const onDragEnd = (result) => {
    store.dispatch(editTicket({ id: result.draggableId, category: result.destination.droppableId }))
  }
  return (
    <div className={styles.page}>
      {!!createModal ? <CreateModal></CreateModal> : ''}
      {!!editModal ? <EditModal></EditModal> : ''}
      <Filter></Filter>
      <main className={styles.main}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="Todo">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className={styles.column}>
                <h5 className={styles.column__header}>Todo</h5>
                <div className={styles.column__body}>
                  {tickets.todos.map((el, idx) => {
                    return (
                      <Draggable draggableId={String(el.id)} key={el.id} index={idx}>
                        {(provided) => (
                          <span className={styles.dragitem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            {' '}
                            <Task name={el.name} tags={el.tags} indicators={el.indicators} id={el.id}></Task>
                          </span>
                        )}
                      </Draggable>
                    )
                  })}

                  <Link to={'create'}>
                    <Button type="createTicket" text="Добавить тикет" plus={true}></Button>
                  </Link>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="In progress">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className={styles.column}>
                <h5 className={styles.column__header}>In progress</h5>
                <div className={styles.column__body}>
                  {tickets.inProgress.map((el, idx) => {
                    return (
                      <Draggable draggableId={String(el.id)} key={el.id} index={idx}>
                        {(provided) => (
                          <span className={styles.dragitem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            {' '}
                            <Task name={el.name} tags={el.tags} indicators={el.indicators} id={el.id}></Task>
                          </span>
                        )}
                      </Draggable>
                    )
                  })}

                  <Link to={'create'}>
                    <Button type="createTicket" text="Добавить тикет" plus={true}></Button>
                  </Link>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>{' '}
          <Droppable droppableId="Done">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className={styles.column}>
                <h5 className={styles.column__header}>Done</h5>
                <div className={styles.column__body}>
                  {tickets.done.map((el, idx) => {
                    return (
                      <Draggable draggableId={String(el.id)} key={el.id} index={idx}>
                        {(provided) => (
                          <span className={styles.dragitem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            {' '}
                            <Task name={el.name} tags={el.tags} indicators={el.indicators} id={el.id}></Task>
                          </span>
                        )}
                      </Draggable>
                    )
                  })}

                  <Link to={'create'}>
                    <Button type="createTicket" text="Добавить тикет" plus={true}></Button>
                  </Link>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </main>
    </div>
  )
}
