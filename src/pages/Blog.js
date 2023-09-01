import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assests/dazzle-images/blog-1.png'
import img2 from '../assests/dazzle-images/blog-2.png'

import img3 from '../assests/dazzle-images/blog-3.png'
import img4 from '../assests/dazzle-images/blog-4.png'

const Blog = () => {
  return (
    <div>
        <main className="main-wrapper">
      
        <div className="axil-breadcrumb-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 text-center">
                        <div className="inner">
                            <ul className="axil-breadcrumb">
                                <li className="axil-breadcrumb-item"><Link to="index.html">Home</Link></li>
                                <li className="separator"></li>
                                <li className="axil-breadcrumb-item active" aria-current="page">Blogs</li>
                            </ul>
                            <h1 className="title">Blog</h1>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
      
        <div className="axil-blog-area axil-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row g-5">
                            <div className="col-md-6">
                                <div className="content-blog blog-grid">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Link to="#">
                                                <img src={img1} alt="Blog Images"/>
                                            </Link>
                                            <div className="blog-category">
                                                <Link to="#">Digital Art's</Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h5 className="title"><Link to="#">Keeping yourself safe when buying NFTs on eTrade</Link></h5>
                          
                                            <div className="read-more-btn">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos recusandae</p>
                                                <Link className="axil-btn right-icon" to="#">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                            </div>

                                             
                            <div className="axil-single-widget mt--40 widget_tag_cloud">
                            
                                <div className="tagcloud">
                                  
                                    <Link to="#">Development</Link>
                                    <Link to="#">UI/UX Design</Link>
                                    <Link to="#">eCommerce</Link>
                                   
                                </div>
                            </div>
                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="content-blog blog-grid">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Link to="#">
                                                <img src={img2} alt="Blog Images"/>
                                            </Link>
                                            <div className="blog-category">
                                                <Link to="#">Photography</Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h5 className="title"><Link to="#">Important updates for listing and delisting your NFTs</Link></h5>

                                            <div className="read-more-btn">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos recusandae</p>
                                                <Link className="axil-btn right-icon" to="#">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                            </div>
                                           
                            <div className="axil-single-widget mt--40 widget_tag_cloud">
                            
                                <div className="tagcloud">
                                  
                                    <Link to="#">Development</Link>
                                    <Link to="#">UI/UX Design</Link>
                                    <Link to="#">eCommerce</Link>
                                   
                                </div>
                            </div>
                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="content-blog blog-grid">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Link to="#">
                                                <img src={img3}/>
                                            </Link>
                                            <div className="blog-category">
                                                <Link to="#">Music</Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h5 className="title"><Link to="#">10 tips for avoiding scams and staying safe on the decentralized web</Link></h5>

                                            <div className="read-more-btn">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos recusandae</p>
                                                <Link className="axil-btn right-icon" to="#">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                            </div>
                                              
                            <div className="axil-single-widget mt--40 widget_tag_cloud">
                            
                                <div className="tagcloud">
                                  
                                    <Link to="#">Development</Link>
                                    <Link to="#">UI/UX Design</Link>
                                    <Link to="#">eCommerce</Link>
                                   
                                </div>
                            </div>
                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="content-blog blog-grid">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Link to="#">
                                                <img src={img4} alt="Blog Images"/>
                                            </Link>
                                            <div className="blog-category">
                                                <Link to="#">Sports</Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h5 className="title"><Link to="#">Keeping yourself safe when buying NFTs on eTrade</Link></h5>

                                            <div className="read-more-btn">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos recusandae</p>
                                                <Link className="axil-btn right-icon" to="#">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                            </div>
                                              
                            <div className="axil-single-widget mt--40 widget_tag_cloud">
                            
                                <div className="tagcloud">
                                  
                                    <Link to="#">Development</Link>
                                    <Link to="#">UI/UX Design</Link>
                                    <Link to="#">eCommerce</Link>
                                   
                                </div>
                            </div>
                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                       <div className="row justify-content-center">
                       <div className="col-lg-4"></div>
                       <div className="col-lg-4">
                        <div className="post-pagination ">
                            <nav className="navigation pagination " aria-label="Products">
                                <ul className="page-numbers">
                                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                                    <li><Link className="page-numbers" to="#">2</Link></li>
                                    <li><Link className="page-numbers" to="#">3</Link></li>
                                    <li><Link className="page-numbers" to="#">4</Link></li>
                                    <li><Link className="page-numbers" to="#">5</Link></li>
                                    <li><Link className="next page-numbers" to="#"><i className="fal fa-arrow-right"></i></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                       <div className="col-lg-4"></div>
                       </div>
                    </div>
                 
                </div>
               
            </div>
            
        </div>


       
    </main>
    </div>
  )
}

export default Blog