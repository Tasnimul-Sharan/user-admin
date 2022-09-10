import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [updateProfile, updating] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (error) {
    console.error(error);
  }

  if (loading) {
    return <Loading />;
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Your password must be in 6 number or longer");
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  return (
    <div className="my-5">
      <h1>Sign Up</h1>
      <Form
        style={{ width: "25rem" }}
        className="container shadow-lg p-5 text-start form-group"
        onSubmit={handleSignUp}
      >
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="info text-white w-100" type="submit">
          Submit
        </Button>
      </Form>
      <p className="m-3">
        Already have an account?
        <Link className="text-primary text-decoration-none m-2" to="/login">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
