import React from 'react';
import logo from '../assests/dazzle-images/logo.png'
import payment from '../assests/dazzle-images/payments.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
     <footer className="axil-footer-area footer-style-2">
       
        <div className="footer-top separator-top">
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            
                           <div className=" mb--30">
                            <Link to={"/"}>
                                <img className="light-logo" src={logo} alt="Logo Images"/>
                            </Link>
                        </div>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor ipsum dolor sit.</p>
                            <div className="social-share">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link to="#"><i className="fab fa-discord"></i></Link>
                            </div>
                         
                              
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Quick Links</h5>
                            <div className="inner">
                                <ul>
                                    <li><Link to={"/terms"}>Terms & Conditions</Link></li>
                                    <li><Link to={"privacy"}>Privacy Policy</Link></li>
                                    <li><Link to={"/shipping"}>Shipping Policy</Link></li>
                                    <li><Link to={"/exchange"}>Exchange Policy</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Location</h5>
                            <div className="inner">
                            <ul className="support-list-item">
                                    <li><Link to="mailto:info@dazzlesportswear.com"><i className="fal fa-envelope-open"></i>info@dazzlesportswear.com</Link></li>
                                    <li><Link to="tel:+91 924 682 8188"><i className="fal fa-phone-alt"></i> +91 924 682 8188</Link></li>
                                    <li><Link to="tel:040 23792422"><i className="fal fa-phone-alt"></i> 040 23792422</Link></li>
                                   <li><i className="fal fa-map-marker-alt"></i>Dazzle Sportswear Pvt Ltd.
                                                                                <br/>Add: Plot No. 107, 107a, 108, Survey No. 509/1/2,
                                                                                <br/>Apparel Export Park, Gundlapochampally,
                                                                                <br/>Hyderabad - 500014,</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-sm-6">
                        <h5 className="widget-title">Follow Us Here</h5>
                        
                        <div className="axil-footer-widget footer-widget-newsletter">
                           
                           
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter Your Email"/>
                                <button className="submit-btn" type="button">SUBSCRIBE</button>
                            </div>
                      
                            <div className="mt--10">
                            <img src={payment} width={'100%'} alt=''/>
                            </div>
                           
                           
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
       
        <div className="copyright-area copyright-default separator-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4">
                       
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="copyright-left d-flex flex-wrap justify-content-center">
                            <ul className="quick-link">
                                <li>© 2023. All rights reserved by <Link target="_blank" to="#">DAZZLE</Link>.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                     
                    </div>
                </div>
            </div>
        </div>
      
    </footer>
    </>
  );
};

export default Footer;