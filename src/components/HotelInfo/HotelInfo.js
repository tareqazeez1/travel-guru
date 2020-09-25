import React, { useContext } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/Logo.png';
import Hotel from './Hotel';
import FakeHotelData from './FakeHotelData';






const HotelInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    return (
        <div>
            <Container>

                <Row>
                    <Col lg={6}>


                        <Navbar.Brand to="/"><img style={{ width: '120px' }} src={logo} alt="" /></Navbar.Brand>
                    </Col>

                    <Col lg={6}>

                        <Navbar variant="dark">


                            <Navbar.Collapse id="basic-navbar-nav">
                                <Link className='hotelNav ml-5' to="home">Home</Link>
                                <Link className='hotelNav ml-5' to="destination">Destination</Link>
                                <Link to='/login'><Button className='button'>{loggedInUser.email}</Button></Link>
                                

                            </Navbar.Collapse>
                        </Navbar>


                    </Col>

                </Row>


            </Container>


            <Container>
                <Row>

                    <Col md={7}>

                        {
                            FakeHotelData.map(hotel => <Hotel hotel={hotel}></Hotel>)

                        }


                    </Col>
                    <Col md={5}>

                        <h1>Welcome to our hotels!</h1>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH4hc5-b5eq0mHQ3uNqGd5XJo5qsO80pH8UA&usqp=CAU" alt=""/>


                    </Col>




                </Row>



            </Container>


        </div>


    );
};

export default HotelInfo;