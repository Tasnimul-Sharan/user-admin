import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const SelectMemberForm = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    axios
      .post("https://pure-badlands-00734.herokuapp.com/usersInfo", data)
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (data) {
          toast.success("You have added a new User Information, Yeah!!!");
        }
      });
  };
  return (
    <div className="mx-auto container my-5 d-flex justify-content-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="shadow-lg w-50 p-5 ">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={user?.displayName}
            {...register("userName")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="email"
            value={user?.email}
            {...register("email")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select {...register("member")}>
            <option value="Select">Select Member</option>
            <option>Abdul Korim</option>
            <option>Abdul Rahim</option>
            <option>Omar Faruk</option>
            <option>Abu Bokkor</option>
            <option>Ahmed Kabir</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            placeholder="Enter Date"
            {...register("date")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="time"
            placeholder="Enter Time"
            {...register("time")}
          />
        </Form.Group>
        <Button className="w-50" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default SelectMemberForm;
