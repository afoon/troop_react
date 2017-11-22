import React, { Component } from "react";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";

class Login extends Component {
  render() {
    return (
      <Paper zDepth={2} style={{ width: "300px", height: "300px" }}>
        coordinating travel with friends made easy
        <RaisedButton backgroundColor='#FF5A6A' label="Get Started" labelColor='white' labelStyle={{'fontWeight':'300'}} />
      </Paper>
    );
  }
}
export default Login;
