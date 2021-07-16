import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import {link } from 'react'


const Nav = ()=>{
    return(
    <Navbar expand="lg" variant="White" bg="dark">
  <Container>
    <Navbar  style={{textDecoration:'none',color:'white'}}>Home </Navbar>
  </Container>
</Navbar>)
}

export default Nav;