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
  function handleCancel(){
    navigate("..");
  }
  return (
    <Form className="forms">
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
      
      

      <Stack direction="horizontal" gap={4}className="justify-content-end mt-3"> 
       <Link to="/">
         <Button
  className="b1" 
  type="submit" onClick={handleClick} style={{backgroundColor: "#370140"}}>Save</Button>
         </Link>
      
        <Button 
          className="b2" onClick={handleCancel} type="button" style={{backgroundColor: "#370140"}}>Cancel</Button>
        
      </Stack>

    </Form>
  );
}

export default NoteForm;