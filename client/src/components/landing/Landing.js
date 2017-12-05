import React, { Component } from "react";
import axios from "axios";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import plane from "../../img/plane.png";
import house from "../../img/housing.png";
import rules from "../../img/tripRules.png";
import active from "../../img/active.png";
import Slider from "react-slick";

const login = function() {
  axios.get("/login").then(result => console.log("works"));
};

class Landing extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      draggable: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
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
                onClick={login()}
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
          <Slider {...settings} className="flex-row slider grey">
            <div>
              <div className="slider-left">
                <img src={house} className="slider-photo" />
              </div>
              <div className="slider-right">
                <p className="slider-title">Housing</p>
                <p className="slider-text">
                  Share housing options and friends can vote on which one they
                  like the best.
                </p>
              </div>
            </div>
            <div>
              <div className="slider-left">
                <img src={plane} className="slider-photo" />
              </div>
              <div className="slider-right">
                <p className="slider-title">Transportation</p>
                <p className="slider-text">
                  Share travel iteniary so everyone knows how we're getting
                  there..
                </p>
              </div>
            </div>
            <div className="flex-row">
              <div className="slider-left">
                <img src={active} className="slider-photo" />
              </div>
              <div className="slider-right">
                <p className="slider-title">Activities</p>
                <p className="slider-text">
                  Suggest an activity and those who are interested can join it.
                </p>
              </div>
            </div>
            <div>
              <div className="slider-left">
                <img src={rules} className="slider-photo" />
              </div>
              <div className="slider-right">
                <p className="slider-title">Trip Guidelines</p>
                <p className="slider-text">
                  Add rules for the trip so everyone can be on the same page.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default Landing;
