
import React, { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



import "./manageOrders.css";


const ManageOrders = () => {
  const [orders,setOrders]  = useState([]);
  const {user,logOut}= useAuth()
  const email = user?.email ;
  useEffect(()=>{
    fetch('https://serene-escarpment-19540.herokuapp.com/allOrders')
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
              <h2>Admin Dashboard</h2>
              <br />
              <img src={user?.photoURL} alt="" profile style={{borderRadius:"50%"}}/>
              <p>{user?.displayName}</p>
              <Link className="dashboard-menu mt-5" to={`/home`} >
                <li className="dashboard-menu mt-5 ">Back Home</li>
              </Link >
              <Link className="dashboard-menu mt-5" to={`/mangeOrders`} >
                <li className="dashboard-menu mt-5  text-warning">Manage all orders</li>
              </Link >
              <Link className="dashboard-menu mt-2"to={`/addProducts`}>
                <li className="dashboard-menu mt-4 ">Add Products</li>
              </Link>
              <Link className="dashboard-menu mt-2" to={`/makeAdmin`}>
                <li className="dashboard-menu mt-4" >Make Admin</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9">
          {/*  */}
          <div className="container">
              <h2 className=" text-center pb-3"> all orders <span className="text-danger">products</span> </h2>
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

export default ManageOrders;