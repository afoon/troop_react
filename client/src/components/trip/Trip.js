import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }
  componentDidMount() {
    axios.get("/api/userTrips").then(res => {
      console.log("trips", res.data);
      const trips = res.data
        .sort((a, b) => {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        })
        .reverse();
      console.log(trips);
      this.setState({ trips: trips });
    });
  }

  render() {
    const myTrips = this.state.trips.map(trip => (
      <Card className="card-style">
        <CardMedia
          overlayContentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.10)",
            height: "97%"
          }}
          overlay={
            <CardTitle
              title={trip.location}
              subtitle={trip.start + "-" + trip.enddate}
            />
          }
        >
          <img
            src={"https://source.unsplash.com/1600x900/?" + trip.location}
            alt=""
          />
        </CardMedia>
      </Card>
    ));
    console.log("trip", myTrips);
    return <div className="flex-row overflow">{myTrips}</div>;
  }
}

export default Trip;
