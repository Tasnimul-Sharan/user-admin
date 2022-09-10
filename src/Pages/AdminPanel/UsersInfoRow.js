import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const UsersInfoRow = ({ user, setReload, reload, refetch }) => {
  const { _id, userName, member, time, date } = user;
  const handleDelete = (id) => {
    fetch(`https://pure-badlands-00734.herokuapp.com/usersInfo/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.error("You have Deleted a user info");

          setReload(reload);
        }
        refetch();
      });
  };
  return (
    <tr>
      <td>{_id}</td>
      <td>{userName}</td>
      <td>{member}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <Button onClick={() => handleDelete(_id)} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default UsersInfoRow;
