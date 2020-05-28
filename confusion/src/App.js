import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './Components/Menu'
import {DISHES} from './shared/dishes'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES,
      }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color = "primary">
      <div className = "container">
      <NavbarBrand className="active" href = '/'>Ristorante con Fusion</NavbarBrand>
      </div>    

      </Navbar>
      <Menu dishes={this.state.dishes}/>
      </div> 
      
    );
  }
}

export default App;
