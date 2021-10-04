import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className="mx-2" to="/home">
                            Home
                        </NavLink>
                        <NavLink className="mx-2" to="/services">
                            Services
                        </NavLink>
                        <NavLink className="mx-2" to="/about">
                            About
                        </NavLink>
                        <NavLink className="mx-2" to="/inventory">
                            Inventory
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
