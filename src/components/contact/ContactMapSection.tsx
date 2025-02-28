import Image from 'next/image';
import React from 'react';
import sholveImg from "../../../public/assets/img/about/mazali-logo.jpeg"
import Link from 'next/link';

const ContactMapSection = () => {
    return (
        <section className="contact-info-area">
   
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                   
                     <h2 className="section-main-title mb-45">BİZE ULAŞIN</h2>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-4">
                  <div className="contact-map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d66440.99430109383!2d-74.280594133827!3d40.7544305056857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652616547670!5m2!1sen!2sbd"></iframe>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-media">
                     <h4 className="contact-info-title">şube</h4>
                     <div className="info-contact">
                        <ul>
                           <li>
                              <div className="single-contact">
                                 <div className="phone-numbers">
                                     <div className="d-flex align-items-center mb-2">
                                         <div className="contact-icon">
                                             <i className="fas fa-phone"></i>
                                         </div>
                                         <p className="mb-0"><Link href="tel:0-533-010-70-90">Pastane & Kafe: 0 533 010 70 80</Link></p>
                                     </div>
                                     <div className="d-flex align-items-center">
                                          <div className="contact-icon">
                                              <i className="fas fa-phone"></i>
                                          </div>
                                          <p className="mb-0"><Link href="tel:0-533-010-70-80">Döner: 0 533 010 70 90</Link></p>
                                     </div>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-envelope-open"></i>
                                 </div>
                                 <p><Link href="mailto:info@mazali.com">info@MAZALİ.COM</Link></p>
                              </div>
                           </li>
                           <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                 </div>
                                 <p><Link href="#">KARDELEN MAHALLESİ 2075 Cadde No:2/A Yenimahalle/ANKARA</Link></p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-time">
                     <h4 className="contact-info-title">ÇALIŞMA SAATLERİ</h4>
                     <div className="info-contact-time">
                        <div className="info-date flex-column">
                           <div className="d-flex gap-3 justify-content-between mb-2">
                              <span>PAZARTESİ</span>
                              <span>9:00 - 21:00</span>
                           </div>
                           <div className="d-flex gap-3 justify-content-between mb-2">
                              <span>SALI</span>
                              <span>9:00 - 21:00</span>
                           </div>
                           <div className="d-flex gap-3 justify-content-between mb-2">
                              <span>ÇARŞAMBA</span>
                              <span>9:00 - 21:00</span>
                           </div>
                           <div className="d-flex gap-3 justify-content-between mb-2">
                              <span>PERŞEMBE</span>
                              <span>9:00 - 21:00</span>
                           </div>
                           <div className="d-flex gap-3 justify-content-between mb-2">
                              <span>CUMA</span>
                              <span>9:00 - 21:00</span>
                           </div>
                           <div className="d-flex gap-3 justify-content-between mb-2">
                              <span>CUMARTESİ</span>
                              <span>9:00 - 21:00</span>
                           </div>
                           <div className="d-flex gap-3 justify-content-between ">
                              <span>PAZAR</span>
                              <span>9:00 - 21:00</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ContactMapSection;