import React, { Component } from "react";
import ReactDOM from "react-dom";
import SelectAction from "../selectAction.jsx";
import SignUp from "./signup.jsx";

class Login extends Component {
  seeSelectAction() {
    ReactDOM.render(<SelectAction />, document.getElementById("app"));
  }

  seeSignUp() {
    ReactDOM.render(<SignUp />, document.getElementById("app"));
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
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <div className="nav-link" to={"/sign-in"}>
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
        </div>
        <form className="home">
          <h3>Sign In</h3>

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
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.seeSelectAction.bind(this)}
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
