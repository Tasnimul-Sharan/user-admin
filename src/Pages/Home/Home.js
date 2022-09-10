import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Users from "../AdminPanel/Users";
import UsersInfo from "../AdminPanel/UsersInfo";
import Login from "../Login/Login";
import RequireAdmin from "../Login/RequireAdmin";
import SelectMemberForm from "./SelectMemberForm";

const Home = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      {/* */}
      {!admin && (
        //   <h1>The Form</h1>
        <SelectMemberForm />
      )}
      {admin && <UsersInfo />}
    </div>
  );
};

export default Home;
