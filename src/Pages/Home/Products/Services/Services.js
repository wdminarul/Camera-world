import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './services.css'

const Services = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://serene-escarpment-19540.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="container" id="products">
          <div className="mx-auto " style={{margin:'0-auto'}}>
              <h2 className=" text-center pt-5 pb-3"> <span className="text-danger">Cameras</span> </h2>
              <p className="text-secondary text-center pb-3">Luminar AI uses artificial intelligence to take the drudgery out of photo processing, allowing you to create beautiful images with the minimum of fuss. At least that's how the sales pitch goes - does it actually succeed in making it easier and quicker to successfully edit your</p>
              <div  className="row gx-5 mx-auto">
                  {
                    products.map((product,index)=><div className="col-md-4 ">
                    <div class="wrapper">
                            <div class="card-main text-center mb-3">
                                <div class="image"> 
                                <img src={product?.img} alt="" />
                                 </div>
                                <div class="about-product text-center">
                                    <h3>{product?.name}</h3>
                                    <h4>$ {product?.price}.</h4>
                                    <Link to={`/placeOrder/${product?._id}`}>
                                     <button class="btn btn-warning buy-now">Buy Now</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>                
                    </div>)
              }
              <Link to={`/explore`}>
                  <button className="m-auto" style={{padding:'5px 10px',color:'#fff',fontWeight:'bold',border:'none', borderRadius:'5px',backgroundColor:'#E9F716',margin:'0-auto'}}>Explore More Products</button>
              </Link>
                  </div>    
          </div>
        </div>
    );
};

export default Services;