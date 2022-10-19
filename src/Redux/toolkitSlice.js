import { createSlice } from '@reduxjs/toolkit'
const myState = {
  deleteModalOpened: false,
  selectedColors: [],
  tickets: [
    {
      category: 'Todo',
      name: 'Создать проект',
      tags: ['violet', 'red'],
      indicators: {
        warning: true,
      },
      id: 0,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },
    {
      category: 'Todo',
      name: 'Нарисовать иллюстрации',
      tags: ['violet', 'green', 'red'],

      id: 1,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },
    {
      category: 'Todo',
      name: 'Нарисовать иллюстрации',
      tags: ['violet', 'green', 'red'],
      indicators: {
        warning: true,
        comment: true,
      },
      id: 2,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },

    {
      category: 'In progress',
      name: 'Нарисовать иллюстрации',
      tags: ['violet', 'green', 'red'],
      indicators: {
        warning: true,
        comment: true,
      },
      id: 3,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },
    {
      category: 'In progress',
      name: 'Нарисовать иллюстрации',
      tags: ['violet', 'green', 'red'],
      indicators: {
        warning: true,
        comment: true,
      },
      id: 4,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },
    {
      category: 'In progress',
      name: 'Удалить все',
      tags: ['violet'],
      indicators: {
        warning: true,
        comment: true,
      },
      id: 5,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },

    {
      category: 'Done',
      name: 'Нарисовать иллюстрации',
      tags: ['violet', 'green', 'red'],
      indicators: {
        warning: true,
        comment: true,
      },
      id: 6,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },
    {
      category: 'Done',
      name: 'Нарисовать иллюстрации',
      tags: ['violet', 'green', 'red'],
      indicators: {
        warning: true,
        comment: true,
      },
      id: 7,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },
    {
      category: 'Done',
      name: 'Купить воды',
      tags: ['blue'],
      indicators: {
        comment: true,
      },
      id: 8,
      comments: [{ author: 'Иван', text: 'Просто комментарий' }],
    },
  ],
}
const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: myState,
  reducers: {
    setDeleteModal(state) {
      state.deleteModalOpened = !state.deleteModalOpened
    },
    deleteTicket(state, action) {
      const index = state.tickets.findIndex((el) => el.id == action.payload)
      state.tickets.splice(index, 1)
    },
    addColor(state, action) {
      state.selectedColors.push(action.payload)
    },
    removeColor(state, action) {
      const index = state.selectedColors.indexOf(action.payload)
      state.selectedColors.splice(index, 1)
    },
    clearColors(state) {
      state.selectedColors = []
    },
    createTicket(state, action) {
      state.tickets.push(action.payload)
    },
    editTicket(state, action) {
      const idx = state.tickets.findIndex((el) => el.id == action.payload.id)

      for (let key of Object.keys(action.payload)) {
        state.tickets[idx][key] = action.payload[key]
      }
    },
    addComment(state, action) {
      const idx = state.tickets.findIndex((el) => el.id == action.payload.id)
      state.tickets[idx].comments ? state.tickets[idx].comments.push(action.payload.comment) : (state.tickets[idx].comments = [action.payload.comment])
    },
  },
})
export default toolkitSlice.reducer
export const { addComment, deleteTicket, setDeleteModal, clearColors, createTicket, editTicket, addColor, removeColor, setCreateModal } = toolkitSlice.actions
