import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Confirm extends Component {

  render() {
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Confirmation" />
              <h1>Thank you for filling out our Formular. </h1>
              <h2>You should become e-mail with confirmartion soon</h2>
              
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}



export default Confirm;