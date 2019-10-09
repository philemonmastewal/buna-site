/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import {Link} from "gatsby";
import logo from "../../../../site/static/img/buna-logo.png";


//we will build this to be a class based component so we can track state
export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    cssNav: "collapse navbar-collapse",
    links: [
      // we can add as many links as we like later with this kind of setup, as oppossed to hardcoding
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/about",
        text: "about"
      }
    ]
  };
  //we will use navbarHandles to see if the navbarOpen is true or false to see if the screen is stretched or not
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
        navbarOpen: false,
        cssNav: "collapse navbar-collapse"
      })
      : this.setState({
        navbarOpen: true,
        cssNav: "collapse navbar-collapse show"
      });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="115px" height="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.cssNav}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map((link) => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item ml-sm-5">
              <h1>
               Icon
              </h1>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
