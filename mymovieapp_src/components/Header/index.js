import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

    const navLinks = [
        {
            display: 'Home',
            link: '/'
        },
        {
            display: 'Movies',
            link: '/movies'
        },
        {
            display: 'Series',
            link: '/series'
        },
        {
            display: 'Search',
            link: '/search'
        }
    ]

  return (
    <header className="header">
        <Navbar bg='dark' expand="lg">
            <Container>
                <Navbar.Brand>
                    MyMovieApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll>
                    {
                        navLinks.map((item, index) => {
                            return (
                                <Nav key={index}>
                                    <Link to={item.link}>{item.display}</Link>
                                </Nav>
                            )
                        })
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
