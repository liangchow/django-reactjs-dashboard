import React from 'react'
import { useState, useEffect } from 'react'
import api from '../api'

export default function Home() {

  const [notes, setNotes] = useState([])
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  const getNote = () => {
    api.get('api/notes/')
      .then((res) => res.data)
      .then((data) => setNotes(data))
      .catch((err => alert(err)))
  }



  return (
    <div>Home</div>
  )
}
