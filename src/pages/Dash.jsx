import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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
      text: 'Chart.js Bar Chart',
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

const data = {
  labels,
  datasets: [
    {
      label: "number of booking",
       data: [20, 43, 10, 54, 8, 23, 40, 23, 56, 87, 44, 10],
      backgroundColor: '#c29d59',
    },
    {
      label: "number of booking",
      data: labels.map(() => ({ min: 0, max: 1000 })),
      backgroundColor: '#c29d59',
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
              <h2>200</h2>
            </div>
            <i class="bx bx-trending-down icon down"></i>
          </div>
          <span class="progress" data-value="40%"></span>
        </div>

        <div style={{ backgroundColor: "orange" }} class="card">
          <div class="head">
            <div>
              <h2>Bookings</h2>
              <h2>2200</h2>
            </div>
            <i class="bx bx-trending-down icon down"></i>
          </div>
        </div>

        <div style={{ backgroundColor: "lightgrey" }} class="card">
          <div class="head">
            <div>
              <h2>Users</h2>
              <h2>100</h2>
            </div>
            <i class="bx bx-trending-up icon"></i>
          </div>
        </div>
      </div>

      <div class="data">
        <div class="content-data">
          <div classname="chart">
            <div className="leftChartContainer">
              <Bar options={options} data={data} />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash