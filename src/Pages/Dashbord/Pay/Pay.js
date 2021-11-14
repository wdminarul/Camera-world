
import React from "react";
import { Link,  } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


import "./pay.css";


const Pay = () => {

const {user,logOut}= useAuth()
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-4 ">
            <div className="dashboard ps-5">
              <h2>Dashboard</h2>
              <br />
              <img src={user?.photoURL} alt="" profile style={{borderRadius:"50%"}}/>
              <p>{user?.displayName}</p>
              <Link className="dashboard-menu mt-5" to={`/home`} >
                <li className="dashboard-menu mt-5 ">Back Home</li>
              </Link >
              <Link className="dashboard-menu mt-5" to={`/pay`} >
                <li className="dashboard-menu mt-5 text-warning">Pay</li>
              </Link >
              <Link className="dashboard-menu mt-2" to={`/myOrder`}>
                <li className="dashboard-menu mt-4">My Orders</li>
              </Link>
              <Link className="dashboard-menu mt-2" to={`/myReview`}>
                <li className="dashboard-menu mt-4">Review</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9">
          <h1 className="text-center pt-5">Welcome {user?.displayName}</h1>
          <h2 className="text-danger text-center pt-5">Payment System Comming Soon</h2>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Pay;