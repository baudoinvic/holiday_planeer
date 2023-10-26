import React from 'react'

const Dash = () => {
  return (
    <div className='dash'>
      <h1 class="title">Dashboard</h1>
      <ul class="breadcrumbs"></ul>
      <div class="info-data">
        <div style={{ backgroundColor: "ivory" }} class="card">
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

        <div style={{ backgroundColor: "ivory" }} class="card">
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
            <div class="menu">
              <i class="bx bx-dots-horizontal-rounded icon"></i>
              <ul class="menu-link">
                <li>
                  <a href="#">Edit</a>
                </li>
                <li>
                  <a href="#">Save</a>
                </li>
                <li>
                  <a href="#">Remove</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="chart">
            <div id="chart">{/* <Bar data={data} options={options} /> */}</div>
          </div>
        </div>
        <div class="content-data">
          <div class="head">
            <h3>Chatbox</h3>
            <div class="menu">
              <i class="bx bx-dots-horizontal-rounded icon"></i>
              <ul class="menu-link">
                <li>
                  <a href="#">Edit</a>
                </li>
                <li>
                  <a href="#">Save</a>
                </li>
                <li>
                  <a href="#">Remove</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash