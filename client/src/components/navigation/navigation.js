import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Avatar from 'material-ui/Avatar';
import logo from "../../img/logo.ico";
import axios from "axios";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name:'',
      lastname: '',
      username: '',
      authid: '',
      photourl: ''
    } 
  }
  componentDidMount() {
    axios.get('/api/user').then( res => {
        console.log(res.data[0]);
        const {authid,firstname, lastname, user_name, photourl} = res.data[0]
        this.setState({name: firstname, authid: authid, username: user_name, lastname, photourl})
    });
    }
  render() {
    return (
      <AppBar
        title="Troop Groop"
        style={{ backgroundColor: "white" }}
        titleStyle={{ color: "#bdbdbd", fontWeight: "100" }}
        iconElementLeft={
          <img src={logo} style={{ width: "50px" }} alt="logo" />
        }
        iconStyleRight={{'padding': '0 5%'}}
        iconElementRight={!this.state.authid ? <p className="login-nav">Login/Register</p> : <p className="login-name flex-row"><Avatar src={this.state.photourl} />{'\u00A0'}{'\u00A0'}{this.state.username}</p>}
      />
    );
  }
}
export default Nav;
