import { createSlice } from '@reduxjs/toolkit'
const myState = {
  createModalOpened: false,
  tickets: {
    todo: [
      {
        name: 'Создать проект',
        tags: ['violet', 'red'],
        indicators: {
          warning: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
      {
        name: 'Нарисовать иллюстрации',
        tags: ['violet', 'green', 'red'],

        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
      {
        name: 'Нарисовать иллюстрации',
        tags: ['violet', 'green', 'red'],
        indicators: {
          warning: true,
          comment: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
    ],
    inprogress: [
      {
        name: 'Нарисовать иллюстрации',
        tags: ['violet', 'green', 'red'],
        indicators: {
          warning: true,
          comment: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
      {
        name: 'Нарисовать иллюстрации',
        tags: ['violet', 'green', 'red'],
        indicators: {
          warning: true,
          comment: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
      {
        name: 'Удалить все',
        tags: ['violet'],
        indicators: {
          warning: true,
          comment: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
    ],
    done: [
      {
        name: 'Нарисовать иллюстрации',
        tags: ['violet', 'green', 'red'],
        indicators: {
          warning: true,
          comment: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
      {
        name: 'Нарисовать иллюстрации',
        tags: ['violet', 'green', 'red'],
        indicators: {
          warning: true,
          comment: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
      {
        name: 'Купить воды',
        tags: ['blue'],
        indicators: {
          comment: true,
        },
        comment: {
          author: 'Иванов Иван',
          text: 'Просто комментарий',
        },
      },
    ],
  },
}
const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: myState,
  reducers: {
    createTicket(state, action) {
      state.tickets[action.payload.category].push(action.payload.ticket)
    },
    setCreateModal(state) {
      state.createModalOpened = !state.createModalOpened
    },
  },
})
export default toolkitSlice.reducer
export const { createTicket, setCreateModal } = toolkitSlice.actions
