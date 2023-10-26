import React, { useState } from 'react'
import './Tour.css'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import TourList from '../Tourlist';


const Tour = () => {

  
//  const tourList = [
  
//    {

//     id: 1,
//     destination: 'Switzerland',
//     duration: '7 days 8 hours',
//     groupsize: '40+ people',
//     price: '$100.00',

//    }

//  ]





  return (
    <div>
      <nav className="add-user-btn">Add Tour</nav>
      <h1 class="title">TourList</h1>

      <div className="user-container">
        <div className="user-list">
          <div className="user-row user-headers">
            <div className="user-cell">Destination</div>
            <div style={{ marginLeft: "15px" }} className="user-cell">
              Duration
            </div>
            <div className="user-cell">Groupe size</div>
            <div style={{ marginLeft: "40px" }} className="user-cell">
              Price
            </div>
            <div style={{ marginRight: "10px" }} className="user-cell">
              Action
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Tour