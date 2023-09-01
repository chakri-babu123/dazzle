import React from 'react'
import { Link } from 'react-router-dom';

import img1 from '../assests/dazzle-images/tshirts/tshirt-5.png'
import img2 from '../assests/dazzle-images/tshirts/tshirt-6.png'
const Wishlist = () => {
  return (
    <>
    <div className="container">
        <div className="row ">
            <div className="col-md-8">
             <div className='row mt--40'>
                     <div className='col-md-4'>
                            <div className="thumbnail">
                                 <img src={img1} className='wishlistimg' alt="Blog Images"/>
                            </div>
                     </div>
                <div className='col-md-8'>
                <div className="content">
                                <h6 className="title"><a >Men's Fashion Tshirt</a></h6>
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount">
                                                <span className='text-muted'>SKU :</span> DTS
                                         </span>
                                    </div>
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount ">
                                              <span className='text-muted'>Colour :</span> White
                                         </span>
                                         <span className="woocommerce-Price-amount amount mx-4">
                                              <span className='text-muted'>Size :</span> Large
                                         </span>
                                         <span className="woocommerce-Price-amount amount mx-4 ">
                                         <span className='text-muted'>Qty :</span>
                                            <select className='mx-width-10'>
                                               
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                         </span>
                                    </div>
                                   
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount">
                                               Rs : 4820 <del>₹ 8930</del>
                                         </span>
                                    </div>
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount">
                                              <del>You Save :</del> Rs : 200 <span className='text-danger'>(27% Off)</span>
                                         </span>
                                    </div>
                                    <div class="product-action-wrapper d-flex-center mt--20">
                                      <ul class="product-action d-flex-center mb--0">
                                          <li class=""><Link to={"/cart"} class="axil-btn btn-coustm1">Add to Cart</Link></li>
                                          <li class=""><button class="axil-btn btn-coustm2">Remove Item</button></li>
                                      </ul>
                                   

                                  </div>
                 </div>
                </div>
                

               
             </div>    
             <div className='row mt--40'>
                     <div className='col-md-4'>
                            <div className="thumbnail">
                                 <img src={img2} className='wishlistimg' alt="Blog Images"/>
                            </div>
                     </div>
                <div className='col-md-8'>
                <div className="content">
                                <h6 className="title"><a >Men's Fashion Tshirt</a></h6>
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount">
                                                <span className='text-muted'>SKU :</span> DTS
                                         </span>
                                    </div>
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount ">
                                              <span className='text-muted'>Colour :</span> White
                                         </span>
                                         <span className="woocommerce-Price-amount amount mx-4">
                                              <span className='text-muted'>Size :</span> Large
                                         </span>
                                         <span className="woocommerce-Price-amount amount mx-4 ">
                                         <span className='text-muted'>Qty :</span>
                                            <select className='mx-width-10'>
                                               
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                         </span>
                                    </div>
                                   
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount">
                                               Rs : 4820 <del>₹ 8930</del>
                                         </span>
                                    </div>
                                    <div className="product-meta-content">
                                       <span className="woocommerce-Price-amount amount">
                                              <del>You Save :</del> Rs : 200 <span className='text-danger'>(27% Off)</span>
                                         </span>
                                    </div>
                                    <div class="product-action-wrapper d-flex-center mt--20">
                                      <ul class="product-action d-flex-center mb--0">
                                          <li class=""><Link to={"/cart"} class="axil-btn btn-coustm1">Add to Cart</Link></li>
                                          <li class=""><button class="axil-btn btn-coustm2">Remove Item</button></li>
                                      </ul>
                                   

                                  </div>
                 </div>
                </div>
                

               
             </div>      
             
             </div>
           
            <div className="col-md-4">
            <div class="axil-order-summery mt--80">
                                <h5 class="title mb--20">Order Summary</h5>
                                <div class="summery-table-wrap">
                                    <table class="table  mb--30"  >
                                        <tbody>
                                            <tr class="order-subtotal">
                                                <td>Subtotal</td>
                                                <td>₹ 117.00</td>
                                            </tr>
                                            <tr class="order-shipping">
                                                <td>Shipping</td>
                                               
                                            </tr>
                                            <tr class="order-tax">
                                                <td>State Tax</td>
                                                <td>₹ 8.00</td>
                                            </tr>
                                            <tr class="order-total">
                                                <td>Total</td>
                                                <td class="order-total-amount">₹ 125.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Link to={"/checkout"} class="axil-btn add-cart-btn-custom checkout-btn">Process to Checkout</Link>
                            </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Wishlist