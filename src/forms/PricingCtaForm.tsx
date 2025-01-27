import React from 'react';
import priceTagImg from '../../public/assets/img/icon/price-tag.png';
import Image from 'next/image';
import Link from 'next/link';

const PricingCtaForm = () => {
    return (
        <>
             <form action="#">
                              <div className="row">
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-name">
                                       <label htmlFor="name">full name</label>
                                       <input type="text" placeholder="enter here..." name="name" id="name"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-email">
                                       <label htmlFor="email">email address</label>
                                       <input type="email" placeholder="enter here..." name="email" id="email"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-number">
                                       <label htmlFor="number">phone number</label>
                                       <input type="text" placeholder="enter here..." name="number" id="number"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-address">
                                       <label htmlFor="address">address</label>
                                       <input type="text" placeholder="enter here..." name="address" id="address"/>
                                    </div>
                                 </div>
                                 <div className="col-md-12 col-sm-12">
                                    <div className="select-service-button">
                                       <div className="single-input-field field-service">
                                          <label htmlFor="select-service">name of service</label>
                                          <select className="select-service" name="select-service" id="select-service">
                                             <option value="1">gardening</option>
                                             <option value="2">watering</option>
                                             <option value="3">triming</option>
                                             <option value="4">planting</option>
                                             <option value="5">cleaning</option>
                                          </select>
                                       </div>
                                       <Link href="#" className="fill-btn">get a quote<i
                                             className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="estimated-price-wrapper">
                                       <p>estimated price</p>
                                       <span className="es-price-value">$45,000</span>
                                       <Image className="es-price-tag" style={{width:"auto", height:"auto"}} src={priceTagImg} alt="price-tag"/>
                                    </div>
                                 </div>
                              </div>
                           </form>
        </>
    );
};

export default PricingCtaForm;