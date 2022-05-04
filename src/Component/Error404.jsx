import React, { Component } from 'react'
const PUBLIC_URL = "/CSE442-542/2022-Spring/cse-442h";
export default class Error404 extends Component {
  render() {
    return (<>
        <div className="errorInfo">
        <h1>Error: 404 PAGE NOT FOUND</h1>
        <h2>Oops, looks like you accidentally wound up somewhere you're not supposed to be!</h2>
        <h4>Please, <a href={PUBLIC_URL + "/"}>click here</a> to retun to the home page.</h4>
        </div>
        </>)
  }
}

