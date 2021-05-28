import React from 'react'; 
import { Navbar, Nav} from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="dark" style={{backgroundColor: "282c34"}} expand="sm">
        <Navbar.Brand href="#home" style={{color: "white"}}>Bababooey Coin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{color: "white"}}>
          <Nav className="mr-auto">
            <Nav.Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xae8cb2db90fb3bb3da5dd33a6dfb89a7ef3860d9https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xae8cb2db90fb3bb3da5dd33a6dfb89a7ef3860d9" style={{color: "white"}}>Buy on BOEY PancakeSwap</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;