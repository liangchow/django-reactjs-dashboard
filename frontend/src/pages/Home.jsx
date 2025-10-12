import React from 'react'
import { useState, useEffect } from 'react'
import api from '../api'

export default function Home() {

  const [notes, setNotes] = useState([])
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  const getNote = () => {
    api.get()
  }



  return (
    <div>Home</div>
  )
}
