import React from 'react'
import "./Contact.css"


import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="Tourlist">
        <div className="Tourlist-image">
          <div className="text">
            <h1 className="h1-tourlist">Contact </h1>
          </div>
        </div>
      </div>

      
      <div className="ct-center">
        <div className="fside">
          <form typeof="submit">
            <div className="naem">
              <BsFillPersonFill className="fname" />
              <input type="name" placeholder="Full Name*" />
              <MdEmail className="mail" />
              <input type="email" placeholder="Email*" />
            </div>
            <div className="tetx">
              <AiFillPhone className="phn" />
              <input type="tel" placeholder="Telephone*" />
              <FaBook className="srv" />
              <input type="text" placeholder="Service*" />
            </div>
            <textarea type="text" placeholder="Message" className="msg" />
            <button>SUBMIT</button>
          </form>
        </div>
        <div className="quest">
          <div className="quest-top">
            <div className="quest-top-title">
              <h1>WHY BOOK WITH US?</h1>
            </div>
            <div className="lsst">
              <ul>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrw" /> Best Price
                  Guarantee
                </li>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrw" /> Customer care
                  Available 24/7
                </li>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrw" /> Free travel
                  insurance
                </li>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrw" /> Hand-picked
                  tours & Activities
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-btm">
            <div className="quest-t">
              <div className="quest-top-tite">
                <h1>GOT A QUESTION ?</h1>
                <p>
                  Do not hesitate to give us a call. We are an expert team and
                  we are happy to talk to you.
                </p>
                <span className="spd">
                  <MdEmail className="qste" />
                  holidayplanners@gmail.com
                </span>
                <span className="spd">
                  <BsFillTelephoneFill className="qste" /> +0784998214
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ct-bottom">
        <div className="ct-bottom-left">
          <div className="office">
            <h1>INDIA OFFICE</h1>
            <div className="lctn">
              <MdLocationOn className="lctn-icon" />
              <p> 54, Beside Shoping Mall, Gujarat.</p>
            </div>
            <div className="lctn">
              <BiSolidPhone className="lctn-icon" />
              <p> +250784998214 </p>
            </div>
            <div className="lctn">
              <MdAlternateEmail className="lctn-icon" />
              <p> Holidayplanners@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="ct-bottom-right">
          <iframe
            className="maaap"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.130689767238!2d30.072373087112805!3d-1.9394851994769147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca694ca62bccb%3A0x97ae40abc4b4d74f!2sFablab%20Rwanda!5e0!3m2!1sen!2srw!4v1697462133262!5m2!1sen!2srw"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
        


    
  );
}

export default Contact