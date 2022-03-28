import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
