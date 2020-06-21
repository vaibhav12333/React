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
import { addComment , fetchDishes } from '../Redux/ActionCreator'
import {actions } from 'react-redux-form';
const mapStateToProps = state => {
return {
    dishes: state.dishes
    ,comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
}    
}
const mapDispatchToProps = (dispatch) => ({
        addComment: (dishId , rating , author , comment) => dispatch(addComment(dishId , rating , author , comment)),
        fetchDishes: () => {dispatch(fetchDishes())}
        ,resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
})

class Main extends Component {
  constructor(props){
    super(props);
      
  }
  componentDidMount() {
    this.props.fetchDishes();
  }
  render() { 

    const HomePage = () =>{
     return( <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
      dishesLoading = {this.props.dishes.isLoading}
      dishesErrMess = {this.props.dishes.errmess} 
      promos={this.props.promotions.filter((promo) => promo.featured)[0]}
      leads={this.props.leaders.filter((lead) => lead.featured)[0]}/>
     );}
     const DishWithId = ({match}) =>{
       return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading = {this.props.dishes.isLoading}
          errMess = {this.props.dishes.errmess} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          addComment={this.props.addComment}
          />
       );}
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>}/>
    <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}  /> } />
    <Route path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
    <Route path="/menu/:dishId" component={DishWithId} />
    <Route path="/about" component={()=><About leaders={this.props.leaders}/>} />
    <Redirect path='/home' component={Home}></Redirect>
      </Switch>
      <Footer />
      </div> 
      
    );
  }
}

export default withRouter((connect(mapStateToProps , mapDispatchToProps)(Main)));
