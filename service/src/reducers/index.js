import {combineReducers} from 'redux';
import ServiceReducer from './reducer-service';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  services: ServiceReducer,
  form: formReducer
});

export default allReducers;
