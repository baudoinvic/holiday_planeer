import React, { useState, useEffect } from 'react';
import './Testimony.css';
import { FaStar } from 'react-icons/fa';
import { MdFiberManualRecord } from 'react-icons/md';

const testimonies = [
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,",

  "we are so proud of this company and we also like their works because they are the best one among the best company we can not wait to work with them next time because they deserve much respect and we will always keep in touch",
  // Add more testimonies here
];

const Testimony = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prevTestimony) => (prevTestimony + 1) % testimonies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="planner-testimony">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <img
            src="https://html.geekcodelab.com/holiday-planners/assets/images/testimonial-quote.svg"
            alt="Testimonial Quote"
            className="testimonial-image"
          />
          <div className="testimonial-box">
            <div className="stars-icons">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
            </div>
            <p
              className="testimonial-slide"
              dangerouslySetInnerHTML={{
                __html: testimonies[currentTestimony],
              }}
            ></p>
            <div className="dots-icons">
              <MdFiberManualRecord className="dot-icon" />
              <MdFiberManualRecord className="dot-icon" />
              <MdFiberManualRecord className="dot-icon" />
              <MdFiberManualRecord className="dot-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-text">
          <div className="testimonial-desc">
            <div className="desc-test">
              <h4 style={{ color: "#C29D59" }}>Latest News</h4>
              <h3>Learn More About Tours</h3>
            </div>
          </div>
        </div>

        <div className="testimonial-button">
          <div className="preview">
            <button style={{ marginTop: "50px" }}>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="planer-image">
        <div class="planner-hover">
          <div class="planner-column">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/blog-image2.jpg"></img>
            <h3>Things to See and Do</h3>
            <p style={{color: 'white'}}>june 06, 2020</p>
          </div>
          <div class="planner-column">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/blog-image2.jpg"></img>
            <h3>Travel The Most</h3>
            <p style={{color: 'white'}}>April 05, 2020</p>
          </div>
          <div class="planner-column">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/blog-image2.jpg"></img>
            <h3>Journey are the Best</h3>
            <p style={{color: 'white'}}>May 18 , 2020</p>
          </div>
        </div>
      </div>

      <div className="text-column">
        <div className="intro-container">
          <div className="intro">
          
            <h3 style={{marginLeft: '1rem', marginTop: "40px", color: "#C29D59" }}>Instagram</h3>
            <h1 style={{marginLeft: '1rem'}}>Holidays planners</h1>
          </div>
        </div>
      </div>

      <div className="the-last-one">
        <div className="full-last">
          <div className="full-column">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image3.jpg"></img>
          </div>
        </div>

        <div className="full-last">
          <div className="full-column">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image6.jpg"></img>
          </div>
        </div>

        <div className="full-last">
          <div className="full-column">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image4.jpg"></img>
          </div>
        </div>

        <div className="full-last">
          <div className="full-column">
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"></img>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Testimony;
