"use client"
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import Link from 'next/link';
import Image from 'next/image';
import { homeOnebrandData } from '@/data/brand-data';
interface BrandSliderProps {
    brand_classA?: string; 
}
const BrandSlider: React.FC<BrandSliderProps> = ({brand_classA}) => {
    return (
        <div className={`${brand_classA ? brand_classA : 'clients-area clients-area2'}`}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="clients-wrapper">
                            <div className="client-active">
                                <Swiper
                                    modules={[ Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                        },
                                        1400: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                    
                                >
                                    {
                                        homeOnebrandData.map((item, index)=>(
                                            <SwiperSlide key={index}>
                                                <div className="client-single">
                                                    <Link href="#">
                                                    <Image style={{ width: "auto", height: "auto" }} src={item.brandImg} alt="brand-img"/>
                                                    </Link>
                                            </div>
                                        </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSlider;