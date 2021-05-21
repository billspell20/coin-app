import React from 'react'; 
import { Navbar, Nav} from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="dark" style={{backgroundColor: "282c34"}} expand="sm">
        <Navbar.Brand href="#home" style={{color: "white"}}>CoinTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{color: "white"}}>
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;