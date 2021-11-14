
import React, { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



import "./myOrders.css";


const MyOrders = () => {
  const [orders,setOrders]  = useState([]);
  const {user,logOut}= useAuth()
  const email = user?.email ;
  useEffect(()=>{
    fetch(`https://serene-escarpment-19540.herokuapp.com/myOrder/${email}`)
    .then(res=>res.json())
    .then(result=>setOrders(result))
},[email])

// cancel order 
const handleCancel= id =>{
  console.log(id)
  fetch(`https://serene-escarpment-19540.herokuapp.com/cancelOrder/${id}`,{
      method:"DELETE",
      headers:{
          "content-type":"application/json"
      },
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.deletedCount === 1){
      alert('Your Order Is Cancel')
    }
    else{
      
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
                <li className="dashboard-menu mt-4  text-warning">My Orders</li>
              </Link>
              <Link className="dashboard-menu mt-2" to={`/myReview`}>
                <li className="dashboard-menu mt-4" >Review</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9">
          {/*  */}
          <div className="container">
              <h2 className=" text-center pb-3"> My Orders <span className="text-danger">Hotel</span> </h2>
              <div  className="row gx-5">
                  {
                    orders.map((order,index)=><div className="col-md-3 ">
                    <div className="border shadow  mb-5 bg-body rounded main-section p-3">
                               <img className="img-section" src={order?.img} alt="" />
                                <h3 className="text-danger text-center">{order?.name}</h3>
                                <h5 className="text-warning">Price: ${order?.price}</h5>
                                <button className="btn btn-danger" onClick={()=>handleCancel(order?._id)}>Cancel Order</button>
                        </div>                 
                    </div>)
              }
                  </div>    
          </div>
          {/*  */}
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default MyOrders;