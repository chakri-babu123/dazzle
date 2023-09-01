import React from 'react'
import img1 from '../assests/dazzle-images/Product.png'
import img2 from '../assests/dazzle-images/Medal.png'

import img3 from '../assests/dazzle-images/Team.png'
import img4 from '../assests/dazzle-images/Truck.png'
import img5 from '../assests/dazzle-images/Shipment.png'
const Chooseus = () => {
  return (
    <>
     <div className="axil-why-choose-area pb--50 pb_sm--30">
            <div className="container">
               
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20 row--15-2">
                    <div className="col col-xl-4-2">
                        <div className="service-box">
                            <div className="icon icon-2">
                                <img src={img1} alt="Service"/>
                            </div>
                            <h6 className="title">Fast &amp; Secure Delivery</h6>
                        </div>
                    </div>
                    <div className="col col-xl-4-2">
                        <div className="service-box">
                            <div className="icon icon-2">
                                <img src={img2} alt="Service"/>
                            </div>
                            <h6 className="title">100% Guarantee On Product</h6>
                        </div>
                    </div>
                    <div className="col col-xl-4-2">
                        <div className="service-box">
                            <div className="icon icon-2">
                                <img src={img3} alt="Service"/>
                            </div>
                            <h6 className="title">24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div className="col col-xl-4-2">
                        <div className="service-box">
                            <div className="icon icon-2">
                                <img src={img4} alt="Service"/>
                            </div>
                            <h6 className="title">24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div className="col col-xl-4-2">
                        <div className="service-box">
                            <div className="icon icon-2">
                                <img src={img5} alt="Service"/>
                            </div>
                            <h6 className="title">Next Level Pro Quality</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Chooseus