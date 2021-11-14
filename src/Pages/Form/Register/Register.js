import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import googleLogo from '../../../Images/google.png'
import { Link,useLocation,useHistory } from 'react-router-dom';
import './register.css'
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Register = () => {
    const [loginData,setLoginData]= useState({})
    const {register,googleLogIn,isLoading}= useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        
    }
    const handleGoogle = ()=>{
        googleLogIn(location,history)
    }

const handleSubmit = e =>{
    if(loginData.password !== loginData.password2){
        alert('Your Password Did not match')
        return;
    }
    register(loginData.email, loginData.password,location,history,loginData?.name)
    e.preventDefault()
}

    return (
        <div className="bg-main" style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")` 
          }}>
            <Header></Header>
            <div className="my-5 pt-5 shadow ">
            <div className="main-form mt-5 pt-5 mb-5 pb-5">
            <form onSubmit={handleSubmit}>
                <h2 className="text-warning">Register</h2>
                {isLoading && <div classNmae="mx-auto">
                    <Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" />
                </div> }
                <input  name="name" id="" placeholder="Your Name" required onChange={handleChange}/>
                <br />
                <br />
                <input type="email"  name="email" id="" placeholder="email" required onChange={handleChange}/>
                <br />
                <br />
                <input type="password" placeholder="password" name="password" required onChange={handleChange}/>
                <br />
                <br />
                <input type="password" placeholder="ReType password" name="password2" required onChange={handleChange}/>
                <br />
                <span className="text-danger"></span>
                <br />
                <input className="btn btn-warning" type="submit" value="Register" />
                <br /><span></span><br />
                <p className="text-light">Already have an account?<span className="text-primary "><Link to="/login" className="text-danger"> Login Here</Link></span></p>
                <p className="text-light"> Sign in with google</p>
                {/* <Link to=""> */}
                <button className="google-logo" onClick={handleGoogle}><img className=" img-fluid" src={googleLogo} alt="" /></button>
                {/* </Link> */}
            </form>
        </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Register;