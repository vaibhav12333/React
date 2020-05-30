import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main'
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
      <div>
      <Main/>
      
      </div>

    );
  }
}

export default App;
