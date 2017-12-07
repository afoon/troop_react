import React, { Component } from "react";
import axios from "axios";
import FontIcon from "material-ui/FontIcon";
import TextField from "material-ui/TextField";

class Location extends Component {
  render() {
    const style = {
      fontWeight: "100",
      color: "#9E9E9E"
    };
    return (
      <div className="flex-row">
        <TextField
          hintText="Where to?"
          hintStyle={{ marginBottom: "0.5em", fontWeight: "100" }}
          inputStyle={style}
          style={{ color: "#9E9E9E", fontSize: "5em" }}
          multiiLine="true"
          rows={3}
          underlineFocusStyle={{ borderColor: "#ff5a6a" }}
          fullWidth="true"
        />
      </div>
    );
  }
}

export default Location;
