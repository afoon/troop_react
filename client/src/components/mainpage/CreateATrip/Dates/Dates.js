import React, { Component } from "react";
import axios from "axios";
import FontIcon from "material-ui/FontIcon";
import DatePicker from 'material-ui/DatePicker';


class Dates extends Component {
  render() {
    return (
<div style={{'width': '100%', 'display':'flex', 'flexDirection': 'row'}}>
<DatePicker hintText="Start date" style={{'padding':'0 1em'}} />
<DatePicker hintText="End date" style={{'padding':'0 1em'}}  />
      </div>
    );
  }
}

export default Dates;