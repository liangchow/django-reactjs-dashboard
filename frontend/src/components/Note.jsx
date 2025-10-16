import React from 'react'

export default function Note({note, onDelete}) {
  return (
    <div className='note-container'>
        <p className='note-title'>{note.title}</p>
        <p className='note-content'>{note.content}</p>
        <p className='note-date'>{note.title}</p>
        <button className='delete-button' onClick={()=>onDelete(note.id)}>
            Delete
        </button>
    </div>
  )
}
