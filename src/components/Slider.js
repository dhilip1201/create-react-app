import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import './Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';


 class Slider extends Component {
  render() {
    const settings =  {
      autoplay: true,
      autoplayScroll: 3,
      autoplaySpeed: 4000,
      duration: 400,
      pauseOnHover: false,
      shift: 5,
      swipe: true,
      wheel: true
    };
    return (
      <div>
        <span>CustomSlider</span>
        <Slider { ...settings } className="slider_css">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Slider;