
    import React, { useState, useEffect } from "react";
    import "./User.css";
    import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
    import axios from "axios";
    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
    import { ToastContainer, toast } from "react-toastify";

    const Users = () => {
      const navigate = useNavigate();
      const [users, setUsers] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 10; 

      const fetchUsers = () => {
        let token = localStorage.getItem("token");
        axios({
          url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            const allUsers = response.data;
            setUsers(allUsers);
            toast.success(response.data.message);
            setCurrentPage(1);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      useEffect(() => {
        fetchUsers();
      }, []);

      const handleDeleteUser = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token");
          axios({
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              toast.success("User deleted successfully");
              console.log(response, "Response");
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              console.log(error, "Error");
            });
        }
      };

      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const pageNumbers = [1, 2]; // Display only pages 1 and 2

      return (
        <div>
          <div className="user-tour">
            <div className="user-list">
              <div className="user-row user-headers">
                <div className="user-cell">Fullname</div>
                <div className="user-cell">Email</div>
                <div className="user-cell">Role</div>
                <div className="user-cell">Action</div>
              </div>

              {currentUsers.map((user) => (
                <div className="user-row" key={user.id}>
                  <div className="user-cell">{user.fullName}</div>
                  <div className="user-cell">{user.email}</div>
                  <div className="user-cell">{user.role}</div>
                  <div className="user-cell">
                    <div className="action-icons">
                      <BsFillTrashFill
                        onClick={() => handleDeleteUser(user._id)}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                      <Link to={`/dashboard/Edituser/${user._id}`}>
                        <BsFillPencilFill style={{ color: "black" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pagination-tour">
            <span className="disabled"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
           </span>
            {pageNumbers.map((number) => (
              <span className="one"
                key={number}
                onClick={() => paginate(number)}
               id={number === currentPage ? "active" : ""}
              >
                {number}
              </span>
            ))}
            <span className="last-one"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === 2}
            >
              Next
            </span>
          </div>
          <ToastContainer />
        </div>
      );
    };

    export default Users;
