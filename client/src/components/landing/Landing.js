import React, { Component } from "react";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import FeatureSlider from "../featuresSlider/FeatureSlider";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="vh70 flex-row center">
          <div className="flex-col center">
            <p className="landing-title">
              Coordinating travel with friends just got easier.
            </p>
            <div className="">
              <RaisedButton
                label="Get Started"
                backgroundColor="#ff5a6a"
                labelColor="white"
              />
            </div>
          </div>
        </div>
        <div className="vh60 pink-bg flex-col center">
          <p className="white how-title">How it Works</p>
          <div className="flex-row white">
            <div className="how-it-box">
              <p>Create a Trip</p>
              <p>
                <FontIcon
                  className="material-icons"
                  color="white"
                  style={{ fontSize: "3em" }}
                >
                  date_range
                </FontIcon>
              </p>
              <small className="how-small-text">
                Select a location and date. A city halfway across the world or
                right down the street is fine
              </small>
            </div>
            <div className="how-it-box">
              <p>Add Friends</p>
              <p>
                <FontIcon
                  className="material-icons"
                  color="white"
                  style={{ fontSize: "3em" }}
                >
                  group_add
                </FontIcon>
              </p>
              <small className="how-small-text">
                Choose which friends you want to join you or even make it a solo
                expendition.
              </small>
            </div>
            <div className="how-it-box">
              <p>Collaborate</p>
              <p>
                <FontIcon
                  className="material-icons"
                  color="white"
                  style={{ fontSize: "3em" }}
                >
                  explore
                </FontIcon>
              </p>
              <small className="how-small-text">
                All members on the trip can now share updates and plans to
                ensure a smooth trip.
              </small>
            </div>
          </div>
        </div>
        <div className="vh50 flex-col center">
          <p className="slider-detail flex-row grey">Trip features include: </p>
          <FeatureSlider />
        </div>
      </div>
    );
  }
}
export default Landing;
