"use client"
import Link from 'next/link';
import React from 'react';
import { Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolioList from '@/data/portfolio-data';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PortfolioSliderThree = () => {
    return (
        <>
            <section className="portfolio-area pt-60 pb-90  portfolio-full-width">
                <div className="portfolio-wrapper portfolio-slide-wrapper style-3 mb-30 wow fadeInUp" data-wow-delay=".3s">
                    <div className="swiper-container portfolio-active-style-3">
                        <div className="swiper-wrapper">
                        <PhotoProvider
                            speed={() => 800}
                            easing={(type) =>
                                type === 2
                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                            }
                        >
                            <Swiper
                                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true
                                }}
                                breakpoints={{
                                    600: {
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
                                    }
                                }}
                            >
                                {portfolioList.slice(4, 9).map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-hover-style style-3">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}>
                                                               <Image style={{width:"100%", height:"auto"}} src={item.portfolioImg} alt="image not found" />
                                                            </Link>
                                                            <div className="portfolio-content">
                                                                <Link href={`/portfolio-details/${item.id}`} className="portfolio-hover-bg"></Link>
                                                                <div className="portfolio-inner">
                                                                    <div className="portfolio-inner-text">
                                                                        <span className="portfolio-tag">{item.portfolioTag}</span>
                                                                        <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}>{item.portfolioTitle}</Link></h4>
                                                                    </div>
                                                                    <span>
                                                                    <PhotoView src={item.portfolioImg.src}>
                                                                        <button className="icon-btn image-popups"><i className={item.portfolioIcon}></i></button>
                                                                        </PhotoView>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSliderThree;