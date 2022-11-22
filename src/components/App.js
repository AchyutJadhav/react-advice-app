import React, { useState } from "react";
import axios from "axios";

import './src/Styles/App.css';
import { render } from "@testing-library/react";


class App extends React.Component{
  state = {advice: ""};

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((responce)=>{
      const advice = responce.data.slip.advice;

      this.setState({advice})

      console.log(advice);
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  render(){
    return <div className="app">
      <div className="card">
        <h1 className="heading">
          {this.state.advice}
        </h1>
        <button className="button" onClick={this.fetchAdvice}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>;
  }
}

export default App;