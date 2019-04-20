import React, { Component } from 'react'
import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';

export class UserForm extends Component {
  state={
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleFieldsChange = input => e => {
  this.setState({[input]: e.target.value});
  }


  render() {
    const {step} = this.state;
    const {firstName, lastName, email, occupation, city, bio} = this.state;
    const values = {firstName, lastName, email, occupation, city, bio} 
    
    switch(step) {
      case 1:
      return(
        <FormUserDetail 
        nextStep={this.nextStep}
        handleFieldsChange={this.handleFieldsChange}
        values={values}
        />
      )
      case 2:
        return(
          <FormPersonalDetail
        nextStep={this.nextStep}
        handleFieldsChange={this.handleFieldsChange}
        values={values}
        />
        )
      case 3:
        return(
          <Confirm />
        )
        case 4:
        return(
          <h1>Success</h1>
        )
    }
  }
}

export default UserForm
