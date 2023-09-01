import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assests/dazzle-images/p-1.png'
import img2 from '../assests/dazzle-images/p-2.png'

import img3 from '../assests/dazzle-images/p-3.png'
import img4 from '../assests/dazzle-images/p-4.png'
const CategoryComponent = () => {
  return (
    <>
         <div className="axil-poster-countdown  ">
            <div className="container">
                <div className="poster-countdown-wrap bg-lighter">
                   <div className="row ">
                    <div className="col-md-6 ">
                         <div className="row">
                    
                        <div className="col-xl-7 col-lg-6">
                            <div className="poster-countdown-thumbnail">
                                <img src={img1} className="poster-img custom-image"  alt="Poster Product"/> 
                              
                            </div>
                        </div>
                            <div className="col-xl-5 col-lg-6">
                            <div className="poster-countdown-content">
                                <div className="section-title-wrapper">
                                    <span className="title-highlighter highlighter-secondary"> <i className="fal fa-headphones-alt"></i> Don’t Miss!!</span>
                                    <h5 className="hm-h5">Enhance Your Music Experience</h5>
                                    <p className='mini-text'>Lorem ipsum dolor sit amet consectet.</p>
                                </div>
                              
                                <Link to={"/tshirts"} className="axil-btn  check-out-btn shop-now-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 ">
                         <div className="row">
                    
                        <div className="col-xl-7 col-lg-6">
                            <div className="poster-countdown-thumbnail">
                                <img src={img2} className="poster-img custom-image"  alt="Poster Product" />
                              
                            </div>
                        </div>
                            <div className="col-xl-5 col-lg-6">
                            <div className="poster-countdown-content">
                                <div className="section-title-wrapper">
                                    <span className="title-highlighter highlighter-secondary"> <i className="fal fa-headphones-alt"></i> Don’t Miss!!</span>
                                    <h5 className="hm-h5">Enhance Your Music Experience</h5>
                                    <p className='mini-text'>Lorem ipsum dolor sit amet consectet.</p>
                                </div>
                              
                                <Link to={"/tshirts"} className="axil-btn  check-out-btn shop-now-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>






        <div className="axil-poster-countdown ">
            <div className="container">
                <div className="poster-countdown-wrap bg-lighter">
                   <div className="row">
                    <div className="col-md-6">
                         <div className="row">
                    
                        <div className="col-xl-7 col-lg-6">
                            <div className="poster-countdown-thumbnail">
                                <img src={img3} className="poster-img custom-image"  alt="Poster Product" />
                              
                            </div>
                        </div>
                            <div className="col-xl-5 col-lg-6">
                            <div className="poster-countdown-content">
                                <div className="section-title-wrapper">
                                    <span className="title-highlighter highlighter-secondary"> <i className="fal fa-headphones-alt"></i> Don’t Miss!!</span>
                                    <h5 className="hm-h5">Enhance Your Music Experience</h5>
                                    <p className='mini-text'>Lorem ipsum dolor sit amet consectet.</p>
                                </div>
                              
                                <Link to={"/tshirts"} className="axil-btn  check-out-btn shop-now-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                         <div className="row">
                    
                        <div className="col-xl-7 col-lg-6">
                            <div className="poster-countdown-thumbnail">
                                <img src={img4} className="poster-img custom-image"  alt="Poster Product" />
                              
                            </div>
                        </div>
                            <div className="col-xl-5 col-lg-6">
                            <div className="poster-countdown-content">
                                <div className="section-title-wrapper">
                                    <span className="title-highlighter highlighter-secondary"> <i className="fal fa-headphones-alt"></i> Don’t Miss!!</span>
                                    <h5 className="hm-h5">Enhance Your Music Experience</h5>
                                    <p className='mini-text'>Lorem ipsum dolor sit amet consectet.</p>
                                </div>
                              
                                <Link to={"/tshirts"} className="axil-btn  check-out-btn shop-now-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryComponent