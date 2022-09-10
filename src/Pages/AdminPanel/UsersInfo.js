import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersInfoRow from "./UsersInfoRow";

const UsersInfo = () => {
  const [reload, setReload] = useState(true);
  //   const [deleteBill, setDeleteBill] = useState(true);
  const {
    data: usersInfo,
    isLoading,
    refetch,
  } = useQuery("usersInfo", () =>
    fetch("https://pure-badlands-00734.herokuapp.com/usersInfo", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(usersInfo);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Member</th>
          <th>Date</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {usersInfo.map((user) => (
          <UsersInfoRow
            key={user._id}
            user={user}
            refetch={refetch}
            reload={reload}
            setReload={setReload}
          ></UsersInfoRow>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersInfo;
