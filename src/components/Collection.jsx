import React from "react";
import Image5 from "../images/img5.png";
import Image6 from "../images/img6.png";
import Image7 from "../images/img7.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcPrevious, FcNext } from "react-icons/fc";

const Collection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <FcNext className="next"/>,
    prevArrow: <FcPrevious className="prev"/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="Collections">
      <h1>Colection Spotlight</h1>
      <p>
        Discover extraordinary moments with our Spotlight Collection
        metatickets--exclusive access to premium events for an unforgettable
        experience. Grab your today!
      </p>
      <div className="cards_cont">
        <Slider {...settings} className="cards">
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
            <img src={Image6} alt="" />
            <div className="card_info">
              <p>Sacramento River Cats</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Sutter Health Park, Sacramento, California</p>
              <button>Orange Collection</button>
            </div>
          </div>
          <div className="card">
            <img src={Image7} alt="" />
            <div className="card_info">
              <p>Las Vegas Aviators</p>
              <p>OCT 15 | SUN | 4:30 PM</p>
              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button>Take Flight Collection</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
