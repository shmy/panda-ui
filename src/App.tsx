import React from 'react'
import Index from './pages/index'
import { baseUrl } from './utils/constant'
import './App.css'

const App: React.FC = () => {
  console.log(baseUrl)
  return (
    <>
      <h3 style={{ textAlign: 'center', color: 'red' }}>You are now {process.env.NODE_ENV}</h3>
      <Index/>
    </>
  )
}

export default App
