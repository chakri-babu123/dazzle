import React from 'react'
import { Link } from 'react-router-dom';
const ShippingPolicy = () => {
  return (
    <>
      <main class="main-wrapper">
       
       <div class="axil-breadcrumb-area">
           <div class="container">
               <div class="row align-items-center">
                   <div class="col-lg-6 col-md-8">
                       <div class="inner">
                           <ul class="axil-breadcrumb">
                               <li class="axil-breadcrumb-item"><Link to={"/"}>Home</Link></li>
                               <li class="separator"></li>
                               <li class="axil-breadcrumb-item active" aria-current="page">Pages</li>
                           </ul>
                           <h1 class="title">Shipping Policy</h1>
                       </div>
                   </div>
                   <div class="col-lg-6 col-md-4">
                       <div class="inner">
                           <div class="bradcrumb-thumb">
                             
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    
       <div class="axil-privacy-area axil-section-gap">
           <div class="container">
               <div class="row">
                   <div class="col-lg-10">
                       <div class="axil-privacy-policy">
                          
                           <h4 class="title">Shipping Policy</h4>
                          

<p>At Dazzle Sportswear we try our best to ease the process of payment and shipping. As soon as the order is placed, we ship the products in 2-3 working days. Packaging and security of the product is our priority so we take all the effort to make the product reach you in the same condition it was packed in. </p>

<p>Usually it takes a week or less for your product to reach you. It rarely happens so it might take a bit longer due to unforeseen circumstances. </p>

<p>We offer free shipping but for orders on COD, additional charges are applicable. </p>

                       </div>
                   </div>
               </div>
           </div>
       </div>
     

   </main>
    </>
  )
}

export default ShippingPolicy