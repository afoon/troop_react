import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import logo from '../../img/logo.ico'

class Nav extends Component {
  render() {
    return (
  <AppBar title='Troop Groop' style={{'backgroundColor': 'white'}} titleStyle={{'color': "#bdbdbd", 'fontWeight':'100'}} iconElementLeft={<img src={logo} style={{'width':'50px'}} alt='logo'/>} iconElementRight={<p className='login-nav'>Login/Register</p>}/>
    );
  }
}
export default Nav;
