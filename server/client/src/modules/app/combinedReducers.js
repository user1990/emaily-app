import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { authReducer, surveysReducer }from './reducers';

export default combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
  form: reduxForm
});
