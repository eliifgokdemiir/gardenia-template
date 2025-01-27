import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import pricingList from '@/data/pricing-data';
const PricingSection = () => {
    return (
        <section className="pricing-area pricing-area-bg pt-120 pb-90">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center pricing-section-title">
                     <span className="section-subtitle">pricing</span>
                     <h2 className="section-main-title mb-45">offers & pricing</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-wrapper wow fadeInUp" data-wow-delay=".3s">
               {pricingList &&
                  <div className="row">
                     {pricingList.map((item, num) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={num}>
                           <div className={item.packageActive}>
                           <div className={item.packageBadge}>best choice</div>
                              <div className="pricing-content">
                                 <div className="pricing-shape">
                                    <Image src={item.packageIcon} width={109} height={121} alt="pricing-shape"/>
                                 </div>
                                 <span className="package-name">{item.packageName}</span>
                                 <span className="package-price">{`$${item.packagePrice}.00`}</span>
                                 <div className="package-list">
                                    <ul>
                                       <li className={item.packageListClassA}>{item.packageService}</li>
                                       <li className={item.packageListClassB}>{item.packagePlaning}</li>
                                       <li className={item.packageListClassC}>{item.packageParty}</li>
                                       <li className={item.packageListClassD}>{item.packageLandscape}</li>
                                       <li className={item.packageListClassE}>{item.packageFence}</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="pricing-btn">
                                 <Link href="/contact" className="fill-btn"><i className="fas fa-shopping-basket"></i>{item.packageBtn}</Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               }
            </div>
         </div>
      </section>
    );
};

export default PricingSection;