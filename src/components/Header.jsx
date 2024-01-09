import React from 'react'
import Search from './Search'

function Header({searchNote}) {
  return (
    <div className='note-app__header'>
        <img src="/notes.svg" alt="logo notes" />
        <h1>Notes App</h1>
        <Search onSearch={searchNote} />
    </div>
  )
}

export default Header