import React from 'react'
import './Tourdetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
 
  import { BiSearch } from "react-icons/bi";
  import { MdLocationOn } from "react-icons/md";
  import { FaCalendarAlt } from "react-icons/fa";
  import { MdOutlineKeyboardArrowRight } from "react-icons/md";
  import { MdEmail } from "react-icons/md";
  import { BsFillTelephoneFill } from "react-icons/bs";
  import { BiUser, BiEnvelope } from "react-icons/bi";
  import { MdPhone } from "react-icons/md";
  import { useState,useEffect } from 'react';
  import axios from 'axios';
 import { toast } from "react-toastify";
 import { ToastContainer } from 'react-toastify';
 

 
import {
  faClock,
  faUserFriends,
  faUserPlus,
  faMapMarkerAlt,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { Title } from 'chart.js';

 library.add(faClock, faUserFriends, faUserPlus, faMapMarkerAlt, faSun);


const Tourdetail = () => {

  
      const [bookFormName, setBookFormName] = useState();
      const [bookFormEmail, setBookFormEmail] = useState();
      const [bookFormPhone, setBookFormPhone] = useState();
      const [bookFormDate, setBookFormDate] = useState();
      const [bookFormTicketsNumber, setBookFormTicketsNumber] = useState();
      const params = useParams();
      let tourId = params.id;
      const submitBooking = (e) => {
        e.preventDefault();
       
        let data = new FormData();
        data.append("tourID", tourId);
        data.append("fullname", bookFormName);
        data.append("email", bookFormEmail);
        data.append("phone", bookFormPhone);
        data.append("date", bookFormDate);
        data.append("numberOfTickets", bookFormTicketsNumber);
        let token = localStorage.getItem("token");
        console.log('where is token',token);
        axios({
          method: "POST",
          url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/create",
          data: data,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((Response) => {
            console.log(Response);
            toast.success("Thanks for booking");
            
            setTimeout(() => {
              navigate("");
            }, 2000);
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      };


    const [backdropImage, setBackdropImage] = useState();
    const [destinationImage, setDestinationImage] = useState();
    const [destination, setDestination] = useState();
    const [Title, setTitle] = useState();
    const [Description, setDescription] = useState();
    const [Duration, setDuration] = useState();
    const [GroupSize, setGroupSize] = useState();
    const [Price, setPrice] = useState();
    const fetchTour = () => {
      let token = localStorage.getItem("token");
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setDestinationImage(response?.data?.backdropImage);
          setDestination(response?.data?.destination);
          setTitle(response?.data?.Title);
          setDescription(response?.data?.Description);
          setDuration(response?.data?.Duration);
          setGroupSize(response?.data?.GroupSize);
          setPrice(response?.data?.Price);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
      fetchTour();
    }, []);


  return (
    <div className="tour-details">
      <div className="tour-detail-image"
      style={{ backgroundImage: `url(${destinationImage})`}}

      >
        {/* <img src={backdropImage} alt="" /> */}

        <div className="text">
          <h1 className="h1-tourdetail">{Title}</h1>
        </div>
      </div>

      <div className="tour-details-content">
        <div className="tourdetail-left-side">
          <div class="info-table">
            <div class="info-row">
              <div class="info-cell">Information</div>
              <div class="info-cell">Tour Plan</div>
              <div class="info-cell">Location</div>
              <div class="info-cell">Gallery</div>
              <div class="info-cell">Review</div>
            </div>
          </div>

          <div class="tour-row">
            <div class="">
              <h2 class="tour-title">
                A wonderful serenity has <br></br>taken possession of my entire
                soul
              </h2>
            </div>
            <div class="tour-price">
              <div class="price-circle">
                <h3 class="h3-title">$ {Price}</h3>
                <p>Per Person</p>
              </div>
            </div>
          </div>

          <div class="tour-container">
            <div class="tour-short">
              <ul class="info-list">
                <li>
                  <FontAwesomeIcon icon="clock" />
                  <span class="text">{Duration}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="user-friends" />
                  <span class="text">{GroupSize}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="user-plus" />
                  <span class="text">18</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="map-marker-alt" />
                  <span class="text">{destination}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="sun" />
                  <span class="text">Discovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="tour-description">
            <p style={{ color: "" }}>
              {Description}
              I should be incapable of drawing a single stroke at the present
              moment; and yet I feel that I never was a greater artist than now.
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees, and but a few stray gleams. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image, and the breath
            </p>
            <div className="video">
              <video controls width="640" height="360">
                <source
                  src="https://html.geekcodelab.com/holiday-planners/assets/images/highlight-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="transit">
              <div className="first-one">
                <h4>Destination</h4>
                <h4>Departure</h4>
                <h4>Departure time</h4>
                <h4>Return time</h4>
                <h4>Dress code</h4>
              </div>

              <div className="second-one">
                <h4>Greece</h4>
                <h4>Lorem Ipsum</h4>
                <h4>9:15 AM To 9:30 AM.</h4>
                <h4>Approximately 10:30 PM.</h4>
                <h4>comfortable clothing and light jacket.</h4>
              </div>
            </div>
            <div className="tourism">
              <div className="image1">
                <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image1.jpg"></img>
              </div>

              <div className="image2">
                <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image2.jpg"></img>
              </div>

              <div className="image3">
                <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-gallery-slide-image4.jpg"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="tour-rigt">
          <form style={{ width: "300px" }} action="" className="right-form">
            <h2 className="form-title">FIND YOUR TOUR</h2>

            <div className="form-group">
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
             
                onChange={(e) => {
                  setBookFormName(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
               
                onChange={(e) => {
                  setBookFormEmail(e.target.value);
                }}
              />
            </div>

            {/* <div className="form-group">
              <input
                type="email"
                id="confirmemail"
                placeholder="Confirm your email"
                value={confirmemail}
              
              />
            </div> */}

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
            
                onChange={(e) => {
                  setBookFormPhone(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <input
                type="date"
               
                onChange={(e) => {
                  setBookFormDate(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                placeholder="number of ticket"
               
                onChange={(e) => {
                  setBookFormTicketsNumbert(parseInt(e.target.value));
                }}
              />
            </div>

            <div className="form-group">
              <textarea
                style={{ height: "80px", width: "300px" }}
                id="message"
                placeholder="Your message"
               
              ></textarea>
            </div>

            <button
              onClick={submitBooking}
              type="submit"
              className="submit-button"
            >
              Book Now
            </button>
          </form>

          <div style={{ width: "300px" }} className="quest-topp">
            <div className="quest-top-titlee">
              <h1>WHY BOOK WITH US?</h1>
            </div>
            <div className="lssst">
              <ul>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrrw" /> Best Price
                  Guarantee
                </li>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrrw" /> Customer
                  care Available 24/7
                </li>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrrw" /> Free travel
                  insurance
                </li>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrrw" /> Hand-picked
                  tours & Activities
                </li>
              </ul>
            </div>
          </div>

          <div className="quest-btm">
            <div className="questt-t">
              <div className="questt-top-tite">
                <h1>GOT A QUESTION ?</h1>
                <p>
                  Do not hesitate to give us a call. We are an expert team and
                  we are happy to talk to you.
                </p>
                <span className="sppd">
                  <MdEmail className="qsste" />
                  holidayplanners@gmail.com
                </span>
                <span className="sppd">
                  <BsFillTelephoneFill className="qsste" /> +0784998214
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Tourdetail