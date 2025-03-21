"use client"
import React from 'react';
// products import'unu kaldırın veya yorum satırına alın
// import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductBanner = () => {
    return (
        <div className="category-area category-area-basic pt-40">
            <div className="container">
                <div className="category-wrapper wow fadeInUp" data-wow-delay=".3s">
                    <div className="category-basic-slider">
                        <p>Product banner is temporarily disabled</p>
                        
                        {/* Orijinal içeriği yorum satırına alın */}
                        {/* 
                            <Swiper
                                modules={[Scrollbar, A11y, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    }
                                }}
                            >
                                {productList.slice(12, 16).map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                                <div className="category-single category-basic">
                                                    <div className="category-thumb">
                                                        <Link href={`/shop-details/${item.id}`}>
                                                            <Image style={{width:"auto", height:"auto"}} src={item.productImg} alt="image not found" />
                                                        </Link>
                                                    </div>
                                                    <div className="category-content">
                                                        <span className="in-stock"><span className="stock-amount">{item.stock}</span> {item.productSubTitle}</span>
                                                        <h4 className="category-name"><Link href={`/shop-details/${item.id}`}>{item.productTitle}</Link></h4>
                                                    </div>
                                                </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;