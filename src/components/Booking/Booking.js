import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Home from '../Home/Home';
import './Booking.css';

const Booking = () => {
    const { nameOfPlace } = useParams();

    const booking = fakeData.find(place => place.name === nameOfPlace)
    return (

        <section className="home">

            <div className="back"></div>
            <Home></Home>

            <Container className="pt-5 mt-5">

                <Row>
                    <Col lg={5} className='text-center'>
                        <h2 className='name'>{booking.name}</h2>
                        <p className='description'>{booking.fullDescription}</p>

                    </Col>

                    <Col lg={2} className="mb-5"></Col>

                    <Col lg={5} className="formStyle mb-5 ">
                        <form className="form-area">
                            <div className="form-group">
                                <label>City</label>
                                <input type="address" defaultValue={`Dhaka`} className="form-control" placeholder="Enter Address" required />
                            </div>

                            <div className="form-group">
                                <label>Destination</label>
                                <input type="address" className="form-control" defaultValue={nameOfPlace} />
                            </div>
                            <div className="form-group row booking-date">
                                <div className="col-6">
                                    <label htmlFor="date-input">From</label>
                                    <input className="form-control" type="date" id="dateFrom" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="dateTo">To</label>
                                    <input className="form-control" type="date" id="dateTo" required />
                                </div>
                            </div>
                            <br />

                            <Link to='/details'><button type="submit" className="btn btn-warning btn-block">Submit</button> </Link>
                        </form>
                    </Col>




                </Row>

            </Container>








        </section>

    );
};

export default Booking;