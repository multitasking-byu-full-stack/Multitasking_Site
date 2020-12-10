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
    // <div>
    <Card className="text-center" style={{width:'24rem', margin:'0 auto 0 auto'}}>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Card.Title>Enter your same email address:</Card.Title>
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
    // </div>
  );
}

export default Login;  