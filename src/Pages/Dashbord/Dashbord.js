
import React from "react";
import { Link,  } from "react-router-dom";
import useAuth from '../../hooks/useAuth'

import "./dashbord.css";

const Dashbord = () => {

const {user,logOut,admin}= useAuth()
  return (
    <div>
      {admin? <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-4 ">
            <div className="dashboard ps-5">
              <h2>Admin Dashboard</h2>
              <br />
              <img src={user?.photoURL} alt="" profile style={{borderRadius:"50%"}}/>
              <p>{user?.displayName}</p>
              <Link className="dashboard-menu mt-5" to={`/home`} >
                <li className="dashboard-menu mt-5 ">Back Home</li>
              </Link >
              <Link className="dashboard-menu mt-5" to={`/manageOrders`} >
                <li className="dashboard-menu mt-5">Manage All Orders</li>
              </Link >
              <Link className="dashboard-menu mt-2"to={`/addProducts`}>
                <li className="dashboard-menu mt-4 ">Add Products</li>
              </Link>
              <Link className="dashboard-menu mt-2 " to={`/makeAdmin`}>
                <li className="dashboard-menu mt-4 ">Make Admin</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9 post-section mx-auto mt-5">

                <img src={user?.photoURL} alt="" />
                <h1>Welcome {user.displayName}</h1>
                <p>You can access manage all service in this site</p>
          </div>
        </div>
      </div>  
    :
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
              <Link className="dashboard-menu mt-5" to={`/pay`}>
                <li className="dashboard-menu mt-5">Pay</li>
              </Link >
              <Link className="dashboard-menu mt-2" to={`/myOrder`}>
                <li className="dashboard-menu mt-4">My Orders</li>
              </Link>
              <Link className="dashboard-menu mt-2" to={`myReview`}>
                <li className="dashboard-menu mt-4">Review</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9">
          <h1>Welcome {user?.displayName}</h1>
          </div>
        </div>
      </div>
    
    }
      
      
    </div>
  );
};

export default Dashbord;