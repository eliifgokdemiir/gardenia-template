import Link from 'next/link';
import React from 'react';
import thumb1 from "../../../public/assets/img/about/about-group-thumb1.jpg";
import thumb2 from "../../../public/assets/img/about/about-group-thumb2.jpg";
import thumb3 from "../../../public/assets/img/about/about-group-thumb3.jpg";
import thumb4 from "../../../public/assets/img/about/about-group-thumb4.jpg";
import thumb5 from "../../../public/assets/img/about/about-group-thumb5.jpg";
import thumb6 from "../../../public/assets/img/about/about-group-thumb6.jpg";
import thumb7 from "../../../public/assets/img/about/about-group-thumb7.jpg";
import Image from 'next/image';

const AboutSectionTwo = () => {
   return (
      <section className="about-area style-2 pt-120 pb-140">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="about-thumb-group mb-60">
                     <Image style={{ width: "auto", height: "auto" }} className="about-group-thumb about-group-thumb1"  src={thumb1}
                        alt="thumb" />
                     <Image style={{ width: "auto", height: "auto" }} className="about-group-thumb about-group-thumb2"  src={thumb2}
                        alt="thumb" />
                     <Image style={{ width: "auto", height: "auto" }} className="about-group-thumb about-group-thumb3"  src={thumb3}
                        alt="thumb" />
                     <Image style={{ width: "auto", height: "auto" }} className="about-group-thumb about-group-thumb4" src={thumb4}
                        alt="thumb" />
                     <Image style={{ width: "auto", height: "auto" }} className="about-group-thumb about-group-thumb5" src={thumb5}
                        alt="thumb" />
                     <Image style={{ width: "auto", height: "auto" }} className="about-group-thumb about-group-thumb6" src={thumb6}
                        alt="thumb" />
                     <Image style={{ width: "auto", height: "auto" }} className="about-group-thumb about-group-thumb7" src={thumb7}
                        alt="thumb" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about-content mb-60 style-2">
                     <div className="section-title style-2">
                        <span className="section-subtitle">[ since from 2000 ]</span>
                        <h2 className="section-main-title mb-20">Gardeny offers a
                           full-service</h2>
                     </div>
                     <p className="mb-30">Most gardens consist of a mix of natural and constructed elements, although
                        even very natural gardens are always an inherently artificial creation. Natural
                        elements present in a garden principally.</p>
                     <div className="about-work-progress">
                        <div className="bd-skill--content">
                           <div className="bd-skill__wrapper mb-35">
                              <div className="bd-skill--title__wrapper">
                                 <h5 className="bd-skill--title">landscaping ground</h5>
                                 <span style={{right:0}}>75%</span>
                              </div>
                              <div className="progress">
                                 <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s"
                                    role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0}
                                    aria-valuemax={100}><span></span></div>
                              </div>
                           </div>
                           <div className="bd-skill__wrapper mb-35">
                              <div className="bd-skill--title__wrapper">
                                 <h5 className="bd-skill--title">soil re-building</h5>
                                 <span style={{right:0}}>82%</span>
                              </div>
                              <div className="progress">
                                 <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.6s"
                                    role="progressbar" style={{width: '82%'}} aria-valuenow={82} aria-valuemin={0}
                                    aria-valuemax={100}><span></span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="about-btn">
                        <Link href="/contact" className="border-btn-rounded">learn more<i className="fal fa-long-arrow-right"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSectionTwo;
