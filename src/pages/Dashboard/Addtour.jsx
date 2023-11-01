 import React, { useState } from "react";
import './Addtour.css'
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Navigate,useNavigate } from "react-router-dom";


 const Addtour = () => {

   const navigate = useNavigate();

  const[image, setImage] = useState()
  const [destination, setDestination] = useState('')
  const [duration, setDuration] = useState('')
  const [group, setGroup] = useState('')
  const [price, setPrice] = useState('')
    const handleSubmit =(e)=>{
      let token = localStorage.getItem("token")
      let data = new FormData()
      data.append("backdropImage", image)
      data.append("Destination",destination)
      data.append("Duration",duration)
      data.append("group",group)
      data.append("Price",price)
        e.preventDefault();
        axios.post("https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",data,{
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        })
             .then((Response)=> {
                console.log(Response)
                toast.success(Response.data.message);
                // location.reload()
             })
             .catch((error)=> {
              console.log(error)
              toast.error(error.response.data.message)
            })
          }
  
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
           placeholder="Mention Your Next Destination"
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
         
         <button>Add</button>
       </form>
     </div>
   );
 };

 export default Addtour;
