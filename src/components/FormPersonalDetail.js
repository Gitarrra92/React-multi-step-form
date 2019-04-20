import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
      const {values, handleFieldsChange} = this.props;
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Enter Next Details" />
              <TextField 
              hintText="Enter Your Occupation"
              floatingLabelText="occupation"
              onChange={handleFieldsChange('occupation')}
              defaultValue={values.occupation}
              />
              <br />
              <TextField 
              hintText="Enter Your citty"
              floatingLabelText="city"
              onChange={handleFieldsChange('city')}
              defaultValue={values.city}
              />
              <br />
              <TextField 
              hintText="Enter Your Bio"
              floatingLabelText="bio"
              onChange={handleFieldsChange('bio')}
              defaultValue={values.bio}
              />
              <br />
              <RaisedButton 
              label="Previous"
              primary={true}
              style={StyleSheet.button}
              onClick={this.continue}
              />
              <RaisedButton 
              label="Continue"
              primary={true}
              style={StyleSheet.button}
              onClick={this.continue}
              />
              
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles= {
    button: {
        margin: 15
    }
}

export default FormPersonalDetail;
