"use client"
import { homeTwobrandData } from '@/data/brand-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
interface BrandSliderProps {
    brand_classA?: string; 
    brand_class?:string;
}
const BrandSliderTwo:React.FC<BrandSliderProps> = ({brand_class , brand_classA}) => {
    return (
        <div className={`clients-area ${brand_classA ? 'brand_classA' : ''}`}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className={`clients-wrapper ${brand_class ? 'style-4' : 'clients-container-wrapped style-2'}`}>
                            <div className="client-active">
                                <Swiper
                                    modules={[ Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
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
                                        homeTwobrandData.map((item, index)=>(
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

export default BrandSliderTwo;