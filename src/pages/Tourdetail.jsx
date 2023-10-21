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
 
import {
  faClock,
  faUserFriends,
  faUserPlus,
  faMapMarkerAlt,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

 library.add(faClock, faUserFriends, faUserPlus, faMapMarkerAlt, faSun);
const Tourdetail = () => {
  return (
    <div className="tour-details">
      <div className="tour-detail-image">
        <div className="text">
          <h1 className="h1-tourdetail">Italy</h1>
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
          </div>

          <div class="tour-container">
            <div class="tour-short">
              <ul class="info-list">
                <li>
                  <FontAwesomeIcon icon="clock" />
                  <span class="text">2 days</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="user-friends" />
                  <span class="text">6 People</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="user-plus" />
                  <span class="text">18</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="map-marker-alt" />
                  <span class="text">Greece</span>
                </li>
                <li>
                  <FontAwesomeIcon icon="sun" />
                  <span class="text">Discovery</span>
                </li>
              </ul>
            </div>

            <div class="tour-price">
              <div class="price-circle">
                <h3 class="h3-title">$1200</h3>
                <p>Per Person</p>
              </div>
            </div>
          </div>

          <div className="tour-description">
            <p style={{ color: "" }}>
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
          </div>
        </div>

        <div className="tour-right">
          <form action="" className="right-form">
            <label htmlFor="" className="findd">
              FIND YOUR TOUR
            </label>

            <BiSearch className="srch-f" />
            <input type="text" placeholder="fullname" />

            <MdLocationOn className="lct-f" />
            <input type="text" placeholder="email" />

            <MdLocationOn className="lct-f" />
            <input type="text" placeholder="confirmemail" />

            <MdLocationOn className="lct-f" />
            <input type="text" placeholder="phone" />
           
            <textarea>message</textarea>

            <button>Book Now</button>

          </form>

          <div className="quest-topp">
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
    </div>
  );
}

export default Tourdetail