import React from 'react'
import NoteForm from './NoteForm.jsx'
  function NewNote({onSubmit1}){
    return (
      <div className='main' style={{marginTop:'30px'}}>
      <h1 className="heading mb-5" style={{textAlign:'center',fontSize:'7vh'}}>New Note</h1>
      <NoteForm onSubmit1={onSubmit1} />
      </div>
    );
  }

export default NewNote;
