import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
// import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0;// && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <div>
    <Card bg='dark' text='white' style={{width:'36rem', margin:'0 auto 0 auto'}}>
      <div className="card-header">
          <h2 style={{textAlign:'center'}}>Task Description</h2>
      </div>
      <div className="card-body">
      
      <p>You will be playing the role of a security guard for the Transportation Security Administration. <b>Your job is to scan the x-rays of passengers' bags for guns or knives.</b> If the bag contains a 
          gun or a knife, click "Contraband Present." All other bags will "No Contraband."</p>
          <p><b>Most bags will not have suspicious items in them.</b> You will have ten seconds per image to select an option before it automatically advances. This demo contains five
          example images. The real task will have many more and will require you to remain attentive for up to 10 minutes. Do your best!</p>      
      </div>
   </Card>
   <br>
   </br>
    <Card className="text-center" style={{width:'24rem', margin:'0 auto 0 auto'}}>
      <Card.Header><h3>Unique Identifier</h3></Card.Header>
      <Card.Body>
        <Card.Title><h4>Enter your unique id</h4> <p>(email or Mechanical Turk id #):</p></Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          
          <Link to='/app'>
          <Button block size="lg" type="submit" disabled={!validateForm()} >
            Continue
          </Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Login;  