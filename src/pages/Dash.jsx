import React from 'react'
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";



import { Bar } from "react-chartjs-2";
import Chat from './Dashboard/Chat';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dash = () => {
  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Booking',
    },
  },
};
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
   
  ChartJS.register(ArcElement, Tooltip, Legend);

   /*fetching tours*/

   const [tours, setTours] = useState([]);

   const fetchTour = () => {
     let token = localStorage.getItem("token");
     console.log(token);
     axios({
       url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
       method: "GET",
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
       .then((response) => {
         console.log(response.data);
         setTours(response.data);
         navigate("/dashboard/tour");
         toast.success(response.data.message);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   useEffect(() => {
     fetchTour();
   }, []);


   /*fetching users*/

       const [users, setUsers] = useState([]);

       const fetchUsers = () => {
         let token = localStorage.getItem("token");
         console.log(token);
         axios({
           url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/",
           method: "GET",
           headers: {
             Authorization: `Bearer ${token}`,
           },
         })
           .then((response) => {
             console.log(response.data);
             setUsers(response.data);
             toast.success(response.data.message);
           })
           .catch((error) => {
             console.log(error);
           });
       };

       useEffect(() => {
         fetchUsers();
       }, []);

      /*fetch booking*/

       const [tourDetails, setTourDetails] = useState(null);
      const [book, setBook] = useState([]);

      //  const [Editbooking, setEditbooking] = useState();
      
       const fetchTourDetails = () => {
         let token = localStorage.getItem("token");
         console.log(token);
         axios({
           url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view/",
           method: "GET",
           headers: {
             Authorization: `Bearer ${token}`,
           },
         })
           .then((response) => {
             console.log(response.data);
             setBook(response.data);
             toast.success(response.data.message);
           })
           .catch((error) => {
             console.log(error);
           });
       };

       useEffect(() => {
         fetchTourDetails();
       }, []);



      /*fetch chart*/


         const [load, setLoad] = useState(false);
         const [charts, setCharts] = useState([]);

         const fetchChart = () => {
           setLoad(true);
           axios({
             method: "GET",
             url: "https://holiday-planner-4lnj.onrender.com/api/v1/count?year=2023",
             headers: {
               "Content-Type": "application/json",
             },
           })
             .then((response) => {
               console.log(response);
               setTimeout(() => {
                 setCharts(response.data);
                 setLoad(false);
               }, 5000);
             })
             .catch((error) => {
               console.log(error);
               setLoad(false);
             });
         };

         useEffect(() => {
           fetchChart();
         }, []);

         const data = {
           labels,
           datasets: [
             {
               label: "Number of Booking - Dataset 1",
               data: charts.map((item) => item.count),
               backgroundColor: "#c29d59",
             },
             {
               label: "Number of Booking - Dataset 2",
               data: charts.map((item) => item.count),
               backgroundColor: "skyblue",
             },
           ],
         };


  return (
    <div className="dash">
      <h5 class="dashboard-title">Dashboard</h5>
      <ul class="breadcrumbs"></ul>
      <div class="info-data">
        <div style={{ backgroundColor: "#c29d59" }} class="card">
          
          <div class="head">
            <div>
              <h2>Tours</h2>
              <h2>{tours.length}</h2>
            </div>
            <i class="bx bx-trending-down icon down"></i>
          </div>
          <span class="progress" data-value="40%"></span>
        </div>

        <div style={{ backgroundColor: "orange" }} class="card">
          <div class="head">
            <div>
              <h2>Bookings</h2>
              <h2>{book.length}</h2>
            </div>
            <i class="bx bx-trending-down icon down"></i>
          </div>
        </div>

        <div style={{ backgroundColor: "lightgrey" }} class="card">
          <div class="head">
            <div>
              <h2>Users</h2>
              <h2>{users.length}</h2>
            </div>
            <i class="bx bx-trending-up icon"></i>
          </div>
        </div>
      </div>

      <div class="design-chart">
            <div className="leftChartContainer">
              <Bar options={options} data={data} />
            </div>
            <div className="rightChartContainer">
              <Doughnut data={data} />
            </div>

      </div>
      <Chat />
    </div>
  );
}

export default Dash