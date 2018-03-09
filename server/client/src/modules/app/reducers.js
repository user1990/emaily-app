import axios from 'axios';

///// CONSTANTS /////
export const actionTypes = {
  FETCH_USER: 'FETCH/USER',
  FETCH_SURVEYS: 'FETCH/SURVEYS',
};

///// ACTIONS /////
// User
export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');

  dispatch({
    type: actionTypes.FETCH_USER,
    payload: response.data
  });
};

// Stripe token
export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res.data
  });
};

// Surveys
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res.data
  });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({
    type: actionTypes.FETCH_SURVEYS,
    payload: res.data
  });
};

///// REDUCERS /////
export const authReducer = (auth = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return auth;
  }
}

export const surveysReducer = (surveys = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_SURVEYS:
      return action.payload || false;
    default:
      return surveys;
  }
}
