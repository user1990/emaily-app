import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li>
          <a href="/auth/google" className="waves-effect waves-light btn">Login
            <i className="material-icons right">person</i>
          </a>
        </li>;
      default:
        return <li>
          <a href="/api/logout" className="waves-effect waves-light btn">Logout
            <i className="material-icons right">exit_to_app</i>
          </a>
        </li>;
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo">
              <i className="left material-icons">contact_mail</i>Emaily
            </Link>
            <a
              data-activates="mobile-demo"
              className="button-collapse right">
              <i className="material-icons">menu</i>
            </a>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
