import Image from 'next/image';
import ctaImg from '../../../public/assets/img/bg/pricing-cta-img.png';
import React from 'react';
import PricingCtaForm from '@/forms/PricingCtaForm';


const ContactSection = () => {
    return (
        <section className="pricing-cta pt-120 pb-120 fix">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-2">
                     <span className="section-subtitle">[ call to action ]</span>
                     <h2 className="section-main-title mb-45">estimate price</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-cta-wrapper wow fadeInUp" data-wow-delay=".3s">
               <div className="pricing-cta-inner">
                  <div className="row">
                     <div className="col-xl-8">
                        <div className="pricing-cta-form">
                       <PricingCtaForm/>
                        </div>
                     </div>
                     <div className="col-xl-4">
                        <div className="pricing-cta-img">
                           <Image style={{width:"100%", height:"auto"}} src={ctaImg} alt="cta-image"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ContactSection;