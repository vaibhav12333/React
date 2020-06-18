import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Menu'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect,withRouter} from 'react-router-dom'
import Home from './HomeComponent'
import About from './About'
import  Contact from './ContactComponent'
import {connect} from 'react-redux';
const mapStateToProps = state => {
return {
    dishes: state.dishes
    ,comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
}    
}

class Main extends Component {
  constructor(props){
    super(props);
      
  }
  render() {

    const HomePage = () =>{
     return( <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}  
      promos={this.props.promotions.filter((promo) => promo.featured)[0]}
      leads={this.props.leaders.filter((lead) => lead.featured)[0]}/>
     );}
     const DishWithId = ({match}) =>{
       return(
          <DishDetail dish={this.props.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}/>
       );}
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>}/>
    <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}  /> } />
    <Route path="/contact" component={Contact} />
    <Route path="/menu/:dishId" component={DishWithId} />
    <Route path="/about" component={()=><About leaders={this.props.leaders}/>} />
    <Redirect path='/home' component={Home}></Redirect>
      </Switch>
      <Footer />
      </div> 
      
    );
  }
}

export default withRouter((connect(mapStateToProps)(Main)));
