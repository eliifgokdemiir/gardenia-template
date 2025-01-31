import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import foundationImg from "../../../public/assets/img/about/kahve.jpg";
import foundationImgTwo from "../../../public/assets/img/about/pasta1.jpg";
import foundationImgThree from "../../../public/assets/img/about/doner.jpg";
import founderImg from "../../../public/assets/img/team/founder.jpg";

const FoundationSectionFour = () => {
    return (
        <section className="foundation-area style-2 pt-0 pb-60">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="foundation-img style-2 mb-60">
                     <div className="row align-items-center gx-3">
                        <div className="col-6">
                           <div className="image-card animate-float">
                              <Image 
                                 className="img-fluid" 
                                 src={foundationImg} 
                                 alt="img"
                                 style={{ 
                                    width: "100%", 
                                    height: "auto",
                                    borderRadius: "15px"
                                 }}
                              />
                           </div>
                        </div>
                        <div className="col-6">
                           <div className="row gy-3">
                              <div className="col-12">
                                 <div className="image-card animate-float delay-1">
                                    <Image 
                                       className="img-fluid" 
                                       src={foundationImgTwo} 
                                       alt="img"
                                       style={{ 
                                          width: "100%", 
                                          height: "auto",
                                          borderRadius: "15px"
                                       }}
                                    />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="image-card animate-float delay-2">
                                    <Image 
                                       className="img-fluid" 
                                       src={foundationImgThree} 
                                       alt="img"
                                       style={{ 
                                          width: "100%", 
                                          height: "auto",
                                          borderRadius: "15px"
                                       }}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="foundation-content style-2 mb-60">
                     <div className="section-title">
                        <span className="section-subtitle">HER GÜN DAHA İYİ HİZMETİ SUNMAYI AMAÇLIYORUZ.</span>
                        <h2 className="section-main-title mb-20">Pastane, Kafe, Döner HİZMETLERİMİZLE karşınızdayız!</h2>
                     </div>
                     <p> Lezzet dolu anlar için buradayız!
                         En taze ve en kaliteli malzemelerle hazırlanan pastalar, 
                         sıcacık kahve eşliğinde keyifli sohbetler ve enfes döner lezzetlerimizle sizleri bekliyoruz. 
                         Güler yüzlü hizmetimiz ve benzersiz tatlarımızla her gün daha iyi bir deneyim sunmayı hedefliyoruz.
                          Sizi de bu eşsiz lezzet yolculuğuna davet ediyoruz! </p>
                     <div className="founder-meta mt-45">
                       
                        <Link href="/iletisim" className="fill-btn-rounded">rezervasyon<i className="fal fa-angle-right"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default FoundationSectionFour;