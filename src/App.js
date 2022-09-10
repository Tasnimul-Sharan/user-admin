import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Header from "./Pages/Shared/Header";
import RequireAuth from "./Pages/Login/RequireAuth";
import Users from "./Pages/AdminPanel/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
