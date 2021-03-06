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
import { postComment , fetchDishes, fetchComments, fetchPromos , fetchLeaders , postFeedback } from '../Redux/ActionCreator'
import {actions } from 'react-redux-form';
import {TransitionGroup , CSSTransition} from 'react-transition-group'
const mapStateToProps = state => {
return {
    dishes: state.dishes
    ,comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
}    
}
const mapDispatchToProps = (dispatch) => ({
        postFeedback: (feedback) => dispatch(postFeedback(feedback)),
        postComment: (dishId , rating , author , comment) => dispatch(postComment(dishId , rating , author , comment)),
        fetchDishes: () => {dispatch(fetchDishes())}
        ,fetchLeaders: () => {dispatch(fetchLeaders())}
        ,resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
        ,fetchComments: () => {dispatch(fetchComments())}
        ,fetchPromos: () => {dispatch(fetchPromos())}

      })

class Main extends Component {
  constructor(props){
    super(props);
      
  }
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() { 

    const HomePage = () =>{
     return( <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
      dishesLoading = {this.props.dishes.isLoading}
      dishesErrMess = {this.props.dishes.errmess} 
      promos={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
      promosLoading = {this.props.promotions.isLoading}
      promosErrMess = {this.props.promotions.errmess} 
      leads={this.props.leaders.leaders.filter((lead) => lead.featured)[0]}
      leadsErrMess = {this.props.leaders.errmess}
      leadsLoading = {this.props.leaders.isLoading}/>
     );}
     const DishWithId = ({match}) =>{
       return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading = {this.props.dishes.isLoading}
          errMess = {this.props.dishes.errmess} 
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentserrMess = {this.props.comments.errMess} 
          postComment={this.props.postComment}
          />
       );}
    return (
      <div className="App">
      <Header />
     <TransitionGroup>
     <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
     <Switch>
        <Route path="/home" component={HomePage}/>}/>
    <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}  /> } />
    <Route path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
    <Route path="/menu/:dishId" component={DishWithId} />
    <Route path="/about" component={()=><About leaders={this.props.leaders}/>} />
    <Redirect path='/home' component={Home}></Redirect>
      </Switch>
       
       </CSSTransition> 
       
      </TransitionGroup> 
      <Footer />
      </div> 
      
    );
  }
}

export default withRouter((connect(mapStateToProps , mapDispatchToProps)(Main)));
