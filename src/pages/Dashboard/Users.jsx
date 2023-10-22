import React from 'react'
import './User.css'
import { GiCancel } from "react-icons/gi";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


const Users = () => {
  return (
    <div>
      
      <nav className="add-user-btn">Add User</nav>

      <div className="user-container">
        <div className="user-list">
          <div className="user-row user-headers">
            <div className="user-cell">Fullname:</div>
            <div className="user-cell">Email:</div>
            <div className="user-cell">Country:</div>
            <div className="user-cell">Option:</div>
          </div>

          <div className="user-row">
            <div className="user-cell">John Doe</div>
            <div className="user-cell">john.doe@example.com</div>
            <div className="user-cell">United States</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">Another Name</div>
            <div className="user-cell">another.email@example.com</div>
            <div className="user-cell">Another Country</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">Yet Another Name</div>
            <div className="user-cell">yetanother.email@example.com</div>
            <div className="user-cell">Another Country</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">One More Name</div>
            <div className="user-cell">onemore.email@example.com</div>
            <div className="user-cell">Another Country</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">More Names</div>
            <div className="user-cell">morenames.email@example.com</div>
            <div className="user-cell">Another Country</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">Last Name</div>
            <div className="user-cell">lastname.email@example.com</div>
            <div className="user-cell">Another Country</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          <div className="user-row">
            <div className="user-cell">Final Name</div>
            <div className="user-cell">jado.email@example.com</div>
            <div className="user-cell">Another Country</div>
            <div className="user-cell">
              <div className="action-icons">
                <BsFillTrashFill style={{ color: "red" }} />
                <BsFillPencilFill />
              </div>
            </div>
          </div>

          {/* Repeat this structure for additional rows */}
        </div>
      </div>
    </div>
  );
}

export default Users