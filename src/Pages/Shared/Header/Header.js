import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../Images/logo.png'
import './header.css'

const Header = () => {
  const {user,logOut} = useAuth();
  console.log(user)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg=""  style={{backgroundColor:'#171C2A'}} className="menu" fixed="top">
  <Container>
  <Navbar.Brand href="#home"><img className= "logo" src={logo} alt="" /> <span className="brandName"  style={{color:'#E9F716'}}>CAMERA WORLD</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto menu align-center">
      <Nav.Link as={Link} to="/home" className="menu" style={{color:'#E9F716'}}>Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#gallary" className="menu" style={{color:'#E9F716'}}>Gallary</Nav.Link>
      <Nav.Link as={HashLink} to="/home#products" className="menu" style={{color:'#E9F716'}}>Products</Nav.Link>
      <Nav.Link as={HashLink} to="/home#review" className="menu" style={{color:'#E9F716'}}>Review</Nav.Link>
      {
        user?.email ?
        <>
      <Nav.Link to="#logout" style={{color:'red',backgroundColor:'#0a0c13' ,borderRadius:'10px'}} onClick={logOut}> Sign Out</Nav.Link>
      <Nav.Link  as={Link}  to="/dashbord" className="menu" style={{color: "#fff"}}>Dashbord</Nav.Link>
      </>
      :
      <>
      <Nav.Link  as={Link}  to="/login" className="menu" style={{color: "#fff"}}>Sign In</Nav.Link>
      <Nav.Link  as={Link}  to="/register" className="menu" style={{color: "#fff"}}>Register</Nav.Link>
      </>
      }
      {user?.email && <Nav.Link  className="menu" style={{color:'#fff',fontWeight:'bold',marginLeft:''}}><img src={user?.photoURL} alt="" style={{width:"30px",height:"30px",borderRadius:"50%"}}/> <small>{user?.displayName}</small> </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;