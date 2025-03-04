import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';
import Image from 'next/image';

const ServicesSection = () => {
    return (
        <section className="services-area pt-120 pb-90">
            <div className="container">
                <div className="services-wrapper">
                    {ServicesList && (
                        <div className="row">
                            {ServicesList.slice(0, 6).map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.id}>
                                    <div className="single-service single-service-default mb-30">
                                        <div className="service-icon">
                                            {item.serviceIconImg && (
                                                <Image
                                                    style={{ width: "100%", height: "auto" }}
                                                    src={item.serviceIconImg}
                                                    alt={`${item.serviceTitle} icon`}
                                                />
                                            )}
                                        </div>
                                        <div className="single-service-content">
                                            <span className="service-number"></span>
                                            <h4 className="service-title">
                                                <Link href={`/hizmetler/${item.slug}`}>
                                                    {item.serviceTitle}
                                                </Link>
                                            </h4>
                                            <p>{item.serviceDesc}</p>
                                            <Link href={`/hizmetler/${item.slug}`} className='text-btn'>
                                                <i className="fal fa-long-arrow-right"></i>
                                                {item.serviceBtn || 'Detaylı İncele'}
                                                <i className="fal fa-long-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;