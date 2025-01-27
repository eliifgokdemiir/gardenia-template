import Link from 'next/link';
import React from 'react';
import serviceImg from '../../../public/assets/img/bg/services-title-bg.jpg';
import servicePattern from '../../../public/assets/img/shape/pattern-1270.png';
import Image from 'next/image';
import ServicesList from '@/data/services-data';

const ServiceSectionTwo = () => {
    return (
        <section className="services-area pt-200 pb-60">
            <div className="services-title-bg">
                <Image style={{width:"100%", height:"auto"}} src={serviceImg} alt="service-title-bg" />
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title style-2 text-center services-title-style-2">
                            <span className="section-subtitle">[ <span>services</span> ]</span>
                            <h2 className="section-main-title mb-45">What we provide</h2>
                        </div>
                    </div>
                </div>
                <div className="services-wrapper pb-10 wow fadeInUp" data-wow-delay=".3s">
                    {ServicesList &&
                        <div className="row">
                            {ServicesList.slice(4, 7).map((item, num) => (
                                <div className="col-lg-4 col-md-6" key={num}>
                                    <div className="single-service single-service-default mb-30">
                                        <div className="service-icon">
                                            {item.serviceIconImg && <Image style={{width:"100%", height:"auto"}} src={item.serviceIconImg} alt="service icon" />}
                                        </div>
                                        <div className="single-service-content">
                                            <span className="service-number"></span>
                                            <h4 className="service-title"><Link href={`/service-details/${item.id}`}>{item.serviceTitle}</Link></h4>
                                            <p>{item.serviceDesc}</p>
                                            <Link href={`/service-details/${item.id}`} className='text-btn'><i className="fal fa-long-arrow-right"></i>{item.serviceBtn}<i className="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div className="services-action-wrapper style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-action-bg-shape">
                        <Image style={{width:"100%", height:"auto"}} src={servicePattern} alt="service-shape" />
                    </div>
                    <h3><i className="flaticon-house"></i>Provides Hassle-Free Backyard Transformations with Artistic Solutions.</h3>
                    <Link href="/contact" className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionTwo;