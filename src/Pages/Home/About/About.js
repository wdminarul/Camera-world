import React from 'react';
import t1 from "../../../Images/t1.png"
import t2 from "../../../Images/t2.png"
import t3 from "../../../Images/t3.png"
import t4 from "../../../Images/t4.png"
import t5 from "../../../Images/t5.png"
import t6 from "../../../Images/t6.png"

import "./about.css"

const About = () => {
    return (
        <div>
            <div className="container overflow-hidden mt-3 mb-5" id="gallary">
                <h2 className="text-center pt-5 pb-3 mt-3">Photo <span className="text-warning">Gallary</span> </h2>
                <p className="text-center text-secondary">Picture capture by some profetionall photographer with our camera</p>
                <div className="row gx-5">
                    <div className="col-md-4">
                    <div className=" border shadow  mb-5 bg-body roundedt all ">
                        <img src={t1} alt="" />
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className=" border shadow  mb-5 bg-body rounded all">
                        <img src={t2} alt="" />
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t3} alt="" />
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t4} alt="" />
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t5} alt="" />
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t6} alt="" />
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default About;