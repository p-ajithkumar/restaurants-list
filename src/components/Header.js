import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://cdn.iconscout.com/icon/free/png-256/restaurant-1495593-1267764.png"
          width="45"
          height="45"
          className="d-inline-block align-top"
        />{''}
        &nbsp; Food Circles
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header