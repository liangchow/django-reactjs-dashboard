import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Register  from './pages/Register'

function Logout(){
  localStorage.clear()
  return <Navigate to='/login' />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <>
      
    </>
  )
}

export default App
