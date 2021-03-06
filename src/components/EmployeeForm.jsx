import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import api from '../utils/dataService';
import { Card, CardTitle, TextField, FlatButton  } from 'material-ui';

class EmpoyeeForm extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('resetForm', 'handleFieldChange', 'setEmployee', 'handleSaveButton', 'handleCancelButton', 'getForm');
    this.state = {
      title: 'New Employee'
      ,model: this.getInitialModel()
    };
  }

  handleSaveButton() {
    if(this.state.model.id) {
      this.updateEmployee(this.state.model, this.props.onSave);
    } else {
      this.createEmployee(this.state.model, this.props.onSave);
    }
  }

  handleCancelButton() {
    this.resetForm();
    this.props.onCancel();
  }

  updateEmployee(employee, callback) {
    const url= `/employees/${employee.id - 1}.json`;
    api.put(url, employee)
      .then((response) => {
        response.json().then((data) => {
          callback(data);
        });
      });
  }

  createEmployee(employee, callback) {
    const url= '/employees.json';
    api.post(url, employee)
      .then((response) => {
        response.json().then((data) => {
          callback(data);
        });
      });
  }

  resetForm() {
    this.setState({
      title: 'New Employee'
      ,model: this.getInitialModel()
    });
  }

  getInitialModel() {
    return {
      id:1
      ,firstName: null
      ,lastName: null
      ,secondLastName: null
      ,jobTitle: null
      ,location: null
      ,email: null
      ,phoneNumber: null
      ,userName: null
    };
  }

  setEmployee(data) {
    this.setState({
      title: 'Update Employee'
      ,model: data
    });
  }

  handleFieldChange(event) {
    this.state.model[event.target.name] = event.target.value;
    this.setState({ model: this.state.model });
  }

  getForm () {
    const textFieldCommon = { minWidth: 200, marginLeft: 20 };

    return (
      <Card {...this.props} >
        <CardTitle title={this.state.title} />
        <div style={{
          display: 'flex'
          ,flexFlow: 'row wrap'
          ,justifyContent: 'flex-start'
          ,alignContent: 'center'
          ,alignItems: 'center'
          ,height: 'auto'
        }}>
          <TextField
            name="firstName"
            value={this.state.model.firstName}
            onChange={this.handleFieldChange}
            style={textFieldCommon}
            hintText="First Name"
            floatingLabelText="First Name" />
          <TextField
            name="lastName"
            value={this.state.model.lastName}
            onChange={this.handleFieldChange}
            style={textFieldCommon}
            hintText="Last Name"
            floatingLabelText="Last Name" />
          <TextField
            name="secondLastName"
            value={this.state.model.secondLastName}
            onChange={this.handleFieldChange}
            style={textFieldCommon}
            hintText="Second Last Name"
            floatingLabelText="Second Last Name" />
          <TextField
            name="jobTitle"
            value={this.state.model.jobTitle}
            onChange={this.handleFieldChange}
            style={textFieldCommon}
            hintText="Job Title"
            floatingLabelText="Job Title" />
          <TextField
            name="location"
            value={this.state.model.location}
            onChange={this.handleFieldChange}
            style={textFieldCommon}
            hintText="Location"
            floatingLabelText="Location" />
          <TextField
            name="email"
            value={this.state.model.email}
            onChange={this.handleFieldChange}
            style={textFieldCommon}
            type="email"
            hintText="Email"
            floatingLabelText="Email" />
          <TextField
            name="phoneNumber"
            value={this.state.model.phoneNumber}
            onChange={this.handleFieldChange}
            style={textFieldCommon}
            type="tel"
            hintText="Phone"
            floatingLabelText="Phone" />
        </div>
        <div style={{ margin: '30px 20px' }}>
          <FlatButton
            label="Save"
            primary={true}
            onClick={this.handleSaveButton}
          />
          <FlatButton
            label="Cancel"
            secondary={true}
            onClick={this.handleCancelButton}
          />
        </div>
      </Card>
    );
  }

  render() {
    return this.props.show ? this.getForm() : null;
  }
}

EmpoyeeForm.propTypes = {
  onSave: React.PropTypes.func
  ,onCancel: React.PropTypes.func
  ,show: React.PropTypes.bool
};

EmpoyeeForm.defaultProps = {
  onSave: () => {}
  ,onCancel: () => {}
  ,show: true
};

export default EmpoyeeForm;
