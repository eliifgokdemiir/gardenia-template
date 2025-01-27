"use client"
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Pagination, Scrollbar } from 'swiper';
import { HomeOneSliderItem } from '@/data/hero-data';

const HeroSlider = () => {
    return (
        <div className="banner-area banner-area1 pos-rel">
            <div className="banner-meta-link">
                <h4>Make A Order</h4>
                <p><Link href="/about">Let’s Talk About Product</Link></p>
            </div>
            <div className="slider__active">
                {HomeOneSliderItem &&
                        <Swiper
                            modules={[ EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                            pagination={{
                                clickable: true,
                                el: '.slider-pagination',
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                500: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 1
                                },
                                992: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 1
                                }
                            }}
                            
                        >
                            {HomeOneSliderItem.map((item) => (
                                <SwiperSlide key={item.id}>
                                        <div className="single-banner single-banner-1 banner-850 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg1 banner-bg1-1" style={{ backgroundImage: `url(${item.sliderBg.src})`}}>
                                            </div>
                                            <div className="container pos-rel">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-8 col-md-10">
                                                        <div className="banner-content banner-content1 banner-content1-1 pt-0">
                                                            <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                                <span>{item.sliderSubtitle}</span>
                                                            </div>
                                                            <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">{item.sliderTitle}</h1>
                                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                                <Link href="/contact"><span className="fill-btn-rounded">{item.sliderbtn}</span></Link>
                                                                <Link href="/about"><span className="border-btn-rounded">{item.sliderbtn2}</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                }
            </div>
            <div className="slider-pagination slider1-pagination"></div>
        </div>
    );
};

export default HeroSlider;