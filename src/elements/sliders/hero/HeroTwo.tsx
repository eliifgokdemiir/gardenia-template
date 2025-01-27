"use client"
import Link from 'next/link';
import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { HomeTwoSliderItem } from '@/data/hero-data';


const HeroSliderTwo = () => {
    return (
        <div className="banner-area banner-area2 pos-rel">
            <div className="slider__active">
                {HomeTwoSliderItem &&
                        <Swiper
                            modules={[EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                        >
                            {HomeTwoSliderItem.map((item, num) => (
                                <SwiperSlide key={num}>
                                        <div className="single-banner single-banner-2 banner-850 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg2 banner-bg2-1" style={{backgroundImage: `url(${item.sliderBg.src})`}}>
                                            </div>
                                            <div className="container pos-rel">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="banner-content banner-content2 banner-content2-1">
                                                            <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                                <span>{item.sliderSubtitle}</span>
                                                            </div>
                                                            <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">{item.sliderTitle}</h1>
                                                            <div className="banner-text" data-animation="fadeInUp" data-delay=".7s">
                                                                <p>{item.sliderDesc}</p>
                                                            </div>
                                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".9s">
                                                                <div className="banner-meta-review">
                                                                    <div className="meta-review-thumb">
                                                                        <Image style={{ width: "100%", height: "100%" }} src={item.slidereviewImg} alt="banner-img" />
                                                                    </div>
                                                                    <div className="meta-review-text">
                                                                        <span>{item.slidereviewCount}</span>
                                                                        {item.slidereviewText}
                                                                    </div>
                                                                </div>
                                                                <Link href="/contact" className="fill-btn-rounded">{item.sliderBtn} 
                                                                <i className="fal fa-long-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
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

export default HeroSliderTwo;