import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css'
import Axios from 'axios';
export const Addgame = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const[stock,setStock]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }
    Axios.defaults.withCredentials = true;
    const add = ()=>{
      // .preventDefault()
      var params = {title:title,picture:picture,description:description,price:price,stock:stock}
      Axios.post(`http://localhost:5000/admin/add`,params,config)
      .then(result=>{
          console.log(result);

      })
    }
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center"}}>
      <Button variant="danger" style={{backgroundColor:"purple"}}  onClick={handleShow}>
        add game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add game</Modal.Title>
        </Modal.Header>
        <Form  onSubmit={add}>
        <Modal.Body>
          
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">title</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          // value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">description</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          // value={posterUrl}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">picture</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          // value={description}
          onChange={(e)=>setPicture(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">price</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          // value={rating}
          onChange={(e)=>setPrice(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">stock</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          // value={rating}
          onChange={(e)=>setStock(e.target.value)}
        />
      </InputGroup>
        
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type='submit' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleClose}>
            Save Changes
          </Button>
          
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
    </div>
  )
}
