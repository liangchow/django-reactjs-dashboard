import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'


function Logout(){
  localStorage.clearn()
  return <Navigate to='/login' />
}

function App() {

  return (
    <>
      
    </>
  )
}

export default App
