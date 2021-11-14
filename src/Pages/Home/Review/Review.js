import React, { useEffect, useState } from 'react';
import star from '../../../Images/star.png'
import './review.css'

const Review = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('https://serene-escarpment-19540.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div id="review">
             <div className="container mt-5" >
          <div className="mx-auto " style={{margin:'0-auto'}}>
              <h2 className=" text-center pt-5 pb-3"> <span className="text-danger" style={{color:''}}>Client Reviews</span> </h2>
              <div  className="row gx-5 mx-auto">
              {
                    reviews.map((order,index)=><div className="col-md-3 ">
                    <div className="border shadow  mb-5 bg-body rounded main-section p-3">
                               <img className="img-section" src={order?.img} alt="" />
                                <h3 className="text-danger text-center">{order?.name}</h3>
                                <p className="text-danger text-center">{order?.description}</p>
                                <img src={star} alt="" className="star-img" />
                        </div>                 
                    </div>)
              }
                  </div>    
          </div>
        </div>
        </div>
    );
};

export default Review;