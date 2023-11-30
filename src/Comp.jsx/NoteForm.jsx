import {Form, Col ,Row , Stack ,Button } from 'react-bootstrap';

import ReactDOM from "react-dom/client";
import {useRef,useState,useHistory}  from "react"
import {Link ,useNavigate, Navigate} from "react-router-dom"
function NoteForm({onSubmit1,title="",
                   markdown=""}){
  const navigate=useNavigate();
  const titleRef=useRef(null);
 const markdownRef=useRef(null);
  
  
  function handleClick(e){
    e.preventDefault();
    const t1=titleRef.current.value;
   const m1=markdownRef.current.value;
    onSubmit1({title:t1,markdown:m1});
    navigate("..");
  }
  return (
    <Form >
    <Stack gap={5}>
      <Row>
      <Col>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control required
          
ref={titleRef} defaultValue={title}
      />
      </Form.Group>
      </Col>
      </Row>

      <Form.Group controlId="markdown">
        <Form.Label>Body</Form.Label>
        <Form.Control required     as="textarea" rows={10}
          
      ref={markdownRef}
defaultValue={markdown}
                />
      </Form.Group>
      </Stack>
      
      <Stack direction="horizontal" gap={3} className="justify-content-end mt-3"> 
       <Link to="/">
         <Button  variant="outline-primary" type="submit" onClick={handleClick}>Save</Button>
         </Link>
      
        <Button  variant="outline-danger" type="button" >Cancel</Button>
        
      </Stack>
    </Form>
  );
}

export default NoteForm;