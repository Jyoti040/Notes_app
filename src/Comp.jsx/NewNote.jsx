import React from 'react'
import NoteForm from './NoteForm.jsx'
  function NewNote({onSubmit1}){
    return (
      <div>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit1={onSubmit1} />
      </div>
    );
  }

export default NewNote;
