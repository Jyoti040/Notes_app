import {Form, Col ,Row , Stack ,Button } from 'react-bootstrap';

import ReactDOM from "react-dom/client";
import {useRef,useState,useHistory}  from "react"
import './NoteForm.css'
import {Link ,useNavigate, Navigate} from "react-router-dom"
function NoteForm({onSubmit1,title="",
                   markdown=""}){
  const navigate=useNavigate();
  const titleRef=useRef(null);
 const markdownRef=useRef(null);
  
  const styles1={backgroundColor: "#370140", height:'3.5em' , width : '7em', fontSize:'1.5vh'}
  const styles2={fontSize:'3vh'}
  const styles3={fontSize:'2.5vh'}
  
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
    <div className='form-container'>
    <Form className="forms" >
    <Stack gap={5}>
      <Row>
      <Col>
      <Form.Group controlId="title">
        <Form.Label style={styles2}>Title</Form.Label>
        <Form.Control required
          style={styles3}
ref={titleRef} defaultValue={title}
      />
      </Form.Group>
      </Col>
      </Row>

      <Form.Group controlId="markdown">
        <Form.Label style={styles2}>Body</Form.Label>
        <Form.Control required     as="textarea" rows={10}
          style={styles3}
      ref={markdownRef}
defaultValue={markdown}
                />
      </Form.Group>
      </Stack>
      
      

      <Stack direction="horizontal" gap={4}className="justify-content-end mt-3"> 
       <Link to="/">
         <Button
  className="b1" 
  type="submit" onClick={handleClick} style={styles1}>Save</Button>
         </Link>
      
        <Button 
          className="b2" onClick={handleCancel} type="button" style={styles1}>Cancel</Button>
        
      </Stack>

    </Form>
    </div>
  );
}

export default NoteForm;