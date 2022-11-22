import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style={{color:"white",fontSize:22,textDecoration:"none"}} to={'/'}>Склад</NavLink>
                <Nav className="ml-auto">
                    <NavLink style={{color:"white",fontSize:16,textDecoration:"none",marginLeft:15}} to={'/orders'}>Отгрузки</NavLink>
                    <NavLink style={{color:"white",fontSize:16,textDecoration:"none",marginLeft:15}} to={'/employeers'}>Сотрудники</NavLink>
                    <NavLink style={{color:"white",fontSize:16,textDecoration:"none",marginLeft:15}} to={'/suppliers'}>Поставщики</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;