import React, { Component } from "react";

import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent = () => {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        // eslint-disable-next-line
        return (
          <li>
            <a
              href="/auth/google"
              className="waves-effect waves-light"
            >
              Login
              <i className="material-icons right">person</i>
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" className="credits">
            Credits:{" "}
            <span className="new badge" data-badge-caption="">
              {auth.credits}
            </span>
          </li>,
          <li key="2">
            <a
              href="/api/logout"
              className="waves-effect waves-light btn logout"
            >
              Logout
              <i className="material-icons right">exit_to_app</i>
            </a>
          </li>
        ];
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            <i className="left material-icons" />Email Feed
          </Link>
          <a data-activates="mobile-demo" className="button-collapse right">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
