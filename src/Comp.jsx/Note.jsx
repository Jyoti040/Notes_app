import {Row, Col, Button,Stack} from "react-bootstrap"
import { UseNote} from "./NotesLayout.jsx"
import ReactMarkdown from "react-markdown"
import {Link} from "react-router-dom"
function Note({DeleteNote}){
  const note=UseNote();
  function onDelete(){
    DeleteNote(note.id);
  }
  return (
    <>
    <Row className="align-items-center mb-4">
    <Col>
    <h1>{note.data.title}</h1>
    </Col>
      
    <Col xs="auto">
      <Stack direction="horizontal" gap={2}>
    <Link to={`/${note.id}/edit`}>
     <Button
className="buttons" 

       type="button" variant="primary">Edit </Button>
    </Link>
      
     <Button 
       className="buttons" 
       onClick={onDelete}type="button" variant="outline-danger"> Delete</Button>

      <Link to="/">
     <Button type="button" 
       className="buttons" 
       variant="outline-secondary"> Back</Button>
    </Link>
        </Stack>
    </Col>
    </Row>
      <ReactMarkdown>{note.data.markdown}</ReactMarkdown>
    </>
  );
}

export default Note;