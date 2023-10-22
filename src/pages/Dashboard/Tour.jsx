import React from 'react'
import './Tour.css'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Tour = () => {
  return (
    <div className="table-component">
      <table className="table">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Amount</th>
            <th>Names</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rwanda Kigali</td>
            <td>$1300</td>
            <td>john@example.com</td>
            <td>
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </td>
          </tr>
          <tr>
            <td>Congo DRC</td>
            <td>$1200</td>
            <td>mary@example.com</td>
            <td>
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </td>
          </tr>
          <tr>
            <td>Burundi Bujumbura</td>
            <td>$1000</td>
            <td>july@example.com</td>
            <td>
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tour