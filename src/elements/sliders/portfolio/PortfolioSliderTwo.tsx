"use client"
import Link from 'next/link';
import React from 'react';
import { Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import portfolioList from '../../../data/portfolio-data'
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PortfolioSlider = () => {
    return (
        <>
            <section className="portfolio-area pt-120 pb-90 portfolio-bg portfolio-full-width">
                <div className="containers">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-8">
                            <div className="section-title style-2 text-center">
                                <span className="section-subtitle">[ showcase ]</span>
                                <h2 className="section-main-title mb-45">watch our gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-wrapper portfolio-slide-wrapper mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="portfolio-active-style-2">
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
                                    observer={true}
                                    observeParents={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.portfolio-pagination',
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                        }
                                    }}

                                >
                                    {portfolioList.slice(4, 10).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                        <div className="portfolio-single portfolio-hover-style style-2">
                                                            <div className="portfolio-thumb">
                                                                <Link href={`/portfolio-details/${item.id}`}>
                                                                <Image style={{width:"100%", height:"auto"}} src={item.portfolioImg} alt="portfolio-img" />
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
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                </PhotoProvider>
                            <div className="portfolio-style-2-pagination-wrapper mt-50">
                                <div className="portfolio-pagination portfolio-style-2-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSlider;