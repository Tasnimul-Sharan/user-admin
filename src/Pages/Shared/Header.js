import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Header = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className=" sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark p-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span>Hello User</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {admin && (
                <>
                  <Nav.Link as={Link} to="/user">
                    Make Admin
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button className="btn btn-primary" onClick={handleSignOut}>
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}

              <li>{user && <Button>{user.displayName}</Button>}</li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
