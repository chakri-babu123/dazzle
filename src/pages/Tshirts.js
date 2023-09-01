import React from 'react'
import FooterService from '../pages-inner-components/FooterService'
import { Link } from 'react-router-dom';
import img4 from '../assests/dazzle-images/tshirts/tshirt-4.png'

import img5 from '../assests/dazzle-images/tshirts/tshirt-5.png'
import img6 from '../assests/dazzle-images/tshirts/tshirt-6.png'

import img7 from '../assests/dazzle-images/tshirts/tshirt-7.png'
import img8 from '../assests/dazzle-images/tshirts/tshirt-8.png'
import PagesBanners from './PagesBanners'

const Tshirts = () => {
  return (
    <>
    <PagesBanners />
     <div className="axil-shop-area axil-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="axil-shop-sidebar">
                            <div className="d-lg-none">
                                <button className="sidebar-close filter-close-btn"><i className="fas fa-times"></i></button>
                            </div>
                           
                            <div className="toggle-list product-color active">
                                <h6 className="title">COLORS</h6>
                                <div className="shop-submenu">
                                    <ul>
                                        <li className="chosen"><Link to="#" className="color-extra-01"></Link></li>
                                        <li><Link to="#" className="color-extra-02"></Link></li>
                                        <li><Link to="#" className="color-extra-03"></Link></li>
                                        <li><Link to="#" className="color-extra-04"></Link></li>
                                        <li><Link to="#" className="color-extra-05"></Link></li>
                                        <li><Link to="#" className="color-extra-06"></Link></li>
                                        <li><Link to="#" className="color-extra-07"></Link></li>
                                        <li><Link to="#" className="color-extra-08"></Link></li>
                                        <li><Link to="#" className="color-extra-09"></Link></li>
                                        <li><Link to="#" className="color-extra-10"></Link></li>
                                        <li><Link to="#" className="color-extra-11"></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="toggle-list product-size active">
                                <h6 className="title">SIZE</h6>
                                <div className="shop-submenu">
                                    <ul>
                                        <li className="chosen"><Link to="#">XS</Link></li>
                                        <li><Link to="#">S</Link></li>
                                        <li><Link to="#">M</Link></li>
                                        <li><Link to="#">L</Link></li>
                                        <li><Link to="#">XL</Link></li>
                                        <li><Link to="#">XXL</Link></li>
                                        <li><Link to="#">3XL</Link></li>
                                        <li><Link to="#">4XL</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="toggle-list product-price-range active">
                                <h6 className="title">PRICE</h6>
                                <div className="shop-submenu">
                                    <ul>
                                        <li className="chosen"><Link to="#">30</Link></li>
                                        <li><Link to="#">5000</Link></li>
                                    </ul>
                                    <form action="#" className="mt--25">
                                        <div id="slider-range"></div>
                                        <div className="flex-center mt--20">
                                           
                                        </div>
                                    </form>
                                </div>
                            </div>
                          
                        </div>
                       
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="axil-shop-top mb--40">
                                    <div className="category-select align-items-center justify-content-lg-start justify-content-between">
                                       
                                        <span className="filter-results">Home  Tshirts </span>
                                       
                                       
                                    </div>
                                    <div className="d-lg-none">
                                        <button className="product-filter-mobile filter-toggle"><i className="fas fa-filter"></i> FILTER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="row row--15 row--15-2">
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img6} alt="Product Images"/>
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">10% OFF</div>
                                        </div>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>blue tshirt</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 30</span>
                                                <span className="price old-price">₹ 30</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                           
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img5} alt="Product Images"/>
                                        </Link>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>Media remote</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 40</span>
                                                <span className="price old-price">₹ 50</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                           
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img4} alt="Product Images"/>
                                        </Link>
                                        <div className="label-block label-right">
                                           
                                        </div>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>HD camera</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 45</span>
                                                <span className="price old-price">₹ 60</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                         
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img4} alt="Product Images"/>
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">5% OFF</div>
                                        </div>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>Guys Bomber</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 50</span>
                                                <span className="price old-price">₹ 60</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button> </Link>
                                               
                                        </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img4} alt="Product Images"/>
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">5% OFF</div>
                                        </div>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>Guys Bomber</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 50</span>
                                                <span className="price old-price">₹ 60</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                           
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img5} alt="Product Images"/>
                                        </Link>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>RGB Cherry</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 38</span>
                                                <span className="price old-price">₹ 50</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                       
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img6} alt="Product Images"/>
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">5% OFF</div>
                                        </div>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>RGB Cherry</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 25</span>
                                                <span className="price old-price">₹ 40</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                        
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img7} alt="Product Images"/>
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">15% OFF</div>
                                        </div>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>Logitech</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 15</span>
                                                <span className="price old-price">₹ 20</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                          
                            <div className="col-xl-4 col-sm-6  col-xl-4-2">
                                <div className="axil-product product-style-one mb--30">
                                    <div className="thumbnail">
                                        <Link to={"/singleproductdetails"}>
                                            <img src={img8} alt="Product Images"/>
                                        </Link>
                                       
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to={"/cart"}>Meets Clarity</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">₹ 60</span>
                                                <span className="price old-price">₹ 80</span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="">
                                           
                                                <Link to={"/singleproductdetails"}> <button className='add-cart-btn-custom'> Add to Cart </button></Link>
                                               
                                        </div>
                                </div>
                            </div>
                          
                           
                          
                        </div>
                       
                    </div>
                </div>
            </div>
           
        </div>
    
    <FooterService />
    </>
  )
}

export default Tshirts