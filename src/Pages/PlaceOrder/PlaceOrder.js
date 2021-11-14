
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import logo from "../../Images/logo.png"
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './placeorder.css'

const PlaceOrder = () => {
    const {orderId} = useParams()
    const [details,setDetails] = useState([])
    const {user} = useAuth()
    const history = useHistory();



    useEffect(()=>{
        fetch('https://serene-escarpment-19540.herokuapp.com/allProducts')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[orderId])
    const product = details?.find(ds=>ds?._id  === orderId)
    const handleOrder =e=>{
        e.preventDefault()
        const data = product;
        delete data._id
        data.email = user?.email;
        fetch('https://serene-escarpment-19540.herokuapp.com/addOrders',{
            method:"POST",
            headers:{"content-type":"application/json" },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
        //     console.log(data.result)
        // const remaning= product.filter(pd=>pd?._id)
        // setHotels(remaning)
        if(data.deletedCount){
            
        }
        else{
           
        }
       history.push('/dashBord')
    })
    }
    return (
        <div>
            <Header/>
            <div className="container mt-5 pt-5">
            <div className="row gx-5">
                <div className="col-md-6 bg-warning form">
                                    <Form className="w-75% pt-5 pb-5">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder={user?.email} disabled/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder={product?.name} disabled/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control placeholder={user?.displayName} disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="home address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control placeholder="Your mobile number" type="number"/>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check out for term and condition" />
                    </Form.Group>
                    <button className="bg-danger  rounded shadow" style={{padding:'5px 10px',color:'#fff',fontWeight:'bold',border:'none', borderRadius:'5px'}} onClick={handleOrder}>Purchase</button>
                    </Form>
                </div>
                <div className="col-md-6">
                    <img src={product?.img} className="pd-img" alt="" />
                    <h1>{product?.name}</h1>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PlaceOrder;