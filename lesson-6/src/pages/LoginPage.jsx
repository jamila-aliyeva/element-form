import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (user.username === "jamila" && user.password === "2006") {
      navigate("/homepage");
    } else {
      toast.error("Error");
    }
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Form onSubmit={submit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={user.username}
            onChange={handleUser}
            required
            type="text"
            placeholder="username"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={user.password}
            onChange={handleUser}
            required
            type="password"
            placeholder="password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button className="mt-3" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
