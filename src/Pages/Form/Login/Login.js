import React, { useState } from 'react';
import {useLocation,useHistory } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import googleLogo from '../../../Images/google.png'
import { Link } from 'react-router-dom';
import './login.css'
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Login = () => {

    const [loginData,setLoginData]= useState({})
    const {loginWithEmail,googleLogIn,isLoading,user} = useAuth();
    const location = useLocation()
    const history = useHistory()

    const handleGoogle = ()=>{
        googleLogIn(location,history)
    }

    const handleChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

const handleSubmit= e =>{
    loginWithEmail(loginData.email, loginData.password,location,history)
    e.preventDefault()
}

    return (
        <div className="bg-main" style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")` 
          }}>
            <Header></Header>
            <div className="w-50 mx-auto mt-5 pt-5"> {user?.email && <div class="alert alert-success" role="alert">
                Welcome {user?.displayName} You Are Successfully In.
            </div>}</div>
            <div className="my-5 pt-5 shadow">
            <div className="main-form mt-5 pt-5 mb-5 pb-5">
            <form onSubmit={handleSubmit} >
                <h2 className="text-warning">Sign In</h2>
                {isLoading && <div classNmae="mx-auto">
                    <Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" />
                </div> }
                <input  type="email"  name="email" id="" placeholder="email" required onChange={handleChange}/>
                <br />
                <br />
                <input name="password" type="password" placeholder="password" required onChange={handleChange}/>
                <br />
                <span className="text-danger"></span>
                <br />
                <input className="btn btn-warning" type="submit" value="Login" />
                <br /><span></span><br />
                <p className="text-light">I have no account!<span className="text-primary "><Link to="/register" className="text-danger"> Register</Link></span></p>
                <p className="text-light"> Sign in with google</p>
                {/* <Link to=""> */}
                <button className="google-logo" onClick={handleGoogle} ><img className=" img-fluid" src={googleLogo} alt="" /></button>
                {/* </Link> */}
            </form>
           
        </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Login;