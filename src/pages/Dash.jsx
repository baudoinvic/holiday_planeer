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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => ({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => ({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

  return (
    <div className="dash">
      <h1 class="title">Dashboard</h1>
      <ul class="breadcrumbs"></ul>
      <div class="info-data">
        <div style={{ backgroundColor: "#c29d59" }} class="card">
          <div class="head">
            <div>
              <h2>1500</h2>
              <p>Traffic</p>
            </div>
            <i class="bx bx-trending-down icon down"></i>
          </div>
          <span class="progress" data-value="40%"></span>
          <span class="label">40%</span>
        </div>

        <div style={{ backgroundColor: "orange" }} class="card">
          <div class="head">
            <div>
              <h2>234</h2>
              <p>Sales</p>
            </div>
            <i class="bx bx-trending-down icon down"></i>
          </div>
          <span class="progress" data-value="60%"></span>
          <span class="label">60%</span>
        </div>

        <div style={{ backgroundColor: "lightgrey" }} class="card">
          <div class="head">
            <div>
              <h2>465</h2>
              <p>Pageviews</p>
            </div>
            <i class="bx bx-trending-up icon"></i>
          </div>
          <span class="progress" data-value="30%"></span>
          <span class="label">30%</span>
        </div>
      </div>

      <div class="data">
        <div class="content-data">
          <div class="head">
            <h3>Sales Report</h3>
          </div>
          <div class="chart">
            <div id="chart">
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dash