import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './reducers';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';

import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/app.css';

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { auth } = this.props
    return (
      <div className="container">
        <Header auth={auth} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadUser() {
    dispatch(fetchUser());
  }
});

const mapStateToProps = state => ({
  auth: state.auth
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
