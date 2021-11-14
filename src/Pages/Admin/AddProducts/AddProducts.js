import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './addProducts.css'

const AddProducts = () => {
    const {user,logOut}= useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://serene-escarpment-19540.herokuapp.com/pro' ,{
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
        
    };
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
              <Link className="dashboard-menu mt-5" to={`/manageOrders`} >
                <li className="dashboard-menu mt-5 ">Manage all orders</li>
              </Link >
              <Link className="dashboard-menu mt-2"to={`/addProducts`}>
                <li className="dashboard-menu mt-4  text-warning ">Add Products</li>
              </Link>
              <Link className="dashboard-menu mt-2" to={`/makeAdmin`}>
                <li className="dashboard-menu mt-4" >Make Admin</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9 post-section mx-auto mt-5">
          {/*  */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="border-box p-5 bg-dark">
                    <input {...register("name", { required: true })} placeholder="service name" className="w-100"/>
                    <br />
                    <br />
                    <input type="number" {...register("price",  { required: true })} placeholder="service price" className="w-100"/>
                    <br />
                    <br />
                    <input type="upload" {...register("img",  { required: true })} placeholder="Image url link here"className="w-100" />
                    <br />
                    <br />
                        <br />
                        <br />
                    <input className="btn btn-danger" type="submit" />
                    </form>
        </div>
          {/*  */}
          </div>
        </div>
      </div>
      
      
    </div>
    );
};

export default AddProducts;