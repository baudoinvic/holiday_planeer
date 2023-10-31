
   import { BiSearch } from "react-icons/bi";
   import { MdLocationOn } from "react-icons/md";
   import { FaCalendarAlt } from "react-icons/fa";
   import { MdOutlineKeyboardArrowRight } from "react-icons/md";
   import { MdEmail } from "react-icons/md";
   import { BsFillTelephoneFill } from "react-icons/bs";
   import { BiTimeFive } from "react-icons/bi";
   import { MdGroup } from "react-icons/md";
   import {Link} from 'react-router-dom'
   import "./TourList.css";
   import axios from 'axios';
   import React, { useState, useEffect } from "react";
   import { Navigate,useNavigate } from "react-router-dom";
   

   const TourList = () => {
    const navigate = useNavigate ();
    const [tourLists, setTourLists] = useState([]);
  
    let token = localStorage.getItem("token");
    const fetchTourList = () => {
      axios({
        method: "GET",
        url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((Response) => {
          setTourLists(Response.data);
          console.log(Response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
      fetchTourList();
    }, []);
      
     return (
       <div>
         <div className="Tourlist">
           <div className="Tourlist-image">
             <div className="text">
               <h1 className="h1-tourlist">TourList</h1>
             </div>
           </div>
         </div>

         <div className="tour-btm">
           <div className="tour-left">
             <div className="sort-form">
               <p>Sort By :</p>
               <select name="" id="">
                 <option value="">DURATION</option>
                 <option value="">TOUR DATE</option>
                 <option value="">TITLE</option>
               </select>
               <select name="" id="">
                 <option value="">ASCENDING</option>
                 <option value="">DESCENDING</option>
               </select>
             </div>

             {/* ==================================================== */}

             {/* ==================================================== */}

             {/* ==================================================== */}


             <div className="tourCards">
              {tourLists.map((tour) => {
                return (
                  <div className="tourCard">
                    <img src={tour.backdropImage} alt="" />
                    <div className="cardDescription">
                      <div className="country">{tour.destination}</div>
                      <div className="descri">
                      
                      </div>
                      <div className="time-size">
                        <span className="duration">
                          <h3>
                            <BiTimeFive className="cardcons" />
                            {tour.Duration}
                          </h3>
                          <p className="smallp">{tour.Duration}</p>
                        </span>
                        <span className="groupSize">
                          <h3>
                            <MdGroup className="cardcons" />
                            Group Size
                          </h3>
                          <p className="smallp">{tour.GroupSize}</p>
                        </span>
                      </div>
                      <div className="footcards">
                        <p className="price">{tour.Price}</p>

                        <button
                          className="butCard"
                          onClick={() => navigate("/Tourdetail")}
                        >
                          {" "}
                          book now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              

          
             </div>

             {/* ==================================================== */}

             {/* ==================================================== */}

             {/* ==================================================== */}
           </div>
           <div className="tour-right">
             <form action="" className="right-form">
               <label htmlFor="" className="findd">
                 FIND YOUR TOUR
               </label>
               <BiSearch className="srch-f" />
               <input type="text" placeholder="Search tour" />
               <MdLocationOn className="lct-f" />
               <input type="text" placeholder="Where to ?" />
               <FaCalendarAlt className="cld-f" />
               <select name="" id="">
                 <option value="">Month</option>
               </select>
               <label htmlFor="" className="dra">
                 Duration
               </label>
               <select name="" id="">
                 <option value="">Any</option>
               </select>
               <div className="prix">
                 <div className="min">
                   <label htmlFor="">Min Price</label>
                   <input type="number" name="" id="" className="min-prix" />
                 </div>
                 <div className="min">
                   <label htmlFor="">Max Price</label>
                   <input type="number" name="" id="" className="max-prix" />
                 </div>
               </div>

               <div className="checkbox-item">
                 <input type="checkbox" />
                 <label for="cultural">Cultural</label>
               </div>

               <div className="checkbox-item">
                 <input type="checkbox" />
                 <label for="">Adventure</label>
               </div>

               <div className="checkbox-item">
                 <input type="checkbox" />
                 <label for="">Historical</label>
               </div>

               <div className="checkbox-item">
                 <input type="checkbox" />
                 <label for="">Seaside</label>
               </div>

               <div className="checkbox-item">
                 <input type="checkbox" />
                 <label for="">Discovery</label>
               </div>
             </form>

             <div className="quest-topp">
               <div className="quest-top-titlee">
                 <h1>WHY BOOK WITH US?</h1>
               </div>
               <div className="lssst">
                 <ul>
                   <li>
                     <MdOutlineKeyboardArrowRight className="arrrw" /> Best
                     Price Guarantee
                   </li>
                   <li>
                     <MdOutlineKeyboardArrowRight className="arrrw" /> Customer
                     care Available 24/7
                   </li>
                   <li>
                     <MdOutlineKeyboardArrowRight className="arrrw" /> Free
                     travel insurance
                   </li>
                   <li>
                     <MdOutlineKeyboardArrowRight className="arrrw" />{" "}
                     Hand-picked tours & Activities
                   </li>
                 </ul>
               </div>
             </div>

             <div className="quest-btm">
               <div className="questt-t">
                 <div className="questt-top-tite">
                   <h1>GOT A QUESTION ?</h1>
                   <p>
                     Do not hesitate to give us a call. We are an expert team
                     and we are happy to talk to you.
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
   
   export default TourList