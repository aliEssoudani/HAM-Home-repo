import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./login.jsx";
import SelectAction from "../selectAction.jsx"

class SignUp extends Component {

  seeSelectAction() {
    ReactDOM.render(<SelectAction />, document.getElementById("app"));
  }
  seeLogin() {
    ReactDOM.render(<Login />, document.getElementById("app"));
  }
  render() {
    return (
      <div>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="navbar-brand" to={"/sign-in"}>
                HAM Home
              </div>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <div className="nav-link" to={"/sign-in"} onClick={this.seeLogin.bind(this)}>
                      Login
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" to={"/sign-up"} >
                      Sign up
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      <div className="design">
        <form className="home">
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={this.seeSelectAction.bind(this)}>
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </div>
      </div>
    );
  }
}

export default SignUp;
