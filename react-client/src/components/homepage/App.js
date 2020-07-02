import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";

import CardExample from "../rentView/cardHouse.jsx";

import Login from "./login.jsx";
import SignUp from "./signup.jsx";

class Home extends React.Component {
  seeLogin() {
    ReactDOM.render(<Login />, document.getElementById("app"));
  }
  seeSignUp() {
    ReactDOM.render(<SignUp />, document.getElementById("app"));
  }
  render() {
    return (
      // <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="navbar-brand" to={"/sign-in"}>
              HAM Home
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <div
                    className="nav-link"
                    to={"/sign-in"}
                    onClick={this.seeLogin.bind(this)}
                  >
                    Login
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    to={"/sign-up"}
                    onClick={this.seeSignUp.bind(this)}
                  >
                    Sign up
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <img src={logo} /> */}
        {/* <Switch>
            <Route exact path="/" component={CardExample} />
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch> */}
      </div>
      // </Router>
    );
  }
}

export default Home;
