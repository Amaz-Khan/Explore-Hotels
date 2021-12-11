import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from "./components/Carousel";
import CardItems from './components/CardItems';
import Footer from './components/Footer';
import About from "./components/About";
import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Switch } from "react-router";
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import AuthState from './context/AuthState';
import Dashboard from './components/Dashboard';
import HotelState from './context/HotelState';
import Admin from './components/Admin';

function App() {
  return(
  <div>


    <AuthState> 

<HotelState >




    <Header/>




<Route exact path="/">


<Carousel />
<CardItems />



</Route>



<Route exact path="/About">
  
<About />



</Route>

<Route exact path="/Contact">

<Contact />



</Route>


<Route exact path="/register">

<Signup />



</Route>


<Route exact path="/signin">

<Login />



</Route>




<Route exact path="/Dashboard">

  <Dashboard />



</Route>


<Route exact path="/Admin">

  <Admin />



</Route>









  
    
      

    <Footer />

  </HotelState>
    </AuthState>


    </div>
  );
}

export default App;
