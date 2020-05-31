import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Menu'
import {DISHES} from '../shared/dishes'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './HomeComponent'
class Main extends Component {
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES,
      }
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home />}/>
    <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}  /> } />
    <Redirect path='/home' component={Home}></Redirect>
      </Switch>
      <Footer />
      </div> 
      
    );
  }
}

export default Main;
