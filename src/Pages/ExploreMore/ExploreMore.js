import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './explore.css'

const ExploreMore = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://serene-escarpment-19540.herokuapp.com/allProducts')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="container mt-5" >
          <div className="mx-auto " style={{margin:'0-auto'}}>
              <h2 className=" text-center pt-5 pb-3"> <span className="text-danger" style={{color:''}}>Some Top Cameras</span> </h2>
              <p className="text-secondary text-center pb-3">The brand you choose will also influence the quality of your equipment and the range of accessories compatible with it.</p>
              <div  className="row gx-5 mx-auto">
                  {
                    products.map((product,index)=><div className="col-md-4 ">
                    <div class="wrapper">
                            <div class="card-main text-center mb-5">
                                <div class="image"> 
                                <img src={product?.img} alt="" />
                                 </div>
                                <div class="about-product text-center">
                                    <h3>{product?.name}</h3>
                                    <h4>$ {product?.price}.</h4>
                                    <Link to={`/placeOrder/${product?._id}`}>
                                     <button className="btn btn-warning buy-now">Buy Now</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>                
                    </div>)
              }
                  </div>    
          </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default ExploreMore;