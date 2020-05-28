import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './Components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color = "primary">
      <div className = "container">
      <NavbarBrand className="active" href = '/'>Ristorante con Fusion</NavbarBrand>
      </div>    

      </Navbar>
      <Menu />
      </div> 
      
    );
  }
}

export default App;
