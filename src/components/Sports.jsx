import React from 'react'
import Image1 from '../images/img1.png'
import Image2 from "../images/img2.png";
import Image3 from "../images/img3.png";
import Image4 from "../images/img2.png";
import Image5 from "../images/ad.png";

const Sports = () => {
  return (
    <div className="Sports">
      <h3 className="title">Sports</h3>
      <div className="images">
        <div className="img">
          <img src={Image1} alt="" />
          <p className="name">Sacramento River Cats</p>
          <div className="info">
            <div className="total">
              <p>Total Events</p>
              <p>48 Events</p>
            </div>
            <div className="sport">
              <p>Sport</p>
              <p>Baseball</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={Image2} alt="" />
          <p className="name">Las Vegas Aviators</p>
          <div className="info">
            <div className="total">
              <p>Total Events</p>
              <p>28 Events</p>
            </div>
            <div className="sport">
              <p>Sport</p>
              <p>Baseball</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={Image3} alt="" />
          <p className="name">New Jersey Devils</p>
          <div className="info">
            <div className="total">
              <p>Total Events</p>
              <p>15 Events</p>
            </div>
            <div className="sport">
              <p>Sport</p>
              <p>Ice Hockey</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={Image4} alt="" />
          <p className="name">Sacramento River Cats</p>
          <div className="info">
            <div className="total">
              <p>Total Events</p>
              <p>28 Events</p>
            </div>
            <div className="sport">
              <p>Sport</p>
              <p>Baseball</p>
            </div>
          </div>
        </div>
        <div className="img ad">
          <img className="ad_img" src={Image5} alt="" />
          <p>Advertisement Title</p>
          <span className='ad_word'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque minima, corporis, ipsam doloremque quis dolor hic fugit molestiae laudantium, facilis nihil quasi laborum delectus temporibus maxime culpa rerum distinctio?
          </span>
        </div>
      </div>
      <button className="more">See more</button>
    </div>
  );
}

export default Sports