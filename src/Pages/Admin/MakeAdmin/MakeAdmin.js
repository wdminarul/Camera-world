import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './makeAdmin.css'

const MakeAdmin = () => {
    const {user,logOut}= useAuth()
    const [email,setEmail] = useState('')
    const [success,setSuccess] = useState(false)

    const textBlur = e =>{
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const user = {email}
        fetch('https://serene-escarpment-19540.herokuapp.com/users/admin' ,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data)
                setEmail('')
                setSuccess(true)
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
                <li className="dashboard-menu mt-5  ">Manage all orders</li>
              </Link >
              <Link className="dashboard-menu mt-2"to={`/addProducts`}>
                <li className="dashboard-menu mt-4 ">Add Products</li>
              </Link>
              <Link className="dashboard-menu mt-2" to={`/makeAdmin`}>
                <li className="dashboard-menu mt-4 text-warning" >Make Admin</li>
              </Link>
              <button className="btn-danger mt-2" onClick={logOut}>Log Out</button>
            </div>
          </div>
          <div className="col-md-9 post-section mx-auto mt-5">
          {/*  */}
          <div>
          {success && <div classNmae="mx-auto">
                    <Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" />
                </div> }
            <form onSubmit={handleSubmit} className="border-box p-5 bg-dark">
                    <input type="email" required placeholder="new admin email" className="w-100" onBlur={textBlur}/>
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

export default MakeAdmin;