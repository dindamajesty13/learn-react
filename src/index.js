import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Stateless from './components/StatelessComp'
import Statefull from './components/StatefullComp';
import YoutubeComp from './components/YoutubeComp/YoutubeComp';
import Home from './container/Home/Home'
import Props from './container/Home/Props'

const Hello = () => {
  return <p>Hello World</p>
}

function HelloDunia(){
  return <p>Hello World</p>
}

class HelloGuys extends Component{
  render(){
    return(
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

// ReactDOM.render(
//     <HelloGuys />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Props />,
document.getElementById('coba')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
