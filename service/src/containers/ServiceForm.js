import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import 'rc-time-picker/assets/index.css';
import { Field, reduxForm} from 'redux-form';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import {Button} from 'react-bootstrap';
import {createServiceTime} from '../actions/index'
import '../css/App.css';

const format = 'h:mm a';

var id = 4;

const now = moment().hour(0).minute(0);

const timePicker = ({input, value}) => (
  <TimePicker
    {...input}
    showSecond={false}
    defaultValue={now}
    name="start_time"
    className="xxx"
    value={input.value ? moment(input.value) : null}
    use12Hours
  />
);

const required = value => (value && value !== 'Select a day') ? undefined : 'Required';

class ServiceForm extends Component{

  handleCreate(values) {
        console.log("on submit");
        console.log(values);
        this.props.createServiceTime(values);
    };

  render(){
  const { handleSubmit, pristine, reset, submitting, value, onChange } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleCreate.bind(this))}>
        <div className="inputs">
          <label htmlFor="startDay">Start Weekday*</label>
          <div>
            <Field className="fields" name="startDay" component="select" validate={[ required ]}>
              <option>Select a day</option>
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </Field>
          </div>
        </div>
        <div className="inputs">
          <label htmlFor="startTime">Start Time*</label>
          <Field name="startTime" component={timePicker} validate={[ required ]}/>
        </div>
        <div className="inputs">
          <label htmlFor="endTime">End Time*</label>
          <Field name="endTime" component={timePicker} validate={[ required ]} />
        </div>
        <div className="inputs">
          <label htmlFor="endDay">End Weekday*</label>
          <Field className="fields" name="endDay" component="select" validate={[ required ]}>
            <option>Select a day</option>
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </Field>
        </div>
        <div className="button">
          <Button type="submit" disabled={pristine || submitting}>Create</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
        </div>
      </form>
    )
  }
}

ServiceForm = reduxForm({
  form: 'service'  // a unique identifier for this form
})(ServiceForm);

function mapStateToProps(state) {
    return {
        services: state
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({createServiceTime: createServiceTime}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ServiceForm);
