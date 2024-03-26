import React from "react";
import Image5 from "../images/img5.png";
import Image6 from "../images/img6.png";
import Image7 from "../images/img7.png";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sample() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="">
      <h1>Colection Spotlight</h1>
      <p>
        Discover extraordinary moments with our Spotlight Collection
        metatickets--exclusive access to premium events for an unforgettable
        experience. Grab your today!
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>

          <div className="card">
            <img src={Image5} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>
        </Slider>
      </div>
      ;
    </div>
  );
}

export default Sample;
