import React, { Component } from "react";
import axios from 'axios';
import Location from './CreateATrip/Location/Location.js'
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from "material-ui/FontIcon";
import Dates from './CreateATrip/Dates/Dates';
import Trip from "../trip/Trip";



class MainPage extends Component {
    constructor(props) {
        super(props);
    this.state ={
        createTrip: false,
        change: true,
        createPage: 1,
        name: ''
    }

   }
   componentDidMount() {
    axios.get('/api/user').then( res => {
        console.log(res.data[0]);
        const {authid,firstname, lastname, username, photourl} = res.data[0]
        this.setState({name: firstname})
    });
    }
  render() {
    return (
        <div style={{'margin': '2%'}}>
            <p className='main-title grey'>
            Welcome, {this.state.name}
            </p>
            <p className='main-trip-title grey'>
            My Trips
            </p>
    <FloatingActionButton label="Modal Dialog"  backgroundColor="#ff5a6a" onClick={ e => {this.setState({createTrip: !this.state.createTrip})}}>
    <FontIcon
                  className="material-icons"
                  color="white"
                  style={{ fontSize: "3em" }}
                >
                add
                </FontIcon>
    </FloatingActionButton>
    <Dialog open={this.state.createTrip} onRequestClose={ e => {this.setState({createTrip: !this.state.createTrip})}} >
    <p className='createTrip pink'>Create a New Trip</p>
    <div className='trip-modal flex-row center'>
    <FontIcon
          className="material-icons"
          color="#ff5a6a"
          style={{ fontSize: "3em" }}
          onClick={ e => {this.setState({change: !this.state.change})}}
        >
          keyboard_arrow_left
        </FontIcon>
{this.state.change && <Location/> }
{!this.state.change && <Dates/>}
<FontIcon
          className="material-icons"
          color="#ff5a6a"
          style={{ fontSize: "3em" }}
          onClick={ e => {this.setState({change: !this.state.change})}}
        >
          keyboard_arrow_right
        </FontIcon>
</div>
    </Dialog>
<Trip/>
        </div>
    )
  }
}
export default MainPage;