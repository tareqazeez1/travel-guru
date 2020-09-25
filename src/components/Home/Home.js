import React from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png';
import './Home.css';

const Home = () => {
    return (

        <Container>

            <Navbar variant="dark">
                <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">


                    <Form>
                        <FormControl variant='white' type="text" placeholder="Search Your Destination..." className="mr-sm-2" />
                    </Form>

                    <Link className='navBar ml-5' to="home">Home</Link>
                    <Link className='navBar ml-5' to="destination">Destination</Link>
                    <Link className='navBar ml-5' to="blog">Blog</Link>
                    <Link className='navBar ml-5' to="contact">Contact</Link>
                    <Link className='navBar ml-5' to="about">About</Link>
                    <Link to='/login'><Button className='button-login'>Login</Button></Link>
                </Navbar.Collapse>
            </Navbar>

        </Container>


    );
};

export default Home;