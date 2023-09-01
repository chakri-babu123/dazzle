import React from 'react'
import img1 from '../assests/dazzle-images/mini-1.png'
import img2 from '../assests/dazzle-images/mini-2.png'

import img3 from '../assests/dazzle-images/mini-3.png'
import img4 from '../assests/dazzle-images/mini-4.png'
import topchoseimg from '../assests/dazzle-images/top-choice.gif'
import { Link } from 'react-router-dom'
const TopChoiceComponent = () => {
  return (
    <>
  <div className="product-collection-area bg-lighter axil-section-gapcommon ">
            <div className="container-fluid">
              
                <div className="row">
                    <div className="col-xl-7">
                        <div className="product-collection product-collection-two" >
                           
                           <img src={topchoseimg} className='top-choices-coustm' width="100%" height="100%" alt=""/>
                        
                
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="row row--15-2">
                            <div className="col-md-6 col-xl-4-2">
                                <div className="product-collection-three">
                                   
                                    <Link to={"/tshirts"} className="">
                                        <img src={img1} width="100%" alt="Product"/>
                                        <h6 className="title tittle-bt">T-Shirts</h6>
                                    </Link>
                                   
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4-2">
                                <div className="product-collection-three">
                                    <Link to={"/lowers"} className="">
                                        <img src={img2} width="100%" alt="Product"/>
                                        <h6 className="title tittle-bt">Lowers</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4-2">
                                <div className="product-collection-three">
                                    <Link to={"/shorts"} className="">
                                        <img src={img3} width="100%" alt="Product"/>
                                        <h6 className="title tittle-bt">Shorts</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4-2">
                                <div className="product-collection-three">
                                    <Link to={"/tracks"} className="">
                                        <img src={img4} alt="Product"/>
                                        <h6 className="title tittle-bt">Tracks</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
};

export default TopChoiceComponent