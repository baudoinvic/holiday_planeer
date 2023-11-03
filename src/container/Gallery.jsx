import React from 'react'
import './Gallery.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import Testimony from './Testimony';

const Gallery = () => {
  return (

      <div className="images-container">
        <div className="images-row">
          <div className="image-item">
            <img
              src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg"
              alt="Italy"
            />
            <button
              style={{
                fontFamily: "Times new roman sans serif",
                marginRight: "45%",
              }}
            >
              ITALY
            </button>
            <h4>
              Holiday planners is a world-leading online tour booking platform
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>

            <div className="icon-column">
              <FontAwesomeIcon
                style={{ marginTop: "5px", marginRight: "13rem" }}
                icon={faClock}
              />
              <FontAwesomeIcon style={{ marginTop: "-20px" }} icon={faUsers} />
            </div>

            <h2>
              $750 <button className="special-button">BOOK NOW</button>{" "}
            </h2>
          </div>

          <div className="image-item">
            <img
              src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg"
              alt="Greece"
            />
            <button
              style={{
                fontFamily: "Times new roman sans serif",
                marginRight: "45%",
              }}
            >
              Swizland
            </button>
            <h4>
              Holiday planners is a world-leading online tour booking platform
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>

            <div className="icon-column">
              <FontAwesomeIcon
                style={{ marginTop: "5px", marginRight: "13rem" }}
                icon={faClock}
              />
              <FontAwesomeIcon style={{ marginTop: "-20px" }} icon={faUsers} />
            </div>

            <h2>
              $550 <button className="special-button">BOOK NOW</button>{" "}
            </h2>
          </div>

          <div className="image-item">
            <img
              src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg"
              alt="Switzerland"
            />
            <button
              style={{
                fontFamily: "Times new roman sans serif",
                marginRight: "45%",
              }}
            >
              Poland
            </button>
            <h4>
              Holiday planners is a world-leading online tour booking platform
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>

            <div className="icon-column">
              <FontAwesomeIcon
                style={{ marginTop: "5px", marginRight: "13rem" }}
                icon={faClock}
              />
              <FontAwesomeIcon style={{ marginTop: "-20px" }} icon={faUsers} />
            </div>

            <h2>
              $750 <button className="special-button">BOOK NOW</button>{" "}
            </h2>
          </div>

          <div className="image-item">
            <img
              src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg"
              alt="Switzerland"
            />
            <button
              style={{
                fontFamily: "Times new roman sans serif",
                marginRight: "45%",
              }}
            >
              Poland
            </button>
            <h4>
              Holiday planners is a world-leading online tour booking platform
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>

            <div className="icon-column">
              <FontAwesomeIcon
                style={{ marginTop: "5px", marginRight: "13rem" }}
                icon={faClock}
              />
              <FontAwesomeIcon style={{ marginTop: "-20px" }} icon={faUsers} />
            </div>

            <h2>
              $650 <button className="special-button">BOOK NOW</button>{" "}
            </h2>
          </div>
        </div>
      </div>
      
   
  );
}

export default Gallery