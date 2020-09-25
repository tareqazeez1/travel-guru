import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import './Slides.css';

const Slide = () => {
    const pics = fakeData;
    const [slide, setSlide] = useState(pics[0]);
    return (
        <section className="container">
            <Container lg={5} className="pt-5 mt-5">
                <Row>
                    <Col lg={5} className="text-center">
                        <h3 className='name'>{slide.name}</h3>
                        <p className='description'>{slide.description}</p> <br/>
                        <Link to={'/booking/' + slide.name}><button className='booking'>Booking<b> ></b> </button> </Link>

                    </Col>

                    <Col lg={7}>
                        <Row>
                        {
                                pics.map(pic=>
                                     <Col className='pic' sm={4}  key={pic.name}>

                                         <div>
                                             
                                            <Link to={`/booking/${pic.name}`}> <img className="img" src={pic.img} alt=""/>
                                             <h4 className="text"><b>{pic.name}</b></h4>

                                             </Link>

                                         </div>


                                     </Col>)
                            }
                        </Row>
                    </Col>


                </Row>
            </Container>





            
        </section>
    );
};

export default Slide;