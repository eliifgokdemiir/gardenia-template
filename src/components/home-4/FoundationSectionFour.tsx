import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import foundationImg from "../../../public/assets/img/about/foundation-2-img1.jpg";
import foundationImgTwo from "../../../public/assets/img/about/foundation-2-img2.jpg";
import foundationImgThree from "../../../public/assets/img/about/foundation-2-img3.jpg";
import founderImg from "../../../public/assets/img/team/founder.jpg";

const FoundationSectionFour = () => {
    return (
        <section className="foundation-area style-2 pt-0 pb-60">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="foundation-img style-2 mb-60">
                     <div className="row align-items-center">
                        <div className="col-6">
                           <Image style={{width:"100%", height:"auto"}} className="foundation-2-img1" src={foundationImg} alt="img"/>
                        </div>
                        <div className="col-6">
                           <div className="row">
                              <div className="col-12">
                                 <Image style={{width:"100%", height:"auto"}} className="foundation-2-img2" src={foundationImgTwo} alt="img"/>
                              </div>
                              <div className="col-12">
                                 <Image style={{width:"100%", height:"auto"}} className="foundation-2-img3" src={foundationImgThree} alt="img"/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="foundation-content style-2 mb-60">
                     <div className="section-title">
                        <span className="section-subtitle">since from 2000</span>
                        <h2 className="section-main-title mb-20">Gardeny offers a full-service</h2>
                     </div>
                     <p>Most gardens consist of a mix of natural and constructed elements, although
                        even very natural gardens are always an inherently artificial creation. Natural
                        elements present in a garden principally. </p>
                     <div className="founder-meta mt-45">
                        <div className="founder-info-meta">
                           <div className="founder-img">
                           <Image style={{width:"100%", height:"auto"}} src={founderImg} alt="image not found"/>
                           </div>
                           <div className="founder-desciption">
                              <span className="designation">founder</span>
                              <h4 className="founder-name">humble d. dowson</h4>
                           </div>
                        </div>
                        <Link href="/contact" className="fill-btn-rounded">get in touch<i className="fal fa-angle-right"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default FoundationSectionFour;