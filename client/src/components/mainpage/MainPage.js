import React, { Component } from "react";
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from "material-ui/FontIcon";
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class MainPage extends Component {
  render() {
    return (
        <div>
            <p className='main-title grey'>
            Welcome, Amina
            </p>
            <p className='main-trip-title grey'>
            My Trips
            </p>
    <FloatingActionButton label="Modal Dialog"  backgroundColor="#ff5a6a">
    <FontIcon
                  className="material-icons"
                  color="white"
                  style={{ fontSize: "3em" }}
                >
                add
                </FontIcon>
    </FloatingActionButton>
    <Dialog>
    <p>Create a New Trip</p>
<TextField hintText='Location'></TextField>
<DatePicker hintText="Start date" container="inline" />
<DatePicker hintText="End date" container="inline" />
    </Dialog>
            <div>
            <Card style={{'width': '300px'}}>
                <CardMedia  overlay={<CardTitle title="Paris" subtitle="Dec 14 - 18" />} overlayStyle={{'height': '100%'}}>
                <img src="https://source.unsplash.com/1600x900/?paris" alt=''/>
                </CardMedia>
            </Card>
            </div>
        </div>
    )
  }
}
export default MainPage;