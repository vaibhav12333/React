import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Menu'
import {DISHES} from '../shared/dishes'
import {PROMOTIONS} from './promotions'
import {LEADERS} from './leaders'
import {COMMENTS} from './comments'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect,match} from 'react-router-dom'
import Home from './HomeComponent'
import  Contact from './ContactComponent'
class Main extends Component {
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES,
        leaders: LEADERS,
        promotions: PROMOTIONS,
        comments:COMMENTS,
      }
  }
  render() {

    const HomePage = () =>{
     return( <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}  
      promos={this.state.promotions.filter((promo) => promo.featured)[0]}
      leads={this.state.leaders.filter((lead) => lead.featured)[0]}/>
     );}
     const DishWithId = ({match}) =>{
       return(
          <DishDetail dish={this.state.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}/>
       );}
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>}/>
    <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}  /> } />
    <Route path="/contact" component={Contact} />
    <Route path="/menu/:dishId" component={DishWithId} />
    <Redirect path='/home' component={Home}></Redirect>
      </Switch>
      <Footer />
      </div> 
      
    );
  }
}

export default Main;
