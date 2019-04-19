import React, { Component } from 'react'
import FormUserDetail from './FormUserDetail';

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
          <h1>Form Personal Details</h1>
        )
      case 3:
        return(
          <h1>Case 3, Confirm</h1>
        )
        case 4:
        return(
          <h1>Success</h1>
        )
    }
  }
}

export default UserForm
