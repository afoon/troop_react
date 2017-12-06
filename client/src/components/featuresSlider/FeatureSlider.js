import React, { Component } from "react";
import Slider from 'react-slick';
import plane from "../../img/plane.png";
import house from "../../img/housing.png";
import rules from "../../img/tripRules.png";
import active from "../../img/active.png";

class FeatureSlider extends Component {
    render(){
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            draggable: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
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
        )
    }
}

export default FeatureSlider;