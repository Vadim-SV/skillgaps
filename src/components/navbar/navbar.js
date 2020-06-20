import React, {Component} from 'react';
import './navbar.css';
import logo from '../../assets/SG new.svg';

class NavBar extends React.Component {
    constructor() {
      super();
      this.state = {
        opened: false
      };
    }
  
    toggle() {
      this.setState({
        opened: !this.state.opened
      });
    }
  
    render() {
      return (
        <nav className="navbar">
          <div className="navbar-home">
            <a href=".">
              <img
                className="logo"
                src={logo}
                alt="logo"
              />
            </a>
            <button className="toggle" onClick={this.toggle.bind(this)}>
              <i
                className={
                  "fas " + (this.state.opened ? "fa-angle-up" : "fa-angle-down")
                }
              />
            </button>
          </div>
          <ul
            className={
              "navbar-links " + (this.state.opened ? "opened" : "closed")
            }
          >
            <li className="navbar-link">
              <a href=".">Becoming a host</a>
            </li>
            <li className="navbar-link">
              <a href=".">Help</a>
            </li>
            <li className="navbar-link">
              <a href=".">Sign up</a>
            </li>
            <li className="navbar-link">
              <a href=".">Log in</a>
            </li>
          </ul>
        </nav>
      );
    }
  }

  export default NavBar; 