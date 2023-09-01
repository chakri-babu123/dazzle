import React from 'react'
import { Link } from 'react-router-dom';
const ExchangePolicy = () => {
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
                           <h1 class="title">Exchange Policy</h1>
                       </div>
                   </div>
                   <div class="col-lg-6 col-md-4">
                     
                   </div>
               </div>
           </div>
       </div>
    
       <div class="axil-privacy-area axil-section-gap">
           <div class="container">
               <div class="row">
                   <div class="col-lg-10">
                       <div class="axil-privacy-policy">
                          
                           <h4 class="title">Exchange Policy</h4>
                           <p><span className='text-custm-bold'> Timeframe: </span>Dazzle Sportswear allows exchange of the purchased product(s) within 24-48 hours from the date of receiving the parcel.</p>
                           <p><span className='text-custm-bold'> Condition of the item: </span>The only criteria for the product(s) to be exchanged is that the tags must be intact and free from damage. Please note that it should not have any signs of being worn.</p>
                           <p><span className='text-custm-bold'> Proof for purchase: </span> Purchase receipt must be attached as a proof when raising a request for exchange. This process usually takes 10-15 working days.</p>
                           <p><span className='text-custm-bold'> Method of exchange:  </span> On the basis of availability, the store might offer an exchange with a different colour, size or style of the requested item.</p>
                          
                           <h4 class="title">Important</h4>
                           <ul>
                               <li>For better assistance, it is mandatory to capture a video/photo before shipping the product(s) or handing it over to the courier partner.</li>
                               <li>Ensure that the product(s) is unused with all tags intact and packaging.</li>
                               <li>Kindly pack the product(s) properly to avoid damage during transit.</li>
                              
                           </ul>


                           <h4 class="title">THINGS TO CONSIDER</h4>
                           <ul>
                                <li>To avoid the hassles of exchange/return it is recommended to check the size guide before placing the order.</li>                                                                          
                                <li>There might be a slight variation in the colour of the product displayed (due to screen resolution) and received.</li>
                                <li>Register your WhatsApp number while placing an order to receive timely updates and better shopping experience.</li>
                                <li>To be on a safe side, we stress on the importance to create a video while unboxing the parcel.</li>
                                <li>In case the customer receives a torn parcel/ unrelated product(s)/empty parcel, they are requested to raise a query within 48 hours of delivery.</li>
                              
                           </ul>
                          </div>
                   </div>
               </div>
           </div>
       </div>
     

   </main>
    </>
  )
}

export default ExchangePolicy