'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import foundationImg from "../../../public/assets/img/about/mazali2.jpg";
import foundationImgTwo from "../../../public/assets/img/about/mazali1.jpg";
import foundationImgThree from "../../../public/assets/img/about/mazali3.jpg";
import founderImg from "../../../public/assets/img/team/founder.jpg";
import styles from './FoundationSectionFour.module.css';


const FoundationSectionFour = () => {
    useEffect(() => {
        // DOM manipülasyonu
        const element = document.getElementById('myElement');
        // element üzerinde işlemler...
        
        return () => {
            // Temizleme işlemleri
            // Component unmount edildiğinde çalışır
        };
    }, []);

    return (
        <section className="foundation-area style-2 pt-0 pb-60">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="foundation-img style-2 mb-60">
                     <div className="row align-items-center gx-3">
                        <div className="col-6">
                           <div className={styles.imageCard}>
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
                                 <div className={styles.imageCard}>
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
                                 <div className={styles.imageCard}>
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
                        <span className="section-subtitle p-1">Lezzetlİ ve KALİTELİ ürünler sunarak, müşterİlerİmİzİn her anını özel kılmak İçİn çalışıyoruz.</span>
                        <h2 className="section-main-title mb-20">Pastane, Kafe HİZMETLERİMİZLE karşınızdayız!</h2>
                     </div>
                     <p> Lezzet dolu anlar için buradayız!
                         En taze ve en kaliteli malzemelerle hazırlanan pastalar, 
                         sıcacık kahve eşliğinde keyifli sohbetler ve enfes döner lezzetlerimizle sizleri bekliyoruz. 
                         Güler yüzlü hizmetimiz ve benzersiz tatlarımızla her gün daha iyi bir deneyim sunmayı hedefliyoruz.
                          Sizi de bu eşsiz lezzet yolculuğuna davet ediyoruz! </p>
                     <div className="founder-meta mt-45">
                       
                        <Link href="/iletisim" className="fill-btn-rounded">BİLGİ ALIN<i className="fal fa-angle-right"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default FoundationSectionFour;