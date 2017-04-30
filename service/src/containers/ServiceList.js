import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteServiceTime} from '../actions/index'
import {Table, Button} from 'react-bootstrap';
import moment from 'moment';


class ServiceList extends Component{

  convertNumberToDay(numberOfDay) {
        switch (numberOfDay) {
            case '0':
                return "Sunday";
                break;
            case '1':
                return "Monday";
                break;
            case '2':
                return "Tuesday";
                break;
            case '3':
                return "Wednesday";
                break;
            case '4':
                return "Thursday";
                break;
            case '5':
                return "Friday";
                break;
            case '6':
                return "Saturday";
                break;
            default:
                return "Sunday";
                break;
        }
    };

  createListItem(){
    return this.props.services.serviceTimes.map((service) => {
        return (
            <tr key={service.id}>
              <td>{this.convertNumberToDay(service.start_weekday)}</td>
              <td>{moment(service.start_time).format('h:mm a')}</td>
              <td>{moment(service.end_time).format('h:mm a')}</td>
              <td>{this.convertNumberToDay(service.end_weekday)}</td>
              <td><Button onClick={() => this.props.deleteServiceTime(service.id)}>Delete</Button></td>
            </tr>
        );
    });
  }

  render(){
    if (this.props.services.serviceTimes.length === 0)
            return <div>Please Create a Service Time...</div>
        return (
          <div>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Start Weekday</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>End Weekday</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.createListItem()}
              </tbody>
            </Table>
          </div>
        );
  }

}

function mapStateToProps(state){
  return{
    services: state.services
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({deleteServiceTime: deleteServiceTime}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ServiceList);
