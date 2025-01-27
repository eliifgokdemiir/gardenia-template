"use client"
import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import instragramImg from "../../../../public/assets/img/istagram/insta-shot-1.jpg";
import instragramImg2 from "../../../../public/assets/img/istagram/insta-shot-2.jpg";
import instragramImg3 from "../../../../public/assets/img/istagram/insta-shot-3.jpg";
import instragramImg4 from "../../../../public/assets/img/istagram/insta-shot-4.jpg";
import instragramImg5 from "../../../../public/assets/img/istagram/insta-shot-5.jpg";
import instragramImg6 from "../../../../public/assets/img/istagram/insta-shot-6.jpg";
import instragramImg7 from "../../../../public/assets/img/istagram/insta-shot-7.jpg";
import instragramImg8 from "../../../../public/assets/img/istagram/insta-shot-8.jpg";
import Image from 'next/image';

const InstagramSlider = () => {
    return (
        <div className="instagram-slider-wrappper wow fadeInUp" data-wow-delay=".3s">
         <div className="instagram-slider-active">
                <Swiper
                    modules={[ Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                        1400: {
                            slidesPerView: 7,
                        },
                        1600: {
                            slidesPerView: 8,
                        }
                    }}
                    
                >
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg2} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg3} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg4} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg5} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg6} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg7} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg8} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="instagram-shot">
                     <Link href="#"><Image style={{width:"100%", height:"auto"}} src={instragramImg2} alt="image not found"/></Link>
                     <div className="instagram-hover-link">
                        <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                     </div>
                  </div>
                </SwiperSlide>
               </Swiper>
         </div>
      </div>
    );
};

export default InstagramSlider;