import React from 'react';
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





function App() {
  return (
    <>
    
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

          <Route path='*'>
            <NotFound></NotFound>
          </Route>


        </Switch>


      </Router>

    </>
  );
}

export default App;
