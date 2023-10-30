import React from 'react'
import './Aboutus.css'



const Aboutus = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://html.geekcodelab.com/holiday-planners/assets/images/about-big-image.jpg"
            alt="About Us"
          />
        </div>


        <div className="about-us-text">
          <h2 style={{ color: "#C29D59" }}>About us</h2>
          <h3 style={{ fontSize: "22px" }}>Plan Your Trip with Us</h3>
          <p style={{ fontSize: "18px" }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic. Italic Mountains, she had a last
            view back on the skyline
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus