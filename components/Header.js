import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './filmLogo.jpeg';

function Header() {

    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt="OMDB API"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      OMDB Search & Nominate 5
    </Navbar.Brand>
  </Navbar>
</>
    )
}

export default Header;