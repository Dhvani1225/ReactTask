import React from "react";
import "./todoList.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

function navbar() {

    return (
        <div style={{ display: 'inline-block', justifyContent: 'center', alignItems: 'self-start' }}>
            <Navbar bg="black" variant="dark" className="nav">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/List" className="home">List</Nav.Link>
                        <Nav.Link href="/Feed" className="feed">Feed</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )

}
export default navbar;