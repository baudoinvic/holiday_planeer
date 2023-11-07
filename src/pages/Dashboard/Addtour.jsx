 import React, { useState } from "react";
import './Addtour.css'
import axios from "axios";


import { Navigate,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

 const Addtour = () => {
   const navigate = useNavigate();

   const [image, setImage] = useState();
   const [destination, setDestination] = useState("");
   const [duration, setDuration] = useState("");
   const [group, setGroup] = useState("");
   const [price, setPrice] = useState("");
   const [description, setDescription] = useState("");
   const [discount, setDiscunt] = useState("");
   const [tourtype, setTourtype] = useState(""); 
   const [departure, setDeparture] = useState(""); 
   const [seats, setSeats] = useState(""); 
   const [frommonth, setFrommonth] = useState(""); 
   const [tomonth, setTomonth] = useState(""); // 
   const [departureTime, setDepartureTime] = useState(""); 
   const [returnTime, setReturnTime] = useState(""); 

   const handleSubmit = (e) => {
     let token = localStorage.getItem("token");
     let data = new FormData();
    
     data.append("backdropImage", image);
     data.append("Destination", destination);
     data.append("Duration", duration);
     data.append("group", group);
     data.append("Price", price);
     data.append("Description", description);
     data.append("Discount", discount); 

     data.append("TourType", tourtype);
     data.append("Departure", departure);
     data.append("Seats", seats);
     data.append("FromMonth", frommonth);
     data.append("ToMonth", tomonth);
     data.append("DepartureTime", departureTime);
     data.append("ReturnTime", returnTime);


     e.preventDefault();

     axios
       .post(
         "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
         data,
         {
           "Content-Type": "multipart/form-data",
           Authorization: `Bearer ${token}`,
         }
       )
       .then((Response) => {
         console.log(Response);
         toast.success("tour is sucessfully added");
         navigate("/dashboard/Tour");
         // location.reload()
       })
       .catch((error) => {
         console.log(error);
         toast.error(error.response.data.message);
       });
   };

   return (
     <div className="add-tour">
       <form onSubmit={handleSubmit}>
         <ToastContainer />
         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
         <label htmlFor="">Destination</label>
         <input
           value={destination}
           onChange={(e) => setDestination(e.target.value)}
           type="text"
           placeholder="Your Destination"
         />
         <label htmlFor="">Duration</label>
         <input
           value={duration}
           onChange={(e) => setDuration(e.target.value)}
           type="text"
           placeholder="How will you spend(stay)"
         />
         <label htmlFor="">Group Size</label>
         <input
           value={group}
           onChange={(e) => setGroup(e.target.value)}
           type="text"
           placeholder="Group Size"
         />
         <label htmlFor="">Price</label>
         <input
           value={price}
           onChange={(e) => setPrice(e.target.value)}
           type="text"
           placeholder="Price in Dollar$"
         />
         <label htmlFor="">Description</label>
         <input
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           type="text"
           placeholder="Description"
         />

         <label htmlFor="">Discount</label>
         <input
           value={discount}
           onChange={(e) => setDiscunt(e.target.value)}
           type="text"
           placeholder="discount"
         />

         <label htmlFor="">Tour type</label>
         <input
           value={tourtype}
           onChange={(e) => setTourtype(e.target.value)}
           type="text"
           placeholder="tourtype"
         />

         <label htmlFor="">Departure</label>
         <input
           value={departure}
           onChange={(e) => setDeparture(e.target.value)}
           type="text"
           placeholder="departure"
         />

         <label htmlFor="">seats</label>
         <input
           value={seats}
           onChange={(e) => setSeats(e.target.value)}
           type="text"
           placeholder="seats"
         />

         <label htmlFor="">fromMonth</label>
         <input
           value={frommonth}
           onChange={(e) => setFrommonth(e.target.value)}
           type="text"
           placeholder="frommonth"
         />

         <label htmlFor="">to Month</label>
         <input
           value={tomonth}
           onChange={(e) => setDiscunt(e.target.value)}
           type="text"
           placeholder="to month"
         />

         <label htmlFor="">Departure time</label>
         <input
           value={departure}
           onChange={(e) => setDeparture(e.target.value)}
           type="text"
           placeholder="departure"
         />
         <label htmlFor="">Return time</label>
         <input
           value={returnTime}
           onChange={(e) => setReturnTime(e.target.value)}
           type="text"
           placeholder="to month"
         />

         <button>Add</button>
       </form>
     </div>
   );
 };

 export default Addtour;
