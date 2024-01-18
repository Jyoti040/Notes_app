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
    <Row className="align-items-center m-4">
    <Col>
    <h1 className="heading1 m-3">{note.data.title}</h1>
    </Col>
      
    <Col xs="auto">
      <Stack direction="horizontal" gap={2}>
    <Link to={`/${note.id}/edit`}>
    
      
<Button
className="buttons mt-3"
type="button"
style={{backgroundColor: "#370140"}}>Edit</Button>
    </Link>

<Button 
className="buttons mt-3"
onClick={onDelete}
type="button p-3"
style={{backgroundColor: "#370140"}}>Delete</Button>
<Link to="/">
<Button
type="button"
className="buttons mt-3"
style={{backgroundColor: "#370140"}}>Back</Button>
</Link>     
        </Stack>
    </Col>
    </Row>
      <ReactMarkdown className="data m-3">{note.data.markdown}</ReactMarkdown>
    </>
  );
}

export default Note;