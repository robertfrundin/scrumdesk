import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { store } from './Redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main/Main'
import { Ticket } from './pages/Ticket/Ticket'
import { CreateModal } from './components/CreateModal/CreateModal'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Main></Main>}></Route>
        <Route path="create" element={<Main createModal={true}></Main>}></Route>
        <Route path="edit/:ticketId" element={<Main editModal={true}></Main>}></Route>
        <Route path="full/:ticketId" element={<Ticket></Ticket>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
