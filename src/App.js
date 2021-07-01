import "./App.css";
import { GoogleLogin } from 'react-google-login';
import Login from './Components/Authentication/Login'
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    return (
     <Login/>
    );
  }
}
