import React from 'react';
import Link from 'next/link';

interface ServiceDetailsProps {
    service: {
        id: number;
        serviceTitle: string;
        serviceDesc: string;
        serviceImg: string;
        serviceBtn?: string;
    };
}

const ServiceDetailsArea: React.FC<ServiceDetailsProps> = ({ service }) => {
    return (
        <section className="service-details-area pt-120 pb-90">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <img 
                                src={service.serviceImg} 
                                alt={`${service.serviceTitle} img`} 
                                style={{ width: "100%", height: "auto" }} 
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="service-details-content">
                                <h2>{service.serviceTitle}</h2>
                                <p>{service.serviceDesc}</p>
                                {service.serviceBtn && (
                                    <Link href={`/contact`} className="fill-btn">
                                        {service.serviceBtn} <i className="fal fa-long-arrow-right"></i>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsArea;