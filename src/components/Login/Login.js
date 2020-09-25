import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import './Login.css';





const Login = () => {

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        photo: ""
    })

    initializeLoginFramework()

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })

    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }




    const handleResponse = (res, redirect) => {
        console.log(res, from)
        setUser(res);
        setLoggedInUser(res);

        if (redirect) {
            history.replace(from)

        }


        if (!user.error) {
            redirect = true
        }


    }



    const handleBlur = (event) => {

        let isFieldValid = true;



        if (event.target.name === 'email') {

            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)

            console.log(isFieldValid)

        }

        if (event.target.name === 'password') {

            const isPasswordValid = event.target.value.length > 6;

            const passwordHasNumber = /\d{1}/.test(event.target.value)

            isFieldValid = (isPasswordValid && passwordHasNumber)

        }

        if (isFieldValid) {

            const newUserInfo = { ...user };

            newUserInfo[event.target.name] = event.target.value;

            setUser(newUserInfo)

        }



    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user, newUser)

        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    console.log(res);
                    handleResponse(res, true)

                })



        }
        if (!newUser && user.email && user.password) {
            console.log("old user")
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })



        }



    }









    return (
        <div className="login-home">
            <Container>

                <Row>
                    <Col lg={6}>



                    </Col>

                    <Col lg={6}>

                        <Navbar variant="dark">


                            <Navbar.Collapse id="basic-navbar-nav">

                                <Link className='navBar2 ml-5' to="home">Home</Link>
                                <Link className='navBar2 ml-5' to="destination">Destination</Link>
                                <Link className='navBar2 ml-5' to="blog">Blog</Link>
                                <Link className='navBar2 ml-5' to="contact">Contact</Link>
                                <Link className='navBar2 ml-5' to="about">About</Link>
                                <Link to='/login'><Button className='button'>Login</Button></Link>
                            </Navbar.Collapse>
                        </Navbar>


                    </Col>

                </Row>



            </Container>


            <Row>
                <Col></Col>



                <Col>
                    <div className='form-style'>
                        <div className='login-form'>
                            <h3 className="login-text">{newUser ? 'Create an account' : 'Log In'}</h3>


                            <form className='formBoth' onSubmit={handleSubmit}>

                                {newUser &&

                                    <input className="inputText" type="text" onBlur={handleBlur} placeholder="First Name" required />

                                }


                                <br />

                                {newUser &&
                                    <input className="inputText" type="text" onBlur={handleBlur} placeholder="Last Name" required />

                                }
                                <br />



                                <input className="inputText" type="email" onBlur={handleBlur} placeholder="Email Address" name="email" id="" required />


                                <br />


                                <input className="inputText" type="password" onBlur={handleBlur} placeholder='Password' name="password" id="" required />


                                {
                                    newUser && <input className="inputText" type="password" onBlur={handleBlur} placeholder='Confirm password' name="password" id="" required />





                                }

                                <p style={{ marginLeft: '25%' }}>

                                    {(!newUser) &&

                                        <input type="checkbox" name="Already have an account" id="" />
                                    }








                                </p>


                                <button className='btn btn-block' style={{ backgroundColor: '#F9A617', width: '80%', borderRadius: '20px', fontSize: '20px', marginLeft: '11%' }} type="submit">


                                    {
                                        (newUser) ? 'Create an Account' :
                                            "Login"
                                    }



                                </button>



                            </form>




                            <p style={{ marginLeft: '30%' }}>
                                {newUser

                                    ? "Login"
                                    : "Click here to create a new account >>>> "




                                }

                                <input type='checkbox' onChange={() => setNewUser(!newUser)} name='Remember' id="" />






                            </p>





                        </div>

                        <p style={{ color: 'red' }}>{user.error}</p>


                        {user.success && <p style={{ color: 'green' }}>User {newUser ? "created" : "Logged in successfully"}</p>}



                        {

                            user.isSignedIn

                                ? <button onClick={signOut}></button>
                                : <button style={{ marginBottom: '2%', height: '40px', backgroundColor: 'white', borderRadius: '20px', width: '300px', lineHeight: '30px', marginLeft: '25%' }} onClick={googleSignIn}> Continue With Google</button>
                        }










                    </div>


                </Col>


                <Col></Col>





            </Row>


        </div>
    );
};




export default Login;