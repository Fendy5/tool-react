import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'styles/index.scss'
import { MyLayout } from './layout'
import { Login } from './pages/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/*'} element={<MyLayout />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </Router>
  )
}
export default App
