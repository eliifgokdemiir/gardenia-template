"use client"
import { HeroFourSliderItem } from '@/data/hero-data';
import Link from 'next/link';
import React from 'react';
import { EffectFade, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSliderFour = () => {
    return (
        <div className="banner-area banner-area4 pos-rel">
            <div className="slider__active">
                {HeroFourSliderItem &&
                        <Swiper
                            modules={[EffectFade, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                        >
                            {HeroFourSliderItem.map((item, num) => (
                                <SwiperSlide key={num}>
                                        <div className="single-banner single-banner-3 banner-970 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg4 banner-bg4-1" style={{ backgroundImage: `url(${item.sliderBg.src})` }}></div>
                                            <div className="container pos-rel">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="banner-content banner-content4 banner-content4-1">
                                                            <h1 className="banner-title" data-animation="fadeInUp" data-delay=".3s">{item.sliderTitle}
                                                                <span>{item.sliderTitleBig}</span>
                                                            </h1>
                                                            <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".5s">
                                                                <span>{item.sliderSubtitle}</span>
                                                            </div>
                                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                                <Link href="/contact" className="fill-btn">{item.sliderbtn} <i className="fal fa-long-arrow-right"></i></Link>
                                                                <Link href="/contact" className="border-btn">{item.sliderbtn1} <i className="fal fa-long-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                }
            </div>
        </div>
    );
};

export default HeroSliderFour;