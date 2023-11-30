import {Form, Col ,Card,Row , Stack ,Button } from 'react-bootstrap';
import React from  'react';
import styles from "./NoteList.module.css"
import {useState,useMemo} from "react"
import {Link } from "react-router-dom";
function NoteList({notes}){
  const [title,setTitle]=useState("");
  const filteredNote= useMemo(
   ()=>{
   return  notes.filter( (note)=>{
       return (title==="" || note.data.title.toLowerCase().includes(title.toLowerCase()))
     })
   } ,[title,notes]
  );
  return (
    <>
    <Row className="align-items-center mb-4">
    <Col>
    <h1>Home</h1>
    </Col>
    <Col xs="auto">
    <Link to="/new">
     <Button
       type="button" variant="primary">Create </Button>
    </Link>
    </Col>
    </Row>

      <Form onSubmit={(e)=>{
        e.preventDefault();
      }}>
      <Form.Group controlId="title">
        <Form.Label></Form.Label>
        <Form.Control placeholder ="Search notes" value={title} 
          onChange={(e)=>{setTitle(e.target.value)}}
          /> 
        </Form.Group>
      </Form>
     <br/>
      <Row xs={1} sm={2} lg={3} xl={4}>
  { filteredNote.map(
        (note) =>{
          return (
            <>
<Col key={note.id} className="mb-4">
          <NoteCard id={note.id} title={note.data.title}
            />
           
         </Col>
          
            </>
          );
       })}
        
      </Row>
    
    </>
  );
}

function NoteCard({id,title}){
  return (
    <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none ${styles.card} mb-2`}>
    <Card.Body>
    <Stack className="align-items-center justify-content-center h-100">
      <span className="h4">{title}
      </span>
    </Stack>
    </Card.Body>
    </Card>
    
  );
  
}

export default NoteList;