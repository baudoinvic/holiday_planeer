 import React, { useState } from "react";
import './Addtour.css'

 const Addtour = () => {

   return (
     <div className="add-tour">
       <form className="adding-tour">
         <label htmlFor="file">Choose File</label>
         <input
           style={{ border: "1px solid #c29d59" }}
           type="file"
           id="file"
           name="file"
           accept=".jpg, .jpeg, .png, .pdf" 
           required
         />

         <label htmlFor="destination">Destination</label>
         <input
           style={{ border: "1px solid #c29d59" }}
           type="text"
           id="destination"
           name="destination"
           required
         />
         <br />
         <br />

         <label htmlFor="duration">Duration </label>
         <input
           style={{ border: "1px solid #c29d59" }}
           type="number"
           id="duration"
           name="duration"
           required
         />
         <br />
         <br />

         <label htmlFor="groupsize">Group Size</label>
         <input
           style={{ border: "1px solid #c29d59" }}
           type="number"
           id="groupsize"
           name="groupsize"
           required
         />
         <br />
         <br />

         <label htmlFor="price">Price </label>
         <input
           style={{ border: "1px solid #c29d59" }}
           type="number"
           id="price"
           name="price"
           required
         />
         <br />
         <br />

         <input
           style={{
             color: "white",
             height: "50px",
             backgroundColor: "#c29d59",
           }}
           type="submit"
           value="Add Tour"
         />
       </form>
     </div>
   );
 };

 export default Addtour;
