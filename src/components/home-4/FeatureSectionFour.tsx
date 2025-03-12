import Link from 'next/link';
import React from 'react';
import feturesImg from "../../../public/assets/img/features/mazali4.jpg";
import feturesImg2 from "../../../public/assets/img/features/mazali5.jpg";
import feturesImg3 from "../../../public/assets/img/features/etdoner.jpg";
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
                        <h2 className="section-main-title mb-45">ÖNE ÇIKAN HİZMETLER</h2>
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
                              <Link href="/hizmetler/pastane-kafe">
                                 <Image style={{width:"100%", height:"100%"}} src={feturesImg} alt="Pastane Hizmetleri" />
                             </Link>
                           </div>
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/hizmetler/pastane-kafe">Pastane & Kafe</Link>
                                 </h4>
                                 <div className="feature-offers">
                                    <ul>
                                       <li>Dünya Lezzetleri</li>
                                       <li>Özel Gün Pastaları</li>
                                       <li>Ana Yemekler</li>
                                       <li>Atıştırmalıklar</li>
                                       <li>Tatlılar</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/hizmetler/pastane-kafe" className="fill-btn">Detaylar<i className="fal fa-long-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="single-feature style-4 mb-30">
                        <div className="single-feature-inner">
                           <div className="features-thumb">
                              <Link href="/hizmetler/doner">
                                 <Image style={{width:"100%", height:"100%"}} src={feturesImg3} alt="Döner Hizmetleri" />
                              </Link>
                           </div>
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/hizmetler/doner">Döner</Link>
                                 </h4>
                                 <div className="feature-offers">
                                   <p>Çok Yakında Hizmetinizde!</p>
                                   <br></br>
                                   <br></br>
                                   <ul>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                    
                                      
                                      
                                    
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/hizmetler/doner" className="fill-btn">Detaylar<i className="fal fa-long-arrow-right"></i></Link>
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

/*  <ul>
                                       <li>Özel Baharatlı Et Döner</li>
                                       <li>Özel Baharatlı Tavuk Döner</li>
                                       <li>Özel Soslu Döner</li>
                                       <li>Lavaş ve Taze Pide Eşliğinde</li>
                                       <li>Günlük Taze Hazırlanan Mezeler</li>
                                    </ul> */