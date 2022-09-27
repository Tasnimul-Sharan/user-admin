import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import "react-toastify/dist/ReactToastify.css";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading) {
    return <Loading />;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    if (email !== password) {
      // setError("Please Enter an Valid Email or Password");
      swal("Good Job!", "You are Loged In!", "success");
    }
    // else {
    // }
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div className=" my-5 ">
      <h1>Log In</h1>
      <Form
        onSubmit={handleLogin}
        style={{ width: "25rem" }}
        className="container shadow-lg p-5 form-group   text-start "
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <span className="text-danger">{error}</span> */}
        <Button variant="info text-white w-100" type="submit">
          Login
        </Button>
      </Form>
      <p className="m-3">
        <Link className="text-primary text-decoration-none" to="/signup">
          <Button variant="success">Create a new account</Button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
