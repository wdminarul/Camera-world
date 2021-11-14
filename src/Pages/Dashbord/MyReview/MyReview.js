
import React from "react";
import { useForm } from "react-hook-form";
import { Link,  } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";




import "./myreview.css";


const MyReview = () => {
  const {user,logOut}= useAuth()
  const { register, handleSubmit } = useForm();
  const sendReview = data=>{
    fetch('https://serene-escarpment-19540.herokuapp.com/addReview' ,{
      method:"POST",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(result=>{
      if(result.deletedCount){
          // setDeleted(true)
      }
      else{
          // setDeleted(false)
      }
  })
  }
  


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
                <li className="dashboard-menu mt-5">Pay</li>
              </Link >
              <Link className="dashboard-menu mt-2"to={`/myOrder`}>
                <li className="dashboard-menu mt-4 ">My Orders</li>
              </Link>
              <Link className="dashboard-menu mt-2 " to={`/myReview`}>
                <li className="dashboard-menu mt-4  text-warning">Review</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9 post-section mx-auto">
          <h2 className="text-danger text-center pt-5">My Review</h2>
          <div>
            <form onSubmit={handleSubmit(sendReview)} className="border-box p-5 bg-dark">
      <input {...register("name", { required: true })} placeholder="service name" className="w-50"/>
      <br />
      <br />
      <textarea type="text" {...register("description",  { required: true })} placeholder="Description here" className="w-50"/>
      <br />
      <br />
      <input type="upload" {...register("img",  { required: true })} placeholder="Image url link here"className="w-50 mx-auto" />
      <br />
      <br />
          <br />
          <br />
      <input className="btn btn-danger" type="submit" />
    </form>
        </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default MyReview;