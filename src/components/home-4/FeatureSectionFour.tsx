import Link from 'next/link';
import React from 'react';
import feturesImg from "../../../public/assets/img/features/features-1.jpg";
import feturesImg2 from "../../../public/assets/img/features/features-2.jpg";
import Image from 'next/image';
import BrandSliderTwo from '@/elements/sliders/brand/BrandSliderTwo';

const FeatureSectionFour = () => {
   return (
      <section className="features-area style-4">
         <div className="features-title-area style-4">
            <div className="container">
               <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-lg-8">
                     <div className="section-title style-4 features-section-title text-center">
                        <span className="section-subtitle">core features</span>
                        <h2 className="section-main-title mb-45">our ability to make your
                           lawn look its best.</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="features-wrapper style-4">
               <div className="row wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-lg-6">
                     <div className="single-feature style-4 mb-30">
                        <div className="single-feature-inner">
                           <div className="features-thumb">
                              <Link href="/service">
                                 <Image style={{width:"100%", height:"auto"}} src={feturesImg} alt="features-thumb" />
                             </Link>
                           </div>
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/service">Residential</Link>
                                 </h4>
                                 <div className="feature-offers">
                                    <ul>
                                       <li>Lawn Maintenance</li>
                                       <li>Spring & Fall Clean Up</li>
                                       <li>Fertilization</li>
                                       <li>Irrigation</li>
                                       <li>Ice Management</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/service" className="fill-btn">Read more<i className="fal fa-long-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="single-feature style-4 mb-30">
                        <div className="single-feature-inner">
                           <div className="features-thumb">
                              <Link href="/service">
                                 <Image style={{width:"100%", height:"auto"}} src={feturesImg2} alt="features-thumb" />
                              </Link>
                           </div>
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/service">Commercial</Link>
                                 </h4>
                                 <div className="feature-offers">
                                    <ul>
                                       <li>Interior Landscaping</li>
                                       <li>Aquatic Management</li>
                                       <li>Pruning</li>
                                       <li>Outdoor Lightinh</li>
                                       <li>Mulch</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/service" className="fill-btn">Read more<i className="fal fa-long-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <BrandSliderTwo brand_class="style-4" brand_classA="" />
            </div>
         </div>
      </section>
   );
};

export default FeatureSectionFour;