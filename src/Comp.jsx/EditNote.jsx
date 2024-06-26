import React from 'react'
import NoteForm from './NoteForm.jsx'
import { UseNote} from "./NotesLayout.jsx"
  function EditNote({onSubmit2}){
    const note=UseNote();
    return (
      <div  style={{marginTop:'30px'}}>
      <h1 className="heading mb-4" style={{textAlign:'center',fontSize:'7vh'}}>Edit Note</h1>
      <NoteForm onSubmit1={data=> onSubmit2(note.id,data)} 
title ={note.data.title} 
markdown={note.data.markdown}/>
      </div>
    );
  }

export default EditNote;
