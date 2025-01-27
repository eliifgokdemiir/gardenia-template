import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Controller } from "swiper";
import { testimonial, testimonial_nav } from '../../../data/testimonial-data';
import Image from 'next/image';
import type { Swiper as SwiperClass } from 'swiper';
import GetRatting from '@/hooks/GetRatting';

const TestimonialSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className="testimonial-slide-wrapper mb-60 style-1">
            <div className="testimonial-content-wrapper style-1">
                <div className="testimonial-content-slide">
                    <Swiper
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        freeMode={false}
                        watchSlidesProgress={true}
                        modules={[Controller, FreeMode, Thumbs]}
                    >
                        {testimonial.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-single style-1">
                                        <div className="testimonial-content">
                                            <div className="testimonial-icon">
                                                <Image src={item.icon} width={209} height={160} alt="testimonial-icon" />
                                            </div>
                                            <div className="rating">
                                            <GetRatting averageRating={item.rating} />
                                            </div>
                                            <p className="author-quote">{item.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <div className="testimonial-thumb-wrapper style-1">
                <div className="swiper-container testimonial-thumb">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={2}
                        modules={[Controller, FreeMode, Thumbs]}
                        watchSlidesProgress={false}
                    >
                        {testimonial_nav.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-author-meta style-1">
                                    <div className="author-img">
                                        <Image src={item.img} width={70} height={70} alt="testimonial-img" />
                                    </div>
                                    <div className="author-info">
                                        <span className="author-designation">{item.designation}</span>
                                        <h4 className="author-name">{item.author}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
