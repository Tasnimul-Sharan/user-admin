import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://pure-badlands-00734.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} refetch={refetch} />
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
