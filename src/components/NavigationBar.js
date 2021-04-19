import React from 'react'
import logo from "../imagelogo/logo3.png"
import { Navbar, Nav, Form, FormControl} from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
    return (
    <Navbar variant="dark" className="nav-dark" fixed="top">
        <Navbar.Brand><img src={logo} alt="NetFlix" width="175px"/></Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
        <Nav.Link as={NavLink} to="/favorite">Favorite</Nav.Link>
        </Nav>
        <Form inline>
        {/* <FaSearch style={{color:"white"}} /> */}
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
    </Navbar>
    )
}

export default NavigationBar
