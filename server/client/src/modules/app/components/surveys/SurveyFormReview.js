// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import { submitSurvey } from '../../reducers';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="review-border">
      <div className="container">
        <h5>Please confirm your entries</h5>
        {reviewFields}
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
          <i className="material-icons left">arrow_back</i>
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="green btn-flat right white-text"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  submitSurvey() {
    dispatch(submitSurvey());
  }
});

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveyFormReview));
