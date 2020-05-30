import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Menu'
import {DISHES} from '../shared/dishes'
import DishDetail from './DishdetailComponent';


class Main extends Component {
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES,
        selectedDish: null,
      }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
  render() {
    return (
      <div className="App">
        <Navbar dark color = "primary">
      <div className = "container">
      <NavbarBrand className="active" href = '/'>Ristorante con Fusion</NavbarBrand>
      </div>    

      </Navbar>
      <Menu dishes={this.state.dishes} 
      onClick={(dishId) => this.onDishSelect(dishId)}/>
      <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
      </div> 
      
    );
  }
}

export default Main;
