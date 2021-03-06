import React from 'react'
import logo from "../imagelogo/logo3.png"
import { Navbar, Nav, Form, FormControl} from "react-bootstrap";
import { NavLink,useHistory } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = ({handleSearch}) => {
    let history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault()
        history.push('/search');
      }
    return (
    <Navbar variant="dark" className="nav-dark" fixed="top">
        <Navbar.Brand><img src={logo} alt="NetFlix" width="175px"/></Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
        <Nav.Link as={NavLink} to="/favorite">Favorite</Nav.Link>
        </Nav>
        <Form onSubmit={handleSubmit}>
        {/* <FaSearch style={{color:"white"}} /> */}
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearch} />
        </Form>
    </Navbar>
    )
}

export default NavigationBar