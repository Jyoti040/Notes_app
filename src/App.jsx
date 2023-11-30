import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import {Container} from 'react-bootstrap'
import NewNote from './Comp.jsx/NewNote.jsx'
import EditNote from './Comp.jsx/EditNote.jsx'
import Note from './Comp.jsx/Note.jsx'
import NoteList from './Comp.jsx/NoteList.jsx'
import NoteForm from './Comp.jsx/NoteForm.jsx'
import NotesLayout from './Comp.jsx/NotesLayout.jsx'
import {useState ,useEffect} from "react"
import {v4 as uuid} from "uuid"

function App(){
  const [notes,setNotes] =useState([]);
  function createNote(data){
    setNotes( (prev)=>[...prev,
              {data,
               id: uuid()
              }])
  }  
  function updateNote(id,data){
    setNotes(
      (prev=>{
      return prev.map(note=>{
        if(note.id===id){
          return {...note,data}
        }
        else{
          return note;
        }
      })
        
        } )
    )
    }
function DeleteNote(id){
  setNotes(prev=>{
    return prev.filter(note=>note.id !== id);
  })
}
  useEffect( 
    ()=>{
      window.localStorage.setItem("NOTES",JSON.stringify(notes))
    }
    ,[notes])

  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("NOTES"));
  if (Array.isArray(data)) {
   setNotes(data);
  }
}, []);
  return (
  
      <Container className="m-4">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteList notes={notes}/>}/>
          
          <Route path="/new" element={<NewNote onSubmit1={createNote}/>} />
          <Route path="/:id" element={<NotesLayout notes={notes}/>}>
            <Route index element={<Note DeleteNote={DeleteNote}/>}/>
            <Route path="edit" element={<EditNote onSubmit2={updateNote}/>}/>
            </Route>
          <Route path="*" element={<Navigate to="/" />} />
      
      </Routes>
      
    </BrowserRouter>
        </Container>
  );
      
    
}

export default App;