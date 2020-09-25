import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hero from './components/Hero/Hero';
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/Private/PrivateRoute';
import HotelInfo from './components/HotelInfo/HotelInfo';


export const UserContext = createContext()


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>

          <Route exact path='/'>
            <Hero></Hero>

          </Route>
          <Route exact path='/home'>
            <Hero></Hero>

          </Route>
          <Route path='/booking/:nameOfPlace'>
            <Booking></Booking>

          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute exact path='/details'>
            <HotelInfo></HotelInfo>
            
          </PrivateRoute>

         <Route path='*'>
            <NotFound></NotFound>
          </Route>


        </Switch>


      </Router>
      </UserContext.Provider>
      

    </>
  );
}

export default App;
