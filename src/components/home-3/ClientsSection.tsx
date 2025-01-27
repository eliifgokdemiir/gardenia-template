"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import weederImg from "../../../public/assets/img/bg/weeder-rope.png";
import circleImg from "../../../public/assets/img/logo/circle-border-logo.png";
import patternImg from "../../../public/assets/img/shape/pattern-1270.png";
// image
import client1 from "../../../public/assets/img/client/client-1.png";
import client2 from "../../../public/assets/img/client/client-2.png";
import client3 from "../../../public/assets/img/client/client-3.png";
import client4 from "../../../public/assets/img/client/client-4.png";
import client5 from "../../../public/assets/img/client/client-5.png";

const ClientsSection = () => {
    return (
        <section className="clients-area style-3 pt-120 pb-00">
            <div className="clients-bg-img">
                <Image style={{width:"100%", height:"auto"}} src={weederImg} alt="image not found" />
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-10">
                        <div className="circle-border-logo">
                            <Image style={{width:"auto", height:"auto"}} src={circleImg} alt="image not found" />
                        </div>
                        <div className="section-title style-3 text-center">
                            <span className="section-subtitle">since from 2000</span>
                            <h2 className="section-main-title mb-45">Gardenias’ mission is to provide
                                our customers service</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="clients-wrapper style-3">
                            <div className="client-active">
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
                                        <SwiperSlide>
                                        <div className="client-single">
                                                <Link href="#"><Image  src={client1} alt="image not found" /></Link>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="client-single">
                                                <Link href="#"><Image src={client2} alt="image not found" /></Link>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="client-single">
                                                <Link href="#"><Image src={client3} alt="image not found" /></Link>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="client-single">
                                                <Link href="#"><Image src={client4} alt="image not found" /></Link>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="client-single">
                                                <Link href="#"><Image src={client5} alt="image not found" /></Link>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="client-single">
                                                <Link href="#"><Image src={client1} alt="image not found"/></Link>
                                                </div>
                                        </SwiperSlide>
                                    </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-action-wrapper style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-action-bg-shape">
                    <Image style={{width:"100%", height:"auto"}} src={patternImg} alt="image not found" />
                    </div>
                    <h3><i className="flaticon-house"></i>Provides Hassle-Free Backyard Transformations with Artistic Solutions.</h3>
                    <Link href="/contact" className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></Link>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;