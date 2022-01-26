import React from 'react';
// import { Navbar, NavItem } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import {Link} from 'react-router-dom';
// import LogoutButton from './LogoutButton';
import './Header.css';

class Header extends React.Component{
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Code Fellows</Navbar.Brand>
    </Navbar>
    )
  }
}


export default Header;
