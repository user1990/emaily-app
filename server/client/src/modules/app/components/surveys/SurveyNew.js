// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  constructor(props) {
    super(props);

    this.state = { showFormReview: false };
  }

  handleOnCancel = () => {
    this.setState({ showFormReview: false })
  }

  HandleOnSurveySubmit = () => {
    this.setState({ showFormReview: true })
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={this.handleOnCancel}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={this.HandleOnSurveySubmit}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);